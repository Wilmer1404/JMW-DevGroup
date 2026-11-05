import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleMobileNav = (id) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => {
            if (window.location.hash) {
              window.location.hash = '';
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
        >
          {/* Custom Cyan Tech Emblem */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F0FF]/20 to-transparent border border-[#00F0FF]/40 group-hover:border-[#00F0FF] transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-[#00F0FF]"
              fill="currentColor"
            >
              <rect x="5" y="3" width="5" height="18" rx="2.5" />
              <rect x="14" y="9" width="5" height="12" rx="2.5" opacity="0.8" />
            </svg>
          </div>
          <div className="flex items-center tracking-tight text-lg">
            <span className="font-extrabold text-white">JMW</span>
            <span className="font-normal text-gray-400 ml-1.5">DevGroup</span>
          </div>
        </button>

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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          <button
            type="button"
            onClick={() => handleMobileNav('problema')}
            className="text-gray-300 hover:text-white py-2 text-base font-medium text-left cursor-pointer focus:outline-none"
          >
            El problema
          </button>
          <button
            type="button"
            onClick={() => handleMobileNav('arquitectura')}
            className="text-gray-300 hover:text-white py-2 text-base font-medium text-left cursor-pointer focus:outline-none"
          >
            Arquitectura
          </button>
          <button
            type="button"
            onClick={() => handleMobileNav('impacto')}
            className="text-gray-300 hover:text-white py-2 text-base font-medium text-left cursor-pointer focus:outline-none"
          >
            Impacto
          </button>
          <button
            type="button"
            onClick={() => handleMobileNav('integracion')}
            className="text-gray-300 hover:text-white py-2 text-base font-medium text-left cursor-pointer focus:outline-none"
          >
            Integración
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="mt-2 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white bg-[#0A84FF] shadow-[0_0_20px_rgba(10,132,255,0.4)] cursor-pointer"
          >
            <span>Solicitar demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
