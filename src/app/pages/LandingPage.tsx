import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldAlert, FileSearch, Wallet, CheckCircle2, ChevronRight, X, Play, CreditCard, Lock, Eye, AlertTriangle, Loader2, Copy, Users, TrendingUp, Sun, Moon } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { toast, Toaster } from "sonner";
import { Helmet } from 'react-helmet-async';
import bridgeLogo from "figma:asset/119ed51e52a0a3201170aa0fb7adfea23d79aead.png";
import socialPreviewImg from "figma:asset/9611b4d232a9b9467fe5dcb33bddec6e69e92556.png";
import safeLogo from "figma:asset/3c5bd74a5614aed21b77349867167772c2c55118.png";
import baseLogo from "figma:asset/4db65829c65302d957eb97fbea094334941479b9.png";
import alchemyLogo from "figma:asset/cebb7b5e227fe14ac27e985204b4bafebb7afa86.png";
import noiseTexture from "figma:asset/91fbe6771ca0266164ae0d51b3cc30c195156958.png";
import crabIcon from "figma:asset/ef3f5c7a05cb4105e8a37d5fe41c873c9df651fd.png";
import lightCrabIcon from "figma:asset/364e3dd4d8c8c5204a4127395bfd010a32561d93.png";
import darkMoltLogo from "figma:asset/5efd1251d9853e37402b89ddef8137f1359fd96b.png";
import lightMoltLogo from "figma:asset/31acd87f6e6fd7399715d0018ec02db8ca79c71f.png";
import { projectId, publicAnonKey } from '/utils/supabase/info';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

function GradientBlob({ className }: { className?: string }) {
  return (
    <div className={cn("absolute bg-[#c41e05] rounded-full blur-[100px] opacity-15 pointer-events-none mix-blend-screen z-0", className)} />
  );
}

function AccessTabs({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeTab, setActiveTab] = useState<'agents' | 'humans'>('agents');

  const copyToClipboard = async (text: string) => {
    // Try modern API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        toast.success("Command copied to clipboard!");
        return;
      } catch (err) {
        // Fall back to legacy
      }
    }

    // Legacy fallback for iframes/restricted environments
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "0";
      textArea.style.top = "0";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        toast.success("Command copied to clipboard!");
      } else {
        toast.error("Failed to copy. Please copy manually.");
      }
    } catch (err) {
      toast.error("Failed to copy. Please copy manually.");
    }
  };

  return (
    <div className="w-full max-w-[600px] mx-auto relative group/tabs">

      <div className={cn("border border-solid p-4 md:p-5 relative z-10 backdrop-blur-md transition-all duration-300 w-full", 
        isDarkMode 
          ? "bg-[#0a0a0a] border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.5)]" 
          : "bg-white border-black/[0.1] shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
      )}>
        {/* Tabs Selection */}
        <div className={cn("flex border border-solid p-1 mb-3 md:mb-4 transition-colors", 
          isDarkMode ? "bg-[#121212] border-white/[0.08]" : "bg-gray-100 border-black/[0.1]"
        )}>
          <button
            onClick={() => setActiveTab('agents')}
            className={cn("flex-1 py-1.5 md:py-2 px-4 font-bold transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-2 text-[13px] text-[14px]", activeTab === 'agents'
    ? isDarkMode ? "bg-[#1c1c1c] text-white shadow-lg shadow-black/50" : "bg-white text-gray-900 shadow-sm"
    : isDarkMode ? "text-gray-500 hover:text-gray-400 hover:bg-white/5" : "text-gray-400 hover:text-gray-600 hover:bg-white/50")}
          >
            {activeTab === 'agents' && <motion.div layoutId="tab-indicator" className="w-1.5 h-1.5 bg-[#c41e05]" />}
            For agents
          </button>
          <button
            onClick={() => setActiveTab('humans')}
            className={cn("flex-1 py-1.5 md:py-2 px-4 font-bold transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-2 text-[13px] text-[14px]", activeTab === 'humans'
    ? isDarkMode ? "bg-[#1c1c1c] text-white shadow-lg shadow-black/50" : "bg-white text-gray-900 shadow-sm"
    : isDarkMode ? "text-gray-500 hover:text-gray-400 hover:bg-white/5" : "text-gray-400 hover:text-gray-600 hover:bg-white/50")}
          >
            {activeTab === 'humans' && <motion.div layoutId="tab-indicator" className="w-1.5 h-1.5 bg-[#c41e05]" />}
            For humans
          </button>
        </div>

        {/* Content Box */}
        <div className={cn("border border-solid p-5 min-h-[160px] flex flex-col justify-center relative overflow-hidden w-full transition-colors", 
          isDarkMode ? "bg-[#121212] border-white/[0.08]" : "bg-white border-black/[0.1]"
        )}>
          {/* Subtle Grid overlay for that cyber feel */}
          <div className={cn("absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none", 
            !isDarkMode && "invert opacity-5"
          )} />
          
          <AnimatePresence mode="wait">
            {activeTab === 'agents' ? (
              <motion.div
                key="agents"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 font-mono relative z-10 w-full flex flex-col"
              >
                <div className="flex gap-3 md:gap-4 items-center text-xs md:text-sm">
                  <span className="text-foreground font-bold">01.</span>
                  <p className="text-foreground/80 text-[16px]">Send this to your agent</p>
                </div>
                
                <div className={cn("flex flex-col sm:flex-row items-stretch sm:items-center p-1.5 md:p-2 border border-solid transition-colors gap-2", 
                  isDarkMode ? "bg-black/80 border-white/10" : "bg-gray-50 border-black/10"
                )}>
                  <div className={cn("flex-1 px-2 py-1 whitespace-normal break-words text-left leading-relaxed text-[14px]", isDarkMode ? "text-gray-300" : "text-gray-700")}>Set up https://app.moltbank.bot/skill/SKILL.md </div>
                  <button 
                    onClick={() => copyToClipboard("Set up https://app.moltbank.bot/skill/SKILL.md")}
                    className="bg-[#c41e05] text-[#fffafa] px-5 font-bold text-xs hover:bg-[#a31804] hover:shadow-[0_4px_14px_rgba(196,30,5,0.25)] transition-all flex items-center justify-center gap-2 whitespace-nowrap uppercase tracking-widest shrink-0 self-stretch -mr-1.5 md:-mr-2 -my-1.5 md:-my-2"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="humans"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col relative z-10 w-full h-full"
              >
                <div className="space-y-3 font-mono text-xs md:text-sm text-muted-foreground mb-6">
                  <div className="flex gap-3 md:gap-4">
                    <span className="text-foreground font-bold">01.</span>
                    <p className="text-foreground/80 text-[16px]">Sign in with your Email</p>
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    <span className="text-foreground font-bold">02.</span>
                    <p className="text-foreground/80 text-[16px]">Create your Fleet</p>
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    <span className="text-foreground font-bold">03.</span>
                    <p className="text-foreground/80 text-[16px]">Connect your Agent</p>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1.02 }}
                  href="https://app.moltbank.bot/"
                  className="mt-auto bg-[#DC2626] text-white px-4 py-[14px] font-bold text-[11px] md:text-xs hover:bg-[#EF4444] hover:shadow-[0_8px_24px_rgba(220,38,38,0.25)] transition-all flex items-center justify-center gap-2 whitespace-nowrap group/btn relative overflow-hidden w-full uppercase tracking-widest"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-[#ffffff] text-[15px]">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite] pointer-events-none" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function SectionReveal({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#050101]" />
      
      {/* Primary Moving Gradient Blob */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#c41e05] rounded-full mix-blend-screen blur-[120px] opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary Blob */}
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#590d02] rounded-full mix-blend-screen blur-[150px] opacity-30"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Third Accent Blob */}
      <motion.div 
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-[#c41e05] rounded-full mix-blend-screen blur-[100px] opacity-10"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid overlay for texture/tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
    </div>
  );
}

function VideoModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
      <div className="absolute inset-0" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-[95vw] md:max-w-[85vw] xl:max-w-7xl aspect-video bg-black border border-gray-800 shadow-2xl rounded-sm overflow-hidden"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-gray-800 text-white/70 hover:text-white transition-all duration-300 rounded-full backdrop-blur-sm border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="w-full h-full bg-black relative group">
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] z-10" />
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/h8Kz8Yt78Zg?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1" 
            title="Molt Demo" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="w-full h-full relative z-0"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}

function TopNav({ isDarkMode, toggleTheme }: { isDarkMode: boolean, toggleTheme: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] h-12 md:h-14 px-4 md:px-6 flex items-center justify-between transition-colors duration-300 backdrop-blur-md",
        isDarkMode ? "bg-background/90 border-b border-white/[0.06]" : "bg-background/90 border-b border-black/[0.08]"
      )}
    >
      <div className="flex items-center h-full pt-1 pb-1 w-[200px]">
        <img 
          src={isDarkMode ? darkMoltLogo : lightMoltLogo} 
          alt="Molt Logo" 
          className="h-7 md:h-9 w-auto object-contain" 
        />
      </div>

      <div className={cn("hidden md:flex items-center justify-center flex-1 transition-opacity duration-300", isScrolled ? "opacity-0 pointer-events-none" : "opacity-100")}>
        <div className={cn("flex items-center gap-2 text-sm", isDarkMode ? "text-gray-300" : "text-[#c41e05]/80")}>
          <AlertTriangle className={cn("w-4 h-4 shrink-0", isDarkMode ? "text-primary" : "text-[#c41e05]")} />
          <span className={!isDarkMode ? "text-[#c41e05]/90" : ""}><span className="font-bold">$200 burned in one day</span> by a single agent. No limits. No alerts. No audit trail. <span className="font-bold">Sound familiar?</span></span>
        </div>
      </div>

      <div className="w-[200px] flex justify-end">
        <button 
          onClick={toggleTheme}
          className="p-1.5 md:p-2 rounded-sm hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          ) : (
            <Moon className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
          )}
        </button>
      </div>
    </nav>
  );
}

function Hero({ isDarkMode }: { isDarkMode: boolean }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-fit md:min-h-[80vh] flex flex-col items-center justify-center bg-background border-b border-border overflow-hidden py-8 md:py-12 px-4 group transition-colors duration-300"
    >
      
      <AnimatePresence>
        {isVideoOpen && <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />}
      </AnimatePresence>

      {/* Noise Texture - Using Imported Image */}
      <div 
        className="absolute inset-0 opacity-100 pointer-events-none z-0"
        style={{
            backgroundImage: `url(${noiseTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: isDarkMode ? 'overlay' : 'soft-light'
        }}
      />
      
      {/* Black Overlay to mute noise */}
      <div className={cn("absolute inset-0 opacity-100 pointer-events-none z-0 transition-colors", isDarkMode ? "bg-black" : "bg-white")} />
      
      {/* Mouse Follow Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-90 transition-opacity"
        style={{
            background: isDarkMode 
              ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(196,30,5,0.1), transparent 40%)`
              : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(196,30,5,0.05), transparent 40%)`
        }}
      />

      {/* Subtle Red Gradient behind Logo */}
      <div className={cn("absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-[120px] pointer-events-none z-0", 
        isDarkMode ? "bg-[radial-gradient(circle,rgba(196,30,5,0.25)_0%,transparent_70%)]" : "bg-[radial-gradient(circle,rgba(196,30,5,0.1)_0%,transparent_70%)]"
      )} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full px-2 flex flex-col items-center"
        >
          

          <h1 className="font-bold tracking-tighter leading-[1.0] mb-3 text-foreground max-w-5xl mx-auto text-[64px]">The Bank for your<br/><span className={cn("text-transparent bg-clip-text", isDarkMode ? "bg-gradient-to-b from-white to-gray-500" : "bg-gradient-to-b from-[#050101] to-gray-500")}>Agent Fleet</span></h1>
          
          <p className="text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto px-4 mb-8 text-[20px] text-[#5c5c61]">
            Set limits, approve spending, and track every cent in real-time.
          </p>

          <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.8 }}
              className="w-full max-w-[600px]"
            >
              <AccessTabs isDarkMode={isDarkMode} />
            </motion.div>

            <button 
              onClick={() => setIsVideoOpen(true)}
              className={cn("group flex items-center gap-3 px-5 md:px-6 py-2 md:py-2.5 rounded-none border hover:border-[#c41e05]/50 transition-all duration-300 backdrop-blur-sm",
                isDarkMode ? "border-border bg-accent/10 hover:bg-[#c41e05]/10" : "border-[#c41e05]/20 bg-gray-50 hover:bg-[#c41e05]/5"
              )}
            >
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#c41e05] text-white group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-[#c41e05]/20">
                <Play className="w-3 h-3 fill-white text-white ml-0.5" />
              </div>
              <span className={cn("text-xs md:text-sm font-medium tracking-wide transition-colors", 
                isDarkMode ? "text-foreground group-hover:text-[#c41e05]" : "text-gray-800 group-hover:text-[#c41e05]"
              )}>Watch how it works</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function GridPattern({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-10", className)}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}

function TechnicalMarkers() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-[#c41e05]" />
      <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-[#c41e05]" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-[#c41e05]" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-[#c41e05]" />
    </div>
  );
}

function Problem() {
  return (
    <SectionReveal id="problem" className="bg-background text-foreground py-24 px-6 border-b border-border relative overflow-hidden transition-colors duration-300">
      <GradientBlob className="top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <GridPattern className="text-muted-foreground opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-6 text-foreground">
              Three Rules That Keep <span className="text-[#c41e05]">Your Money Safe.</span>
            </h2>
      
          </div>
          <div className="space-y-8">
            <ProblemItem
              icon={<CreditCard className="w-6 h-6 text-[#c41e05]" />}
              title="Agents Have Budgets"
              description="Set a spending limit. Agent operates freely until it hits the cap. Then it stops. No negotiations."
            />
            <ProblemItem
              icon={<Lock className="w-6 h-6 text-[#c41e05]" />}
              title="Breaches Stay Contained"
              description="Compromised agent credentials can only access that agent's designated funds. Your main treasury stays locked."
            />
            <ProblemItem
              icon={<Eye className="w-6 h-6 text-[#c41e05]" />}
              title="Nothing Happens in the Dark"
              description="Every payment logged with timestamp, vendor, amount, and agent ID. Full paper trail for audits or accounting."
            />
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

function ProblemItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="p-3 bg-accent/5 border border-border group-hover:border-[#c41e05]/50 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ComparisonSection({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <SectionReveal id="comparison" className="bg-background text-foreground py-32 px-6 border-b border-border relative overflow-hidden transition-colors duration-300">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className={cn("absolute top-[20%] left-[10%] w-96 h-96 rounded-full blur-[100px]", isDarkMode ? "bg-red-900/20" : "bg-red-500/10")} />
        <div className={cn("absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full blur-[100px]", isDarkMode ? "bg-[#c41e05]/10" : "bg-[#c41e05]/5")} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-accent/5 text-xs font-mono text-muted-foreground mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c41e05] animate-pulse" />
              System Status Analysis
           </div>
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-foreground">
            Your Agents Are Already Spending.
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#c41e05]">
            Are You in Control?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Unprotected State - "The Chaos" */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="relative group"
          >
            {/* "Broken" Border Effect */}
            <div className={cn(
              "absolute inset-0 border bg-[linear-gradient(45deg,transparent_25%,rgba(153,27,27,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
              isDarkMode ? "border-red-900/30" : "border-red-200/30"
            )} />
            
            <div className={cn("h-full border p-8 md:p-12 relative overflow-hidden backdrop-blur-sm transition-all duration-300", 
              isDarkMode ? "bg-[#0a0505] border-red-900/20" : "bg-white border-red-100 shadow-[0_10px_30px_rgba(239,68,68,0.02)]"
            )}>
              <div className="absolute top-0 right-0 p-4 opacity-50">
                 <ShieldAlert className={cn("w-12 h-12 transition-colors", isDarkMode ? "text-red-900" : "text-red-200")} />
              </div>
              
              <h3 className={cn("text-3xl font-bold mb-12", isDarkMode ? "text-gray-500" : "text-gray-400")}>Without MoltBank</h3>

              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className={cn("absolute left-[19px] top-2 bottom-2 w-px transition-colors", isDarkMode ? "bg-red-900/20" : "bg-red-100")} />

                <ComparisonRow 
                  icon={<X className="w-4 h-4 text-red-600" />}
                  text="Agent spends $380/day on Moltbook"
                  variant="danger"
                  isDarkMode={isDarkMode}
                />
                <ComparisonRow 
                  icon={<ShieldAlert className="w-4 h-4 text-red-600" />}
                  text="Compromised key drains entire wallet"
                  variant="danger"
                  isDarkMode={isDarkMode}
                />
                <ComparisonRow 
                  icon={<FileSearch className="w-4 h-4 text-red-600" />}
                  text="Mystery charges on month-end statement"
                  variant="danger"
                  isDarkMode={isDarkMode}
                />
              </div>
            </div>
          </motion.div>

          {/* Protected State - "The Control" */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative"
          >
            {/* Glowing Border */}
            <div className={cn(
              "absolute -inset-0.5 opacity-30 blur-sm transition-colors duration-500", 
              isDarkMode ? "bg-gradient-to-b from-emerald-900 to-transparent" : "bg-gradient-to-b from-emerald-100 to-transparent"
            )} />
            
            <div className={cn("h-full border p-8 md:p-12 relative overflow-hidden transition-all duration-500", 
              isDarkMode ? "bg-[#080808] border-emerald-900/40" : "bg-white border-emerald-100 shadow-[0_15px_40px_rgba(16,185,129,0.04)]"
            )}>
               {/* Decorative Grid */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
               <div className={cn("absolute top-0 right-0 w-32 h-32 pointer-events-none", 
                 isDarkMode ? "bg-gradient-to-bl from-emerald-900/10 to-transparent" : "bg-gradient-to-bl from-emerald-50 to-transparent"
               )} />
               
               {/* Brand Icon */}
               <div className="absolute top-0 right-0 p-6 opacity-90 rotate-12 z-20 pointer-events-none">
                  <img 
                    src={isDarkMode ? crabIcon : lightCrabIcon} 
                    alt="Molt Mascot" 
                    className={cn(
                      "w-20 h-20 object-contain transition-all duration-300",
                      isDarkMode ? "drop-shadow-[0_0_25px_rgba(16,185,129,0.2)]" : "drop-shadow-[0_8px_15px_rgba(0,0,0,0.04)]"
                    )} 
                  />
               </div>

              <h3 className="text-3xl font-bold text-foreground mb-12">With MoltBank</h3>

              <div className="space-y-8 relative">
                 {/* Vertical Line */}
                 <div className={cn("absolute left-[19px] top-2 bottom-2 w-px transition-colors", isDarkMode ? "bg-emerald-900/40" : "bg-emerald-100")} />

                <ComparisonRow 
                  icon={<CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  text="Agent hits $50 daily limit, auto-paused"
                  variant="success"
                  isDarkMode={isDarkMode}
                />
                <ComparisonRow 
                  icon={<CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  text="Scoped access limits damage to $100"
                  variant="success"
                  isDarkMode={isDarkMode}
                />
                <ComparisonRow 
                  icon={<CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  text="Real-time alerts + transaction receipts"
                  variant="success"
                  isDarkMode={isDarkMode}
                />
              </div>

               <div className="absolute bottom-4 right-4 flex gap-1">
                 {[...Array(3)].map((_, i) => (
                   <div key={i} className={cn("w-1 h-1 transition-colors", isDarkMode ? "bg-emerald-900/60" : "bg-emerald-100")} />
                 ))}
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionReveal>
  );
}

function ComparisonRow({ icon, text, variant, isDarkMode }: { icon: React.ReactNode, text: string, variant: 'danger' | 'success', isDarkMode: boolean }) {
  const isSuccess = variant === 'success';
  return (
    <div className="flex items-center gap-6 group relative z-10">
      <div className={cn(
        "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-none border transition-colors duration-300",
        isSuccess 
          ? isDarkMode ? "bg-emerald-950/30 border-emerald-900/50 text-emerald-500 shadow-[0_0_10px_rgba(6,78,59,0.2)]" : "bg-emerald-50 border-emerald-200 text-emerald-600"
          : isDarkMode ? "bg-red-950/30 border-red-900/50 text-red-500 shadow-[0_0_10px_rgba(127,29,29,0.2)]" : "bg-red-50 border-red-200 text-red-600"
      )}>
        {icon}
      </div>
      <div>
        <div className={cn(
          "text-lg leading-tight font-medium transition-colors",
          isSuccess 
            ? isDarkMode ? "text-gray-200" : "text-gray-800"
            : isDarkMode ? "text-gray-400 group-hover:text-red-400" : "text-gray-600 group-hover:text-red-600"
        )}>
          {text}
        </div>
      </div>
    </div>
  );
}

function Solution({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <SectionReveal id="solution" className="py-24 px-6 bg-background text-foreground border-b border-border relative overflow-hidden transition-colors duration-300">
      <GradientBlob className={cn("bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3", isDarkMode ? "opacity-10" : "opacity-5")} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center text-foreground">Three Steps to Secure Agent Spending</h2>
        <div className="grid md:grid-cols-3 gap-0 border border-border">
          <SolutionCard
            title="Set it up once"
            description="Ask your Agent to use MoltBank, and define spending rules per agent or team within 3 minutes."
            number="01"
            isDarkMode={isDarkMode}
          />
          <SolutionCard
            title="Let Agents Run Free"
            description="Your agents spend autonomously on ecosystem services. MoltBank enforces limits automatically. Receive notification on your defined threshold and approve/reject on your favorite chat or MoltBank Dashboard."
            number="02"
            className="md:border-l border-border"
            isDarkMode={isDarkMode}
          />
          <SolutionCard
            title="Always Know Where Money Goes"
            description="Real-time dashboard shows every transaction. Export to CSV, QuickBooks, Xero, or your accounting system. Tax-ready from day one."
            number="03"
            className="md:border-l border-border"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </SectionReveal>
  );
}

function SolutionCard({ title, description, number, className, isDarkMode }: { title: string, description: string, number: string, className?: string, isDarkMode: boolean }) {
  return (
    <div className={cn("p-8 md:p-12 flex flex-col h-full border-b md:border-b-0 border-border transition-colors relative group", 
      isDarkMode ? "hover:bg-[#111]" : "hover:bg-gray-50",
      className
    )}>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <TechnicalMarkers />
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0 0H20V20" stroke="#c41e05" strokeWidth="1"/>
         </svg>
      </div>
      <div className={cn("text-6xl font-light mb-auto transition-colors", isDarkMode ? "text-gray-800" : "text-gray-200")}>{number}</div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#c41e05] transition-colors text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{description}</p>
      </div>
    </div>
  );
}

function WaitlistCTA({ isDarkMode, referralCode, onSuccess }: { isDarkMode: boolean, referralCode: string | null, onSuccess: (data: WaitlistData) => void }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-5afc5174/join-waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ email, referredBy: referralCode })
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      const data = await response.json();
      onSuccess(data);
      setEmail('');
      toast.success("Welcome to the fleet!");
    } catch (error) {
      console.error("Waitlist error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={cn("py-20 px-6 border-b border-border transition-colors duration-300 relative overflow-hidden", isDarkMode ? "bg-black" : "bg-white")}>
      {/* Subtle glow on the right like in the image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#c41e05] blur-[120px] opacity-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-foreground">
            The OpenClaw <br />
            ecosystem moves <br />
            fast.
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-[#c41e05] mt-2">
            MoltBank keeps you <br />
            in control.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="w-full">
                        <a
              href="https://app.moltbank.bot/"
              className="w-full bg-[#c41e05] hover:bg-[#d6280e] text-[#ffffff] font-bold px-8 py-6 flex items-center justify-center gap-3 transition-all whitespace-nowrap cursor-pointer uppercase tracking-widest text-sm"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
        </form>
      </div>
    </section>
  );
}

function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <footer className="bg-background text-foreground py-12 px-6 border-t border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-24 opacity-80 hover:opacity-100 transition-opacity">
          <img src={isDarkMode ? darkMoltLogo : lightMoltLogo} alt="Molt Logo" className={cn("w-full transition-all", isDarkMode && "grayscale hover:grayscale-0")} />
        </div>
        <div className="text-sm text-muted-foreground">
          © 2026 Molt Inc. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-[#c41e05] transition-colors">Privacy</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-[#c41e05] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

// --- Waitlist Modal ---

interface WaitlistData {
  position: number;
  referralCode: string;
  referralCount: number;
}

function WaitlistModal({ isOpen, onClose, data, isDarkMode }: { isOpen: boolean, onClose: () => void, data: WaitlistData | null, isDarkMode: boolean }) {
  if (!isOpen || !data) return null;

  const referralLink = `${window.location.origin}?ref=${data.referralCode}`;

  const copyToClipboard = async () => {
    // Try modern API first (if available and allowed)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(referralLink);
        toast.success("Referral link copied to clipboard!");
        return;
      } catch (err) {
        // Silent failure, fall back to legacy
      }
    }

    // Legacy fallback for iframes or restricted environments
    try {
      const textArea = document.createElement("textarea");
      textArea.value = referralLink;
      
      // Ensure it's part of the DOM but invisible to user
      // opacity:0 is safer than visibility:hidden for some browsers
      textArea.style.position = "fixed";
      textArea.style.left = "0";
      textArea.style.top = "0";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      textArea.setAttribute('readonly', ''); // Prevent keyboard showing on mobile
      
      document.body.appendChild(textArea);
      
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
         toast.success("Referral link copied to clipboard!");
      } else {
         toast.error("Failed to copy. Please copy manually.");
      }
    } catch (err) {
      toast.error("Failed to copy. Please copy manually.");
    }
  };

  const handleShareTwitter = () => {
    const text = `Just secured a spot for my agent fleet on @moltbanker 🦞\n\nFinally, a way to give agents spending power without the risk of runaway costs. Real budgets, hard limits, and full containment\n\nThe waitlist is moving fast. Secure your position:`;
    const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(referralLink)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={cn(
          "w-full max-w-lg overflow-hidden relative border transition-all duration-500 shadow-2xl",
          isDarkMode 
            ? "bg-[#050101] border-[#c41e05]/50 shadow-[0_0_100px_rgba(196,30,5,0.2)]" 
            : "bg-white border-border shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
        )}
      >
        {/* Noise Texture */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none z-0"
          style={{
              backgroundImage: `url(${noiseTexture})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: isDarkMode ? 'overlay' : 'soft-light' 
          }}
        />

        <button 
          onClick={onClose} 
          className={cn(
            "absolute top-4 right-4 p-2 rounded-full z-50 transition-colors cursor-pointer",
            isDarkMode ? "hover:bg-gray-800 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-500 hover:text-black"
          )}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 p-8 md:p-12 flex flex-col items-center text-center">
          
          {/* Logo Icon */}
          <div className="mb-8 relative">
             <div className={cn("absolute inset-0 blur-[40px] opacity-40 rounded-full", isDarkMode ? "bg-[#c41e05]" : "bg-red-200")} />
             <img 
               src={isDarkMode ? crabIcon : lightCrabIcon} 
               alt="Molt Mascot" 
               className={cn(
                 "relative w-24 h-24 object-contain transition-all duration-300",
                 isDarkMode ? "drop-shadow-[0_0_15px_rgba(196,30,5,0.5)]" : "drop-shadow-[0_10px_15px_rgba(196,30,5,0.1)]"
               )} 
             />
          </div>

          <h2 className={cn("text-3xl md:text-4xl font-bold mb-3 tracking-tight", isDarkMode ? "text-white" : "text-gray-900")}>
            You're almost in!
          </h2>
          
          <div className={cn(
            "my-8 w-full border p-8 backdrop-blur-sm relative overflow-hidden group transition-all duration-300",
            isDarkMode 
              ? "bg-black/50 border-[#c41e05]/30" 
              : "bg-gray-50/50 border-gray-200"
          )}>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c41e05]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
             
             <div className="relative z-10">
               <p className="text-muted-foreground text-xs font-mono uppercase tracking-[0.2em] mb-3">Your Position in Line</p>
               <div className={cn(
                 "text-6xl md:text-7xl font-mono font-bold tabular-nums transition-all duration-300",
                 isDarkMode ? "text-white drop-shadow-[0_0_10px_rgba(196,30,5,0.5)]" : "text-gray-900 drop-shadow-[0_5px_10px_rgba(0,0,0,0.05)]"
               )}>
                 #{data.position.toLocaleString()}
               </div>
             </div>
             
             {/* Decorative corners */}
             <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#c41e05]/40" />
             <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#c41e05]/40" />
             <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#c41e05]/40" />
             <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#c41e05]/40" />
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed text-sm max-w-sm">
            Want to skip the line and get early access?<br/>
            <span className="text-muted-foreground/80 mt-2 block italic">
              Bump your spot by referring friends. Each referral moves you up the queue.
            </span>
          </p>

          <div className="w-full space-y-3">
             <button 
               onClick={handleShareTwitter}
               className={cn(
                 "w-full font-bold text-base px-6 py-4 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]",
                 isDarkMode ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
               )}
             >
                <span>SHARE ON </span>
                <FaXTwitter className="w-5 h-5" />
             </button>

             {/* Copy Link Section */}
             <div className="flex items-center gap-0 w-full group">
                <div className="flex-1 bg-white/5 border border-white/10 border-r-0 p-4 text-left font-mono text-xs md:text-sm text-gray-400 truncate transition-colors group-hover:border-[#c41e05]/30 group-hover:bg-[#c41e05]/5 h-[56px] flex items-center">
                  {referralLink}
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="bg-[#c41e05] hover:bg-[#d6280e] text-black font-bold px-6 h-[56px] flex items-center gap-2 transition-all hover:brightness-110 active:brightness-90 whitespace-nowrap"
                  title="Copy Link"
                >
                  <span>COPY</span>
                  <Copy className="w-4 h-4" />
                </button>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// --- Partners Slider ---

function PartnersSlider({ isDarkMode }: { isDarkMode: boolean }) {
  const partners = [
    { name: "Safe", logo: safeLogo }, 
    { name: "Bridge", logo: bridgeLogo }, 
    { name: "Base", logo: baseLogo }, 
    { name: "Alchemy", logo: alchemyLogo }
  ];
  
  const items = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

  return (
    <div className="bg-background border-b border-border py-10 overflow-hidden relative z-10 transition-colors duration-300">
      <div className={cn("absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none", isDarkMode ? "bg-gradient-to-r from-black to-transparent" : "bg-gradient-to-r from-white to-transparent")} />
      <div className={cn("absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none", isDarkMode ? "bg-gradient-to-l from-black to-transparent" : "bg-gradient-to-l from-white to-transparent")} />
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-20 md:gap-32 items-center flex-nowrap pr-20 md:pr-32"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {items.map((partner, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center min-w-[120px] md:min-w-[160px]">
               <img 
                 src={partner.logo} 
                 alt={`${partner.name} Logo`} 
                 className={cn("h-8 md:h-12 w-auto object-contain transition-all", isDarkMode ? "brightness-0 invert" : "grayscale hover:grayscale-0")} 
               />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// --- Main App ---

export default function LandingPage() {
  const [searchParams] = useSearchParams();
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if a theme is saved in localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('molt-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Otherwise check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });
  const [waitlistData, setWaitlistData] = useState<WaitlistData | null>(null);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const handleWaitlistSuccess = (data: WaitlistData) => {
    setWaitlistData(data);
    setIsWaitlistModalOpen(true);
  };

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('molt-theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('molt-theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    // Parse referral code from URL
    const ref = searchParams.get('ref');
    if (ref) {
      setReferralCode(ref);
    }
  }, [searchParams]);

  return (
    <div className={cn(isDarkMode ? "dark" : "light")}>
      <Helmet>
        <title>MoltBank - Secure Bank for Agent Fleets</title>
        <meta name="description" content="Secure your agent fleet with MoltBank. Spending controls, audit logs, and institutional security." />
        <link rel="canonical" href={window.location.origin} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="MoltBank" />
        <meta property="og:title" content="MoltBank - Secure Bank for Agent Fleets" />
        <meta property="og:description" content="Secure your agent fleet with MoltBank. Spending controls, audit logs, and institutional security." />
        <meta property="og:image" content={socialPreviewImg.startsWith('http') ? socialPreviewImg : `${window.location.origin}${socialPreviewImg.startsWith('/') ? '' : '/'}${socialPreviewImg}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@moltbanker" />
        <meta name="twitter:creator" content="@moltbanker" />
        <meta name="twitter:title" content="MoltBank - Secure Bank for Agent Fleets" />
        <meta name="twitter:description" content="Secure your agent fleet with MoltBank. Spending controls, audit logs, and institutional security." />
        <meta name="twitter:image" content={socialPreviewImg.startsWith('http') ? socialPreviewImg : `${window.location.origin}${socialPreviewImg.startsWith('/') ? '' : '/'}${socialPreviewImg}`} />
        <meta name="twitter:image:alt" content="MoltBank - Secure Bank for Agent Fleets" />
      </Helmet>
      
      {/* Light/Dark mode variables override */}
      <style dangerouslySetInnerHTML={{ __html: `
        .light {
          --background: #fdfdfd;
          --foreground: #050101;
          --card: #f8f8f8;
          --card-foreground: #050101;
          --popover: #ffffff;
          --popover-foreground: #050101;
          --border: #e0e0e0;
        }
        .light .bg-black { background-color: #fdfdfd !important; }
        .light .bg-\[\#050101\] { background-color: #fdfdfd !important; }
        .light .bg-\[\#0a0505\] { background-color: #f8f8f8 !important; }
        .light .bg-\[\#0a0a0a\] { background-color: #f8f8f8 !important; }
        .light .bg-\[\#080808\] { background-color: #fcfcfc !important; }
        .light .bg-\[\#121212\] { background-color: #ffffff !important; }
        .light .bg-\[\#1c1c1c\] { background-color: #eeeeee !important; }
        .light .text-white { color: #050101 !important; }
        .light .text-gray-400 { color: #555555 !important; }
        .light .text-gray-500 { color: #666666 !important; }
        .light .text-gray-300 { color: #444444 !important; }
        .light .text-gray-200 { color: #333333 !important; }
        .light .text-gray-600 { color: #777777 !important; }
        .light .border-gray-900 { border-color: #e0e0e0 !important; }
        .light .border-white\/5 { border-color: rgba(0,0,0,0.1) !important; }
        .light .border-white\/10 { border-color: rgba(0,0,0,0.2) !important; }
        .light .bg-black\/40 { background-color: rgba(255,255,255,0.4) !important; }
        .light .bg-black\/80 { background-color: rgba(240,240,240,0.8) !important; }
        .light .bg-white\/5 { background-color: rgba(0,0,0,0.05) !important; }
        .light .opacity-20, .light .opacity-15, .light .opacity-10, .light .opacity-30 { opacity: 0.1 !important; }
        .light .grayscale { filter: none !important; }
        .light .brightness-0.invert { filter: none !important; brightness: 1; }
        .light img.brightness-0.invert { filter: none !important; }
        /* Partner logos fix */
        .light .invert { filter: none !important; }
        .light .brightness-0 { filter: none !important; }
      `}} />

      <main className="min-h-screen pt-12 bg-background text-foreground selection:bg-primary selection:text-white transition-colors duration-300 relative">
        <Toaster position="bottom-right" theme={isDarkMode ? "dark" : "light"} />
        
        <TopNav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <Hero isDarkMode={isDarkMode} />
        <Problem />
        <ComparisonSection isDarkMode={isDarkMode} />
        <PartnersSlider isDarkMode={isDarkMode} />
        <Solution isDarkMode={isDarkMode} />
        
        <WaitlistCTA 
          isDarkMode={isDarkMode} 
          referralCode={referralCode} 
          onSuccess={handleWaitlistSuccess} 
        />

        <Footer isDarkMode={isDarkMode} />

        {/* Waitlist Success Modal */}
        <AnimatePresence>
          {isWaitlistModalOpen && (
            <WaitlistModal 
              isOpen={isWaitlistModalOpen} 
              onClose={() => setIsWaitlistModalOpen(false)} 
              data={waitlistData} 
              isDarkMode={isDarkMode}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
