import React from "react";
import { motion } from "motion/react";
import { Gift, Clock, Lightbulb, TrendingUp, ArrowRight, Menu, Crown } from "lucide-react";
import {
  TargetArrowIcon,
  StylizedEyeIcon,
  ChessKingIcon,
  GrowthChartIcon,
  ClipboardListIcon,
  MagnifierIcon,
  RocketLaunchIcon,
  ShieldOutlineIcon,
  TimerIcon,
  BadgeCheckIcon,
  glowColors,
  iconGlowClass,
  type GlowColor,
} from "./StrategyIcons";

// @ts-expect-error - Vite static asset import
import chessHeroBackground from "../assets/images/chess_hero_background.png";

interface LandingPageProps {
  userEmail: string;
  setUserEmail: (email: string) => void;
  isLoading: boolean;
  onJugadaMaestra: () => void;
  onAuditoriaGratis: () => void;
  onAgendarEmail: (e: React.FormEvent) => void;
  onOpenMenu?: () => void;
}

const benefitCards: {
  icon: React.FC<{ color?: string; size?: number; className?: string }>;
  title: string;
  description: string;
  glow: GlowColor;
  border: string;
}[] = [
  {
    icon: TargetArrowIcon,
    title: "CLARIDAD TOTAL",
    description: "Entiende tu modelo de negocio como nunca antes.",
    glow: "gold",
    border: "border-amber-500/30",
  },
  {
    icon: StylizedEyeIcon,
    title: "PUNTOS CIEGOS Y FUGAS",
    description: "Detectamos lo que te hace perder tiempo y dinero.",
    glow: "teal",
    border: "border-teal-500/30",
  },
  {
    icon: ChessKingIcon,
    title: "ACCIONES PRIORITARIAS",
    description: "Te damos el plan exacto para vender más y mejor.",
    glow: "blue",
    border: "border-blue-500/30",
  },
  {
    icon: GrowthChartIcon,
    title: "RUTA DE CRECIMIENTO",
    description: "Una hoja de ruta clara para escalar con enfoque real.",
    glow: "red",
    border: "border-rose-500/30",
  },
];

const processSteps: {
  num: number;
  icon: React.FC<{ color?: string; size?: number; className?: string }>;
  title: string;
  description: string;
  glow: GlowColor;
  border: string;
  ring: string;
}[] = [
  {
    num: 1,
    icon: ClipboardListIcon,
    title: "DIAGNÓSTICO",
    description: "Analizamos tu negocio a profundidad.",
    glow: "gold",
    border: "border-amber-400/60",
    ring: "icon-ring-gold",
  },
  {
    num: 2,
    icon: MagnifierIcon,
    title: "DETECTAMOS",
    description: "Identificamos oportunidades y amenazas clave.",
    glow: "teal",
    border: "border-teal-400/60",
    ring: "icon-ring-teal",
  },
  {
    num: 3,
    icon: ChessKingIcon,
    title: "ESTRATEGIA",
    description: "Diseñamos tu plan a medida.",
    glow: "blue",
    border: "border-blue-400/60",
    ring: "icon-ring-blue",
  },
  {
    num: 4,
    icon: RocketLaunchIcon,
    title: "EJECUCIÓN",
    description: "Implementas y escalas con acompañamiento.",
    glow: "red",
    border: "border-rose-400/60",
    ring: "icon-ring-red",
  },
];

const trustItems = [
  { icon: Clock, text: "Diagnóstico en 48h" },
  { icon: Lightbulb, text: "Estrategias personalizadas" },
  { icon: TrendingUp, text: "Resultados medibles" },
];

const formBadges = [
  { icon: ShieldOutlineIcon, text: "Seguro y confidencial" },
  { icon: TimerIcon, text: "Resultados en 48 horas" },
  { icon: BadgeCheckIcon, text: "Estrategia personalizada" },
];

const partnerLogos = ["INNOVATECH", "CRECE+", "VISIÓN360", "ALIANZA ESTRATÉGICA"];

export const LandingPage: React.FC<LandingPageProps> = ({
  userEmail,
  setUserEmail,
  isLoading,
  onJugadaMaestra,
  onAuditoriaGratis,
  onAgendarEmail,
  onOpenMenu,
}) => {
  return (
    <div className="w-full bg-[#050a12] text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${chessHeroBackground}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(5,10,18,0.92) 0%, rgba(5,10,18,0.75) 45%, rgba(5,10,18,0.55) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-10 py-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/40 flex items-center justify-center">
              <Crown className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-sm font-serif font-black text-white tracking-wide">
              Estrategia Científica
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {[
              { label: "Diagnóstico", action: onAuditoriaGratis },
              { label: "Estrategia", action: onJugadaMaestra },
            ].map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={link.action}
                className="text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors cursor-pointer uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </div>
          {onOpenMenu && (
            <button
              type="button"
              onClick={onOpenMenu}
              className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
              aria-label="Abrir menú"
            >
              <Menu className="w-5 h-5 text-white/80" />
            </button>
          )}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-24 sm:py-28 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
          >
            <h1 className="text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-black leading-[1.15] tracking-tight text-white">
              ¿Tu negocio es un{" "}
              <span className="text-amber-400 italic">hobby</span>... o una
              máquina de generar{" "}
              <span className="text-amber-400">riqueza?</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg font-sans">
              Descubre si tu negocio está listo para crecer, vender y escalar con
              estrategia. Solicita una auditoría instantánea para posicionar tu
              marca hoy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                type="button"
                onClick={onJugadaMaestra}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0a0f18] text-[11px] sm:text-sm font-black uppercase tracking-wider rounded-full shadow-lg shadow-amber-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                ¡QUIERO MI JUGADA MAESTRA! 🚀
              </button>
              <button
                type="button"
                onClick={onAuditoriaGratis}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-teal-600/20 hover:bg-teal-600/30 border border-teal-500/50 text-teal-300 text-[11px] sm:text-sm font-black uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Gift className="w-4 h-4" />
                ¡QUIERO MI AUDITORÍA GRATIS! ⭐
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-3 justify-center md:justify-start">
              {trustItems.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold"
                >
                  <item.icon className="w-3.5 h-3.5 text-amber-400/80" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-[#050a12]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px]">
              <div className="absolute -inset-4 bg-gradient-to-b from-amber-500/10 to-teal-500/5 rounded-[3rem] blur-2xl" />
              <div className="relative rounded-[2.5rem] border-[3px] border-slate-700/80 bg-[#0d1520] p-3 shadow-2xl shadow-black/50">
                <div className="rounded-[2rem] overflow-hidden border border-white/5">
                  <div
                    className="h-[480px] sm:h-[520px] bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${chessHeroBackground}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050a12]/60 to-[#050a12]/90" />
                    <div className="relative p-5 space-y-3">
                      <p className="text-[9px] text-amber-400 font-mono uppercase tracking-widest">
                        Estrategia Científica
                      </p>
                      <p className="text-lg font-serif font-black text-white leading-tight">
                        ¿Tu negocio es un{" "}
                        <span className="text-amber-400">hobby</span>...?
                      </p>
                      <div className="space-y-2 pt-2">
                        {benefitCards.slice(0, 3).map((card) => (
                          <div
                            key={card.title}
                            className={`p-2.5 rounded-xl bg-white/5 border ${card.border} backdrop-blur-sm`}
                          >
                            <p className="text-[8px] font-black text-white/90">
                              {card.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-600 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-black text-amber-400 uppercase tracking-wide text-center md:text-left">
              Lo que te llevas con tu diagnóstico:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefitCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-5 sm:p-6 rounded-2xl bg-white/[0.03] border ${card.border} backdrop-blur-sm hover:bg-white/[0.06] transition-colors flex flex-col items-center text-center`}
                >
                  <div className={`mb-4 ${iconGlowClass[card.glow]}`}>
                    <card.icon color={glowColors[card.glow]} size={48} />
                  </div>
                  <h3 className="text-xs font-black text-white tracking-wide mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ── */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-[#070d18]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-lg sm:text-xl md:text-2xl font-serif font-black text-amber-400 uppercase tracking-wide mb-10 sm:mb-14 px-2">
            Tu jugada maestra en 4 pasos
          </h2>

          <div className="relative">
            <div className="hidden lg:block absolute top-[58px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-slate-600/80 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl sm:text-5xl font-serif font-black text-white/15 leading-none select-none">
                      {step.num}
                    </span>
                    <div
                      className={`w-[52px] h-[52px] rounded-full bg-transparent border ${step.border} ${step.ring} flex items-center justify-center relative z-10`}
                    >
                      <div className={iconGlowClass[step.glow]}>
                        <step.icon color={glowColors[step.glow]} size={26} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-white tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${chessHeroBackground}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a12] via-[#050a12]/95 to-[#050a12]/80" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-black text-amber-400 leading-tight">
              TU NEGOCIO MERECE MÁS QUE SUERTE. MERECE ESTRATEGIA.
            </h2>
            <p className="mt-5 text-sm text-slate-300 leading-relaxed max-w-md">
              Deja de improvisar y empieza a jugar con ventaja. Agenda tu
              auditoría gratuita y descubre el movimiento que transformará tu
              negocio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0d1520]/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-black/40"
          >
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-wide">
                  ¡QUIERO MI AUDITORÍA GRATIS!
                </h3>
                <p className="text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">
                  Sin compromiso · 100% personalizada
                </p>
              </div>
            </div>

            <form onSubmit={onAgendarEmail} className="space-y-4">
              <input
                required
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Ingresa tu correo electrónico"
                className="w-full bg-[#050a12] border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0a0f18] text-sm font-black uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? "Procesando..." : "AGENDAR AHORA"}
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 justify-center sm:justify-start">
              {formBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-1.5 text-[10px] text-slate-500"
                >
                  <span className="icon-glow-gold-sm">
                    <badge.icon color="#d4a853" size={14} />
                  </span>
                  {badge.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER / SOCIAL PROOF ── */}
      <footer className="py-10 sm:py-12 px-4 sm:px-6 md:px-10 border-t border-white/5 bg-[#050a12]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold mb-6 sm:mb-8 px-2">
            Empresas que ya jugaron su mejor movimiento
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12">
            {partnerLogos.map((logo) => (
              <span
                key={logo}
                className="text-[10px] sm:text-sm md:text-base font-black text-slate-600 tracking-widest uppercase hover:text-slate-400 transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
          <p className="mt-10 text-[10px] text-slate-600">
            © {new Date().getFullYear()} Estrategia Científica · MiniLabMentor IA
          </p>
        </div>
      </footer>
    </div>
  );
};
