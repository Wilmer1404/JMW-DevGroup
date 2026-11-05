import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (window.location.hash) {
      window.location.hash = '';
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMobileNavigation = (id) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      scrollToSection(id);
    }, 150); // Pequeño delay para que la animación de cierre termine antes del scroll
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#050505]/80 backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.hash) {
              window.location.hash = '';
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center cursor-pointer focus:outline-none"
        >
          <img
            src="/image/jmw.svg"
            alt="JMW DevGroup Logo"
            className="h-8 w-auto md:h-10 object-contain"
          />
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-9 text-sm text-gray-300 font-medium">
          <button
            type="button"
            onClick={() => scrollToSection('problema')}
            className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
          >
            El problema
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('arquitectura')}
            className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
          >
            Arquitectura
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('impacto')}
            className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
          >
            Impacto
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('integracion')}
            className="hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
          >
            Integración
          </button>
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenDemo}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-[#0A0A0A] border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] cursor-pointer"
          >
            <span>Solicitar demo</span>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
          </button>
        </div>

        {/* 2. Animación del Ícono (Hamburguesa a "X") */}
        <button 
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none cursor-pointer"
          aria-label="Alternar menú"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* 3. Animación del Menú Desplegable (Capa Superior) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 flex flex-col py-6 px-6 sm:px-8 gap-5 z-40 transform transition-all duration-300 ease-out origin-top shadow-2xl
          ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}
      >
        <button
          type="button"
          onClick={() => handleMobileNavigation('problema')}
          className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 py-2 text-base font-medium text-left cursor-pointer focus:outline-none transition-all duration-200 ease-in-out border-b border-white/5 flex items-center justify-between group"
        >
          <span>El problema</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400/0 group-hover:text-cyan-400 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
        </button>
        <button
          type="button"
          onClick={() => handleMobileNavigation('arquitectura')}
          className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 py-2 text-base font-medium text-left cursor-pointer focus:outline-none transition-all duration-200 ease-in-out border-b border-white/5 flex items-center justify-between group"
        >
          <span>Arquitectura</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400/0 group-hover:text-cyan-400 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
        </button>
        <button
          type="button"
          onClick={() => handleMobileNavigation('impacto')}
          className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 py-2 text-base font-medium text-left cursor-pointer focus:outline-none transition-all duration-200 ease-in-out border-b border-white/5 flex items-center justify-between group"
        >
          <span>Impacto</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400/0 group-hover:text-cyan-400 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
        </button>
        <button
          type="button"
          onClick={() => handleMobileNavigation('integracion')}
          className="text-gray-300 hover:text-cyan-400 hover:translate-x-2 py-2 text-base font-medium text-left cursor-pointer focus:outline-none transition-all duration-200 ease-in-out border-b border-white/5 flex items-center justify-between group"
        >
          <span>Integración</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400/0 group-hover:text-cyan-400 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
        </button>

        <button
          type="button"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setTimeout(() => {
              onOpenDemo();
            }, 150);
          }}
          className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-white bg-[#0A84FF] hover:bg-[#0070E0] shadow-[0_0_20px_rgba(10,132,255,0.4)] cursor-pointer transition-all active:scale-[0.98]"
        >
          <span>Solicitar demo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
