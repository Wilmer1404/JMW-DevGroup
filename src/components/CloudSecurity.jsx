import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function CloudSecurity() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 py-24 px-4 sm:px-6 lg:px-8 custom-scrollbar selection:bg-[#00F0FF]/25 selection:text-[#00F0FF]">
      <div className="max-w-4xl mx-auto">
        {/* Botón de Regreso */}
        <a
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-500 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al Control Plane
        </a>

        {/* Contenedor de Contenido */}
        <div className="bg-[#0a0f16] border border-white/5 rounded-2xl p-6 sm:p-12 shadow-2xl">
          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8 pb-4 border-b border-white/10">
            Gobernanza y Arquitectura de Seguridad Cloud
          </h1>

          {/* Párrafo Introductorio */}
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            La plataforma JMW DevGroup no es una herramienta aislada, sino un orquestador integral diseñado para satisfacer los más altos estándares de gobernanza tecnológica, evitando el vendor lock-in y garantizando la trazabilidad.
          </p>

          {/* Sección 1 */}
          <h2 className="text-sm font-bold text-cyan-400 mt-12 mb-4 tracking-wide uppercase">
            ALINEACIÓN CON MARCOS NORMATIVOS (COBIT, ISO, NIST)
          </h2>
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            Nuestro flujo de remediación está diseñado para cumplir con los objetivos de control. La inmutabilidad de nuestras acciones permite a su organización facilitar auditorías para:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-gray-400">
            <li className="text-gray-400 mb-2 pl-2">
              <span className="font-semibold text-gray-200">NIST CSF & CIS Benchmarks:</span> Detección y respuesta automatizada ante amenazas cibernéticas y configuraciones inseguras.
            </li>
            <li className="text-gray-400 mb-2 pl-2">
              <span className="font-semibold text-gray-200">ISO/IEC 20000 e ITILv4:</span> Gestión eficiente de servicios de TI, reduciendo el Tiempo Medio de Recuperación (MTTR) a segundos.
            </li>
            <li className="text-gray-400 mb-2 pl-2">
              <span className="font-semibold text-gray-200">COBIT:</span> Gobernanza de TI que asegura que la autocuración no afecte la disponibilidad del negocio.
            </li>
          </ul>

          {/* Sección 2 */}
          <h2 className="text-sm font-bold text-cyan-400 mt-12 mb-4 tracking-wide uppercase">
            PRINCIPIO DE PRIVILEGIOS MÍNIMOS (IAM)
          </h2>
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            La orquestación se ejecuta sin agentes intrusivos. Las mutaciones de infraestructura (mediante AWS Lambda) asumen roles temporales estrictamente delimitados a la remediación de la vulnerabilidad en cuestión, mitigando el riesgo de escalamiento de privilegios.
          </p>
        </div>
      </div>
    </div>
  );
}
