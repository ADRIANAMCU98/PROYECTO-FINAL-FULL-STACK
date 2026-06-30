# MiniLabMentor — Proyecto Final Full Stack

Plataforma de mentoría empresarial con IA (Gemini) para diagnóstico estratégico, planes de 7 días y seguimiento de metas.

**Repositorio:** [ADRIANAMCU98/PROYECTO-FINAL-FULL-STACK](https://github.com/ADRIANAMCU98/PROYECTO-FINAL-FULL-STACK)  
**Deploy:** [proyecto-final-full-stack-alpha.vercel.app](https://proyecto-final-full-stack-alpha.vercel.app)

## Requisitos

- Node.js 18+
- Clave de API de [Google AI Studio](https://aistudio.google.com/apikey) (`GEMINI_API_KEY`)

## Desarrollo local

```bash
npm install
cp .env.example .env.local
# Edita .env.local y añade tu GEMINI_API_KEY
npm run dev
```

Abre http://localhost:3000

## Despliegue en Vercel

1. Conecta el repositorio de GitHub en [Vercel](https://vercel.com).
2. En **Settings → Environment Variables**, añade:
   - `GEMINI_API_KEY` = tu clave de Gemini
3. Deploy automático en cada push a `main`.

La API corre en funciones serverless (`/api/generate-plan`, `/api/motivation-fallback`). El frontend se sirve como SPA desde `dist/`.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor local con Vite + Express |
| `npm run build` | Build producción (frontend + servidor Node) |
| `npm run build:vercel` | Solo frontend (usado por Vercel) |
| `npm run start` | Servidor producción local |

## Estructura

- `src/` — React + Tailwind (UI)
- `api/` — Endpoints serverless para Vercel
- `lib/gemini.ts` — Lógica compartida de Gemini
- `server.ts` — Servidor local de desarrollo
