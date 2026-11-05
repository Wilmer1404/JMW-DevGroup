import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Shield, Check } from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  // 5 Nodos de arquitectura AWS consumiendo los SVGs oficiales desde public/image/
  // Ciclo de vida: Detect -> Route -> Analyze -> Remediate -> Audit
  const awsNodes = [
    {
      id: 'guardduty',
      action: 'DETECT',
      service: 'Amazon GuardDuty',
      angle: -90, // 12 o'clock
      icon: '/image/GuardDuty.svg',
    },
    {
      id: 'eventbridge',
      action: 'ROUTE',
      service: 'Amazon EventBridge',
      angle: -18, // ~2 o'clock
      icon: '/image/EventBridge.svg',
    },
    {
      id: 'bedrock',
      action: 'ANALYZE',
      service: 'Amazon Bedrock AI (RAG)',
      angle: 54, // ~4 o'clock
      icon: '/image/amazon-bedrock.svg',
    },
    {
      id: 'lambda',
      action: 'REMEDIATE',
      service: 'AWS Lambda',
      angle: 126, // ~7 o'clock
      icon: '/image/Lambda.svg',
    },
    {
      id: 'config',
      action: 'AUDIT',
      service: 'AWS Config',
      angle: 198, // ~10 o'clock
      icon: '/image/Config.svg',
    },
  ];

  // Radio orbital en píxeles para holgura de las tarjetas
  const orbitRadius = 215;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 lg:pt-0 overflow-hidden">
      {/* Luces de fondo ambientales */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#00F0FF]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[450px] h-[450px] bg-[#0A84FF]/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Contenedor Principal Centrado con espaciado equilibrado */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full pt-4 lg:pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-center w-full">
          
          {/* Lado Izquierdo: Textos y CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start justify-center lg:pt-6"
          >
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2.5 mb-6 lg:mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00F0FF] font-semibold">
                CLOUD SECURITY, REIMAGINED
              </span>
            </div>

            {/* Titular H1 masivo */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] font-extrabold text-white tracking-[-0.03em] leading-[1.06] mb-6">
              Seguridad Zero-<br />
              Touch para tu<br />
              Infraestructura<br />
              Cloud.
            </h1>

            {/* Subtítulo */}
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-8">
              Modelo de orquestación automatizada en AWS. Detecta, analiza con IA (RAG) y repara configuraciones erróneas en tiempo real.
            </p>

            {/* Fila de botones CTA */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 mb-10">
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

            {/* Mini badges técnicos */}
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

            {/* Indicador sutil de scroll */}
            <div className="mt-8 hidden lg:flex items-center gap-2 text-[11px] font-mono tracking-widest text-gray-600 uppercase">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="w-3 h-3 text-gray-600 animate-bounce" />
            </div>
          </motion.div>

          {/* Lado Derecho: Diagrama Orbital con SVGs Oficiales */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[520px] sm:min-h-[560px] w-full"
          >
            {/* Contenedor del escenario orbital */}
            <div className="relative w-full max-w-[540px] h-[520px] flex items-center justify-center pause-on-hover">
              
              {/* Resplandor central */}
              <div className="absolute w-64 h-64 rounded-full bg-[#00F0FF]/15 blur-[85px] pointer-events-none" />

              {/* Órbitas sutiles estáticas de fondo */}
              <div className="absolute w-[490px] h-[490px] rounded-full border border-white/[0.04] pointer-events-none" />
              <div
                className="absolute rounded-full border border-white/10 pointer-events-none shadow-[0_0_15px_rgba(0,240,255,0.05)]"
                style={{
                  width: `${orbitRadius * 2}px`,
                  height: `${orbitRadius * 2}px`,
                }}
              />
              <div className="absolute w-[470px] h-[250px] rounded-[100%] border border-[#00F0FF]/15 -rotate-[28deg] pointer-events-none" />
              <div className="absolute w-[270px] h-[270px] rounded-full border border-dashed border-[#00F0FF]/20 pointer-events-none" />

              {/* Escudo Central JMW CORE Fijo */}
              <div className="absolute z-20 flex flex-col items-center justify-center pointer-events-auto">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-[#00F0FF]/25 blur-lg group-hover:bg-[#00F0FF]/40 transition-all duration-500" />
                  <div className="relative w-36 h-44 rounded-2xl bg-gradient-to-b from-[#0F1E2A]/90 to-[#050C10]/95 border border-[#00F0FF]/40 backdrop-blur-xl flex flex-col items-center justify-center p-4 shadow-[0_0_35px_rgba(0,240,255,0.25)]">
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

              {/* Contenedor Orbital en Rotación Horaria */}
              <div className="absolute inset-0 animate-orbit pointer-events-none">
                {awsNodes.map((node) => (
                  <div
                    key={node.id}
                    className="absolute top-1/2 left-1/2 pointer-events-auto"
                    style={{
                      transform: `rotate(${node.angle}deg) translate(${orbitRadius}px) rotate(-${node.angle}deg)`,
                    }}
                  >
                    {/* Tarjeta en Contrarrotación (Mantiene la tarjeta derecha y legible) */}
                    <div className="animate-orbit-counter -translate-x-1/2 -translate-y-1/2">
                      <div className="group/node cursor-pointer flex items-center gap-3 bg-[#080B10]/95 hover:bg-[#0D121B] border border-white/10 hover:border-[#00F0FF]/60 rounded-xl px-4 py-2.5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] min-w-[210px]">
                        {/* Logo oficial de AWS consumido desde public/image/ sin fondos superpuestos */}
                        <img
                          src={node.icon}
                          alt={node.service}
                          className="w-7 h-7 object-contain shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                          loading="eager"
                        />

                        {/* Columna de texto */}
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF]"></span>
                            <span className="text-[10px] font-mono tracking-wider text-cyan-400 uppercase font-bold">
                              {node.action}
                            </span>
                          </div>
                          <span className="text-xs sm:text-[13px] font-semibold text-white tracking-tight whitespace-nowrap">
                            {node.service}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Píldora de estado inferior */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 w-[85%] max-w-[280px]">
                <div className="flex items-center justify-between bg-[#080B10]/95 border border-white/10 hover:border-[#00F0FF]/30 rounded-full px-4 py-2 shadow-2xl backdrop-blur-md transition-all">
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
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
