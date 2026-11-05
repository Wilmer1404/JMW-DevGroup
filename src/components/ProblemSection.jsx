import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Hand, ShieldAlert } from 'lucide-react';

export default function ProblemSection() {
  const [activeCard, setActiveCard] = useState(0);

  const problemCards = [
    {
      number: '01',
      title: 'Fatiga de alertas',
      description: 'Miles de hallazgos compiten por atención mientras las amenazas críticas quedan enterradas en el ruido.',
      icon: Activity,
    },
    {
      number: '02',
      title: 'Dependencia manual',
      description: 'Playbooks lentos y equipos saturados convierten minutos de exposición en horas de riesgo operativo.',
      icon: Hand,
    },
    {
      number: '03',
      title: 'Vulnerabilidades expuestas',
      description: 'Cada configuración sin corregir amplía la ventana de oportunidad para una brecha real.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="problema" className="py-24 md:py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          {/* Badge */}
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
              EL COSTO DE ESPERAR
            </span>
          </div>

          {/* Heading + Supporting Text Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08]">
                Las alertas no detienen<br />
                las brechas.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pt-3">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Detectar una amenaza es apenas el principio. La diferencia está en lo que sucede durante los siguientes segundos.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            const isHighlighted = activeCard === idx;

            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onMouseEnter={() => setActiveCard(idx)}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 min-h-[300px] cursor-pointer overflow-hidden ${
                  isHighlighted
                    ? 'bg-[#090C12] border border-[#00F0FF]/40 shadow-[0_0_30px_rgba(0,240,255,0.12)]'
                    : 'bg-[#0A0D13]/70 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Subtle top-right ambient glow when active */}
                {isHighlighted && (
                  <div className="absolute top-0 right-0 w-44 h-44 bg-[#00F0FF]/10 rounded-full blur-2xl pointer-events-none" />
                )}

                {/* Top Row: Icon + Number */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-colors ${
                    isHighlighted 
                      ? 'bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#00F0FF]' 
                      : 'bg-white/[0.04] border-white/10 text-gray-300'
                  }`}>
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="font-mono text-xs text-gray-600 font-semibold tracking-wider">
                    {card.number}
                  </span>
                </div>

                {/* Bottom Content: Title + Description */}
                <div className="mt-14 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Active cyan bottom accent line */}
                {isHighlighted && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#00F0FF] to-transparent shadow-[0_0_10px_#00F0FF]" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
