# Guía rápida para Adriana

## Ver la web ahora (sin instalar nada)

Abre en el navegador:

**https://proyecto-final-full-stack-nine.vercel.app**

- Pestaña **Análisis** → formulario de autodiagnóstico con IA
- Pestaña **Estrategia** → plan generado por Gemini
- **Seguimiento** → panel de metas del plan de 7 días

La inteligencia artificial ya está configurada en el servidor (no hace falta poner la clave en el navegador).

---

## Panel de Vercel (donde está alojada)

1. Entra en https://vercel.com e inicia sesión (con GitHub si puedes).
2. Busca el proyecto **proyecto-final-full-stack**.
3. Ahí ves cada deploy, los logs y la variable `GEMINI_API_KEY` en **Settings → Environment Variables**.

Si no ves el proyecto, pide acceso al equipo que lo desplegó o sigue los pasos de abajo para importarlo en tu cuenta.

---

## Tener el proyecto en TU GitHub + Vercel (recomendado)

### Paso 1 — Subir el código a GitHub

En la carpeta del proyecto, con tu cuenta **ADRIANAMCU98**:

```powershell
cd "c:\Users\PC\Proyecto final adriana"
git push origin main
```

Si pide usuario/contraseña: usa un **Personal Access Token** de GitHub (no la contraseña normal).  
Crear token: GitHub → Settings → Developer settings → Personal access tokens.

### Paso 2 — Conectar Vercel con GitHub

1. https://vercel.com/new
2. **Import** el repo `ADRIANAMCU98/PROYECTO-FINAL-FULL-STACK`
3. Deja el build tal cual (Vercel lee `vercel.json` automáticamente).
4. En **Environment Variables** añade:
   - Nombre: `GEMINI_API_KEY`
   - Valor: tu clave de https://aistudio.google.com/apikey
5. Pulsa **Deploy**.

En 1–2 minutos tendrás tu propia URL tipo `proyecto-final-full-stack.vercel.app`.

### Paso 3 — Probar la IA

1. Entra en tu web → **Análisis**
2. Rellena el formulario y pulsa **Generar mi auditoría gratis**
3. Ve a **Estrategia** para ver el resultado

---

## Desarrollo en tu PC (opcional)

```powershell
npm install
```

Crea el archivo `.env.local` en la raíz del proyecto:

```
GEMINI_API_KEY=tu_clave_aqui
```

Luego:

```powershell
npm run dev
```

Abre http://localhost:3000

---

## Resumen de enlaces

| Qué | Enlace |
|-----|--------|
| Web en producción | https://proyecto-final-full-stack-nine.vercel.app |
| Repositorio GitHub | https://github.com/ADRIANAMCU98/PROYECTO-FINAL-FULL-STACK |
| Claves de Gemini | https://aistudio.google.com/apikey |
| Vercel | https://vercel.com |

---

## Si algo falla

- **"Error al contactar al mentor"** → Revisa que `GEMINI_API_KEY` esté en Vercel y vuelve a desplegar.
- **Página en blanco** → Espera 1 minuto tras el deploy y recarga.
- **No puedo hacer push a GitHub** → Inicia sesión en Git con la cuenta ADRIANAMCU98 o sube los archivos manualmente en github.com.
