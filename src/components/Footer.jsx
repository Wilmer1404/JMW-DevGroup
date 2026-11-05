import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Lado Izquierdo (Marca y Copyright) */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="font-bold text-gray-400 tracking-wider">JMW</span>
          <span>© {new Date().getFullYear()} JMW DevGroup.</span>
        </div>

        {/* Lado Derecho (Navegación Legal y Status) */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#privacidad"
            className="text-sm font-medium text-gray-500 hover:text-cyan-400 transition-colors duration-200"
          >
            Privacidad
          </a>
          <a
            href="#terminos"
            className="text-sm font-medium text-gray-500 hover:text-cyan-400 transition-colors duration-200"
          >
            Términos
          </a>
          <a
            href="#seguridad"
            className="text-sm font-medium text-gray-500 hover:text-cyan-400 transition-colors duration-200"
          >
            Seguridad Cloud
          </a>

          {/* Indicador de Status en Tiempo Real */}
          <a
            href="/status"
            className="group flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-white transition-colors duration-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            <span>Status</span>
          </a>
        </nav>

      </div>
    </footer>
  );
}
