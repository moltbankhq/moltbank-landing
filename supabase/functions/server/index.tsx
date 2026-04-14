import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const app = new Hono();

// Table configuration
const TABLE_NAME = "kv_store_5afc5174";

// Supabase client initialization
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

// DB Helper Functions
const kv = {
  set: async (key: string, value: any) => {
    const { error } = await supabase.from(TABLE_NAME).upsert({ key, value });
    if (error) throw new Error(error.message);
  },
  get: async (key: string) => {
    const { data, error } = await supabase.from(TABLE_NAME).select("value").eq("key", key).maybeSingle();
    if (error) throw new Error(error.message);
    return data?.value;
  },
  getByPrefix: async (prefix: string) => {
    const { data, error } = await supabase.from(TABLE_NAME).select("value").like("key", prefix + "%");
    if (error) throw new Error(error.message);
    return data?.map(d => d.value) ?? [];
  }
};

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes
app.use(
  "*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization", "apikey", "x-client-info"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Explicitly handle OPTIONS for all routes
app.options("*", (c) => {
  return c.text("", 204);
});

// Health check endpoint
app.get("/make-server-5afc5174/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString(), table: TABLE_NAME });
});

// Signup / Waitlist endpoint
app.post("/make-server-5afc5174/signup", async (c) => {
  console.log("Signup request received");
  try {
    const body = await c.req.json();
    const { email, referredBy } = body;
    console.log(`Signup attempt for: ${email}, referredBy: ${referredBy}`);
    
    if (!email) {
      return c.json({ error: "Email required" }, 400);
    }

    const userKey = `user:${email}`;
    let user = await kv.get(userKey);

    // If user doesn't exist, create them
    if (!user) {
      console.log("Creating new user...");
      const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      user = {
        email,
        referralCode,
        referredBy: referredBy || null,
        createdAt: Date.now(),
        referralCount: 0
      };
      
      // Save user
      await kv.set(userKey, user);
      
      // Save referral mapping
      await kv.set(`ref:${referralCode}`, email);

      // Handle referral logic
      if (referredBy) {
        console.log(`Processing referral code: ${referredBy}`);
        const referrerEmail = await kv.get(`ref:${referredBy}`);
        if (referrerEmail) {
          const referrerKey = `user:${referrerEmail}`;
          const referrer = await kv.get(referrerKey);
          if (referrer) {
            referrer.referralCount = (referrer.referralCount || 0) + 1;
            await kv.set(referrerKey, referrer);
            console.log(`Incremented referral count for: ${referrerEmail}`);
          }
        }
      }
    }

    // Calculate Position
    const allUsers = await kv.getByPrefix("user:");
    
    // Sort: High referral count first, then early created_at
    allUsers.sort((a: any, b: any) => {
      const countA = a.referralCount || 0;
      const countB = b.referralCount || 0;
      
      if (countB !== countA) {
        return countB - countA;
      }
      return (a.createdAt || 0) - (b.createdAt || 0);
    });

    const position = allUsers.findIndex((u: any) => u.email === email) + 1;

    console.log(`Signup success. Email: ${email}, Position: ${position}`);

    return c.json({ 
      position, 
      referralCode: user.referralCode,
      referralCount: user.referralCount || 0
    });

  } catch (error) {
    console.error("Signup Error details:", error);
    return c.json({ 
      error: "Internal Server Error", 
      message: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

// Root level fallbacks for convenience
app.get("/health", (c) => c.json({ status: "ok" }));
app.post("/signup", (c) => c.redirect("/make-server-5afc5174/signup", 307));

// Catch-all route for debugging
app.all("*", (c) => {
  const method = c.req.method;
  const path = c.req.path;
  console.log(`Missed route: ${method} ${path}`);
  return c.json({ 
    error: "Route not found", 
    method,
    path,
    suggestion: "Check if the route is prefixed correctly with /make-server-5afc5174"
  }, 404);
});

Deno.serve(app.fetch);
