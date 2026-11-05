import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 py-24 px-6 sm:px-8 custom-scrollbar selection:bg-[#00F0FF]/25 selection:text-[#00F0FF]">
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
        <div className="bg-[#0a0f16] border border-white/5 rounded-2xl p-8 sm:p-12 shadow-2xl">
          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8 pb-4 border-b border-white/10">
            Términos de Servicio y Operación Autónoma
          </h1>

          {/* Párrafo Introductorio */}
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            El uso del Framework de Orquestación Autocurativo de JMW DevGroup está sujeto a los siguientes términos, los cuales delimitan el alcance de nuestras funciones de mitigación (self-healing) automatizada.
          </p>

          {/* Sección 1 */}
          <h2 className="text-sm font-bold text-cyan-400 mt-12 mb-4 tracking-wide uppercase">
            MODELO DE RESPONSABILIDAD COMPARTIDA
          </h2>
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            En alineación con las mejores prácticas de computación en la nube, el cliente retiene la responsabilidad final sobre el control de acceso a su cuenta raíz (Root) y la provisión inicial del Rol IAM Cross-Account. JMW DevGroup asume la responsabilidad de la alta disponibilidad del motor de orquestación y la precisión de la inferencia lógica (IA) ante eventos detectados.
          </p>

          {/* Sección 2 */}
          <h2 className="text-sm font-bold text-cyan-400 mt-12 mb-4 tracking-wide uppercase">
            AUTORIZACIÓN DE MUTACIÓN DE ESTADO (SELF-HEALING)
          </h2>
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            Al integrar nuestro framework, el cliente autoriza a las funciones Serverless (AWS Lambda) de JMW a ejecutar mutaciones de estado de latencia cero sobre su infraestructura (ej. revocar políticas IAM excesivas o bloquear acceso público S3). Estas acciones se ejecutan exclusivamente para remediar desviaciones críticas que vulneren la postura de seguridad.
          </p>
        </div>
      </div>
    </div>
  );
}
