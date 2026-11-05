import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Radar,
  Network,
  BrainCircuit,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  Lock,
  Layers,
} from 'lucide-react';

export default function ArchitectureFlow({ id = 'arquitectura' }) {
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Datos técnicos específicos para cada servicio AWS según la tesis JMW DevGroup
  const nodeData = {
    // CAPA 1: OBSERVABILIDAD
    cloudtrail: {
      category: 'CAPA 1: OBSERVABILIDAD',
      badgeColor: 'bg-blue-900/30 text-blue-400 border-blue-500/40',
      title: 'Auditoría Continua.',
      text: 'Registra ininterrumpidamente las llamadas a la API y modificaciones en la infraestructura, proporcionando la trazabilidad base para la detección de errores humanos o cambios no autorizados.',
      metric: 'API Trail 100%',
      metricLabel: 'Trazabilidad inmutable de eventos',
    },
    guardduty: {
      category: 'CAPA 1: OBSERVABILIDAD',
      badgeColor: 'bg-blue-900/30 text-blue-400 border-blue-500/40',
      title: 'Detección de Amenazas (ML).',
      text: 'Monitoriza el entorno cloud en tiempo real, identificando comportamientos anómalos y patrones de red sospechosos sin requerir intervención manual ni configuración de reglas.',
      metric: 'Machine Learning',
      metricLabel: '0 reglas manuales requeridas',
    },
    inspector: {
      category: 'CAPA 1: OBSERVABILIDAD',
      badgeColor: 'bg-blue-900/30 text-blue-400 border-blue-500/40',
      title: 'Gestión de Vulnerabilidades.',
      text: 'Escanea automáticamente las cargas de trabajo para descubrir exposiciones de red no intencionales y vulnerabilidades de software en instancias operativas.',
      metric: 'CVE Scanner',
      metricLabel: 'Mitigación de errores en IaC',
    },

    // CAPA 2: ORQUESTACIÓN
    eventbridge: {
      category: 'CAPA 2: ORQUESTACIÓN',
      badgeColor: 'bg-purple-900/30 text-purple-400 border-purple-500/40',
      title: 'Bus de Eventos (Nervio Central).',
      text: 'Elimina la fragmentación operativa enrutando las alertas de seguridad de forma asíncrona e instantánea hacia el motor cognitivo, reduciendo el MTTR drásticamente.',
      metric: 'MTTR -93%',
      metricLabel: 'Nervio central de orquestación',
    },
    stepfunctions: {
      category: 'CAPA 2: ORQUESTACIÓN',
      badgeColor: 'bg-purple-900/30 text-purple-400 border-purple-500/40',
      title: 'Máquina de Estados.',
      text: 'Coordina flujos de trabajo visuales para procesos de remediación complejos que requieren múltiples pasos condicionales y validaciones de estado.',
      metric: 'State Machine',
      metricLabel: 'Orquestación condicional determinista',
    },

    // CAPA 3: INTELIGENCIA (IA)
    bedrock: {
      category: 'CAPA 3: INTELIGENCIA (IA)',
      badgeColor: 'bg-cyan-900/30 text-[#00F0FF] border-[#00F0FF]/40',
      title: 'Inferencia Cognitiva.',
      text: 'Agente de IA que mapea la alerta con el marco MITRE ATT&CK. Realiza un análisis semántico para distinguir entre un riesgo real y un despliegue operativo autorizado.',
      metric: 'MITRE ATT&CK',
      metricLabel: 'Análisis RAG de latencia cero',
    },

    // CAPA 4: REMEDIACIÓN & GOBERNANZA
    lambda: {
      category: 'CAPA 4: REMEDIACIÓN & GOBERNANZA',
      badgeColor: 'bg-orange-900/30 text-orange-400 border-orange-500/40',
      title: 'Ejecutor Serverless (Self-healing).',
      text: 'Aplica la autocuración mutando el estado del recurso afectado a latencia cero. Opera bajo el principio de privilegios mínimos para no afectar el resto de la infraestructura.',
      metric: 'Self-healing 8.4s',
      metricLabel: 'Principio de privilegio mínimo',
    },
    config: {
      category: 'CAPA 4: REMEDIACIÓN & GOBERNANZA',
      badgeColor: 'bg-[#CE2751]/20 text-[#CE2751] border-[#CE2751]/40',
      title: 'Cumplimiento Continuo.',
      text: 'Audita el estado post-remediación, garantizando que el recurso parcheado cumpla con los marcos normativos de la organización (COBIT, ISO 20000, NIST).',
      metric: 'COBIT • ISO 20000 • NIST',
      metricLabel: 'Verificación inmutable de políticas',
    },

    // RECURSOS COMPROMETIDOS (VECTORES DE ATAQUE)
    iam: {
      category: 'RECURSOS COMPROMETIDOS (VECTORES DE ATAQUE)',
      badgeColor: 'bg-red-950/40 text-red-400 border-red-800/40',
      title: 'Escalamiento de Privilegios.',
      text: 'Ejemplo de misconfiguration: Permisos excesivos otorgados a un rol. Lambda intervendrá para revocar los accesos críticos instantáneamente.',
      metric: 'Vector de Ataque Crítico',
      metricLabel: 'Revocación instantánea de credenciales',
    },
    s3: {
      category: 'RECURSOS COMPROMETIDOS (VECTORES DE ATAQUE)',
      badgeColor: 'bg-red-950/40 text-red-400 border-red-800/40',
      title: 'Exposición de Datos.',
      text: 'Ejemplo de misconfiguration: Bucket público sin cifrar. Lambda forcerá el bloqueo de acceso público (BPA) y activará el cifrado SSE-KMS.',
      metric: 'Bloqueo BPA Activo',
      metricLabel: 'Cifrado SSE-KMS automático',
    },
  };

  // Posicionamiento de los 10 nodos en el lienzo arquitectónico ultra-expandido (min-w-[2500px] h-[650px])
  const nodes = [
    // Capa 1: Observabilidad
    {
      id: 'guardduty',
      name: 'AWS GuardDuty',
      sub: 'Threat Detection',
      icon: '/image/GuardDuty.svg',
      x: 140,
      y: 130,
      zone: 'capa1',
    },
    {
      id: 'cloudtrail',
      name: 'AWS CloudTrail',
      sub: 'Audit Logs',
      icon: '/image/CloudTrail.svg',
      x: 140,
      y: 320,
      zone: 'capa1',
    },
    {
      id: 'inspector',
      name: 'Amazon Inspector',
      sub: 'Vulnerabilidades',
      icon: '/image/Inspector.svg',
      x: 140,
      y: 510,
      zone: 'capa1',
    },

    // Capa 2: Orquestación (Separación de ~450px desde Capa 1)
    {
      id: 'eventbridge',
      name: 'Amazon EventBridge',
      sub: 'Bus de Eventos',
      icon: '/image/EventBridge.svg',
      x: 570,
      y: 320,
      zone: 'capa2',
    },
    {
      id: 'stepfunctions',
      name: 'AWS Step Functions',
      sub: 'State Machine',
      icon: '/image/Step Functions.svg',
      x: 770,
      y: 320,
      zone: 'capa2',
    },

    // Capa 3: Inteligencia (Separación de ~380px desde Step Functions)
    {
      id: 'bedrock',
      name: 'Amazon Bedrock',
      sub: 'Agente IA (RAG)',
      icon: '/image/amazon-bedrock.svg',
      x: 1150,
      y: 320,
      zone: 'capa3',
    },

    // Capa 4: Remediación (Separación de ~410px desde Bedrock)
    {
      id: 'lambda',
      name: 'AWS Lambda',
      sub: 'Autocuración',
      icon: '/image/Lambda.svg',
      x: 1560,
      y: 320,
      zone: 'capa4',
    },

    // RECURSOS COMPROMETIDOS (Separación de ~410px desde Lambda)
    {
      id: 'iam',
      name: 'AWS IAM',
      sub: 'Rol / Identidad',
      icon: '/image/Identity and Access Management.svg',
      x: 1970,
      y: 190,
      zone: 'compromised',
    },
    {
      id: 's3',
      name: 'Amazon S3',
      sub: 'Bucket Político',
      icon: '/image/Simple Storage Service.svg',
      x: 1970,
      y: 450,
      zone: 'compromised',
    },

    // Cumplimiento Continuo (Separación de ~400px desde Recursos)
    {
      id: 'config',
      name: 'AWS Config',
      sub: 'Cumplimiento',
      icon: '/image/Config.svg',
      x: 2370,
      y: 320,
      zone: 'governance',
    },
  ];

  const activeNode = nodes.find((n) => n.id === hoveredNodeId);
  const activeDetails = activeNode ? nodeData[activeNode.id] : null;

  // Helper para verificar activación de enlaces al hover
  const isLineActive = (relatedNodeIds) => {
    if (!hoveredNodeId) return false;
    return relatedNodeIds.includes(hoveredNodeId);
  };

  return (
    <section id={id} className="py-24 md:py-32 relative bg-[#050505] overflow-hidden scroll-mt-24">
      {/* Fondo con brillo tenue */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#00F0FF]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"></span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00F0FF] font-semibold">
              UNA DEFENSA QUE PIENSA
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-end justify-between">
            <div className="xl:col-span-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.08]">
                Del hallazgo a la resolución.<br />
                Sin tocar un solo botón.
              </h2>
            </div>
            <div className="xl:col-span-4">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Diagrama interactivo de arquitectura dividida. El sistema autónomo opera de izquierda a derecha curando los recursos vulnerables a latencia cero.
              </p>
            </div>
          </div>
        </div>

        {/* LAYOUT: DIAGRAMA DIVIDIDO (SPLIT VIEW APILADO: COLUMNA EN MÓVIL/TABLET, LATERAL EN XL) */}
        <div className="flex flex-col xl:flex-row gap-8 items-start w-full">
          
          {/* COLUMNA IZQUIERDA (Diagrama de Red con Scroll y Soporte Táctil) */}
          <div className="flex-1 w-full min-w-0 flex flex-col">
            <div className="relative w-full rounded-3xl bg-[#07090E] border border-white/10 shadow-2xl overflow-hidden">
              
              {/* Barra Superior Técnica */}
              <div className="px-6 py-3.5 border-b border-white/10 bg-[#05070B] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-gray-200 tracking-wider">
                    Framework de Orquestación Autocurativo en AWS
                  </span>
                </div>
                <span className="text-[11px] font-mono text-gray-500 inline-flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#00F0FF]" /> <span className="hidden sm:inline">Hover o clic para inspeccionar</span><span className="sm:hidden">Toca un nodo</span>
                </span>
              </div>

              {/* Contenedor del Diagrama con scroll horizontal protegido y touch-pan-x */}
              <div className="w-full overflow-x-auto overflow-y-hidden whitespace-nowrap custom-scrollbar scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent touch-pan-x">
                <div className="relative min-w-[2550px] h-[650px] p-6 select-none isolate">
                  
                  {/* Cuadrícula de ingeniería técnica (Grid Blueprint) */}
                  <div className="absolute inset-0 bg-grid-tech opacity-35 pointer-events-none -z-10" />

                  {/* ------------------------------------------------------------- */}
                  {/* ZONAS Y CAJAS PUNTEADAS: EL SISTEMA VS RECURSOS VULNERABLES   */}
                  {/* ------------------------------------------------------------- */}

                  {/* Capa 1: Observabilidad (Envolvente con padding generoso) */}
                  <div className="absolute left-[30px] top-[45px] w-[220px] h-[550px] rounded-2xl border border-dashed border-gray-600/60 bg-[#0c101a]/70 backdrop-blur-sm pointer-events-none z-10">
                    <div className="absolute -top-3 left-4 bg-[#07090E] px-3.5 py-0.5 rounded border border-white/10 text-xs font-semibold tracking-[0.15em] text-cyan-400 uppercase whitespace-nowrap flex items-center gap-1.5 shadow-sm w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>CAPA 1: OBSERVABILIDAD</span>
                    </div>
                  </div>

                  {/* Capa 2: Orquestación (Espacio generoso para 2 nodos) */}
                  <div className="absolute left-[470px] top-[220px] w-[400px] h-[200px] rounded-2xl border border-dashed border-gray-600/60 bg-[#0c101a]/70 backdrop-blur-sm pointer-events-none z-10">
                    <div className="absolute -top-3 left-4 bg-[#07090E] px-3.5 py-0.5 rounded border border-white/10 text-xs font-semibold tracking-[0.15em] text-cyan-400 uppercase whitespace-nowrap flex items-center gap-1.5 shadow-sm w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>CAPA 2: ORQUESTACIÓN</span>
                    </div>
                  </div>

                  {/* Capa 3: Inteligencia (IA) */}
                  <div className="absolute left-[1040px] top-[220px] w-[220px] h-[200px] rounded-2xl border border-dashed border-gray-600/60 bg-[#0c101a]/70 backdrop-blur-sm pointer-events-none z-10">
                    <div className="absolute -top-3 left-4 bg-[#07090E] px-3.5 py-0.5 rounded border border-white/10 text-xs font-semibold tracking-[0.15em] text-cyan-400 uppercase whitespace-nowrap flex items-center gap-1.5 shadow-sm w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>CAPA 3: INTELIGENCIA (IA)</span>
                    </div>
                  </div>

                  {/* Capa 4: Remediación */}
                  <div className="absolute left-[1450px] top-[220px] w-[220px] h-[200px] rounded-2xl border border-dashed border-gray-600/60 bg-[#0c101a]/70 backdrop-blur-sm pointer-events-none z-10">
                    <div className="absolute -top-3 left-4 bg-[#07090E] px-3.5 py-0.5 rounded border border-white/10 text-xs font-semibold tracking-[0.15em] text-cyan-400 uppercase whitespace-nowrap flex items-center gap-1.5 shadow-sm w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>CAPA 4: REMEDIACIÓN</span>
                    </div>
                  </div>

                  {/* ZONA ROJA: RECURSOS COMPROMETIDOS (VECTORES DE ATAQUE) */}
                  <div className="absolute left-[1860px] top-[95px] w-[220px] h-[450px] rounded-2xl border border-dashed border-red-500/30 bg-red-950/10 pointer-events-none z-10 transition-colors">
                    <div className="absolute -top-3 left-4 bg-[#07090E] px-3.5 py-0.5 rounded border border-red-500/30 text-xs font-semibold tracking-[0.15em] text-red-400 uppercase whitespace-nowrap flex items-center gap-1.5 shadow-sm w-max">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                      <span>RECURSOS COMPROMETIDOS</span>
                    </div>
                    <span className="absolute bottom-3 inset-x-0 text-center font-mono text-[9px] text-red-400/80 uppercase font-semibold">
                      (Vectores de Ataque)
                    </span>
                  </div>

                  {/* Zona Derecha: Cumplimiento Continuo (AWS Config) */}
                  <div className="absolute left-[2260px] top-[220px] w-[220px] h-[200px] rounded-2xl border border-dashed border-gray-600/60 bg-[#0c101a]/70 backdrop-blur-sm pointer-events-none z-10">
                    <div className="absolute -top-3 left-4 bg-[#07090E] px-3.5 py-0.5 rounded border border-white/10 text-xs font-semibold tracking-[0.15em] text-cyan-400 uppercase whitespace-nowrap flex items-center gap-1 shadow-sm w-max">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>CUMPLIMIENTO</span>
                    </div>
                  </div>

                  {/* ------------------------------------------------------------- */}
                  {/* LÍNEAS SVG DE CONEXIÓN Y FLUJO (ORQUESTACIÓN Y DIRECCIÓN)     */}
                  {/* ------------------------------------------------------------- */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
                    <defs>
                      {/* Marcador estándar requerido */}
                      <marker id="arrowhead" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#64748B" />
                      </marker>
                      {/* Marcador interactivo cyan */}
                      <marker id="arrowhead-cyan" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#00F0FF" />
                      </marker>
                      {/* Marcador de alerta roja */}
                      <marker id="arrowhead-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#EF4444" />
                      </marker>
                    </defs>

                    {/* 1. GuardDuty -> EventBridge (Convergencia progresiva Bézier horizontal) */}
                    <path
                      d="M 205 130 C 355 130, 395 308, 505 308"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['guardduty', 'eventbridge']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['guardduty', 'eventbridge']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="355" y="200" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Hallazgos (Threat Intel)
                    </text>

                    {/* 2. CloudTrail -> EventBridge (Flujo central directo) */}
                    <path
                      d="M 205 320 L 505 320"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['cloudtrail', 'eventbridge']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['cloudtrail', 'eventbridge']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="355" y="308" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Eventos de Auditoría API
                    </text>

                    {/* 3. Inspector -> EventBridge (Convergencia progresiva Bézier horizontal) */}
                    <path
                      d="M 205 510 C 355 510, 395 332, 505 332"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['inspector', 'eventbridge']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['inspector', 'eventbridge']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="355" y="440" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Vulnerabilidades CVE
                    </text>

                    {/* 4. EventBridge -> Step Functions (Activa Máquina de Estados) */}
                    <path
                      d="M 635 320 L 705 320"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['eventbridge', 'stepfunctions']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['eventbridge', 'stepfunctions']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="670" y="308" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Activa
                    </text>

                    {/* 5. Step Functions -> Bedrock (Inferencia y Razonamiento MITRE) */}
                    <path
                      d="M 835 320 L 1085 320"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['stepfunctions', 'bedrock']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['stepfunctions', 'bedrock']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="960" y="308" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Mapeo Semántico MITRE ATT&CK
                    </text>

                    {/* 6. Bedrock -> Lambda (Orden Determinista de Ejecución) */}
                    <path
                      d="M 1215 320 L 1495 320"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['bedrock', 'lambda']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['bedrock', 'lambda']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="1355" y="308" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Orden Determinista de Autocuración
                    </text>

                    {/* 7. Lambda -> IAM (Divergencia curva suave hacia arriba a la derecha) */}
                    <path
                      d="M 1625 308 C 1765 308, 1795 190, 1905 190"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['lambda', 'iam']) ? '#00F0FF' : '#EF4444'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['lambda', 'iam']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead-red)'}
                    />
                    <text x="1765" y="235" fill="#FCA5A5" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Remedia (Revocar Credenciales)
                    </text>

                    {/* 8. Lambda -> S3 Bucket (Divergencia curva suave hacia abajo a la derecha) */}
                    <path
                      d="M 1625 332 C 1765 332, 1795 450, 1905 450"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['lambda', 's3']) ? '#00F0FF' : '#EF4444'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['lambda', 's3']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead-red)'}
                    />
                    <text x="1765" y="410" fill="#FCA5A5" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Remedia (Bloqueo BPA & KMS)
                    </text>

                    {/* 9. Lambda -> AWS Config (Línea central recta de auditoría y trazabilidad) */}
                    <path
                      d="M 1625 320 L 2305 320"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['lambda', 'config']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['lambda', 'config']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="1970" y="310" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Traza de Auditoría / Gobernanza
                    </text>

                    {/* 10. IAM -> AWS Config (Evidencia post-remediación) */}
                    <path
                      d="M 2035 190 C 2175 190, 2205 308, 2305 308"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['iam', 'config']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['iam', 'config']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="2170" y="235" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Evidencia IAM
                    </text>

                    {/* 11. S3 -> AWS Config (Estado de cumplimiento) */}
                    <path
                      d="M 2035 450 C 2175 450, 2205 332, 2305 332"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['s3', 'config']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['s3', 'config']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="2170" y="410" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Estado S3
                    </text>

                    {/* 12. AWS Config -> GuardDuty (Bucle de Retroalimentación ortogonal con esquinas redondeadas) */}
                    <path
                      d="M 2370 265 L 2370 30 Q 2370 18, 2358 18 L 24 18 Q 12 18, 12 30 L 12 118 Q 12 130, 24 130 L 75 130"
                      className="animate-flow-dash transition-all duration-300"
                      stroke={isLineActive(['config', 'guardduty']) ? '#00F0FF' : '#64748B'}
                      strokeWidth="1.5"
                      strokeDasharray="5 5"
                      fill="none"
                      markerEnd={isLineActive(['config', 'guardduty']) ? 'url(#arrowhead-cyan)' : 'url(#arrowhead)'}
                    />
                    <text x="1200" y="12" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="600" textAnchor="middle">
                      Bucle de Retroalimentación Continua y Cumplimiento de Políticas (COBIT • ISO 20000 • NIST)
                    </text>
                  </svg>

                  {/* ------------------------------------------------------------- */}
                  {/* NODOS DE SERVICIOS AWS (Tarjetas Interactivas con Espacio)    */}
                  {/* ------------------------------------------------------------- */}
                  {nodes.map((node) => {
                    const isHovered = hoveredNodeId === node.id;
                    const isCompromised = node.zone === 'compromised';

                    return (
                      <div
                        key={node.id}
                        onClick={() => setHoveredNodeId(hoveredNodeId === node.id ? null : node.id)}
                        onMouseEnter={() => setHoveredNodeId(node.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        style={{ left: `${node.x}px`, top: `${node.y}px` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 transition-transform duration-300 ${
                          isHovered ? 'scale-115 z-30' : ''
                        }`}
                      >
                        <div
                          className={`relative flex flex-col items-center justify-center text-center p-4 rounded-2xl transition-all duration-300 w-[130px] min-h-[110px] ${
                            isHovered
                              ? isCompromised
                                ? 'bg-[#180A0E] border-2 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.5)]'
                                : 'bg-[#0E131E] border-2 border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.45)]'
                              : isCompromised
                              ? 'bg-[#12080B] border border-red-900/60 hover:border-red-500/80 shadow-[0_0_15px_rgba(220,38,38,0.15)]'
                              : 'bg-[#090C12]/95 border border-white/10 hover:border-white/30'
                          }`}
                        >
                          {/* Logo oficial AWS centrado de forma absoluta con mx-auto mb-2 */}
                          <img
                            src={node.icon}
                            alt={node.name}
                            className="w-12 h-12 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] pointer-events-none mx-auto mb-2"
                            loading="eager"
                          />

                          <span className="text-sm font-bold text-gray-100 text-center leading-tight whitespace-nowrap block">
                            {node.name}
                          </span>
                          {node.sub && (
                            <span className="text-[10px] font-mono text-gray-400 text-center leading-tight mt-1 block">
                              {node.sub}
                            </span>
                          )}

                          {/* Indicador luminoso en hover */}
                          {isHovered && (
                            <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full animate-ping ${
                              isCompromised ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : 'bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]'
                            }`} />
                          )}
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>

              {/* Leyenda Inferior */}
              <div className="p-3.5 px-6 border-t border-white/10 bg-[#05070B] flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="text-gray-300 font-mono text-[11px]">Capa 1: Observabilidad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                    <span className="text-gray-300 font-mono text-[11px]">Capa 2: Orquestación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF]"></span>
                    <span className="text-gray-300 font-mono text-[11px]">Capa 3: Inteligencia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                    <span className="text-gray-300 font-mono text-[11px]">Capa 4: Remediación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="text-red-300 font-mono text-[11px]">Recursos Vulnerables</span>
                  </div>
                </div>
                <div className="text-gray-500 font-mono text-[11px]">
                  Flujo determinista sin latencia
                </div>
              </div>

            </div>
          </div>

          {/* COLUMNA DERECHA: Panel de Inspección (Ancho completo en móvil/tablet, lateral en XL) */}
          <div className="w-full xl:w-[400px] 2xl:w-[450px] shrink-0 flex flex-col mt-4 xl:mt-0">
            <div className="relative xl:sticky top-auto xl:top-28 w-full rounded-3xl bg-[#05080F]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between min-h-[460px] xl:min-h-[600px]">
              
              <AnimatePresence mode="wait">
                {activeNode && activeDetails ? (
                  // ESTADO ACTIVO: RENDERIZA LA INFORMACIÓN ESPECÍFICA DE CADA HERRAMIENTA
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="flex flex-col justify-between h-full flex-grow"
                  >
                    <div>
                      {/* Badge Superior de la Capa */}
                      <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
                        <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${activeDetails.badgeColor}`}>
                          {activeDetails.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>ACTIVE</span>
                        </div>
                      </div>

                      {/* Header del Servicio: Icono Grande + Nombre */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#0B0E14] border border-white/15 flex items-center justify-center p-3 shadow-xl">
                          <img
                            src={activeNode.icon}
                            alt={activeNode.name}
                            className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                            {activeNode.name}
                          </h3>
                          <span className="text-xs font-mono text-gray-400">
                            {activeNode.sub}
                          </span>
                        </div>
                      </div>

                      {/* Título de la Fase Específica */}
                      <div className="mb-2">
                        <span className={`text-xs font-mono uppercase tracking-wider font-bold ${
                          activeNode.zone === 'compromised' ? 'text-red-400' : 'text-[#00F0FF]'
                        }`}>
                          {activeDetails.title}
                        </span>
                      </div>

                      {/* Explicación Técnica Específica de la Tesis */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {activeDetails.text}
                      </p>
                    </div>

                    {/* Caja de Métrica / Impacto Destacada */}
                    <div className="p-4 rounded-2xl bg-[#0B0F17] border border-white/10 flex items-center justify-between gap-3 mt-4">
                      <div className="flex flex-col">
                        <span className={`text-lg font-extrabold tracking-tight ${
                          activeNode.zone === 'compromised' ? 'text-red-400' : 'text-[#00F0FF]'
                        }`}>
                          {activeDetails.metric}
                        </span>
                        <span className="text-xs text-gray-400">
                          {activeDetails.metricLabel}
                        </span>
                      </div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        activeNode.zone === 'compromised'
                          ? 'bg-red-950/40 border border-red-800/40 text-red-400'
                          : 'bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF]'
                      }`}>
                        {activeNode.zone === 'compromised' ? (
                          <AlertTriangle className="w-5 h-5" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // ESTADO DE REPOSO (CUANDO NINGÚN NODO ESTÁ EN HOVER)
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center justify-center text-center my-auto py-10"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.2)] mb-5">
                      <Radar className="w-8 h-8 stroke-[1.8] animate-pulse" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      Panel de Inspección
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
                      Mueve el cursor sobre los nodos de la arquitectura para inspeccionar el flujo de orquestación y los vectores de remediación.
                    </p>

                    <div className="w-full flex flex-col gap-2 pt-6 border-t border-white/10 text-left">
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>Capa 1: CloudTrail, GuardDuty, Inspector</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        <span>Capa 2: EventBridge, Step Functions</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
                        <span>Capa 3: Bedrock AI (RAG)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                        <span>Capa 4: Lambda & Config</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-red-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        <span>Recursos Comprometidos: IAM & S3</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
