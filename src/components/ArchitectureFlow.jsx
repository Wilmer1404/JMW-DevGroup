import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Scan, GitFork, Brain, ChevronRight } from 'lucide-react';

export default function ArchitectureFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: '01',
      badge: 'Amazon GuardDuty',
      title: 'Detección',
      description: 'Monitorización continua de actividad maliciosa y comportamiento anómalo en todas tus cuentas.',
      topIcon: Scan,
      centerType: 'detection',
    },
    {
      stepNumber: '02',
      badge: 'Amazon EventBridge',
      title: 'Enrutamiento',
      description: 'Clasificación y distribución de hallazgos en milisegundos, sin intervención humana.',
      topIcon: GitFork,
      centerType: 'routing',
    },
    {
      stepNumber: '03',
      badge: 'Amazon Bedrock - RAG',
      title: 'Inferencia cognitiva',
      description: 'Contexto propio, evidencia y políticas se combinan para decidir la respuesta más segura.',
      topIcon: Brain,
      centerType: 'cognition',
    },
  ];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="arquitectura" className="py-24 md:py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
                UNA DEFENSA QUE PIENSA
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08]">
              Del hallazgo a la resolución.<br />
              Sin tocar un solo botón.
            </h2>
          </div>

          {/* Carousel Arrows Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#090C12] hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white flex items-center justify-center transition-all"
              aria-label="Paso anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#090C12] hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white flex items-center justify-center transition-all"
              aria-label="Siguiente paso"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Step Flow Cards with Connectors */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((step, idx) => {
            const TopIcon = step.topIcon;

            return (
              <React.Fragment key={step.stepNumber}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative rounded-2xl bg-[#090C12]/90 border border-white/10 hover:border-[#00F0FF]/30 p-7 flex flex-col justify-between transition-all duration-300 group ${
                    activeStep === idx ? 'ring-1 ring-[#00F0FF]/40 shadow-[0_0_25px_rgba(0,240,255,0.15)]' : ''
                  }`}
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Top Row: 01 and Top Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-gray-600 font-semibold tracking-wider">
                      {step.stepNumber}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-[#00F0FF] group-hover:border-[#00F0FF]/40 transition-colors">
                      <TopIcon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Center Radar / Coordinate Visual */}
                  <div className="relative w-full h-44 rounded-xl bg-[#06080D] border border-white/5 overflow-hidden flex items-center justify-center mb-8">
                    {/* Grid Pattern Lines */}
                    <div className="absolute inset-0 bg-grid-tech opacity-40" />

                    {/* Concentric radar rings */}
                    <div className="absolute w-36 h-36 rounded-full border border-cyan-500/20" />
                    <div className="absolute w-24 h-24 rounded-full border border-cyan-500/30" />
                    <div className="absolute w-12 h-12 rounded-full border border-cyan-500/40" />

                    {/* Cyan Target Dots */}
                    {step.centerType === 'detection' && (
                      <>
                        <span className="absolute top-8 right-12 w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
                        <span className="absolute bottom-10 right-20 w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
                        <span className="absolute top-14 left-10 w-1.5 h-1.5 rounded-full bg-[#00F0FF]/60"></span>
                      </>
                    )}

                    {step.centerType === 'routing' && (
                      <>
                        <span className="absolute top-10 right-16 w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
                        <span className="absolute bottom-12 right-14 w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
                      </>
                    )}

                    {step.centerType === 'cognition' && (
                      <>
                        <span className="absolute top-10 right-14 w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
                        <span className="absolute bottom-10 right-16 w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
                        <span className="absolute top-14 left-14 w-1.5 h-1.5 rounded-full bg-[#00F0FF]/60"></span>
                      </>
                    )}

                    {/* Center Icon Box */}
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#090C12]/95 border border-[#00F0FF]/40 shadow-[0_0_20px_rgba(0,240,255,0.25)] flex items-center justify-center text-[#00F0FF]">
                      <TopIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Tech Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#00F0FF]/[0.06] border border-[#00F0FF]/20 text-xs font-mono text-cyan-300">
                      {step.badge}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connector Arrow between cards (hidden on mobile, shown on md+) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-30 pointer-events-none items-center justify-center"
                    style={{ left: idx === 0 ? '33.33%' : '66.66%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="w-7 h-7 rounded-full bg-[#050505] border border-cyan-500/40 flex items-center justify-center text-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
