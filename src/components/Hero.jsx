import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Shield, Check } from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex flex-col justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#0A84FF]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-0 py-1 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00F0FF]/90 font-semibold">
                CLOUD SECURITY, REIMAGINED
              </span>
            </div>

            {/* Massive H1 Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-white tracking-[-0.03em] leading-[1.06] mb-7">
              Seguridad Zero-<br />
              Touch para tu<br />
              Infraestructura<br />
              Cloud.
            </h1>

            {/* Subtitle Description */}
            <p className="text-gray-400 text-lg sm:text-xl font-normal leading-relaxed max-w-xl mb-10">
              Modelo de orquestación automatizada en AWS. Detecta, analiza con IA (RAG) y repara configuraciones erróneas en tiempo real.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <button
                onClick={onOpenDemo}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#0A84FF] hover:bg-[#0070E0] transition-all duration-300 shadow-[0_0_25px_rgba(10,132,255,0.45)] hover:shadow-[0_0_35px_rgba(10,132,255,0.65)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Solicitar Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <a
                href="#arquitectura"
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 py-3"
              >
                <span>Explorar arquitectura</span>
                <ArrowDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

            {/* Badges / Social Proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5 w-full max-w-lg">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300 font-medium">
                  AI
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300 font-medium">
                  λ
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300 font-medium">
                  AWS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Respuesta autónoma 24/7</span>
                <span className="text-xs text-gray-500">Diseñado para entornos AWS críticos</span>
              </div>
            </div>

            {/* Faded Scroll to explore */}
            <div className="mt-14 hidden lg:flex items-center gap-2 text-[11px] font-mono tracking-widest text-gray-600 uppercase">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="w-3 h-3 text-gray-600 animate-bounce" />
            </div>
          </motion.div>

          {/* Right Column: Abstract Shield & Orbit Architecture Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]"
          >
            {/* Center glow behind shield */}
            <div className="absolute w-72 h-72 rounded-full bg-[#00F0FF]/15 blur-[90px] pointer-events-none" />

            {/* Orbit SVG rings */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 500 500"
              fill="none"
            >
              {/* Ellipse 1: Tilted forward */}
              <ellipse
                cx="250"
                cy="250"
                rx="210"
                ry="120"
                transform="rotate(-28 250 250)"
                stroke="#00F0FF"
                strokeOpacity="0.22"
                strokeWidth="1.2"
              />

              {/* Ellipse 2: Tilted counter */}
              <ellipse
                cx="250"
                cy="250"
                rx="230"
                ry="105"
                transform="rotate(35 250 250)"
                stroke="#00F0FF"
                strokeOpacity="0.18"
                strokeWidth="1.2"
              />

              {/* Circular subtle dashed orbit */}
              <circle
                cx="250"
                cy="250"
                r="160"
                stroke="#00F0FF"
                strokeOpacity="0.12"
                strokeWidth="1"
                strokeDasharray="4 6"
              />

              {/* Inner subtle orbit */}
              <circle
                cx="250"
                cy="250"
                r="110"
                stroke="#00F0FF"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
            </svg>

            {/* Central Hexagonal Shield: "JMW CORE / PROTECTED" */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="relative group">
                {/* Outer shield glow aura */}
                <div className="absolute -inset-1 rounded-2xl bg-[#00F0FF]/25 blur-lg group-hover:bg-[#00F0FF]/40 transition-all duration-500" />
                
                {/* Shield card */}
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl bg-gradient-to-b from-[#0F1E2A]/90 to-[#050C10]/95 border border-[#00F0FF]/40 backdrop-blur-xl flex flex-col items-center justify-center p-4 shadow-[0_0_35px_rgba(0,240,255,0.25)]">
                  {/* Cyber shield emblem */}
                  <div className="relative mb-2 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-[#00F0FF] fill-[#00F0FF]/10 stroke-[1.8]" />
                    <Check className="w-5 h-5 text-[#00F0FF] absolute stroke-[2.5]" />
                  </div>
                  <span className="font-extrabold text-xs tracking-[0.2em] text-white mt-1">
                    JMW CORE
                  </span>
                  <span className="font-mono text-[9px] font-semibold tracking-[0.25em] text-[#00F0FF] mt-1">
                    PROTECTED
                  </span>
                </div>
              </div>
            </div>

            {/* Node 1: Top-Left: GuardDuty */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-12 left-2 sm:left-4 z-20"
            >
              <div className="flex flex-col bg-[#080B10]/90 border border-white/10 rounded-xl px-3.5 py-2 shadow-2xl backdrop-blur-md hover:border-[#00F0FF]/40 transition-all">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]"></span>
                  <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">
                    DETECT
                  </span>
                </div>
                <span className="text-sm font-semibold text-white">GuardDuty</span>
              </div>
            </motion.div>

            {/* Node 2: Top-Right: Bedrock AI */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-16 right-0 sm:right-2 z-20"
            >
              <div className="flex flex-col bg-[#080B10]/90 border border-white/10 rounded-xl px-3.5 py-2 shadow-2xl backdrop-blur-md hover:border-[#00F0FF]/40 transition-all">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]"></span>
                  <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">
                    ANALYZE
                  </span>
                </div>
                <span className="text-sm font-semibold text-white">Bedrock AI</span>
              </div>
            </motion.div>

            {/* Node 3: Bottom-Right: Lambda */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-20 right-2 sm:right-6 z-20"
            >
              <div className="flex flex-col bg-[#080B10]/90 border border-white/10 rounded-xl px-3.5 py-2 shadow-2xl backdrop-blur-md hover:border-[#00F0FF]/40 transition-all">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]"></span>
                  <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">
                    REMEDIATE
                  </span>
                </div>
                <span className="text-sm font-semibold text-white">Lambda</span>
              </div>
            </motion.div>

            {/* Node 4: Bottom-Center: Autonomous defense ACTIVE */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[85%] max-w-[280px]"
            >
              <div className="flex items-center justify-between bg-[#080B10]/90 border border-white/10 rounded-full px-4 py-2 shadow-2xl backdrop-blur-md hover:border-[#00F0FF]/40 transition-all">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                  </span>
                  <span className="text-xs font-medium text-gray-300">Autonomous defense</span>
                </div>
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded-full border border-[#00F0FF]/20">
                  ACTIVE
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
