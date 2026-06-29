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
  Plus
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
}) => {
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
             className="bg-white/90 p-8 rounded-2xl border border-amber-200 shadow-xl flex flex-col items-center justify-center min-h-[460px] text-center backdrop-blur-md"
          >
            {/* Prestigious Loader */}
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-indigo-600 animate-spin" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-amber-200 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
              </div>
            </div>

            <h3 className="text-xl font-black font-serif text-[#0B1530] tracking-tight mb-2">
              {businessName ? `Analizando ${businessName}...` : "Analizando..."}
            </h3>

            {/* Stage dynamic information messages */}
            <p className="text-sm font-bold font-sans text-indigo-650 h-6">
              {loadingMessages[loadingStep]}
            </p>

            <p className="text-slate-500 text-xs mt-8 max-w-sm leading-relaxed font-semibold">
              Por favor, no recargues la pestaña. Minerva está estructurando tu consultoría comercial integral en un formato de altísimo valor.
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
            className="bg-white/80 p-10 sm:p-14 rounded-3xl border border-[#EAD293]/60 shadow-md text-center max-w-2xl mx-auto my-8 font-sans backdrop-blur-md"
          >
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-250">
              <Sparkles className="w-7 h-7 text-amber-500 animate-pulse" />
            </div>
            <h3 className="text-xl font-black font-serif text-slate-900 mb-2">Tu Estrategia Élite te Espera</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-8 max-w-md mx-auto leading-relaxed font-semibold">
              Aún no has generado un plan estratégico para tu negocio local. Completa el autodiagnóstico inicial en la pestaña de control o carga un caso real para probar de inmediato.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={() => setActiveTab("diagnostico")}
                className="px-6 py-3 bg-[#0B1530] text-[#EAD293] border border-[#EAD293]/35 font-black rounded-xl text-xs hover:bg-[#121E3B] transition-all cursor-pointer shadow-md flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Ir a Diagnóstico Inicial
              </button>
              <button
                onClick={() => setActiveTab("ejemplos")}
                className="px-6 py-3 bg-white text-slate-800 border border-slate-300 font-extrabold rounded-xl text-xs hover:bg-slate-50 transition-all cursor-pointer shadow-sm flex items-center gap-2"
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
            <div className="bg-white/80 p-5 rounded-2xl border border-amber-200/60 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-lg border border-amber-200">
                  Estrategia Minerva IA Élite
                </span>
                <h2 className="text-xl font-black font-serif text-slate-900 mt-2">
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

            {/* DYNAMIC TARJETAS SEPARADAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* CARD 1: DIAGNÓSTICO */}
              <div className="bg-gradient-to-br from-white via-[#fbf9f4] to-blue-50/20 p-6 rounded-2xl border border-amber-200/50 hover:border-amber-300 hover:shadow-lg hover:-translate-y-0.5 duration-300 transition-all flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-[#7c3aed] to-amber-500" />
                
                <div>
                  <div className="flex items-center justify-between gap-1 pb-3 mb-4 border-b border-amber-100">
                    <span className="text-[11px] font-bold font-mono tracking-widest text-[#7c3aed] uppercase">
                      Ubicación Inicial
                    </span>
                    <span className="p-1 px-2.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-[10px] font-mono font-extrabold shadow-xs">
                      Diagnóstico Élite
                    </span>
                  </div>
                  
                  <h3 className="text-md font-bold font-display text-slate-900 mb-2 leading-tight">
                    Tu Diagnóstico de Liderazgo Comercial
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                    {currentPlan.diagnostico}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => handleCopyToClipboard(currentPlan.diagnostico, "Diagnóstico")}
                    className="text-slate-500 hover:text-amber-800 text-xs flex items-center gap-1 cursor-pointer transition-all font-bold"
                  >
                    <Copy className="w-3" /> Copiar análisis
                  </button>
                </div>
              </div>

              {/* CARD 2: IDEAS RÁPIDAS */}
              <div className="bg-gradient-to-br from-white via-[#faf9f5] to-amber-50/30 p-6 rounded-2xl border border-amber-200/50 hover:border-amber-300 hover:shadow-lg hover:-translate-y-0.5 duration-300 transition-all flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-700" />
                
                <div>
                  <div className="flex items-center justify-between gap-1 pb-3 mb-4 border-b border-amber-100">
                    <span className="text-[11px] font-bold font-mono tracking-widest text-amber-850 uppercase">
                      Victorias Rápidas
                    </span>
                    <span className="p-1 px-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-mono font-extrabold shadow-xs">
                      Micro Goles
                    </span>
                  </div>
                  
                  <h3 className="text-md font-bold font-display text-slate-900 mb-2 leading-tight">
                     Ideas de Tracción Inmediata
                  </h3>
                  <ul className="space-y-2">
                    {currentPlan.ideasRapidas.map((idea, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold font-sans">
                        <span className="text-amber-600 font-mono mt-0.5 shrink-0">✓</span>
                        <span className="leading-relaxed">{idea}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => handleCopyToClipboard(currentPlan.ideasRapidas.join("\n"), "Ideas Rápidas")}
                    className="text-slate-500 hover:text-amber-800 text-xs flex items-center gap-1 cursor-pointer transition-all font-bold"
                  >
                    <Copy className="w-3" /> Copiar lista
                  </button>
                </div>
              </div>

              {/* CARD 3: PLAN 7 DÍAS */}
              <div className="bg-white/90 p-6 rounded-2xl border border-amber-200/60 hover:border-amber-300 hover:shadow-md hover:-translate-y-0.5 duration-300 transition-all shadow-sm md:col-span-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-[#7c3aed] to-indigo-700" />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-bold font-mono tracking-widest text-indigo-600 uppercase">
                      Plan Operativo Realizable
                    </span>
                    <h3 className="text-md font-bold font-display text-slate-900 mt-0.5">
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
                       className="bg-[#fcfaf5] p-3 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all flex flex-col justify-between shadow-xs relative pl-4 overflow-hidden group"
                    >
                      <div className="absolute left-0 top-0 h-full w-1.5 bg-indigo-100 group-hover:bg-amber-500 transition-all" />
                      
                      <div>
                        <span className="text-[9px] uppercase font-mono tracking-wider text-amber-700 font-extrabold block mb-1">
                          {day.dia}
                        </span>
                        <h4 className="text-[11px] font-bold text-slate-900 line-clamp-2 leading-snug">
                          {day.titulo}
                        </h4>
                        <ul className="mt-2 space-y-1 font-sans">
                          {day.acciones.slice(0, 2).map((acc, aIdx) => (
                            <li key={aIdx} className="text-[10px] text-slate-600 line-clamp-3 leading-snug font-semibold">
                              • {acc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-[11px] gap-2">
                  <span className="text-slate-500 font-semibold">Haz clic en "Feed tracker" para cargar estas acciones directamente en tu panel interactivo de metas.</span>
                  <button
                    onClick={() => handleCopyToClipboard(currentPlan.plan7Dias.map(d=> `${d.dia} - ${d.titulo}: ${d.acciones.join(", ")}`).join("\n"), "Plan 7 Días")}
                    className="text-indigo-650 hover:text-indigo-850 flex items-center gap-1 cursor-pointer font-extrabold transition-all"
                  >
                    <Copy className="w-3" /> Copiar todo el Plan
                  </button>
                </div>
              </div>

              {/* CARD 4: HOOKS VIRALES */}
              <div className="bg-gradient-to-br from-white via-[#faf8ff] to-[#f4f2ff] p-6 rounded-2xl border border-amber-200/50 hover:border-amber-300 hover:shadow-md hover:-translate-y-0.5 duration-300 transition-all flex flex-col justify-between shadow-sm md:col-span-2 relative overflow-hidden bg-white">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-[#7c3aed] to-indigo-600" />
                
                <div>
                  <div className="flex items-center justify-between gap-1 pb-3 mb-4 border-b border-purple-100">
                    <span className="text-[11px] font-bold font-mono tracking-widest text-[#7c3aed] uppercase">
                      Estrategia de Ventas
                    </span>
                    <span className="p-1 px-2.5 rounded-lg bg-purple-50 border border-purple-250 text-purple-700 text-[10px] font-mono font-extrabold shadow-xs">
                      Hooks Virales
                    </span>
                  </div>
                  
                  <h3 className="text-md font-bold font-display text-slate-900 mb-2 leading-tight">
                    Ganchos de Venda Directa para Redes Sociales u Outbound
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 font-semibold font-sans">
                    Utiliza estos encabezados autoritarios y prestigiosos para detener el pulgar de tu cliente ideal en redes o campañas de email outbound:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentPlan.hooksVirales.map((hook, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-start gap-2.5 hover:border-purple-300 hover:shadow-sm transition-all relative group shadow-xs pl-8 text-left"
                      >
                        <span className="absolute left-2.5 top-3.5 text-xs text-purple-600 font-mono font-black animate-pulse">#{idx + 1}</span>
                        <p className="text-xs text-slate-800 leading-relaxed font-bold italic">
                          &ldquo;{hook}&rdquo;
                        </p>
                        <button
                          type="button"
                          onClick={() => handleCopyToClipboard(hook, `Hook #${idx + 1}`)}
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 bg-slate-50 rounded-lg hover:bg-slate-100 border border-slate-200 text-slate-400 hover:text-purple-600 transition-all cursor-pointer"
                          title="Copiar Hook"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200 flex justify-end font-sans">
                  <button
                    onClick={() => handleCopyToClipboard(currentPlan.hooksVirales.join("\n"), "Todos los Hooks")}
                    className="text-slate-500 hover:text-[#7c3aed] text-xs flex items-center gap-1 cursor-pointer transition-all font-bold"
                  >
                    <Copy className="w-3" /> Copiar todos los Hooks
                  </button>
                </div>
              </div>

            </div>

            {/* DYNAMIC ADDITIONAL VALUE MODULES */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              
              {/* Sub module 1: Finance Block */}
              <div className="p-6 bg-gradient-to-br from-white via-[#faf9f4] to-amber-50/20 rounded-2xl border border-amber-200/60 hover:border-amber-300 hover:shadow-md duration-300 transition-all relative overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-amber-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full filter blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-amber-200 pb-3 pl-2">
                    <div className="flex items-center gap-1.5">
                      <span className="p-1 px-2.5 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-mono font-black rounded-lg">
                        Alineación 01
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-amber-800 font-black block">
                        Resolución de Finanzas
                      </span>
                    </div>
                    <span className="text-xs font-black text-amber-500/50 font-mono tracking-tighter text-right">01 / 04</span>
                  </div>
                  
                  <div className="pl-2 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-amber-600" />
                      <h3 className="text-md font-bold font-display text-slate-900 tracking-tight">
                        Estabilización y Desbloqueo Financiero IA
                      </h3>
                    </div>
                    
                    <p className="text-xs text-slate-750 leading-relaxed font-semibold mb-5 bg-[#fdfcf9] p-4 rounded-xl border border-amber-200/50 shadow-inner">
                      {currentPlan.finanzas}
                    </p>

                    {/* Interactive Express Calculator */}
                    <div className="bg-[#FAF3E5] p-5 rounded-2xl border border-amber-200/60 shadow-xs">
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-amber-200">
                        <span className="text-xs font-bold uppercase tracking-wide text-amber-800 font-sans">
                          Calculadora Express del Flujo de Caja (7 días)
                        </span>
                      </div>
                      
                      <p className="text-[11px] text-slate-500 mb-4 font-semibold font-sans">
                        Ajusta tus parámetros para calcular la liquidez atrapada que podrías liberar de forma inmediata:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Input 1: Price */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-slate-650 font-sans">
                            Tarifa de tu Oferta Premium ($)
                          </label>
                          <div className="relative">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">$</span>
                            <input
                              type="number"
                              className="w-full bg-white border border-slate-300 rounded-lg pl-6 pr-2 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                              value={calcPrice}
                              onChange={(e) => setCalcPrice(Math.max(0, parseInt(e.target.value) || 0))}
                            />
                          </div>
                        </div>

                        {/* Input 2: Leads */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-slate-655 font-sans">
                            Prospectos Listos para Contactar (7 días)
                          </label>
                          <input
                            type="number"
                            className="w-full bg-white border border-slate-300 rounded-lg p-1.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                            value={calcLeads}
                            onChange={(e) => setCalcLeads(Math.max(0, parseInt(e.target.value) || 0))}
                          />
                        </div>

                        {/* Input 3: Conversion Slider */}
                        <div className="space-y-1 sm:col-span-2">
                          <div className="flex justify-between text-[11px] font-bold text-slate-700">
                            <span>Tasa de Conversión Estimada (%)</span>
                            <span className="text-amber-800 font-mono font-black">{calcConversion}%</span>
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
                          <label className="block text-[11px] font-bold text-slate-700 font-sans">
                            Recorte inmediato de fugas / SaaS inútiles hoy ($)
                          </label>
                          <div className="relative">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">$</span>
                            <input
                              type="number"
                              className="w-full bg-white border border-slate-300 rounded-lg pl-6 pr-2 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                              value={calcSavings}
                              onChange={(e) => setCalcSavings(Math.max(0, parseInt(e.target.value) || 0))}
                            />
                          </div>
                        </div>

                      </div>

                      {/* Computed Result Panel */}
                      <div className="mt-5 p-4 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-250 rounded-xl text-center">
                        <span className="text-[10px] font-black tracking-widest text-[#854d0e] uppercase block font-mono">
                          Flujo de Caja Inmediato Estimado (7 Dias)
                        </span>
                        <span className="text-2xl font-black text-amber-700 font-display block my-1">
                          ${Math.round((calcLeads * (calcConversion / 100) * calcPrice) + calcSavings).toLocaleString()} USD
                        </span>
                        <blockquote className="text-[11px] text-[#854d0e] italic mt-1 leading-relaxed font-semibold">
                          "Este importe está estancado en tu indecisión. ¡Libera esta caja hoy mismo en la Mentoría Premium!"
                        </blockquote>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Sub module 2: Content Table */}
              <div className="p-6 bg-gradient-to-br from-white via-slate-50 to-blue-50/10 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md duration-300 transition-all relative overflow-hidden shadow-sm flex flex-col justify-between bg-white text-left">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-indigo-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full filter blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3 pl-2">
                    <div className="flex items-center gap-1.5">
                      <span className="p-1 px-2.5 bg-indigo-50 border border-indigo-250 text-indigo-700 text-[10px] font-mono font-black rounded-lg text-xs">
                        Alineación 02
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-700 font-bold block bg-[#EEF2F6] px-2 py-0.5 rounded-md">
                        Matriz de Contenidos por Dolor
                      </span>
                    </div>
                    <span className="text-xs font-black text-indigo-600/40 font-mono tracking-tighter text-right">02 / 04</span>
                  </div>
                  
                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Table className="w-5 h-5 text-indigo-600" />
                      <h3 className="text-md font-bold font-display text-slate-900">
                        Estrategia de Autoridad y Mitigación de Pérdida
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-4 font-semibold">
                      Estructurado según {currentPlan.userPrompt.niche} para atacar dolores ocultos:
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white max-h-[380px] overflow-y-auto shadow-inner">
                      <table className="w-full min-w-[550px] text-left border-collapse text-xs">
                        <thead className="sticky top-0 bg-slate-100 text-indigo-700 font-mono z-10 border-b border-slate-200">
                          <tr>
                            <th className="p-3 font-extrabold text-xs">Problema / Dolor del Cliente</th>
                            <th className="p-3 font-extrabold text-xs font-sans">Idea de Contenido de Valor</th>
                            <th className="p-3 font-extrabold text-xs">Formato</th>
                            <th className="p-3 font-extrabold text-xs">Plataforma Ideal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {currentPlan.contenidoTabla.map((cont, idx) => (
                            <tr key={idx} className="hover:bg-indigo-50/50 transition-colors">
                              <td className="p-3 font-bold text-slate-900 leading-normal">{cont.dolor}</td>
                              <td className="p-3 text-slate-705 leading-normal font-semibold font-sans">{cont.idea}</td>
                              <td className="p-3 text-slate-705 font-mono text-[11px]">
                                <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-lg border border-indigo-200 font-black">
                                  {cont.formato}
                                </span>
                              </td>
                              <td className="p-3 text-slate-700 font-bold">{cont.plataforma}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sub module 3: Leadership Style */}
              <div className="p-6 bg-gradient-to-br from-white via-purple-50/10 to-[#fdf9ff] rounded-2xl border border-purple-200/50 hover:border-purple-300 hover:shadow-md duration-300 transition-all relative overflow-hidden shadow-sm flex flex-col justify-between text-left">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-[#7c3aed]" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-purple-100 pb-3 pl-2">
                    <div className="flex items-center gap-1.5">
                      <span className="p-1 px-2.5 bg-purple-50 border border-purple-200 text-purple-700 text-[10px] font-mono font-black rounded-lg">
                        Alignación 03
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#7c3aed] font-black block">
                        Liderazgo de Equipos
                      </span>
                    </div>
                    <span className="text-xs font-black text-purple-500/40 font-mono tracking-tighter text-right">03 / 04</span>
                  </div>
                  
                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-purple-600" />
                      <h3 className="text-md font-bold font-display text-slate-900">
                        Liderazgo Operativo Superior y Delegación
                      </h3>
                    </div>
                    <p className="text-xs text-slate-705 leading-relaxed font-semibold bg-white p-5 rounded-xl border border-slate-200 shadow-inner">
                      {currentPlan.liderazgo}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub module 4: Reptilian Sales */}
              <div className="p-6 bg-gradient-to-br from-white via-orange-50/10 to-[#fffbf7] rounded-xl border border-[#ebd390]/50 hover:border-orange-305 hover:shadow-md duration-300 transition-all relative overflow-hidden shadow-sm flex flex-col justify-between text-left">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-orange-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full filter blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-orange-100 pb-3 pl-2">
                    <div className="flex items-center gap-1.5">
                      <span className="p-1 px-2.5 bg-orange-50 border border-orange-200 text-orange-700 text-[10px] font-mono font-black rounded-lg">
                        Alineación 04
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-orange-700 font-bold block">
                        Ventas Instintivas
                      </span>
                    </div>
                    <span className="text-orange-500 font-bold text-xs font-mono tracking-tighter text-right font-sans">04 / 04</span>
                  </div>
                  
                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Flame className="w-5 h-5 text-orange-500" />
                      <h3 className="text-md font-bold font-display text-slate-900">
                        Argumentos de Ventas Reptilianas (Cierre Letal)
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-4 font-semibold">
                      Persuasión profunda atacando instintos primitivos del cerebro límbico/reptiliano:
                    </p>

                    <div className="space-y-3">
                      {currentPlan.ventasReptilianas.map((rep, idx) => (
                        <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 hover:border-orange-300 transition-all group relative shadow-inner">
                          <div className="flex items-center justify-between gap-1.5 mb-2">
                            <span className="text-xs font-bold text-orange-700 uppercase tracking-wide font-mono">
                              {rep.enfoque}
                            </span>
                            <button
                              onClick={() => handleCopyToClipboard(rep.guion, "Guión Reptiliano")}
                              className="text-[10px] text-amber-705 hover:text-amber-850 flex items-center gap-1 cursor-pointer font-black font-sans"
                            >
                              <Copy className="w-3 animate-pulse" /> Copiar Guión
                            </button>
                          </div>
                          <p className="text-xs text-slate-700 italic leading-relaxed font-bold">
                            &ldquo;{rep.guion}&rdquo;
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};
