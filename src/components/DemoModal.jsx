import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    awsAccounts: '1-10',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        awsAccounts: '1-10',
      });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-2xl bg-[#090C12] border border-[#00F0FF]/30 p-7 sm:p-9 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden z-10"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00F0FF]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF] mb-5 shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud recibida!</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                  Un arquitecto de soluciones de seguridad en la nube de JMW DevGroup se pondrá en contacto contigo en breve para coordinar tu demo personalizada.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-full bg-[#0A84FF] text-white text-sm font-medium hover:bg-[#0070E0] transition-colors"
                >
                  Entendido
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] font-semibold">
                    ENTERPRISE DEMO
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  Experimenta la defensa autónoma
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Descubre cómo responder a incidentes críticos en AWS en 8.4 segundos con IA cognitiva y RAG.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full bg-[#05070B] border border-white/10 focus:border-[#00F0FF]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                      Correo corporativo
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@tuempresa.com"
                      className="w-full bg-[#05070B] border border-white/10 focus:border-[#00F0FF]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                        Empresa
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Empresa Corp"
                        className="w-full bg-[#05070B] border border-white/10 focus:border-[#00F0FF]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                        Cuentas AWS
                      </label>
                      <select
                        value={formData.awsAccounts}
                        onChange={(e) => setFormData({ ...formData, awsAccounts: e.target.value })}
                        className="w-full bg-[#05070B] border border-white/10 focus:border-[#00F0FF]/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="1-10">1 a 10 cuentas</option>
                        <option value="11-50">11 a 50 cuentas</option>
                        <option value="50+">Más de 50 cuentas</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0A84FF] hover:bg-[#0070E0] text-white font-medium text-sm transition-all shadow-[0_0_20px_rgba(10,132,255,0.4)] hover:shadow-[0_0_30px_rgba(10,132,255,0.6)]"
                  >
                    <span>Solicitar Demostración Guiada</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
