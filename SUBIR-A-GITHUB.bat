@echo off
chcp 65001 >nul
echo.
echo  ============================================
echo   MiniLabMentor - Subir a GitHub (Adriana)
echo  ============================================
echo.
echo  Repositorio: ADRIANAMCU98/PROYECTO-FINAL-FULL-STACK
echo.
echo  IMPORTANTE: Inicia sesion con la cuenta ADRIANAMCU98
echo  Si falla, crea un token en:
echo  https://github.com/settings/tokens
echo.
pause
git push origin main
echo.
if %ERRORLEVEL% EQU 0 (
  echo  Listo! Codigo subido a GitHub.
  echo  Ahora conecta el repo en https://vercel.com/new
) else (
  echo  Error al subir. Ejecuta en PowerShell:
  echo  git credential-manager erase https://github.com
  echo  git push origin main
)
echo.
pause
