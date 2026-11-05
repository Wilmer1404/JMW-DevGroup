import React from 'react';
import { motion } from 'framer-motion';
import { Check, Server, Terminal, Database } from 'lucide-react';

export default function IntegrationSection() {
  const checkItems = [
    'Sin agentes. Sin acceso persistente.',
    'Despliegue en minutos vía CloudFormation.',
    'Logs auditables y evidencia automática.',
  ];

  const complianceBadges = [
    { label: 'aws', sub: '' },
    { label: 'ISO', sub: '20000' },
    { label: 'NIST', sub: 'CSF' },
    { label: 'COBIT', sub: '2019' },
  ];

  return (
    <section id="integracion" className="py-24 md:py-32 relative bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Network Hub & Spoke Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]"
          >
            {/* Background ambient glow */}
            <div className="absolute w-64 h-64 rounded-full bg-[#00F0FF]/10 blur-[85px] pointer-events-none" />

            {/* Connecting Curved Lines SVG (Monitoreo seguro continuo en cian tenue) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 460 460"
              fill="none"
            >
              {/* Path to Account-Prod (Top-Left) */}
              <path
                d="M 115 115 Q 165 190 230 230"
                stroke="rgba(22, 78, 99, 0.55)"
                className="stroke-cyan-900/50"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
              {/* Path to Data Lake (Top-Right) */}
              <path
                d="M 345 115 Q 295 190 230 230"
                stroke="rgba(22, 78, 99, 0.55)"
                className="stroke-cyan-900/50"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
              {/* Path to Account-Dev (Bottom-Left) */}
              <path
                d="M 115 345 Q 165 270 230 230"
                stroke="rgba(22, 78, 99, 0.55)"
                className="stroke-cyan-900/50"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
            </svg>

            {/* Central Node: JMW CONTROL PLANE con AWS IAM */}
            <div className="relative z-10">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-[#00F0FF]/20 blur-md group-hover:bg-[#00F0FF]/30 transition-all duration-500" />
                
                {/* Center Node Container */}
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-3xl bg-[#0A0D13]/95 border border-[#00F0FF]/40 backdrop-blur-xl flex flex-col items-center justify-center p-4 shadow-[0_0_35px_rgba(0,240,255,0.2)]">
                  {/* Dashed border ring */}
                  <div className="absolute inset-2 rounded-2xl border border-dashed border-[#00F0FF]/30 pointer-events-none" />
                  
                  <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white">
                    JMW
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#00F0FF] mt-0.5">
                    CONTROL PLANE
                  </span>

                  {/* Integración Oficial AWS IAM (Roles Multi-cuenta) */}
                  <div className="mt-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 shadow-inner">
                    <img
                      src="/image/Identity and Access Management.svg"
                      alt="AWS IAM"
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span className="font-mono text-[9px] font-semibold text-gray-300 tracking-wider">
                      AWS IAM Roles
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nuevo Nodo 1: Cuenta de Producción (Arriba Izquierda) */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-6 left-3 sm:top-8 sm:left-8 z-20"
            >
              <div className="flex flex-col items-center justify-center w-32 sm:w-36 py-3 px-2.5 rounded-2xl bg-[#0A0A0A]/95 border border-white/10 shadow-xl backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 group">
                <Server className="w-5 h-5 text-gray-200 mb-1 group-hover:text-cyan-400 transition-colors" />
                <span className="font-bold text-xs sm:text-sm text-white tracking-wide text-center leading-tight">
                  Account-Prod
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-gray-400 uppercase mt-0.5 text-center leading-tight">
                  AWS Environment
                </span>
              </div>
            </motion.div>

            {/* Nuevo Nodo 3: Repositorio de Datos (Arriba Derecha) */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-6 right-3 sm:top-8 sm:right-8 z-20"
            >
              <div className="flex flex-col items-center justify-center w-32 sm:w-36 py-3 px-2.5 rounded-2xl bg-[#0A0A0A]/95 border border-white/10 shadow-xl backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 group">
                <Database className="w-5 h-5 text-gray-200 mb-1 group-hover:text-cyan-400 transition-colors" />
                <span className="font-bold text-xs sm:text-sm text-white tracking-wide text-center leading-tight">
                  Data Lake
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-gray-400 uppercase mt-0.5 text-center leading-tight">
                  S3 / RDS
                </span>
              </div>
            </motion.div>

            {/* Nuevo Nodo 2: Cuenta de Desarrollo/Test (Abajo Izquierda) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-6 left-3 sm:bottom-8 sm:left-8 z-20"
            >
              <div className="flex flex-col items-center justify-center w-32 sm:w-36 py-3 px-2.5 rounded-2xl bg-[#0A0A0A]/95 border border-white/10 shadow-xl backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 group">
                <Terminal className="w-5 h-5 text-gray-200 mb-1 group-hover:text-cyan-400 transition-colors" />
                <span className="font-bold text-xs sm:text-sm text-white tracking-wide text-center leading-tight">
                  Account-Dev
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-gray-400 uppercase mt-0.5 text-center leading-tight">
                  Sandbox
                </span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Title, Description, Checkmarks & Compliance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Badge */}
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
                DISEÑADO PARA ENTERPRISE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-6">
              Integración<br />
              transparente.<br />
              Cumplimiento<br />
              garantizado.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Roles IAM Multi-cuenta para una conexión sin fricción. Auditoría inmutable y trazabilidad total bajo los marcos que tu organización ya utiliza.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-4 mb-14 w-full">
              {checkItems.map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#00F0FF] stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Compliance Logos / Badges Row */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-10 pt-6 border-t border-white/5 w-full">
              {complianceBadges.map((badge) => (
                <div key={badge.label} className="flex items-baseline gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
                  <span className="font-extrabold tracking-tight text-white text-base sm:text-lg">
                    {badge.label}
                  </span>
                  {badge.sub && (
                    <span className="font-mono text-xs font-semibold text-gray-500">
                      {badge.sub}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
