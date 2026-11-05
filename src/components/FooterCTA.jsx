import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FooterCTA({ onOpenDemo }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[#050505] pt-28 pb-16 overflow-hidden border-t border-white/5">
      {/* Subtle bottom radial gradient to create depth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-[radial-gradient(ellipse_at_bottom,_rgba(0,240,255,0.12)_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.03em] leading-[1.08] mb-6"
        >
          Automatiza tu defensa{' '}
          <span className="text-[#00F0FF] text-glow-cyan">hoy.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
        >
          Agenda una demostración guiada o inicia una prueba de concepto en tu entorno sandbox en menos de 15 minutos.
        </motion.p>

        {/* Integrated Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md mb-8"
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-2.5 p-4 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-white">
              <CheckCircle2 className="w-5 h-5 text-[#00F0FF]" />
              <span className="text-sm font-medium">¡Gracias! Nos pondremos en contacto contigo de inmediato.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo corporativo"
                className="w-full bg-[#0B0E14] border border-white/15 focus:border-[#00F0FF]/60 rounded-full py-4 pl-6 pr-36 text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-[#0A84FF] hover:bg-[#0070E0] text-white text-sm font-medium flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(10,132,255,0.4)] hover:shadow-[0_0_25px_rgba(10,132,255,0.6)]"
              >
                <span>Comenzar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Trust micro-text */}
        <p className="text-xs text-gray-500 mb-20 font-mono">
          Sin tarjeta de crédito requerida • Despliegue con plantilla CloudFormation oficial
        </p>

        {/* Footer Legal & Nav bar */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white">JMW</span>
            <span className="text-gray-400">DevGroup</span>
            <span className="text-gray-600 ml-2">© 2026 Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Términos</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Seguridad Cloud</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
