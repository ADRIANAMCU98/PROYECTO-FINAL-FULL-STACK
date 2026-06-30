import React from "react";

type IconProps = {
  className?: string;
  color?: string;
  size?: number;
};

const sw = 1.25;

/** Claridad Total — diana con flecha */
export const TargetArrowIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="16" stroke={color} strokeWidth={sw} />
    <circle cx="24" cy="24" r="10" stroke={color} strokeWidth={sw} />
    <circle cx="24" cy="24" r="4" stroke={color} strokeWidth={sw} />
    <line x1="32" y1="16" x2="24" y2="24" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    <polyline points="28,12 32,16 28,20" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

/** Puntos Ciegos — ojo estilizado */
export const StylizedEyeIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M6 24 C12 14 18 12 24 12 C30 12 36 14 42 24 C36 34 30 36 24 36 C18 36 12 34 6 24 Z"
      stroke={color}
      strokeWidth={sw}
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="5" stroke={color} strokeWidth={sw} />
    <circle cx="24" cy="24" r="2" fill={color} />
  </svg>
);

/** Acciones Prioritarias / Estrategia — rey de ajedrez */
export const ChessKingIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <line x1="24" y1="8" x2="24" y2="12" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    <line x1="20" y1="10" x2="28" y2="10" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    <path d="M18 12 H30 L28 18 H20 Z" stroke={color} strokeWidth={sw} strokeLinejoin="round" />
    <rect x="19" y="18" width="10" height="8" rx="1" stroke={color} strokeWidth={sw} />
    <path d="M16 26 H32 L30 36 H18 Z" stroke={color} strokeWidth={sw} strokeLinejoin="round" />
    <line x1="14" y1="36" x2="34" y2="36" stroke={color} strokeWidth={sw} strokeLinecap="round" />
  </svg>
);

/** Ruta de Crecimiento — barras con flecha ascendente */
export const GrowthChartIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <line x1="10" y1="36" x2="38" y2="36" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    <rect x="12" y="28" width="5" height="8" stroke={color} strokeWidth={sw} />
    <rect x="19" y="24" width="5" height="12" stroke={color} strokeWidth={sw} />
    <rect x="26" y="20" width="5" height="16" stroke={color} strokeWidth={sw} />
    <rect x="33" y="14" width="5" height="22" stroke={color} strokeWidth={sw} />
    <polyline points="30,10 36,10 36,16" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="24" y1="18" x2="36" y2="10" stroke={color} strokeWidth={sw} strokeLinecap="round" />
  </svg>
);

/** Diagnóstico — portapapeles con checklist */
export const ClipboardListIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <rect x="14" y="10" width="20" height="30" rx="2" stroke={color} strokeWidth={sw} />
    <rect x="18" y="6" width="12" height="6" rx="2" stroke={color} strokeWidth={sw} />
    <line x1="20" y1="20" x2="28" y2="20" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    <line x1="20" y1="26" x2="28" y2="26" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    <line x1="20" y1="32" x2="28" y2="32" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    <polyline points="16,20 17.5,21.5 20,19" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="16,26 17.5,27.5 20,25" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="16,32 17.5,33.5 20,31" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

/** Detectamos — lupa */
export const MagnifierIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <circle cx="22" cy="22" r="10" stroke={color} strokeWidth={sw} />
    <line x1="30" y1="30" x2="38" y2="38" stroke={color} strokeWidth={sw + 0.25} strokeLinecap="round" />
  </svg>
);

/** Ejecución — cohete inclinado hacia arriba-derecha */
export const RocketLaunchIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 48,
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <g transform="rotate(-35 24 24)">
      <path
        d="M24 10 C24 10 30 14 30 22 C30 28 26 32 24 34 C22 32 18 28 18 22 C18 14 24 10 24 10 Z"
        stroke={color}
        strokeWidth={sw}
        strokeLinejoin="round"
      />
      <circle cx="24" cy="20" r="2.5" stroke={color} strokeWidth={sw} />
      <path d="M20 30 L16 36" stroke={color} strokeWidth={sw} strokeLinecap="round" />
      <path d="M28 30 L32 36" stroke={color} strokeWidth={sw} strokeLinecap="round" />
      <path d="M24 34 L24 40" stroke={color} strokeWidth={sw} strokeLinecap="round" />
    </g>
  </svg>
);

/** Formulario — escudo */
export const ShieldOutlineIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 16,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 3 L19 6 V12 C19 16.5 16 19.5 12 21 C8 19.5 5 16.5 5 12 V6 Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);

/** Formulario — reloj */
export const TimerIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 16,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="13" r="8" stroke={color} strokeWidth={1.5} />
    <line x1="12" y1="13" x2="12" y2="9" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <line x1="12" y1="13" x2="15" y2="13" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <line x1="10" y1="3" x2="14" y2="3" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <line x1="12" y1="3" x2="12" y2="5" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

/** Formulario — insignia con check */
export const BadgeCheckIcon: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 16,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 2 L20 5 V11 C20 15 17 18 12 22 C7 18 4 15 4 11 V5 Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <polyline points="8,11 10.5,13.5 16,9" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export type GlowColor = "gold" | "teal" | "blue" | "red";

export const glowColors: Record<GlowColor, string> = {
  gold: "#fbbf24",
  teal: "#2dd4bf",
  blue: "#60a5fa",
  red: "#f87171",
};

export const iconGlowClass: Record<GlowColor, string> = {
  gold: "icon-glow-gold",
  teal: "icon-glow-teal",
  blue: "icon-glow-blue",
  red: "icon-glow-red",
};
