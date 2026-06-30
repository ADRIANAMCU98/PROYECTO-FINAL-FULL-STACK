import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Briefcase, 
  BookOpen, 
  Target, 
  Copy, 
  DollarSign, 
  Table, 
  Users, 
  Flame,
  Plus,
  ArrowRight,
  Calendar,
  Crown,
  Award,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { MentorPlan } from "../types";

interface PersonalizedResultsProps {
  isLoading: boolean;
  currentPlan: MentorPlan | null;
  loadingStep: number;
  loadingMessages: string[];
  setActiveTab: (tab: "diagnostico" | "resultado" | "seguimiento" | "ejemplos") => void;
  feedTrackingPanel: (plan: MentorPlan) => void;
  handleCopyToClipboard: (text: string, label: string) => void;
  currentStatusInfo: () => string;
  calcPrice: number;
  setCalcPrice: (val: number) => void;
  calcLeads: number;
  setCalcLeads: (val: number) => void;
  calcConversion: number;
  setCalcConversion: (val: number) => void;
  calcSavings: number;
  setCalcSavings: (val: number) => void;
  businessName?: string;
  handleNewAnalysis?: () => void;
  onAgendarSesion?: () => void;
}

export const PersonalizedResults: React.FC<PersonalizedResultsProps> = ({
  isLoading,
  currentPlan,
  loadingStep,
  loadingMessages,
  setActiveTab,
  feedTrackingPanel,
  handleCopyToClipboard,
  currentStatusInfo,
  calcPrice,
  setCalcPrice,
  calcLeads,
  setCalcLeads,
  calcConversion,
  setCalcConversion,
  calcSavings,
  setCalcSavings,
  businessName = "",
  handleNewAnalysis,
  onAgendarSesion,
}) => {
  const percentComplete = Math.min(100, Math.round(((loadingStep + 1) / (loadingMessages.length || 5)) * 100));

  const cardBase =
    "app-dark-card p-6 rounded-2xl hover:border-amber-500/30 hover:bg-white/[0.04] duration-300 transition-all flex flex-col justify-between relative overflow-hidden";
  const cardTitle = "text-md font-bold font-serif text-white mb-2 leading-tight";
  const cardBody = "text-xs text-slate-300 leading-relaxed";
  const cardDivider = "border-white/10";
  const sectionBadge = "p-1 px-2.5 rounded-lg app-badge-gold text-[10px] font-mono font-extrabold";

  return (
    <div className="space-y-8">
      <AnimatePresence mode="wait">
        
        {/* 1. STATE: LOADER ANIMADO */}
        {isLoading && (
          <motion.div
             key="consulting-loader"
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.9 }}
             className="bg-gradient-to-br from-[#0B1530] via-[#1A254C] to-[#253266] p-8 sm:p-12 rounded-3xl border-2 border-amber-300 shadow-2xl flex flex-col items-center justify-center min-h-[500px] text-center relative overflow-hidden"
          >
            {/* Glowing ambient background grids */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" />

            {/* High-End Scanning Circle with Live Progress */}
            <div className="relative mb-8">
              {/* outer progress ring */}
              <svg className="w-28 h-28 transform -rotate-90">
                <circle cx="56" cy="56" r="48" stroke="rgba(255,255,255,0.06)" strokeWidth="4" fill="transparent" />
                <motion.circle 
                  cx="56" 
                  cy="56" 
                  r="48" 
                  stroke="#F59E0B" 
                  strokeWidth="5" 
                  fill="transparent" 
                  strokeDasharray="301.6" 
                  animate={{ strokeDashoffset: 301.6 - (301.6 * percentComplete) / 100 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  strokeLinecap="round" 
                />
              </svg>
              {/* Inner glowing core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/5 border border-amber-300/30 flex flex-col items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-amber-400 animate-bounce" />
                <span className="text-sm font-mono font-black text-amber-300 tracking-tight mt-0.5">{percentComplete}%</span>
              </div>
            </div>

            <div className="space-y-3 max-w-lg">
              <span className="text-[10px] tracking-widest font-mono font-black text-amber-300 uppercase bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/30">
                PROCESANDO CON CONSULTORÍA IA ÉLITE
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-serif text-white tracking-tight uppercase">
                ANALIZANDO SI TIENES UN HOBBY O UNA MAQUINA DE RIQUEZA
              </h3>
              {businessName && (
                <p className="text-amber-300 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Negocio: {businessName}
                </p>
              )}

              {/* Status information messages */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mt-4 backdrop-blur-xs">
                <p className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Estado: Procesando Datos
                </p>
                <p className="text-sm font-sans text-amber-100 font-semibold italic min-h-[40px] flex items-center justify-center">
                  "{loadingMessages[loadingStep]}"
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-[10.5px] mt-10 max-w-sm leading-relaxed font-semibold">
              El motor inteligente está diagnosticando tus fugas de capital y reestructurando tu oferta de servicios para un retorno de inversión acelerado.
            </p>
          </motion.div>
        )}

        {/* 2. STATE: NO PLAN LOADED */}
        {!isLoading && !currentPlan && (
          <motion.div
            key="no-plan-placeholder"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="app-dark-card-accent p-10 sm:p-14 rounded-3xl text-center max-w-2xl mx-auto my-8 backdrop-blur-md"
          >
            <div className="w-16 h-16 bg-amber-500/15 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/30">
              <Sparkles className="w-7 h-7 text-amber-400 animate-pulse" />
            </div>
            <h3 className="text-xl font-black font-serif text-white mb-2">Tu Estrategia Élite te Espera</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
              Aún no has generado un plan estratégico para tu negocio local. Completa el autodiagnóstico inicial en la pestaña de control o carga un caso real para probar de inmediato.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={() => setActiveTab("diagnostico")}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a0f18] font-black rounded-xl text-xs hover:from-amber-500 hover:to-amber-600 transition-all cursor-pointer shadow-md flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Ir a Diagnóstico Inicial
              </button>
              <button
                onClick={() => setActiveTab("ejemplos")}
                className="px-6 py-3 bg-white/5 text-amber-300 border border-amber-500/40 font-extrabold rounded-xl text-xs hover:bg-white/10 transition-all cursor-pointer flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Ver Casos de Ejemplo
              </button>
            </div>
          </motion.div>
        )}

        {/* 3. STATE: DYNAMIC CONSULTING WORKSPACE DETAILS (Plan Loaded) */}
        {!isLoading && currentPlan && (
          <motion.div
            key="consulting-results"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6 animate-fade-in"
          >
            
            {/* Plan Header Card with copy state */}
            <div className={`${cardBase} flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
              <div>
                <span className={`${sectionBadge} inline-block mb-2`}>
                  Estrategia IA Élite
                </span>
                <h2 className="text-xl font-black font-serif text-white mt-2">
                  {currentPlan.userPrompt.businessName ? `${currentPlan.userPrompt.businessName} • ` : ""}{currentPlan.userPrompt.niche}
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-1 font-bold">
                  {currentStatusInfo()} • Generado el {currentPlan.createdAt}
                </p>
              </div>

              {/* Tool actions: Copy and New Analysis */}
              <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto">
                {handleNewAnalysis && (
                  <button
                    onClick={handleNewAnalysis}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black rounded-xl cursor-pointer flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 duration-150"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Nueva Marca / Emprendedor
                  </button>
                )}

                <button
                  onClick={() => {
                    const fullCopyString = `
MINILABMENTOR IA - INFORME MENTORIA
Nicho: ${currentPlan.userPrompt.niche}

--- DIAGNÓSTICO ---
${currentPlan.diagnostico}

--- RESOLUCIÓN DE FINANZAS ---
${currentPlan.finanzas}

--- PLAN DE 7 DÍAS ---
${currentPlan.plan7Dias.map(d => `${d.dia} - ${d.titulo}: ${d.acciones.join(', ')}`).join('\n')}

--- LIDERAZGO ---
${currentPlan.liderazgo}

--- IDEAS RÁPIDAS ---
${currentPlan.ideasRapidas.join('\n')}

--- HOOKS VIRALES ---
${currentPlan.hooksVirales.join('\n')}
                    `;
                    handleCopyToClipboard(fullCopyString, "Informe Completo");
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-650 to-indigo-700 border border-indigo-500/20 hover:from-indigo-600 text-white text-xs font-bold rounded-xl cursor-pointer flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 duration-150"
                >
                  <Copy className="w-3.5 h-3.5 text-amber-250" />
                  Copiar Informe Completo
                </button>
              </div>
            </div>

            {/* CTA BANNER: ¡TU JUGADA MAESTRA! */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-gradient-to-r from-[#0B1530] via-[#1E294B] to-[#3B152A] rounded-3xl border-2 border-amber-300 p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl shadow-amber-500/5 group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full filter blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full text-[10px] text-amber-300 uppercase font-mono font-bold">
                    <Crown className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>SESIÓN TÁCTICA 1:1 RECOMENDADA</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-white leading-tight tracking-tight">
                    ♟️ ¡Tu Jugada Maestra está Lista para Ejecución!
                  </h3>
                  
                  <p className="text-xs text-slate-350 leading-relaxed max-w-2xl font-medium">
                    Adriana Mentora ha preparado tu diagnóstico virtual. El siguiente paso innegociable es agendar tu <span className="text-amber-300 font-bold">Sesión Estratégica Gratuita de 45 Minutos</span> para descifrar tus bloqueos de flujo de caja, subir tus precios y estructurar una hoja de ruta con claridad táctica del 100%.
                  </p>

                  {/* Trust checkmarks */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] font-bold text-amber-200/90 font-mono pt-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      45 Mins de Alto Impacto
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Hoja de Ruta 100% Práctica
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Sin Compromiso
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Cupos Limitados de la Semana
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <button
                    onClick={onAgendarSesion}
                    type="button"
                    className="w-full lg:w-auto px-7 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-950 text-xs font-black uppercase tracking-wider rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.7)] transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer active:scale-97"
                  >
                    <Calendar className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>¡QUIERO MI JUGADA MAESTRA!</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* DYNAMIC TARJETAS SEPARADAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* CARD 1: DIAGNÓSTICO */}
              <div className={cardBase}>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-amber-500 to-teal-500" />
                
                <div>
                  <div className={`flex items-center justify-between gap-1 pb-3 mb-4 border-b ${cardDivider}`}>
                    <span className="text-[11px] font-bold font-mono tracking-widest text-blue-400 uppercase">
                      Ubicación Inicial
                    </span>
                    <span className={sectionBadge}>
                      Diagnóstico Élite
                    </span>
                  </div>
                  
                  <h3 className={cardTitle}>
                    Tu Diagnóstico de Liderazgo Comercial
                  </h3>
                  <p className={cardBody}>
                    {currentPlan.diagnostico}
                  </p>
                </div>

                <div className={`pt-4 mt-4 border-t ${cardDivider} flex justify-end`}>
                  <button
                    onClick={() => handleCopyToClipboard(currentPlan.diagnostico, "Diagnóstico")}
                    className="text-slate-500 hover:text-amber-400 text-xs flex items-center gap-1 cursor-pointer transition-all font-bold"
                  >
                    <Copy className="w-3" /> Copiar análisis
                  </button>
                </div>
              </div>

              {/* CARD 2: IDEAS RÁPIDAS */}
              <div className={cardBase}>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />
                
                <div>
                  <div className={`flex items-center justify-between gap-1 pb-3 mb-4 border-b ${cardDivider}`}>
                    <span className="text-[11px] font-bold font-mono tracking-widest text-amber-400 uppercase">
                      Victorias Rápidas
                    </span>
                    <span className={sectionBadge}>
                      Micro Goles
                    </span>
                  </div>
                  
                  <h3 className={cardTitle}>
                     Ideas de Tracción Inmediata
                  </h3>
                  <ul className="space-y-2">
                    {currentPlan.ideasRapidas.map((idea, idx) => (
                      <li key={idx} className={`flex items-start gap-2 ${cardBody}`}>
                        <span className="text-amber-400 font-mono mt-0.5 shrink-0">✓</span>
                        <span className="leading-relaxed">{idea}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`pt-4 mt-5 border-t ${cardDivider} flex justify-end`}>
                  <button
                    onClick={() => handleCopyToClipboard(currentPlan.ideasRapidas.join("\n"), "Ideas Rápidas")}
                    className="text-slate-500 hover:text-amber-400 text-xs flex items-center gap-1 cursor-pointer transition-all font-bold"
                  >
                    <Copy className="w-3" /> Copiar lista
                  </button>
                </div>
              </div>

              {/* CARD 3: PLAN 7 DÍAS */}
              <div className={`${cardBase} md:col-span-2`}>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-600" />
                
                <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-4 border-b ${cardDivider}`}>
                  <div>
                    <span className="text-[11px] font-bold font-mono tracking-widest text-teal-400 uppercase">
                      Plan Operativo Realizable
                    </span>
                    <h3 className={`${cardTitle} mt-0.5`}>
                      Plan de Éxito de 7 Días
                    </h3>
                  </div>
                  
                  <button
                    onClick={() => {
                      feedTrackingPanel(currentPlan);
                      setActiveTab("seguimiento");
                    }}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black font-sans rounded-xl text-[10px] tracking-wide transition-all uppercase shadow-md cursor-pointer border border-amber-500/20"
                  >
                    <Target className="w-3.5 h-3.5 text-white" />
                    Feed tracker / Seguir Metas
                  </button>
                </div>

                {/* Interactive Accordion for Days */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mt-4">
                  {currentPlan.plan7Dias.map((day, idx) => (
                    <div
                       key={idx}
                       className="bg-[#0a1018] p-3 rounded-xl border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between relative pl-4 overflow-hidden group"
                    >
                      <div className="absolute left-0 top-0 h-full w-1 bg-amber-500/30 group-hover:bg-amber-500 transition-all" />
                      
                      <div>
                        <span className="text-[9px] uppercase font-mono tracking-wider text-amber-400 font-extrabold block mb-1">
                          {day.dia}
                        </span>
                        <h4 className="text-[11px] font-bold text-white line-clamp-2 leading-snug">
                          {day.titulo}
                        </h4>
                        <ul className="mt-2 space-y-1">
                          {day.acciones.slice(0, 2).map((acc, aIdx) => (
                            <li key={aIdx} className="text-[10px] text-slate-400 line-clamp-3 leading-snug">
                              • {acc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`pt-4 mt-4 border-t ${cardDivider} flex flex-col sm:flex-row justify-between items-center text-[11px] gap-2`}>
                  <span className="text-slate-500 font-semibold">Haz clic en "Feed tracker" para cargar estas acciones directamente en tu panel interactivo de metas.</span>
                  <button
                    onClick={() => handleCopyToClipboard(currentPlan.plan7Dias.map(d=> `${d.dia} - ${d.titulo}: ${d.acciones.join(", ")}`).join("\n"), "Plan 7 Días")}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer font-extrabold transition-all"
                  >
                    <Copy className="w-3" /> Copiar todo el Plan
                  </button>
                </div>
              </div>

              {/* CARD 4: HOOKS VIRALES */}
              <div className={`${cardBase} md:col-span-2`}>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-500" />
                
                <div>
                  <div className={`flex items-center justify-between gap-1 pb-3 mb-4 border-b ${cardDivider}`}>
                    <span className="text-[11px] font-bold font-mono tracking-widest text-teal-400 uppercase">
                      Estrategia de Ventas
                    </span>
                    <span className={sectionBadge}>
                      Hooks Virales
                    </span>
                  </div>
                  
                  <h3 className={cardTitle}>
                    Ganchos de Venda Directa para Redes Sociales u Outbound
                  </h3>
                  <p className={`${cardBody} mb-4`}>
                    Utiliza estos encabezados autoritarios y prestigiosos para detener el pulgar de tu cliente ideal en redes o campañas de email outbound:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentPlan.hooksVirales.map((hook, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0a1018] p-3.5 rounded-xl border border-white/10 flex items-start gap-2.5 hover:border-amber-500/30 transition-all relative group pl-8 text-left"
                      >
                        <span className="absolute left-2.5 top-3.5 text-xs text-amber-400 font-mono font-black">#{idx + 1}</span>
                        <p className="text-xs text-slate-200 leading-relaxed font-bold italic">
                          &ldquo;{hook}&rdquo;
                        </p>
                        <button
                          type="button"
                          onClick={() => handleCopyToClipboard(hook, `Hook #${idx + 1}`)}
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 bg-white/5 rounded-lg hover:bg-white/10 border border-white/10 text-slate-400 hover:text-amber-400 transition-all cursor-pointer"
                          title="Copiar Hook"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 mt-5 border-t ${cardDivider} flex justify-end`}>
                  <button
                    onClick={() => handleCopyToClipboard(currentPlan.hooksVirales.join("\n"), "Todos los Hooks")}
                    className="text-slate-500 hover:text-amber-400 text-xs flex items-center gap-1 cursor-pointer transition-all font-bold"
                  >
                    <Copy className="w-3" /> Copiar todos los Hooks
                  </button>
                </div>
              </div>

            </div>

            {/* DYNAMIC ADDITIONAL VALUE MODULES */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              
              {/* Sub module 1: Finance Block */}
              <div className={cardBase}>
                <div className="absolute left-0 top-0 h-full w-1 bg-amber-500" />
                
                <div>
                  <div className={`flex items-center justify-between mb-4 border-b ${cardDivider} pb-3 pl-2`}>
                    <div className="flex items-center gap-1.5">
                      <span className={sectionBadge}>Alineación 01</span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-black block">
                        Resolución de Finanzas
                      </span>
                    </div>
                    <span className="text-xs font-black text-slate-600 font-mono tracking-tighter text-right">01 / 04</span>
                  </div>
                  
                  <div className="pl-2 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-amber-400" />
                      <h3 className={`${cardTitle} tracking-tight mb-0`}>
                        Estabilización y Desbloqueo Financiero IA
                      </h3>
                    </div>
                    
                    <p className={`${cardBody} mb-5 bg-[#0a1018] p-4 rounded-xl border border-white/10`}>
                      {currentPlan.finanzas}
                    </p>

                    <div className="bg-[#0a1018] p-5 rounded-2xl border border-amber-500/20">
                      <div className={`flex items-center gap-2 mb-4 pb-2 border-b ${cardDivider}`}>
                        <span className="text-xs font-bold uppercase tracking-wide text-amber-400">
                          Calculadora Express del Flujo de Caja (7 días)
                        </span>
                      </div>
                      
                      <p className="text-[11px] text-slate-500 mb-4">
                        Ajusta tus parámetros para calcular la liquidez atrapada que podrías liberar de forma inmediata:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Input 1: Price */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-slate-400">
                            Tarifa de tu Oferta Premium ($)
                          </label>
                          <div className="relative">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">$</span>
                            <input
                              type="number"
                              className="w-full app-dark-input rounded-lg pl-6 pr-2 py-1.5 text-xs"
                              value={calcPrice}
                              onChange={(e) => setCalcPrice(Math.max(0, parseInt(e.target.value) || 0))}
                            />
                          </div>
                        </div>

                        {/* Input 2: Leads */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-slate-400">
                            Prospectos Listos para Contactar (7 días)
                          </label>
                          <input
                            type="number"
                            className="w-full app-dark-input rounded-lg p-1.5 text-xs"
                            value={calcLeads}
                            onChange={(e) => setCalcLeads(Math.max(0, parseInt(e.target.value) || 0))}
                          />
                        </div>

                        {/* Input 3: Conversion Slider */}
                        <div className="space-y-1 sm:col-span-2">
                          <div className="flex justify-between text-[11px] font-bold text-slate-300">
                            <span>Tasa de Conversión Estimada (%)</span>
                            <span className="text-amber-400 font-mono font-black">{calcConversion}%</span>
                          </div>
                          <input
                            type="range"
                            min="5"
                            max="100"
                            step="5"
                            className="w-full accent-amber-500 cursor-pointer"
                            value={calcConversion}
                            onChange={(e) => setCalcConversion(parseInt(e.target.value))}
                          />
                        </div>

                        {/* Input 4: Expense Cuts */}
                        <div className="space-y-1 sm:col-span-2">
                          <label className="block text-[11px] font-bold text-slate-400">
                            Recorte inmediato de fugas / SaaS inútiles hoy ($)
                          </label>
                          <div className="relative">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">$</span>
                            <input
                              type="number"
                              className="w-full app-dark-input rounded-lg pl-6 pr-2 py-1.5 text-xs"
                              value={calcSavings}
                              onChange={(e) => setCalcSavings(Math.max(0, parseInt(e.target.value) || 0))}
                            />
                          </div>
                        </div>

                      </div>

                      {/* Computed Result Panel */}
                      <div className="mt-5 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center">
                        <span className="text-[10px] font-black tracking-widest text-amber-400 uppercase block font-mono">
                          Flujo de Caja Inmediato Estimado (7 Dias)
                        </span>
                        <span className="text-2xl font-black text-amber-300 font-serif block my-1">
                          ${Math.round((calcLeads * (calcConversion / 100) * calcPrice) + calcSavings).toLocaleString()} USD
                        </span>
                        <blockquote className="text-[11px] text-slate-400 italic mt-1 leading-relaxed">
                          "Este importe está estancado en tu indecisión. ¡Libera esta caja hoy mismo en la Mentoría Premium!"
                        </blockquote>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Sub module 2: Content Table */}
              <div className={`${cardBase} text-left`}>
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
                
                <div>
                  <div className={`flex items-center justify-between mb-4 border-b ${cardDivider} pb-3 pl-2`}>
                    <div className="flex items-center gap-1.5">
                      <span className={sectionBadge}>Alineación 02</span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold block px-2 py-0.5 rounded-md">
                        Matriz de Contenidos por Dolor
                      </span>
                    </div>
                    <span className="text-xs font-black text-slate-600 font-mono tracking-tighter text-right">02 / 04</span>
                  </div>
                  
                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Table className="w-5 h-5 text-blue-400" />
                      <h3 className={`${cardTitle} mb-0`}>
                        Estrategia de Autoridad y Mitigación de Pérdida
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">
                      Estructurado según {currentPlan.userPrompt.niche} para atacar dolores ocultos:
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1018] max-h-[380px] overflow-y-auto">
                      <table className="w-full min-w-[550px] text-left border-collapse text-xs">
                        <thead className="sticky top-0 bg-[#0d1520] text-amber-400 font-mono z-10 border-b border-white/10">
                          <tr>
                            <th className="p-3 font-extrabold text-xs">Problema / Dolor del Cliente</th>
                            <th className="p-3 font-extrabold text-xs">Idea de Contenido de Valor</th>
                            <th className="p-3 font-extrabold text-xs">Formato</th>
                            <th className="p-3 font-extrabold text-xs">Plataforma Ideal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {currentPlan.contenidoTabla.map((cont, idx) => (
                            <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                              <td className="p-3 font-bold text-white leading-normal">{cont.dolor}</td>
                              <td className="p-3 text-slate-300 leading-normal">{cont.idea}</td>
                              <td className="p-3 text-slate-400 font-mono text-[11px]">
                                <span className="bg-blue-500/15 text-blue-300 px-2 py-0.5 rounded-lg border border-blue-500/30 font-black">
                                  {cont.formato}
                                </span>
                              </td>
                              <td className="p-3 text-slate-300 font-bold">{cont.plataforma}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub module 3: Leadership Style */}
              <div className={`${cardBase} text-left`}>
                <div className="absolute left-0 top-0 h-full w-1 bg-teal-500" />
                
                <div>
                  <div className={`flex items-center justify-between mb-4 border-b ${cardDivider} pb-3 pl-2`}>
                    <div className="flex items-center gap-1.5">
                      <span className={sectionBadge}>Alineación 03</span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-teal-400 font-black block">
                        Liderazgo de Equipos
                      </span>
                    </div>
                    <span className="text-xs font-black text-slate-600 font-mono tracking-tighter text-right">03 / 04</span>
                  </div>
                  
                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-teal-400" />
                      <h3 className={`${cardTitle} mb-0`}>
                        Liderazgo Operativo Superior y Delegación
                      </h3>
                    </div>
                    <p className={`${cardBody} bg-[#0a1018] p-5 rounded-xl border border-white/10`}>
                      {currentPlan.liderazgo}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub module 4: Reptilian Sales */}
              <div className={`${cardBase} text-left`}>
                <div className="absolute left-0 top-0 h-full w-1 bg-rose-500" />
                
                <div>
                  <div className={`flex items-center justify-between mb-4 border-b ${cardDivider} pb-3 pl-2`}>
                    <div className="flex items-center gap-1.5">
                      <span className={sectionBadge}>Alineación 04</span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-rose-400 font-bold block">
                        Ventas Instintivas
                      </span>
                    </div>
                    <span className="text-rose-400/50 font-bold text-xs font-mono tracking-tighter text-right">04 / 04</span>
                  </div>
                  
                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Flame className="w-5 h-5 text-rose-400" />
                      <h3 className={`${cardTitle} mb-0`}>
                        Argumentos de Ventas Reptilianas (Cierre Letal)
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-4">
                      Persuasión profunda atacando instintos primitivos del cerebro límbico/reptiliano:
                    </p>

                    <div className="space-y-3">
                      {currentPlan.ventasReptilianas.map((rep, idx) => (
                        <div key={idx} className="p-4 bg-[#0a1018] rounded-xl border border-white/10 hover:border-rose-500/30 transition-all group relative">
                          <div className="flex items-center justify-between gap-1.5 mb-2">
                            <span className="text-xs font-bold text-rose-400 uppercase tracking-wide font-mono">
                              {rep.enfoque}
                            </span>
                            <button
                              onClick={() => handleCopyToClipboard(rep.guion, "Guión Reptiliano")}
                              className="text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer font-black"
                            >
                              <Copy className="w-3" /> Copiar Guión
                            </button>
                          </div>
                          <p className="text-xs text-slate-300 italic leading-relaxed font-bold">
                            &ldquo;{rep.guion}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* BOTTOM PERSUASIVE JUGADA MAESTRA CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#121E3B] via-[#1D254C] to-[#2D3F75] border-2 border-amber-300 p-6 sm:p-8 rounded-3xl text-center space-y-5 relative overflow-hidden shadow-2xl mt-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.15),transparent_60%)] pointer-events-none" />
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="max-w-xl mx-auto space-y-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mx-auto mb-2">
                  <Award className="w-5 h-5 text-amber-300 animate-pulse" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-black text-white">
                  ¿Listo para ejecutar tu Jugada Maestra con Adriana Mentora?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  No dejes este análisis sorprendente acumulando polvo digital. Lleva estas tácticas a la acción guiada por Adriana Mentora. Agenda hoy mismo tu sesión 1:1 táctica sin costo para trazar el plan operativo definitivo de {currentPlan.userPrompt.businessName || "tu negocio"}.
                </p>
              </div>

              <div className="relative z-10 pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button
                  onClick={onAgendarSesion}
                  type="button"
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0a0f18] text-xs font-black uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-97"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Sesión de Mentoría
                </button>
                <button
                  onClick={() => setActiveTab("diagnostico")}
                  className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-white/20 hover:bg-white/5 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Volver al Diagnóstico
                </button>
              </div>

              <div className="text-[9px] text-slate-400 font-mono tracking-widest pt-1 relative z-10">
                ✦ CUPOS SEMANALES EXTREMADAMENTE LIMITADOS ✦
              </div>
            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};
