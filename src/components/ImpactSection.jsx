import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function ImpactSection({ id = 'impacto' }) {
  return (
    <section id={id} className="py-24 md:py-32 relative bg-[#050505] overflow-hidden scroll-mt-24">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Stat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Badge */}
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
                VELOCIDAD = RESILIENCIA
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-6">
              De horas<br />
              <span className="text-[#00F0FF] text-glow-cyan">a segundos.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Reduce radicalmente tu Tiempo Medio de Recuperación. JMW actúa antes de que una configuración errónea se convierta en una brecha.
            </p>

            {/* Stat Callout */}
            <div className="flex items-center gap-5 pt-4">
              <span className="text-5xl sm:text-6xl font-extrabold text-[#00F0FF] tracking-tight drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                99.8%
              </span>
              <div className="w-[1.5px] h-12 bg-white/20" />
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-wider text-gray-300 font-bold">
                  MENOS TIEMPO
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  DE EXPOSICIÓN
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Simulated MTTR Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl border border-white/10 bg-[#0A0D13]/90 backdrop-blur-xl p-7 sm:p-9 shadow-2xl overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div>
                  <div className="font-mono text-[11px] text-gray-500 uppercase tracking-widest mb-1">
                    MTTR PROMEDIO
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Tiempo de recuperación
                  </h3>
                </div>
                
                {/* Live Model Badge */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse"></span>
                  <span className="text-[11px] tracking-wider text-gray-300">LIVE MODEL</span>
                </div>
              </div>

              {/* Chart Container */}
              <div className="relative pt-2 pb-6">
                
                {/* Vertical Grid Lines & Axis Markers */}
                <div className="absolute inset-x-0 top-0 bottom-6 flex justify-between pointer-events-none">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <div key={step} className="h-full border-r border-white/5 relative"></div>
                  ))}
                </div>

                {/* Bar 1: Respuesta manual */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                    <span className="text-gray-400 font-normal">Respuesta manual</span>
                    <span className="font-mono font-semibold text-white">4h 32m</span>
                  </div>
                  <div className="h-7 w-full bg-white/[0.03] rounded-md overflow-hidden flex items-center p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-sm bg-gradient-to-r from-[#C24141] to-[#E25353] opacity-90"
                    />
                  </div>
                </div>

                {/* Bar 2: JMW Autonomous */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                    <span className="text-gray-300 font-medium">JMW Autonomous</span>
                    <span className="font-mono font-bold text-[#00F0FF]">8.4s</span>
                  </div>
                  <div className="h-7 w-full bg-white/[0.03] rounded-md overflow-hidden flex items-center p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '9%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-sm bg-gradient-to-r from-[#00F0FF] to-[#0A84FF] shadow-[0_0_20px_rgba(0,240,255,0.7)]"
                    />
                  </div>
                </div>

                {/* Time Axis Labels */}
                <div className="flex justify-between text-[11px] font-mono text-gray-600 pt-2 border-t border-white/5">
                  <span>0s</span>
                  <span>1h</span>
                  <span>2h</span>
                  <span>3h</span>
                  <span>4h+</span>
                </div>

              </div>

              {/* Bottom Callout Banner */}
              <div className="mt-4 rounded-xl border border-cyan-500/20 bg-[#00F0FF]/[0.03] px-4 py-3 flex items-center gap-3">
                <Zap className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <p className="text-xs sm:text-sm text-gray-300">
                  <strong className="text-white font-semibold">1,943× más rápido</strong> que la respuesta manual promedio
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
