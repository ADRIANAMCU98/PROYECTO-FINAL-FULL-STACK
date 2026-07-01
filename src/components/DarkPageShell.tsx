import React from "react";
import { ArrowLeft, Crown } from "lucide-react";

// @ts-expect-error - Vite static asset import
import chessHeroBackground from "../assets/images/chess_hero_background.png";

interface DarkPageShellProps {
  title: string;
  subtitle?: string;
  onBack: () => void;
  children: React.ReactNode;
  badge?: string;
}

export const DarkPageShell: React.FC<DarkPageShellProps> = ({
  title,
  subtitle,
  onBack,
  children,
  badge,
}) => {
  return (
    <div className="min-h-screen w-full bg-[#050a12] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#050a12]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Volver al inicio"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
          </button>

          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-amber-400/80 font-mono uppercase tracking-widest truncate">
                Estrategia Científica
              </p>
              <h1 className="text-sm sm:text-base font-serif font-black text-white truncate">
                {title}
              </h1>
            </div>
          </div>

          {badge && (
            <span className="hidden sm:inline-flex text-[9px] font-black uppercase tracking-wider text-teal-300 bg-teal-500/10 border border-teal-500/30 px-2.5 py-1 rounded-full shrink-0">
              {badge}
            </span>
          )}
        </div>
      </header>

      {/* Hero strip */}
      <div className="relative h-28 sm:h-36 md:h-44 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${chessHeroBackground}')` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#050a12]/40 via-[#050a12]/80 to-[#050a12]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex flex-col justify-end pb-4 sm:pb-6">
          {badge && (
            <span className="sm:hidden inline-flex self-start text-[9px] font-black uppercase tracking-wider text-teal-300 bg-teal-500/10 border border-teal-500/30 px-2.5 py-1 rounded-full mb-2">
              {badge}
            </span>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
        {children}
      </main>
    </div>
  );
};
