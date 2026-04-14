import React from 'react';
import { Shield, AlertTriangle, CheckCircle2, ArrowRight, Activity, Terminal } from 'lucide-react';

export function StyleGuide() {
  return (
    <div className="min-h-screen bg-[#050101] text-white p-12 font-sans relative overflow-hidden">
      {/* Background Noise used in app */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16 border-b border-gray-800 pb-8">
          <h1 className="text-6xl font-bold tracking-tighter mb-4">Molt<span className="text-[#c41e05]">Bank</span> Design System</h1>
          <p className="text-gray-400 text-xl">Visual language for the AI Agent Banking interface.</p>
        </header>

        {/* COLORS */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#c41e05]" /> 01. Color Palette
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch name="Brand Red" hex="#c41e05" className="bg-[#c41e05]" />
            <ColorSwatch name="Deep Background" hex="#050101" className="bg-[#050101] border border-gray-800" />
            <ColorSwatch name="Surface Dark" hex="#0A0A0A" className="bg-[#0A0A0A] border border-gray-800" />
            <ColorSwatch name="Safety Emerald" hex="#10b981" className="bg-emerald-500" />
            <ColorSwatch name="Danger Red" hex="#7f1d1d" className="bg-red-900" />
            <ColorSwatch name="Text Muted" hex="#9ca3af" className="bg-gray-400" />
            <ColorSwatch name="Border Subtle" hex="rgba(255,255,255,0.1)" className="bg-white/10" />
            <ColorSwatch name="Glow Color" hex="rgba(196,30,5,0.4)" className="bg-[#c41e05]/40 backdrop-blur-md" />
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#c41e05]" /> 02. Typography
          </h2>
          
          <div className="space-y-12 border border-gray-900 p-12 bg-[#0A0A0A]">
            <div>
              <span className="text-xs font-mono text-gray-600 mb-2 block">Display Heading (tracking-tighter)</span>
              <h1 className="text-7xl font-bold tracking-tighter leading-none">
                Secure your <span className="text-[#c41e05]">Agent Fleet</span>
              </h1>
            </div>

            <div>
              <span className="text-xs font-mono text-gray-600 mb-2 block">Section Heading</span>
              <h2 className="text-4xl font-bold tracking-tighter">
                System Status & Analysis
              </h2>
            </div>

            <div className="max-w-2xl">
              <span className="text-xs font-mono text-gray-600 mb-2 block">Body Text (text-gray-400 leading-relaxed)</span>
              <p className="text-gray-400 text-lg leading-relaxed">
                Give your AI agents spending power without the risk. MoltBank acts as a secure layer between your agents and the blockchain economy, enforcing hard limits and providing real-time audit logs.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono text-gray-600 mb-2 block">Technical Label (font-mono uppercase tracking-widest)</span>
              <div className="flex gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 text-xs font-mono text-gray-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c41e05] animate-pulse" />
                  Live Monitor
                </div>
                <div className="text-xs font-mono text-[#c41e05] uppercase tracking-[0.2em]">
                  /// System Critical
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI ELEMENTS */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#c41e05]" /> 03. UI Components
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Buttons */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Buttons</h3>
              
              <div className="flex flex-col gap-4 items-start">
                {/* Primary */}
                <button className="bg-[#c41e05] text-black font-bold px-8 py-3 hover:bg-[#d6280e] transition-colors flex items-center gap-2">
                  <span>PRIMARY ACTION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary / Outline */}
                <button className="bg-transparent border border-white/20 text-white hover:border-[#c41e05] hover:text-[#c41e05] px-8 py-3 transition-colors uppercase tracking-wider text-sm font-medium">
                  Secondary Action
                </button>

                {/* Ghost / Tech */}
                <button className="flex items-center gap-3 px-6 py-3 border border-white/5 bg-white/5 hover:bg-[#c41e05]/10 hover:border-[#c41e05]/30 transition-all group">
                   <div className="w-6 h-6 flex items-center justify-center bg-[#c41e05] rounded-full text-black">
                     <Activity className="w-3 h-3" />
                   </div>
                   <span className="font-mono text-xs text-gray-400 group-hover:text-white">INITIATE_PROTOCOL</span>
                </button>
              </div>
            </div>

            {/* Cards & Status */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Cards & Status</h3>

              {/* Danger State Card */}
              <div className="bg-[#0a0505] border border-red-900/30 p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-50">
                  <AlertTriangle className="w-5 h-5 text-red-900" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-red-900/20 border border-red-900/40 text-red-500">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-red-500 text-sm">UNPROTECTED</span>
                </div>
                <p className="text-gray-500 text-sm">Standard wallet access exposes entire treasury to agent error.</p>
              </div>

              {/* Safe State Card */}
              <div className="bg-[#080808] border border-emerald-900/40 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none" />
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-8 h-8 flex items-center justify-center bg-emerald-950/30 border border-emerald-900/50 text-emerald-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-emerald-500 text-sm">SECURED</span>
                </div>
                <p className="text-gray-400 text-sm relative z-10">Scoped permissions limit downside risk to allocated budget only.</p>
              </div>
            </div>
          </div>
        </section>

        {/* INPUTS & FORMS */}
        <section className="mb-20">
           <h2 className="text-2xl font-mono uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#c41e05]" /> 04. Inputs & Forms
          </h2>
          
          <div className="max-w-md bg-white/5 p-8 border border-white/10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Terminal className="h-5 w-5 text-gray-500" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-3 bg-black border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#c41e05] focus:ring-1 focus:ring-[#c41e05] transition-all font-mono text-sm"
                placeholder="ENTER_EMAIL_ADDRESS"
                value="agent@moltbank.com"
                readOnly
              />
              <div className="mt-2 flex justify-between text-[10px] text-gray-600 font-mono uppercase">
                <span>Validation: Active</span>
                <span>Encrypted</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function ColorSwatch({ name, hex, className }: { name: string, hex: string, className: string }) {
  return (
    <div className="group">
      <div className={`h-24 w-full mb-3 shadow-lg ${className} group-hover:scale-[1.02] transition-transform`} />
      <h3 className="text-white font-bold text-sm">{name}</h3>
      <p className="text-gray-500 font-mono text-xs uppercase">{hex}</p>
    </div>
  );
}
