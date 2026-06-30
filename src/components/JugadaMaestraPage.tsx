import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  Crown,
  CheckCircle2,
  Clock,
  Shield,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { DarkPageShell } from "./DarkPageShell";

interface JugadaMaestraPageProps {
  onBack: () => void;
  businessName: string;
  setBusinessName: (v: string) => void;
  userEmail: string;
  setUserEmail: (v: string) => void;
  credits: number;
  onRechargeCredits: () => void;
  onConfirmBooking: (data: {
    name: string;
    date: string;
    hour: string;
    business: string;
    email: string;
  }) => void;
}

const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM", "07:30 PM"];

const benefits = [
  "45 minutos de alto impacto estratégico",
  "Hoja de ruta 100% práctica y accionable",
  "Sin compromiso ni presión de venta",
  "Cupos limitados de la semana",
];

export const JugadaMaestraPage: React.FC<JugadaMaestraPageProps> = ({
  onBack,
  businessName,
  setBusinessName,
  userEmail,
  setUserEmail,
  credits,
  onRechargeCredits,
  onConfirmBooking,
}) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("2026-06-30");
  const [selectedHour, setSelectedHour] = useState("11:30 AM");
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full bg-[#0d1520] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 transition-colors";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmBooking({
      name,
      date,
      hour: selectedHour,
      business: businessName,
      email: userEmail,
    });
    setSubmitted(true);
  };

  return (
    <DarkPageShell
      title="¡QUIERO MI JUGADA MAESTRA!"
      subtitle="Agenda tu sesión estratégica gratuita de 45 minutos con Adriana Mentora. Descifra tus bloqueos de flujo de caja y estructura tu hoja de ruta táctica."
      onBack={onBack}
      badge="Sesión 1:1"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
              Sesión táctica 1:1 recomendada
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-black text-white leading-tight">
            Tu <span className="text-amber-400">Jugada Maestra</span> está a un clic
          </h2>

          <p className="text-sm text-slate-400 leading-relaxed">
            El siguiente paso innegociable es agendar tu sesión estratégica gratuita para
            descifrar bloqueos de flujo de caja, subir tus precios y trazar un plan con
            claridad táctica del 100%.
          </p>

          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: Shield, text: "Seguro y confidencial" },
              { icon: Clock, text: "Resultados en 48h" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5 text-[10px] text-slate-500">
                <item.icon className="w-3 h-3 text-amber-400/70" />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — booking form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7"
        >
          <div className="bg-[#0d1520]/90 border border-amber-500/25 rounded-2xl p-5 sm:p-7 lg:p-8 backdrop-blur-md shadow-2xl shadow-black/30">
            {submitted ? (
              <div className="text-center py-8 sm:py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-serif font-black text-white">
                  ¡Cita confirmada!
                </h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                  Te hemos enviado las credenciales de Zoom al correo{" "}
                  <span className="text-amber-400">{userEmail}</span>
                </p>
                <button
                  type="button"
                  onClick={onBack}
                  className="mt-4 px-6 py-3 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Volver al inicio
                </button>
              </div>
            ) : credits <= 0 ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-sm text-amber-300 font-bold">
                  No tienes créditos disponibles para agendar hoy.
                </p>
                <p className="text-xs text-slate-400">
                  Recarga tus 3 diagnósticos gratuitos al instante.
                </p>
                <button
                  type="button"
                  onClick={onRechargeCredits}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a0f18] text-xs font-black uppercase rounded-xl cursor-pointer flex items-center gap-2 mx-auto"
                >
                  <RefreshCw className="w-4 h-4" />
                  Recargar 3 créditos gratis
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="p-3 rounded-xl bg-teal-500/5 border border-teal-500/20">
                  <p className="text-[11px] text-slate-400">
                    Agendar consumirá{" "}
                    <strong className="text-amber-400">1 crédito</strong>. Saldo
                    posterior: <strong className="text-white">{credits - 1}</strong>
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300">
                    Nombre y apellidos <span className="text-amber-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Ej: Sofía Martínez"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300">
                    Correo electrónico <span className="text-amber-400">*</span>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      Fecha de sesión <span className="text-amber-400">*</span>
                    </label>
                    <input
                      required
                      type="date"
                      min="2026-06-22"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-300">
                      Tu negocio / idea
                    </label>
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className={inputClass}
                      placeholder="Ej: Cafetería Aromas"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300">
                    Hora favorita <span className="text-[10px] text-slate-500 font-normal">(Zona Central)</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((hour) => {
                      const isSelected = selectedHour === hour;
                      return (
                        <button
                          key={hour}
                          type="button"
                          onClick={() => setSelectedHour(hour)}
                          className={`py-2.5 px-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
                              : "bg-[#050a12] border-slate-700 text-slate-400 hover:border-slate-500"
                          }`}
                        >
                          {hour}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0a0f18] text-sm font-black uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Confirmar cita (1 crédito)
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </DarkPageShell>
  );
};
