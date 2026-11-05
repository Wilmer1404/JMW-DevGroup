import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalSquare, ClockAlert, ServerCrash } from 'lucide-react';

export default function ProblemSection({ id = 'problema' }) {
  const [activeCard, setActiveCard] = useState(0);

  const problemCards = [
    {
      id: 'fatiga',
      metric: '85% FALSOS POSITIVOS',
      title: 'Saturación por Herramientas Aisladas',
      description: 'Las herramientas CSPM tradicionales saturan a los equipos operativos enviando miles de alertas. La detección sin contexto, genera parálisis.',
      icon: TerminalSquare,
    },
    {
      id: 'manual',
      metric: '+4h TIEMPO MEDIO (MTTR)',
      title: 'El Cuello de Botella Manual',
      description: 'Depender de la intervención humana y playbooks manuales para reparar recursos, mantiene abierta una ventana de exposición inaceptable.',
      icon: ClockAlert,
    },
    {
      id: 'iac',
      metric: 'VECTOR DE ATAQUE #1',
      title: 'El Vector de Compromiso Principal',
      description: 'La complejidad de la Infraestructura como Código (IaC) ha convertido a las malas configuraciones (misconfigurations) en el origen de las peores brechas.',
      icon: ServerCrash,
    },
  ];

  return (
    <section id={id} className="py-24 md:py-32 relative bg-[#050505] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          {/* Badge en tono de alerta sutil */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-400/85 font-semibold">
              EL COSTO DE ESPERAR
            </span>
          </div>

          {/* Heading + Texto Secundario Académico / Autoridad Técnica */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08]">
                Las alertas no detienen<br />
                las brechas.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-3">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Detectar una amenaza es apenas el principio. La diferencia entre un incidente contenido y una brecha crítica es el tiempo de reacción. JMW DevGroup elimina la ventana de exposición garantizando una respuesta de latencia cero.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Bento Cards Grid con advertencia visual de riesgo al hover (Responsive 1/2/3 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            const isHighlighted = activeCard === idx;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onMouseEnter={() => setActiveCard(idx)}
                className={`w-full relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 min-h-[310px] cursor-pointer overflow-hidden group ${
                  isHighlighted
                    ? 'bg-[#090C12] border border-red-900/60 shadow-[0_0_30px_rgba(220,38,38,0.15)]'
                    : 'bg-[#0A0D13]/70 border border-white/10 hover:border-red-900/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.12)]'
                }`}
              >
                {/* Resplandor ambiental de advertencia de riesgo en la esquina superior derecha */}
                {isHighlighted && (
                  <div className="absolute top-0 right-0 w-44 h-44 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
                )}

                {/* Fila Superior: Icono Minimalista + Badge de Métrica Dura */}
                <div className="flex items-center justify-between w-full relative z-10 gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    isHighlighted 
                      ? 'bg-red-950/40 border-red-800/40 text-red-400 shadow-[0_0_15px_rgba(220,38,38,0.2)]' 
                      : 'bg-white/[0.04] border-white/10 text-gray-300 group-hover:text-red-400 group-hover:border-red-900/40 group-hover:bg-red-950/20'
                  }`}>
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  
                  {/* Badge de Datos Duros */}
                  <span className="px-2.5 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-[10px] font-mono font-bold tracking-wider text-red-400 shadow-[0_0_12px_rgba(220,38,38,0.12)] uppercase whitespace-nowrap">
                    {card.metric}
                  </span>
                </div>

                {/* Contenido Inferior: Título de Autoridad + Copy de Investigación */}
                <div className="mt-12 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Línea inferior de advertencia roja/carmesí sutil */}
                {isHighlighted && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600/90 via-rose-700/60 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
