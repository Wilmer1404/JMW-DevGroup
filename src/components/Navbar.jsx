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
        <a href="#" className="flex items-center gap-2.5 group">
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
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-9 text-sm text-gray-300 font-medium">
          <a
            href="#problema"
            className="hover:text-white transition-colors duration-200"
          >
            El problema
          </a>
          <a
            href="#arquitectura"
            className="hover:text-white transition-colors duration-200"
          >
            Arquitectura
          </a>
          <a
            href="#impacto"
            className="hover:text-white transition-colors duration-200"
          >
            Impacto
          </a>
          <a
            href="#integracion"
            className="hover:text-white transition-colors duration-200"
          >
            Integración
          </a>
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenDemo}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-[#0A0A0A] border border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
          >
            <span>Solicitar demo</span>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          <a
            href="#problema"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2 text-base font-medium"
          >
            El problema
          </a>
          <a
            href="#arquitectura"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2 text-base font-medium"
          >
            Arquitectura
          </a>
          <a
            href="#impacto"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2 text-base font-medium"
          >
            Impacto
          </a>
          <a
            href="#integracion"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-white py-2 text-base font-medium"
          >
            Integración
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemo();
            }}
            className="mt-2 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white bg-[#0A84FF] shadow-[0_0_20px_rgba(10,132,255,0.4)]"
          >
            <span>Solicitar demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
