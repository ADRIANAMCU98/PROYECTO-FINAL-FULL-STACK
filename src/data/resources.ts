export type ResourceCategory = "recurso" | "plantilla";

export interface DownloadableResource {
  id: string;
  title: string;
  description: string;
  filename: string;
  category: ResourceCategory;
  content: string;
}

export const FREE_RESOURCES: DownloadableResource[] = [
  {
    id: "ganchos-psicobio",
    title: "Guía de Ganchos Psicobioinstintivos 2026",
    description:
      "La matriz exacta de 47 títulos listos para rellenar que detienen el scroll vertical de tus clientes ideales en Instagram, TikTok y LinkedIn.",
    filename: "MiniLabMentor-Guia-Ganchos-Psicobioinstintivos-2026.txt",
    category: "recurso",
    content: `MINILABMENTOR — GUÍA DE GANCHOS PSICOBIOINSTITUTIVOS 2026
============================================================

Cómo usar esta guía
-------------------
1. Elige 3 ganchos por semana según tu nicho.
2. Adapta el [resultado] y el [tiempo] a tu caso real.
3. Publica con un CTA claro: auditoría, llamada o lead magnet.

MATRIZ DE 47 GANCHOS LISTOS PARA USAR
-------------------------------------

INSTAGRAM / REELS (15)
1. "El error de €[X] que cometen el 90% de [nicho] en su primer año"
2. "Si cobras menos de [precio], probablemente estás regalando tu expertise"
3. "3 señales de que tu negocio es un hobby disfrazado de empresa"
4. "Lo que nadie te dice sobre escalar [servicio] sin quemarte"
5. "Cómo pasé de [A] a [B] en [tiempo] sin más horas de trabajo"
6. "El cliente ideal no compra barato: compra certeza"
7. "Deja de vender características. Vende este resultado en 15 segundos"
8. "La frase exacta que uso cuando dicen 'lo voy a pensar'"
9. "Por qué tu contenido educa pero no convierte (y cómo arreglarlo hoy)"
10. "Checklist de 60 segundos antes de publicar cualquier post de ventas"
11. "Si tu DM está vacío, revisa estos 4 puntos de tu perfil"
12. "El precio premium no se justifica con palabras: se demuestra así"
13. "3 objeciones que matan tus ventas y cómo responder sin descontar"
14. "Qué publicar cuando no tienes testimonios (aún)"
15. "La rutina de 20 minutos que uso para crear contenido que vende"

LINKEDIN (12)
16. "Opinión impopular: [creencia común en tu sector] está frenando tu facturación"
17. "Hace [tiempo] creía que más clientes = más ingresos. Estaba equivocado/a"
18. "Framework de 4 pasos para posicionarte como autoridad en [nicho]"
19. "La diferencia entre un freelancer y un consultor de élite (tabla comparativa)"
20. "Cómo estructurar una propuesta que el cliente no puede ignorar"
21. "3 métricas que reviso cada lunes antes de tomar decisiones de marketing"
22. "Si tu propuesta tiene más de 2 páginas, probablemente pierdes la venta"
23. "El error de copiar estrategias de influencers que facturan distinto a ti"
24. "Cómo convertir un post educativo en 2 llamadas de venta esta semana"
25. "Plantilla de mensaje para reactivar leads fríos sin sonar desesperado"
26. "Lo que aprendí al subir mis precios un 40% y perder solo 1 cliente"
27. "Tu competencia no es otro proveedor: es la indecisión de tu prospecto"

TIKTOK / CORTOS (10)
28. "POV: descubres que tu negocio puede facturar el doble con este cambio"
29. "3 red flags de que estás infravalorando tu servicio"
30. "El gancho de 3 segundos que uso en todas mis piezas de venta"
31. "Cliente: '¿tienes descuento?' — Yo: [respuesta]"
32. "Si haces esto en tu bio, estás perdiendo leads todos los días"
33. "Cómo sonar premium sin parecer inalcanzable"
34. "El mito del 'más contenido = más ventas' destruido en 30 segundos"
35. "Antes vs después de tener una oferta clara"
36. "1 pregunta que filtra clientes tóxicos antes de la llamada"
37. "Cuando tu negocio depende 100% de ti, no tienes empresa: tienes empleo"

EMAIL / DM (10)
38. "Asunto: [Nombre], vi esto y pensé en tu [problema específico]"
39. "¿Sigue siendo prioridad para ti [resultado deseado] este trimestre?"
40. "Te comparto 1 acción concreta para mejorar [métrica] esta semana"
41. "¿Te va bien si te envío un diagnóstico rápido de tu [canal/embudo]?"
42. "Gracias por tu tiempo — aquí el siguiente paso si quieres avanzar"
43. "Vi tu [post/web/perfil] y detecté 2 oportunidades inmediatas"
44. "Propuesta express: cómo podríamos trabajar juntos en 30 días"
45. "Último recordatorio amable antes de cerrar tu expediente en mi lista"
46. "Caso real: cómo [tipo de cliente] resolvió [problema] en [plazo]"
47. "¿Prefieres que te envíe el plan por escrito o lo vemos en 15 min?"

PLANTILLA DE ADAPTACIÓN RÁPIDA
-------------------------------
Gancho: [tipo de dolor] + [resultado medible] + [plazo o facilidad]
Ejemplo: "Cómo reducir objeciones de precio en llamadas de [servicio] en 7 días"

---
Generado por MiniLabMentor IA — Estrategia Científica
https://proyecto-final-full-stack-nine.vercel.app
`,
  },
  {
    id: "checklist-conversion",
    title: "Checklist de Auditoría de Conversión Web",
    description:
      "Revisa punto por punto si tu página actual tiene los 12 disparadores del alto valor o si estás perdiendo llamadas por fricción de diseño.",
    filename: "MiniLabMentor-Checklist-Auditoria-Conversion-Web.txt",
    category: "recurso",
    content: `MINILABMENTOR — CHECKLIST DE AUDITORÍA DE CONVERSIÓN WEB
============================================================

Instrucciones: marca SÍ / NO / PARCIAL en cada ítem. Si tienes menos de 8 SÍ, tu web está frenando ventas.

BLOQUE 1 — PRIMER IMPACTO (3 segundos)
[ ] 1. El titular comunica un resultado claro (no solo el nombre del negocio)
[ ] 2. El subtítulo explica para quién es y qué problema resuelve
[ ] 3. Hay un CTA visible sin hacer scroll (llamada, auditoría o reserva)
[ ] 4. La propuesta se entiende sin conocer jerga del sector

BLOQUE 2 — CREDIBILIDAD Y CONFIANZA
[ ] 5. Prueba social visible: testimonios, logos, casos o cifras
[ ] 6. Foto real del fundador/equipo (no solo stock genérico)
[ ] 7. Garantía, proceso o política clara que reduzca el riesgo percibido
[ ] 8. Contacto o siguiente paso accesible en menos de 2 clics

BLOQUE 3 — OFERTA Y CONVERSIÓN
[ ] 9. La oferta principal está diferenciada (no "servicios varios" vagos)
[ ] 10. Beneficios traducidos a resultados, no solo características
[ ] 11. Objeciones frecuentes respondidas (precio, tiempo, experiencia)
[ ] 12. Formulario simple: máximo 3-4 campos para lead inicial

BLOQUE 4 — FRICCIÓN TÉCNICA
[ ] 13. Carga rápida en móvil (menos de 3 segundos perceptibles)
[ ] 14. Botones y enlaces funcionan en pantalla táctil
[ ] 15. WhatsApp, Calendly o canal de contacto preferido integrado
[ ] 16. Sin distracciones que saquen al visitante del embudo principal

PUNTUACIÓN RÁPIDA
-----------------
16-14 SÍ  → Web optimizada para conversión
13-10 SÍ  → Buena base, ajustes tácticos pendientes
9-6 SÍ    → Fugas importantes de leads
5 o menos → Reestructuración prioritaria del mensaje y CTA

ACCIONES INMEDIATAS (esta semana)
---------------------------------
1. Reescribe el H1 con formato: "Ayudo a [avatar] a [resultado] en [plazo]"
2. Sube el CTA principal al hero
3. Añade 1 testimonio o mini-caso con resultado numérico
4. Reduce el formulario al mínimo viable

---
Generado por MiniLabMentor IA — Estrategia Científica
`,
  },
  {
    id: "ebook-escalado",
    title: "Ebook: El Tablero del Escalado Inmediato",
    description:
      "Introducción teórica y ejemplos de cómo reorganizar tus precios para duplicar ingresos de marca sin aumentar tus horas laborales.",
    filename: "MiniLabMentor-Ebook-Tablero-Escalado-Inmediato.txt",
    category: "recurso",
    content: `MINILABMENTOR — EBOOK: EL TABLERO DEL ESCALADO INMEDIATO
=========================================================

CAPÍTULO 1 — DIAGNÓSTICO: ¿HOBBY O MÁQUINA DE RIQUEZA?
-------------------------------------------------------
Un negocio escalable cumple 3 condiciones:
• Oferta repetible (no depende de improvisación cada venta)
• Precio alineado al valor percibido (no al miedo)
• Sistema de adquisición predecible (no solo referidos)

Ejercicio: anota tus últimas 5 ventas.
- ¿Cuántas horas invertiste por cliente?
- ¿Cuál fue tu margen real?
- ¿Podrías vender lo mismo al doble de precio con el mismo resultado?

CAPÍTULO 2 — REORGANIZACIÓN DE PRECIOS
---------------------------------------
Modelo de 3 niveles:
1. Entrada — diagnóstico / auditoría (bajo riesgo para el cliente)
2. Core — transformación principal (donde está tu margen)
3. Élite — acompañamiento 1:1 o done-for-you (alto ticket)

Regla: si más del 70% compra solo el nivel más barato, tu oferta core no está clara.

CAPÍTULO 3 — DUPLICAR INGRESOS SIN MÁS HORAS
--------------------------------------------
Palancas inmediatas:
A) Subir precio 20-30% a nuevos clientes (mantén legacy si necesario)
B) Empaquetar servicios sueltos en un programa de 30-90 días
C) Automatizar seguimiento y precalificación con plantillas
D) Delegar tareas de €10-15/h para liberar ventas de €100+/h

CAPÍTULO 4 — TABLERO DE CONTROL SEMANAL
---------------------------------------
Revisa cada lunes:
| Métrica              | Meta    | Real   |
|----------------------|---------|--------|
| Leads cualificados   |         |        |
| Llamadas agendadas   |         |        |
| Propuestas enviadas  |         |        |
| Cierres              |         |        |
| Ticket medio         |         |        |

CAPÍTULO 5 — PLAN DE 30 DÍAS
----------------------------
Semana 1: Auditoría de oferta y precios
Semana 2: Nuevo mensaje + 3 piezas de contenido de venta
Semana 3: 10 conversaciones comerciales activas
Semana 4: Cierre, testimonio y optimización del embudo

---
Generado por MiniLabMentor IA — Estrategia Científica
`,
  },
];

export const TEMPLATE_RESOURCES: DownloadableResource[] = [
  {
    id: "plantilla-propuesta",
    title: "Plantilla de Propuesta Comercial Premium",
    description: "Estructura lista para copiar: diagnóstico, solución, inversión, garantía y siguiente paso.",
    filename: "MiniLabMentor-Plantilla-Propuesta-Comercial.txt",
    category: "plantilla",
    content: `PLANTILLA — PROPUESTA COMERCIAL PREMIUM
========================================

PARA: [Nombre del cliente / empresa]
DE: [Tu nombre / marca]
FECHA: [DD/MM/AAAA]
VALIDEZ: 7 días

1. CONTEXTO Y DIAGNÓSTICO
-------------------------
Tras nuestra conversación, identificamos que [empresa] busca [resultado principal].
Los principales bloqueos detectados son:
• [Bloqueo 1]
• [Bloqueo 2]
• [Bloqueo 3]

2. OBJETIVO DEL PROYECTO
------------------------
En [plazo], lograremos:
→ [Resultado medible 1]
→ [Resultado medible 2]
→ [Resultado medible 3]

3. SOLUCIÓN PROPUESTA
---------------------
Fase 1 — [Nombre] ([duración])
Entregables: [lista]
Fase 2 — [Nombre] ([duración])
Entregables: [lista]

4. INVERSIÓN
------------
Programa completo: [precio] [moneda]
Forma de pago: [50% inicio / 50% entrega] o [mensual]

5. GARANTÍA Y COMPROMISO
------------------------
[Ej: Si en 30 días no obtienes X, trabajamos Y sin costo adicional]

6. SIGUIENTE PASO
-----------------
Confirma con un "adelante" por email o agenda aquí: [enlace calendario]

---
MiniLabMentor IA — Plantilla editable
`,
  },
  {
    id: "plantilla-seguimiento",
    title: "Plantilla de Seguimiento Semanal de Metas",
    description: "Tablero de 7 días para ejecutar tu plan estratégico con métricas y revisiones.",
    filename: "MiniLabMentor-Plantilla-Seguimiento-Semanal.txt",
    category: "plantilla",
    content: `PLANTILLA — SEGUIMIENTO SEMANAL DE METAS
=========================================

SEMANA DEL: [fecha] al [fecha]
NEGOCIO: [nombre]
META DEL MES: [objetivo principal]

LUNES — Planificación
[ ] Revisar métricas de la semana anterior
[ ] Definir 3 prioridades no negociables
[ ] Bloquear tiempo de ventas en calendario

MARTES — Contenido y visibilidad
[ ] Publicar pieza 1: [tema]
[ ] Responder DMs / leads pendientes

MIÉRCOLES — Prospección activa
[ ] [ ] contactos nuevos
[ ] [ ] seguimientos a propuestas enviadas

JUEVES — Entrega y operaciones
[ ] Avanzar entregables de clientes actuales
[ ] Documentar 1 proceso repetible

VIERNES — Ventas y cierre
[ ] [ ] llamadas de venta
[ ] Enviar [ ] propuestas

SÁBADO — Revisión ligera (opcional)
[ ] Anotar aprendizajes de la semana

DOMINGO — Descanso estratégico
[ ] Visualizar prioridades del lunes

MÉTRICAS DE LA SEMANA
Leads: ___ | Llamadas: ___ | Cierres: ___ | Facturación: ___

APRENDIZAJE CLAVE:
_________________________________________________

---
MiniLabMentor IA — Plantilla editable
`,
  },
  {
    id: "plantilla-auditoria-precios",
    title: "Guía de Auditoría de Precios y Márgenes",
    description: "Calcula tu tarifa real, detecta fugas de margen y define tu precio premium.",
    filename: "MiniLabMentor-Guia-Auditoria-Precios.txt",
    category: "plantilla",
    content: `GUÍA — AUDITORÍA DE PRECIOS Y MÁRGENES
=======================================

PASO 1 — COSTO REAL POR HORA
Ingresos deseados anuales: _______
Semanas trabajadas al año: _______
Horas facturables por semana: _______
Costos fijos mensuales: _______

Tarifa mínima = (ingresos + costos anuales) / horas facturables anuales
Resultado: _______ / hora

PASO 2 — VALOR PERCIBIDO VS PRECIO ACTUAL
¿Qué resultado económico generas al cliente? _______
¿Cuánto cobras hoy? _______
Ratio valor/precio (ideal > 5:1): _______

PASO 3 — SEÑALES DE PRECIO BAJO
Marca las que apliquen:
[ ] Clientes piden descuento siempre
[ ] Agenda al 100% pero facturas poco
[ ] Competencia claramente inferior cobra más
[ ] Te dicen "sí" demasiado rápido

PASO 4 — NUEVO PRECIO PROPUESTO
Precio actual: _______
Incremento sugerido (+20-40%): _______
Fecha de aplicación a nuevos clientes: _______

PASO 5 — SCRIPT PARA COMUNICAR EL CAMBIO
"A partir de [fecha], las nuevas incorporaciones acceden al programa a [precio],
que refleja [resultado / experiencia / demanda]. Los clientes actuales mantienen [condición]."

---
MiniLabMentor IA — Guía editable
`,
  },
];

export const ALL_DOWNLOADABLES = [...FREE_RESOURCES, ...TEMPLATE_RESOURCES];

export function getResourceById(id: string): DownloadableResource | undefined {
  return ALL_DOWNLOADABLES.find((resource) => resource.id === id);
}
