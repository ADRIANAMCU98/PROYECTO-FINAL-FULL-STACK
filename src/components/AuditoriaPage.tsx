import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  RefreshCw,
  Gift,
  Target,
  Eye,
  BarChart3,
  Crown,
  Trash2,
  Award,
} from "lucide-react";
import { DarkPageShell } from "./DarkPageShell";
import { DIAG_QUESTIONS, BUSINESS_MODELS } from "../data";
import { DiagnosticAnswers } from "../types";

interface AuditoriaPageProps {
  onBack: () => void;
  businessName: string;
  setBusinessName: (v: string) => void;
  niche: string;
  setNiche: (v: string) => void;
  userEmail: string;
  setUserEmail: (v: string) => void;
  problema: string;
  setProblema: (v: string) => void;
  businessModel: string;
  setBusinessModel: (v: string) => void;
  diagnosticAnswers: DiagnosticAnswers;
  setDiagnosticAnswers: React.Dispatch<React.SetStateAction<DiagnosticAnswers>>;
  isLoading: boolean;
  errorMsg: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onClear?: () => void;
}

const highlights = [
  { icon: Target, text: "Claridad sobre tu modelo de negocio", color: "text-amber-400" },
  { icon: Eye, text: "Puntos ciegos y fugas detectadas", color: "text-teal-400" },
  { icon: Crown, text: "Acciones prioritarias para vender más", color: "text-blue-400" },
  { icon: BarChart3, text: "Ruta de crecimiento con enfoque real", color: "text-rose-400" },
];

export const AuditoriaPage: React.FC<AuditoriaPageProps> = ({
  onBack,
  businessName,
  setBusinessName,
  niche,
  setNiche,
  userEmail,
  setUserEmail,
  problema,
  setProblema,
  businessModel,
  setBusinessModel,
  diagnosticAnswers,
  setDiagnosticAnswers,
  isLoading,
  errorMsg,
  onSubmit,
  onClear,
}) => {
  const inputClass =
    "w-full bg-[#0d1520] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 transition-colors";

  return (
    <DarkPageShell
      title="¡QUIERO MI AUDITORÍA GRATIS!"
      subtitle="Completa el test en 2 minutos. La IA analizará fugas de capital, rediseñará tu modelo comercial y te entregará tu hoja de ruta al instante."
      onBack={onBack}
      badge="100% Gratis"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left — value props */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-4 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
              Regalo de Adriana Mentora
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-black text-amber-400 leading-tight">
            Lo que recibirás con tu diagnóstico:
          </h2>

          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <span className="text-sm text-slate-300 font-semibold leading-snug pt-1">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block p-4 rounded-2xl bg-teal-500/5 border border-teal-500/20">
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <span className="text-teal-400 font-bold">✓ Canal seguro activo.</span>{" "}
              Tus datos se procesan de forma confidencial y recibes resultados en menos de 48 horas.
            </p>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-8"
        >
          <div
            id="auth-diagnosis-form"
            className="bg-[#0d1520]/90 border border-amber-500/25 rounded-2xl p-5 sm:p-7 lg:p-8 backdrop-blur-md shadow-2xl shadow-black/30"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
              <h3 className="text-sm font-black text-white uppercase tracking-wide">
                Datos de tu negocio
              </h3>
              {onClear && (businessName.trim() || niche.trim() || problema.trim()) && (
                <button
                  type="button"
                  onClick={onClear}
                  className="text-[10px] font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Limpiar formulario
                </button>
              )}
            </div>

            {errorMsg && (
              <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 font-semibold">
                {errorMsg}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300">
                    Nombre de tu negocio <span className="text-amber-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className={inputClass}
                    placeholder="Ej: Cafetería Aromas"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300">
                    Nicho de mercado <span className="text-amber-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className={inputClass}
                    placeholder="Ej: Pastelería, Fitness"
                  />
                </div>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <label className="block text-xs font-bold text-slate-300">
                  Tu correo electrónico <span className="text-amber-400">*</span>
                  <span className="block text-[10px] text-slate-500 font-normal mt-0.5">
                    Para enviarte tu auditoría en PDF
                  </span>
                </label>
                <input
                  required
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className={inputClass}
                  placeholder="tu-correo@ejemplo.com"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  Modelo de negocio
                </label>
                <select
                  value={businessModel}
                  onChange={(e) => setBusinessModel(e.target.value)}
                  className={`${inputClass} cursor-pointer`}
                >
                  {BUSINESS_MODELS.map((m) => (
                    <option key={m} value={m} className="bg-[#0d1520]">
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
                <span className="text-xs font-black text-amber-400 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Preguntas de autodiagnóstico
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DIAG_QUESTIONS.map((q) => (
                    <div key={q.id} className="space-y-1.5">
                      <label className="block text-[11px] font-bold text-slate-400 leading-tight">
                        {q.question}
                      </label>
                      <select
                        className={`${inputClass} text-xs py-2.5`}
                        value={(diagnosticAnswers as Record<string, string>)[q.id] || ""}
                        onChange={(e) =>
                          setDiagnosticAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                        }
                      >
                        {q.options.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#0d1520]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center gap-2">
                  <label className="block text-xs font-bold text-slate-300">
                    Tu bloqueo o problema principal <span className="text-amber-400">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setProblema(
                        "Mis clientes dicen que mis servicios son caros y no logro agendar llamadas de ventas de manera constante."
                      );
                      setBusinessName("Pasteles Dulce Arte");
                      setNiche("Pastelería Artesanal");
                    }}
                    className="text-[10px] text-teal-400 hover:text-teal-300 font-bold cursor-pointer shrink-0"
                  >
                    Rellenar ejemplo
                  </button>
                </div>
                <textarea
                  required
                  rows={4}
                  value={problema}
                  onChange={(e) => setProblema(e.target.value)}
                  className={`${inputClass} resize-y min-h-[100px]`}
                  placeholder="Ej: No consigo agendar llamadas estables, mis clientes se quejan de las tarifas..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0a0f18] text-sm font-black uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Analizando {businessName || "tu negocio"}...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generar mi auditoría gratis
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </DarkPageShell>
  );
};
