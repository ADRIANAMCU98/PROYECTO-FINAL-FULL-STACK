import { GoogleGenAI, Type } from "@google/genai";

function getAI() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY no está configurada.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

function problemString(val: unknown): boolean {
  return typeof val === "string" && val.trim().length > 0;
}

export type GeneratePlanInput = {
  nicho?: string;
  problema?: string;
  equipo?: string;
  modeloNegocio?: string;
  mayorReto?: string;
  respuestasPreguntas?: Record<string, string>;
  nombreNegocio?: string;
};

export async function generatePlan(body: GeneratePlanInput) {
  const {
    nicho,
    problema,
    equipo,
    modeloNegocio,
    mayorReto,
    respuestasPreguntas,
    nombreNegocio,
  } = body;

  if (!problemString(problema) && !problemString(nicho)) {
    throw new Error("Por favor, escribe tu nicho y problema principal para poder guiarte.");
  }

  const promptText = `
    Eres una mentora de negocios sumamente perspicaz de "MinilabMentor IA".
    Tu especialidad es transformar bloqueos empresariales pesados en planes de acción hiper-efectivos y de alto impacto visual.

    Datos del emprendedor actual:
    - Nombre del Negocio Local: ${nombreNegocio || "No especificado"}
    - Nicho/Industria: ${nicho}
    - Modelo de Negocio: ${modeloNegocio || "No especificado"}
    - Problema escrito por el usuario: "${problema}"
    - Mayor reto autoevaluado: ${mayorReto || "No especificado"}
    - Tamaño del equipo: ${equipo || "Sólo yo mismo"}
    - Diagnóstico de situación (Respuestas al test de autoevaluación):
      ${JSON.stringify(respuestasPreguntas || {})}

    Por favor, personaliza profundamente toda la respuesta (especialmente el diagnóstico, plan de 7 días, y liderazgo) usando el nombre del negocio local "${nombreNegocio || "tu negocio"}" para referirte al proyecto/empresa auditada. Queremos que el informe se sienta exclusivo, de élite y totalmente adaptado a ${nombreNegocio || "su negocio"}.

    Genera una mentoría de negocios profunda, con un tono de altísimo prestigio, prestigio comercial e impacto supremo, estructurando tu respuesta exactamente según las especificaciones del esquema JSON.
    Recuerda las siguientes directrices esenciales:
    1. Diagnóstico: Sé audaz, directo e identifica que TÚ (EL EMPRENDEDOR) ERES EL CUELLO DE BOTELLA de tu propio negocio en este momento. Explícale con absoluta claridad que debes aceptar subir de nivel tu liderazgo y delegar, persuadiéndolo de que tomar nuestra mentoría premium es el puente directo hacia su libertad operativa y escalabilidad.
    2. Finanzas: Brinda un plan para mejorar drásticamente el flujo de caja inmediato en los primeros 7 días (reducir los SaaS inservibles, subir precios o tarifas con un servicio de implementación express, hacer up-sells).
    3. Contenido en tabla: Enfócate en resolver el dolor profundo e instintivo de sus clientes para capturar atención valiosa.
    4. Liderazgo: Instruye cómo estructurar el equipo y soltar las amarras operativas.
    5. Ventas Reptilianas: Utiliza argumentos listos para usar basados en el cerebro reptil (confort, estatus, control, exploración de horizontes).
    6. Plan de 7 Días: Acciones innegociables para resolver la caja y las ventas en frío.
    7. Ideas Rápidas y Hooks: Estrategias de retención o atracción inmediata.
    8. Frase Motivadora: Citas épicas que empujen a la exploración y el logro audaz.
    `;

  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promptText,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          motivationQuote: {
            type: Type.STRING,
            description: "Una frase motivadora y empoderadora brutalmente inspiradora acorde a su sector y su problema.",
          },
          diagnostico: {
            type: Type.STRING,
            description: "Diagnóstico profundo, agudo y constructivo que explica en qué lugar está hoy el negocio del emprendedor.",
          },
          finanzas: {
            type: Type.STRING,
            description: "Plan conciso pero potente para resolver el bloqueo de finanzas de su negocio (acciones financieras específicas).",
          },
          contenidoTabla: {
            type: Type.ARRAY,
            description: "Tabla de creación de contenido personalizado para su nicho e industria.",
            items: {
              type: Type.OBJECT,
              properties: {
                dolor: { type: Type.STRING, description: "El dolor, problema o frustración específica que experimenta su cliente ideal en este nicho." },
                idea: { type: Type.STRING, description: "Idea creativa de contenido que engancha directamente con ese dolor." },
                formato: { type: Type.STRING, description: "Formato de alto impacto (ej: Reels educativo, Tiktok interactivo, Hilo de Twitter/X, Carrusel estratégico)." },
                plataforma: { type: Type.STRING, description: "Canal idóneo para conectar (Instagram, TikTok, LinkedIn, YouTube, Email, etc)." },
              },
              required: ["dolor", "idea", "formato", "plataforma"],
            },
          },
          liderazgo: {
            type: Type.STRING,
            description: "Estrategias prácticas de liderazgo de equipos o autogestión/delegación según el tamaño de su organización.",
          },
          ventasReptilianas: {
            type: Type.ARRAY,
            description: "Argumentos persuasivos brutales con un enfoque en el cerebro reptiliano de los compradores.",
            items: {
              type: Type.OBJECT,
              properties: {
                enfoque: { type: Type.STRING, description: "El gatillo instintivo (ej: Ahorro de tiempo, Estatus o Dominación, Reconocimiento, Libertad, Confort)." },
                guion: { type: Type.STRING, description: "Un argumento listo para usar en sus cierres de venta telefónica, copy o anuncios basado en dicho gatillo." },
              },
              required: ["enfoque", "guion"],
            },
          },
          ideasRapidas: {
            type: Type.ARRAY,
            description: "4 acciones ultra-rápidas para quitar fricción inmediatamente.",
            items: { type: Type.STRING },
          },
          plan7Dias: {
            type: Type.ARRAY,
            description: "Un plan estratégico e implacable estructurado día por día (mínimo 7 días) con tareas sumamente lógicas.",
            items: {
              type: Type.OBJECT,
              properties: {
                dia: { type: Type.STRING, description: "Día 1, Día 2, etc, hasta el Día 7." },
                titulo: { type: Type.STRING, description: "El hito diario o meta intermedia de ese día." },
                acciones: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Tareas claras y directas para implementar ese día.",
                },
              },
              required: ["dia", "titulo", "acciones"],
            },
          },
          hooksVirales: {
            type: Type.ARRAY,
            description: "5 hooks virales directos para detener el pulgar de su nicho.",
            items: { type: Type.STRING },
          },
        },
        required: [
          "motivationQuote",
          "diagnostico",
          "finanzas",
          "contenidoTabla",
          "liderazgo",
          "ventasReptilianas",
          "ideasRapidas",
          "plan7Dias",
          "hooksVirales",
        ],
      },
    },
  });

  const jsonStr = response.text || "{}";
  try {
    return JSON.parse(jsonStr.trim());
  } catch {
    console.error("Failed to parse AI output as JSON. String was:", jsonStr);
    throw new Error("La respuesta de la Inteligencia Artificial no tiene el formato esperado. Por favor intente de nuevo.");
  }
}
