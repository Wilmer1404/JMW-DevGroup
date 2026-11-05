import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
            Política de Privacidad y Procesamiento de Telemetría
          </h1>

          {/* Párrafo Introductorio */}
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            JMW DevGroup opera bajo un paradigma de Seguridad Zero-Touch. Para mitigar configuraciones erróneas sin comprometer la privacidad, aplicamos políticas estrictas sobre el manejo de datos en ecosistemas cloud.
          </p>

          {/* Sección 1 */}
          <h2 className="text-sm font-bold text-cyan-400 mt-12 mb-4 tracking-wide uppercase">
            ALCANCE DE LA RECOLECCIÓN (METADATOS VS. CARGAS DE TRABAJO)
          </h2>
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            Nuestra arquitectura CSPM (Cloud Security Posture Management) se alimenta exclusivamente de metadatos de configuración y registros de auditoría provenientes de AWS CloudTrail, Amazon GuardDuty y Amazon Inspector. JMW DevGroup no extrae, no procesa y no tiene acceso al contenido de sus repositorios de datos, bases de datos (Amazon RDS) ni objetos almacenados (Amazon S3).
          </p>

          {/* Sección 2 */}
          <h2 className="text-sm font-bold text-cyan-400 mt-12 mb-4 tracking-wide uppercase">
            RETENCIÓN Y ANÁLISIS COGNITIVO
          </h2>
          <p className="text-base leading-relaxed text-gray-400 mb-6">
            Los eventos de seguridad son enrutados mediante Amazon EventBridge hacia nuestro motor RAG (Amazon Bedrock) de manera efímera. Los metadatos son analizados contextualmente y descartados tras la validación semántica, garantizando que ninguna información de su infraestructura persista fuera de su entorno AWS.
          </p>
        </div>
      </div>
    </div>
  );
}
