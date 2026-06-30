import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Target, 
  DollarSign, 
  Users, 
  Flame, 
  Copy, 
  Plus, 
  Trash2, 
  Play, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight, 
  ChevronLeft,
  RefreshCw, 
  Table, 
  Lightbulb, 
  ListTodo, 
  Check, 
  BookOpen, 
  Briefcase, 
  Award,
  CheckCircle2,
  Info,
  Crown,
  Home,
  FileText,
  Settings,
  Calendar,
  TrendingUp,
  Monitor,
  AlertTriangle,
  Compass,
  Gift,
  ChevronDown
} from "lucide-react";
import { DIAG_QUESTIONS, BUSINESS_MODELS, SAMPLE_PROBLEMS, FALLBACK_PLAN_MOCK } from "./data";
import { MentorPlan, DiagnosticAnswers, TrackingGoal } from "./types";
import { PersonalizedResults } from "./components/PersonalizedResults";
import { LandingPage } from "./components/LandingPage";
import { AuditoriaPage } from "./components/AuditoriaPage";
import { JugadaMaestraPage } from "./components/JugadaMaestraPage";

// @ts-expect-error - Vite virtual static asset import
import chessHeroBackground from "./assets/images/chess_hero_background.png";

// Prebuilt highly polished strategy plans for instant premium transformations
export function getPrebuiltPlanForSample(nicheName: string): MentorPlan {
  if (nicheName.toLowerCase().includes("fitness") || nicheName.toLowerCase().includes("nutrición")) {
    return {
      id: "prebuilt-fitness",
      createdAt: new Date().toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }),
      userPrompt: {
        niche: "Fitness y Nutrición Online",
        problem: "Me cuesta vender planes de $150 USD. La gente dice que es muy caro o que se lo pensará y no sé cómo liderar mi marca para cobrar premium.",
        answers: {
          facturacion: "lanzamiento",
          bloqueoPrincipal: "precios",
          equipoSize: "solo",
          niche: "Fitness y Nutrición Online",
          businessModel: "Infoproductos / Cursos Online / Membresías"
        }
      },
      motivationQuote: "El precio es un reflejo de tu autovaloración como mentor. Deja de vender sudor y tablas de ejercicios; vende la identidad y el estatus de un cuerpo imbatible.",
      diagnostico: "Tu marca de fitness online está sufriendo un cuello de botella grave donde TÚ ERES EL CUELLO DE BOTELLA de tu propia empresa. Al cobrar $150 USD, estás compitiendo directamente contra aplicaciones automatizadas que cuestan $10 USD. Debes elevar drásticamente tus estándares y articular un programa premium de transformación integral de 12 semanas (ej: 'El Método de Recomposición Metabólica Élite') valorado en $1,200 USD, apuntando exclusivamente a empresarios y profesionales con alto poder adquisitivo y nulo tiempo libre. Escalar requiere delegar la rutina de ejercicios básica y concentrarte en el cierre consultivo de alto nivel.",
      finanzas: "Plan de Inyección Inmediata: Descontinúa el cobro mensual fraccionado. Diseña una oferta express de 30 días para tus contactos calificados prometiendo un servicio de reestructuración metabólica con tarifa cerrada de $450 USD. Esto generará la caja necesaria para contratar a tu primer preparador asistente por comisión y soltar tus amarras operativas mecánicas de una vez por todas.",
      contenidoTabla: [
        {
          dolor: "Empresarios agotados sin energía para tomar decisiones críticas después de almorzar.",
          idea: "El 'Protocolo Nutricional de 10 minutos' para duplicar el foco de las 3:00 PM sin usar café.",
          formato: "Carrusel didáctico de alto impacto visual",
          plataforma: "LinkedIn / Instagram"
        },
        {
          dolor: "Sienten vergüenza e inseguridad porque su traje formal favorito ya no les calza cómodamente.",
          idea: "El plan táctico para recuperar tu talla de saco en 6 semanas libres de dietas extremas o gimnasios ruidosos.",
          formato: "Reel educativo ágil con pantalla en mano",
          plataforma: "LinkedIn"
        },
        {
          dolor: "Ansiedad nocturna que descarrila los progresos de la semana entera en minutos de frustración.",
          idea: "El hack científico de 3 grasas saludables para silenciar el apetito cerebral nocturno de forma instantánea.",
          formato: "Video interactivo explicativo",
          plataforma: "Instagram / TikTok"
        }
      ],
      liderazgo: "Regla del 80/20: Contrata un entrenador de nutrición junior por comisión para supervisar de forma personalizada las bitácoras alimenticias de tus clientes prémium. Libera tus mañanas para estructurar embudos y entrenar tu persuasión telefónica de alto rango.",
      ventasReptilianas: [
        {
          enfoque: "Estatus y Superioridad de Foco (Dominamiento Primario)",
          guion: "'Este sistema no es para aprender a contar calorías como un principiante. Es un programa de reingeniería biológica para líderes de negocios que necesitan operar al 150% de capacidad mental y física para superar a su competencia sin fatiga. Es tu ventaja competitiva definitiva.'"
        },
        {
          enfoque: "Confort Absoluto y Reducción del Esfuerzo",
          guion: "'Nosotros estructuramos tu compra y despacho de alimentos listos directamente a tu oficina. No tienes que idear menús ni cocinar. Tu única responsabilidad es abrir el contenedor y consumir energía limpia para poder dirigir tu compañía.'"
        }
      ],
      ideasRapidas: [
        "Inicia hoy enviando un correo directo a tus últimos 10 exclientes ofreciéndoles un upgrade de acompañamiento personalizado por $450 USD.",
        "Cambia el llamado a la acción de tu biografía a: 'Auditoría de Desbloqueo Físico para Emprendedores sin Tiempo'.",
        "Cancela tus suscripciones redundantes de CRM complejas y gestiona tus llamadas por un chat simple de WhatsApp.",
        "Define bloques fijos de llamadas de venta únicamente los martes y jueves."
      ],
      plan7Dias: [
        {
          dia: "Día 1",
          titulo: "Estructura del Programa Élite de 12 Semanas",
          acciones: [
            "Fija un precio mínimo de $1,200 USD por tu programa completo.",
            "Diseña los 3 pilares clave: nutrición sin cocina, entrenamientos de 30 mins y monitoreo diario via WhatsApp."
          ]
        },
        {
          dia: "Día 2",
          titulo: "Definición del Avatar de Alto Ticket",
          acciones: [
            "Establece que tu cliente ideal es un emprendedor/director de más de 35 años que viaja con frecuencia.",
            "Lista sus 2 bloqueos de tiempo principales para usarlos en el guion de aproximación."
          ]
        },
        {
          dia: "Día 3",
          titulo: "Redacción de Argumentación de Valor",
          acciones: [
            "Une los disparadores de estatus ('proyectar salud suprema') y confort ('cero conteo obsesivo de calorías').",
            "Monta tu guion telefónico listo de 4 fases."
          ]
        },
        {
          dia: "Día 4",
          titulo: "Lanzamiento de Hook Viral de Detener Pulgar",
          acciones: [
            "Graba un Reel / Hilo de X con: 'Por qué ir al gimnasio 2 horas al día está destruyendo las metas de tu startup...'",
            "Convida a tu audiencia a comentar 'FOCO' para recibir tu protocolo por privado de inmediato."
          ]
        },
        {
          dia: "Día 5",
          titulo: "Delegación de Logística de Auditoría",
          acciones: [
            "Crea una plantilla en Google Sheets para que tus clientes registren su peso de forma ultra-rápida.",
            "Asigna el seguimiento por WhatsApp a un pasante nutricionista que supervise los reportes por comisión."
          ]
        },
        {
          dia: "Día 6",
          titulo: "Campaña de Oferta Privada Directa",
          acciones: [
            "Envía un mensaje personalizado a tus 5 contactos anteriores más calificados invitándolos a ser casos piloto.",
            "Cierra al menos a 1 cliente por $1,200 USD con pago fraccionado."
          ]
        },
        {
          dia: "Día 7",
          titulo: "Apertura de Reserva de Escalado",
          acciones: [
            "Abre un apartado digital en tu banco exclusivamente para el fondo de reserva de tu primer empleado.",
            "Celebra tu primer paso audaz de líder supremo de salud."
          ]
        }
      ],
      hooksVirales: [
        "🔥 Por qué ir al gimnasio 2 horas al día está destruyendo las metas de tu startup...",
        "❌ El costoso error de nutrición que te provoca sueño crítico a las 3:00 PM...",
        "Guía express de desayunos corporativos de 3 ingredientes y foco prolongado...",
        "La cruda verdad de por qué los planes fitness de $10 USD te dejan igual de inflamado...",
        "Si tuvieras que cobrar $1,200 por poner a alguien en forma, ¿qué le supervisarías hoy?"
      ]
    };
  } else if (nicheName.toLowerCase().includes("diseño") || nicheName.toLowerCase().includes("web") || nicheName.toLowerCase().includes("agencia")) {
    return {
      id: "prebuilt-design",
      createdAt: new Date().toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }),
      userPrompt: {
        niche: "Agencia de Diseño y Desarrollo Web",
        problem: "Hago todo yo solo. No tengo tiempo para buscar clientes porque estoy atrapado diseñando. Me da miedo delegar porque siento que perderé calidad y dinero.",
        answers: {
          facturacion: "traccion",
          bloqueoPrincipal: "reinversion",
          equipoSize: "solo",
          niche: "Agencia de Diseño y Desarrollo Web",
          businessModel: "Agencia Digital / Freelancer"
        }
      },
      motivationQuote: "El buen maquetador programa líneas de código. El gran líder supremo de agencia diseña sistemas donde otros operan por él.",
      diagnostico: "Tu agencia no es una empresa de verdad; es un autoempleo altamente demandante y estresante. Tu pavor a delegar radica en que no tienes un estándar documentado (SOP). Crees que nadie tiene tu mismo nivel, pero eso se corrige creando sistemas transparentes. Mientras sigas atornillado a Figma y VS Code, tus ingresos sufrirán de un techo de cristal agobiante. El consultor IA te aconseja desvincularte del ensamble técnico contratando un freelancer por proyecto, cobrando un 50% anticipado y tomando nuestra mentoría premium.",
      finanzas: "Plan de Caja y Recursos: Despáchate de suscripciones que no retornen liquidez. Empieza a aliarse con un programador freelance junior pagándole exclusivamente por hitos completados de forma que el costo sea variable. Al fijar un abono del 50% por adelantado a tus clientes corporativos, es su propio anticipo el que financia los recursos de ensamble sin tocar tu capital personal.",
      contenidoTabla: [
        {
          dolor: "Fundadores que ven demoras inexplicables de semanas en el lanzamiento de su web y no consiguen llamadas.",
          idea: "El embudo de 1 página que puedes levantar mañana para validar tu idea de inmediato.",
          formato: "Hilos breves en Twitter/X con capturas reales",
          plataforma: "LinkedIn / X"
        },
        {
          dolor: "Páginas corporativas hermosas con cero conversión que actúan como meros folletos digitales mudos.",
          idea: "Los 3 disparadores que duplican las solicitudes de cotización en tu página web ahora mismo.",
          formato: "Carrusel explicativo de alto pulido estético",
          plataforma: "Instagram"
        },
        {
          dolor: "Presupuestos de diseño web estancados en eternas correcciones sin fin que destruyen la rentabilidad.",
          idea: "La cláusula del contrato de diseño que limita estrictamente las revisiones a un máximo de dos.",
          formato: "Reel educativo dinámico",
          plataforma: "LinkedIn / Instagram"
        }
      ],
      liderazgo: "Regla del 80%: Graba dos videos rápidos de 10 minutos (SOP de Figma y SOP de Estructura de Proyecto) explicando exactamente tu lógica y directrices del flujo de trabajo. Transfiéreselos a tu nuevo freelancer para testear su capacidad de autonomía inmediata.",
      ventasReptilianas: [
        {
          enfoque: "Confort Absoluto y Alivio del Stress Laboral (Seguridad)",
          guion: "'Con nuestra solución no vas a tener que batallar con programadores ausentes ni redactar extensos correos de especificaciones técnicas. Nosotros tomamos el control absoluto y nos encargamos de que tu embudo quede encendido en 5 días hábiles para que solo abras tu agenda y cierres prospectos calificados.'"
        },
        {
          enfoque: "Estatus, Poder y Dominancia Comercial",
          guion: "'No montamos páginas simples. Creamos la identidad digital de la marca que redefinirá tu categoría de negocios este semestre. Tus competidores se verán obsoletos en comparación directa una vez lancemos este diseño.'"
        }
      ],
      ideasRapidas: [
        "Incrementa en un 30% la tarifa de la próxima página web que cotices incorporando plantillas probadas de alto nivel corporativo.",
        "Graba un video de Loom personalizado de 5 minutos diagnosticando de forma gratuita los fallos del sitio de un cliente deseado.",
        "Establece de forma fija un máximo de dos rondas de corrección técnica por contrato comercial.",
        "Unifica los hostings y tarifas de mantenimiento mensual de tus antiguos clientes corporativos."
      ],
      plan7Dias: [
        {
          dia: "Día 1",
          titulo: "SOP de Diseño en Figma",
          acciones: [
            "Graba 3 videos de Loom de 5 minutos explicando tu proceso de wireframe, tipografías y orden de archivos en Figma.",
            "Súbelos a una carpeta unificada (SOP de Diseño)."
          ]
        },
        {
          dia: "Día 2",
          titulo: "Búsqueda y Alianza con Socio Freelance",
          acciones: [
            "Publica un anuncio breve en redes interesándote por un maquetador freelance para proyectos cerrados.",
            "Evalúa el portfolio de 3 candidatos y selecciona al más dispuesto."
          ]
        },
        {
          dia: "Día 3",
          titulo: "Estructuración de Tarifa Corporativa",
          acciones: [
            "Sublima tu tarifa inicial de diseño web a un mínimo de $1,800 USD.",
            "Agrega una cláusula innegociable de 50% anticipado para iniciar."
          ]
        },
        {
          dia: "Día 4",
          titulo: "Disparo de Loom a Clientes Prospectivos",
          acciones: [
            "Identifica 5 empresas locales con sitios web obsoletos.",
            "Envíales un Loom de 3 minutos señalándoles cómo su diseño les está haciendo perder leads."
          ]
        },
        {
          dia: "Día 5",
          titulo: "Lanzamiento de Hook en Redes Profesionales",
          acciones: [
            "Publica en LinkedIn: 'La mayoría de agencias te venden un sitio web bonito pero inútil...'",
            "Promete compartir tus 3 plantillas de conversión instantánea a cambio de un mensaje privado."
          ]
        },
        {
          dia: "Día 6",
          titulo: "Primer Proyecto Compartido",
          acciones: [
            "Lanza la cotización corporativa premium a las respuestas del Loom.",
            "Cierra la venta y delega el 70% de la maquetación a tu socio técnico pagándole con el anticipo recibidido."
          ]
        },
        {
          dia: "Día 7",
          titulo: "Revisión Operativa",
          acciones: [
            "Supervisa y firma el sitio entregado por tu socio-freelance.",
            "Inaugura formalmente tu tránsito de autoempleado a dueño de agencia ágil comercial."
          ]
        }
      ],
      hooksVirales: [
        "🔥 El secreto de conversión que las agencias de desarrollo de $10,000 USD esconden en su pie de página...",
        "❌ Por qué un sitio web bonito puede estar desangrando las llamadas de venta de tu startup...",
        "El truco de un solo botón para duplicar tus prospectos de consultoría sin gastar en anuncios...",
        "Cómo se construyó un ecommerce de lujo en 48 horas usando planos estratégicos pre-armados...",
        "Si tuvieras que justificar un sitio de $3,000 USD en 5 minutos de video, ¿qué mostrarías?"
      ]
    };
  } else {
    // Tienda online de Cosmética Orgánica or Fallback
    return {
      id: "prebuilt-organic",
      createdAt: new Date().toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }),
      userPrompt: {
        niche: "Tienda online de Cosmética Orgánica",
        problem: "Hago videos geniales de mis cremas, pero solo consigo likes y nada de ventas. Necesito hooks virales y un plan de acción para convertir la atención en flujos estables.",
        answers: {
          facturacion: "idea",
          bloqueoPrincipal: "flujocaja",
          equipoSize: "solo",
          niche: "Tienda online de Cosmética Orgánica",
          businessModel: "E-commerce / Venta de Productos Físicos"
        }
      },
      motivationQuote: "Tus clientes no te compran cremas por sus refinados ingredientes activos; te compran para lucir radiantes, respetadas y seguras en su entorno diario.",
      diagnostico: "Tu marca de cosmética natural se encuentra atrapada en una 'parálisis de romanticismo artesanal'. Explicas meticulosamente las cualidades puras del aceite de uva y la rosa mosqueta en lugar de atacar el dolor de tu comprador final (ej: imperfecciones de acné tardío en juntas corporativas críticas o la resequedad por aire acondicionado). El público te da un me gusta vacío pero no saca su tarjeta por falta de una oferta empaquetada clara.",
      finanzas: "Plan de Caja: Retira de inmediato la venta unitaria de productos pequeños de $15. Configura e introduce de inmediato 'Kits de Tratamiento Diagnóstico de 3 Pasos' (ej: 'Kit Piel Radiante en Oficina') elevando tu ticket de compra promedio a $65 USD. Este exceso te permitirá ofrecer envíos priority con seguro gratis y financiar tu inventario.",
      contenidoTabla: [
        {
          dolor: "Brotes inesperados de acné adulto que socavan la autoconfianza antes de presentar frente a directores.",
          idea: "El micro-ritual nocturno de 2 fases para atenuar inflamaciones antes de tu próximo hito profesional.",
          formato: "Carrusel estético educativo",
          plataforma: "Instagram / TikTok"
        },
        {
          dolor: "Piel agrietada y marchita por culpa del aire acondicionado de la oficina durante 8 horas diarias.",
          idea: "El spray hidratante botánico que refresca de inmediato tu rostro sin afectar tu maquillaje diario.",
          formato: "Reel dinámico en tiempo real",
          plataforma: "Instagram / TikTok"
        },
        {
          dolor: "Miedo secreto a que los químicos corrosivos de marcas industriales aceleren el envejecimiento oculto.",
          idea: "Comparativa científica casera entre aditivos sintéticos pesados y extractos orgánicos limpios prensados.",
          formato: "YouTube instructivo de alta resolución",
          plataforma: "YouTube"
        }
      ],
      liderazgo: "Suelto de Amarra Manufacturera: Subcontrata tu empaque y envío a una empresa de correo de confianza o un mensajero dedicado con tarifas fijas por semana. Tu único fin de liderazgo debe ser dirigir el marketing, el gancho persuasivo y la reinversión de caja.",
      ventasReptilianas: [
        {
          enfoque: "Confort, Bienestar Natural y Alivio Total de la Irritación",
          guion: "'No vas a tener que seguir aplicando capas interminables de corrector sintético de farmacia para esconder imperfecciones. Este extracto purifica la microflora facial en 3 noches de manera natural e indolora, dejando que tu piel respire cómoda y saludable.'"
        },
        {
          enfoque: "Estatus Social, Proyección de Brillo y Elegancia",
          guion: "'Esto no es cosmética corriente para cuidar el rostro en casa. Es un bio-tratamiento de origen orgánico que devuelve la frescura natural y el brillo ejecutivo que necesitas proyectar en cada hito y llamada clave de tu día.'"
        }
      ],
      ideasRapidas: [
        "Inicia una promoción express de envío gratuito durante las próximas 24 horas usando el cupón PIELSANA.",
        "Cambia el bio-link de tus redes para dirigir directamente al Kit Diagnóstico de Oficina en lugar de tu caótico catálogo de 40 artículos.",
        "Proporciona asesoría y pautas personalizadas de 5 minutos mediante mensajes de audio cariñosos en WhatsApp.",
        "Establece una alianza con centros de pilates, estética o spas locales para que recomienden tus cremas tras sus tratamientos."
      ],
      plan7Dias: [
        {
          dia: "Día 1",
          titulo: "Estructuración del Kit Express Diagnóstico",
          acciones: [
            "Agrupa tus 3 productos estrella para restaurar luminosidad en un solo paquete y ponle el precio de $75 USD.",
            "Redacta una ficha diagnóstica digital de 3 preguntas."
          ]
        },
        {
          dia: "Día 2",
          titulo: "Configuración del Enlace Simplificado",
          acciones: [
            "Elimina la navegación pesada de tu web; deja solo el Kit Diagnóstico en la página de inicio.",
            "Vincula un botón directo al chat de soporte de WhatsApp corporativo."
          ]
        },
        {
          dia: "Día 3",
          titulo: "Estructuración de Argumentos Psicológicos",
          acciones: [
            "Utiliza el disparador de estatus y rejuvenecimiento instantáneo para pulir tus copies.",
            "Graba un guion breve explicando por qué lo orgánico frena la inflamación oculta."
          ]
        },
        {
          dia: "Día 4",
          titulo: "Publicación de Hook Detén Pulgares",
          acciones: [
            "Sube un video de primer plano con: 'La cruda verdad de por qué las cremas caras de farmacia te causan brotes...'",
            "Promete dar un diagnóstico de tipo de piel gratis en un chat privado."
          ]
        },
        {
          dia: "Día 5",
          titulo: "Delegación del Empaque y Distribución",
          acciones: [
            "Habla con un servicio de cadetería local coordinando retiros continuos a las 4:00 PM.",
            "Prepara folletos con instrucciones de aplicación impresos."
          ]
        },
        {
          dia: "Día 6",
          titulo: "Venta Consultiva por Notas de Voz",
          acciones: [
            "Responde a los 10 primeros comentarios diagnósticos usando notas de voz de 30 segundos con calidez.",
            "Recomienda el Kit Express y procesa 3 órdenes inmediatas."
          ]
        },
        {
          dia: "Día 7",
          titulo: "Establecimiento del Presupuesto de Reinversión",
          acciones: [
            "Cobra las órdenes, separa el costo de materias primas y asigna un 15% a anuncios continuos.",
            "Celebra que has transformado meras vistas en clientes de alto valor."
          ]
        }
      ],
      hooksVirales: [
        "🔥 Por qué tu crema cara de farmacia de $120 USD te sigue provocando brotes y resequedad...",
        "❌ Detén el ritual de 10 pasos de skin-care; solo necesitas estos 2 ingredientes de origen orgánico...",
        "El truco secreto que usan las ejecutivas para atenuar ojeras de cansancio antes de una reunión estelar...",
        "La cruda verdad sobre los conservantes sintéticos que aceleran el marchitamiento de tu piel...",
        "Si tuvieras que regenerar la luminosidad de tu rostro para un evento de gala en 5 días, ¿qué te pondrías?"
      ]
    };
  }
}

export default function App() {
  // Global states
  const [activeTab, setActiveTab] = useState<"diagnostico" | "resultado" | "seguimiento" | "ejemplos">("diagnostico");
  
  // Express Cash Flow Calculator State for first 7 days
  const [calcPrice, setCalcPrice] = useState<number>(350);
  const [calcLeads, setCalcLeads] = useState<number>(12);
  const [calcConversion, setCalcConversion] = useState<number>(25);
  const [calcSavings, setCalcSavings] = useState<number>(180);
  
  // Credit Counter: 1 free + 2 subsequent = 3 total
  const [credits, setCredits] = useState<number>(() => {
    const saved = localStorage.getItem("minilab_credits_v1");
    return saved ? parseInt(saved, 10) : 3;
  });

  // Current problem inputs (Pre-seeded with default Fitness template so user sees the transformation instantly!)
  const [businessName, setBusinessName] = useState("Café Aromas Local");
  const [wizardStep, setWizardStep] = useState(1);
  const [niche, setNiche] = useState("Fitness y Nutrición Online");
  const [problema, setProblema] = useState("Me cuesta vender planes de $150 USD. La gente dice que es muy caro o que se lo pensará y no sé cómo liderar mi marca para cobrar premium.");
  const [businessModel, setBusinessModel] = useState("Infoproductos / Cursos Online / Membresías");
  const [maxReto, setMaxReto] = useState("Fijación de Precios");
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<DiagnosticAnswers>({
    facturacion: "lanzamiento",
    bloqueoPrincipal: "precios",
    equipoSize: "solo",
    niche: "Fitness y Nutrición Online",
    businessModel: "Infoproductos / Cursos Online / Membresías"
  });

  // Active / Current Plan Strategy - Auto-loaded on start if none saved! (null by default for fresh diagnostic starts!)
  const [currentPlan, setCurrentPlan] = useState<MentorPlan | null>(() => {
    const saved = localStorage.getItem("minilab_current_plan_v1");
    if (saved) return JSON.parse(saved);
    return null;
  });

  // Past Plans history
  const [plansHistory, setPlansHistory] = useState<MentorPlan[]>(() => {
    const saved = localStorage.getItem("minilab_history_v1");
    if (saved) return JSON.parse(saved);
    const initialPlan = getPrebuiltPlanForSample("Fitness y Nutrición Online");
    return [initialPlan];
  });

  // Tracking Panel goals
  const [trackingGoals, setTrackingGoals] = useState<TrackingGoal[]>(() => {
    const saved = localStorage.getItem("minilab_tracking_goals_v1");
    if (saved) return JSON.parse(saved);
    
    // Seed initial demo tracking goal from fallback so the page isn't blank style
    const initialTaskGroup: TrackingGoal = {
      id: "demo-goal",
      planId: "demo",
      niche: "Nicho de Demostración",
      title: "Desbloqueo de Ventas y Estructuración Inicial",
      createdAt: new Date().toLocaleDateString(),
      tasks: [
        { id: "t1", dia: "Día 1", dayTitle: "Auditoría de Cuenta Financiera", taskText: "Revisar suscripciones digitales y recortar el 15% del desperdicio operativo.", completed: true },
        { id: "t2", dia: "Día 2", dayTitle: "Identificación de Dolores Críticos", taskText: "Llamar a 3 clientes anteriores e investigar por qué compraron realmente.", completed: false },
        { id: "t3", dia: "Día 3", dayTitle: "Lanzar Gancho Reptiliano", taskText: "Publicar un Reel con el gancho: 'La cruda verdad sobre por qué tu flujo de caja se está desangrando...'.", completed: false },
        { id: "t4", dia: "Día 4", dayTitle: "Soporte de Equipo o SOP", taskText: "Documentar la secuencia de ventas del producto estrella en 1 página.", completed: false }
      ]
    };
    return [initialTaskGroup];
  });

  // Modals for image modeling & active buttons
  const [sobreMiOpen, setSobreMiOpen] = useState(false);
  const [metodologiaOpen, setMetodologiaOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);
  const [agendarSesionOpen, setAgendarSesionOpen] = useState(false);
  const [areaPremiumOpen, setAreaPremiumOpen] = useState(false);
  const [premiumAlertOpen, setPremiumAlertOpen] = useState(false);
  const [comunidadOpen, setComunidadOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [showFestin, setShowFestin] = useState(false);
  const [selectedHour, setSelectedHour] = useState("11:30 AM (Central)");

  // Email state for free audit capturing
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem("minilab_user_email_v1") || "";
  });

  // Interactive community states to make all buttons work
  const [communityMessages, setCommunityMessages] = useState(() => {
    const saved = localStorage.getItem("minilab_community_msgs_v1");
    if (saved) return JSON.parse(saved);
    return [
      { id: "1", author: "Carlos S.", role: "Diseño Web", text: "Acabo de terminar mi sesión 1:1 con Adri. Cambié mi oferta principal de un pago simple a un abono mensual. ¡Dupliqué mi ticket promedio!", time: "Hace 15 min", likes: 8 },
      { id: "2", author: "Ana M.", role: "Clínica Dental", text: "El autodiagnóstico con IA es una locura de preciso. La estrategia de marca premium me encaja al 100%.", time: "Hace 2 horas", likes: 12 },
      { id: "3", author: "Roberto G.", role: "Café de Especialidad", text: "Ya implementé el gancho de Reels sugerido para mi nicho. He tenido más interacciones en un día que en toda la semana pasada.", time: "Hace 1 día", likes: 19 }
    ];
  });
  const [newMsgText, setNewMsgText] = useState("");

  // Sync userEmail and communityMessages
  useEffect(() => {
    localStorage.setItem("minilab_user_email_v1", userEmail);
  }, [userEmail]);

  useEffect(() => {
    localStorage.setItem("minilab_community_msgs_v1", JSON.stringify(communityMessages));
  }, [communityMessages]);

  // Loading States
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  // Motivational Phrase system on access
  const [currentMotivationalPhrase, setCurrentMotivationalPhrase] = useState(
    "Un bloqueo no es un muro de concreto; es un rompecabezas esperando tu creatividad."
  );

  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState<Record<string, string>>({});
  const [analysisNotice, setAnalysisNotice] = useState<string | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<"resumen" | "analisis" | "estrategia" | "sitioweb" | "marketing" | "mentoria">("resumen");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  type SubTabId = typeof activeSubTab;

  const navigateToDiagnostico = (sub: SubTabId = "resumen") => {
    setActiveTab("diagnostico");
    setActiveSubTab(sub);
    setMobileMenuOpen(false);
  };

  const navigateToAnalisis = () => {
    navigateToDiagnostico("analisis");
    setTimeout(() => {
      const formEl =
        document.getElementById("auth-diagnosis-form") ||
        document.getElementById("auth-diagnosis-form-resumen");
      formEl?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 150);
  };

  const navigateToEstrategia = () => navigateToDiagnostico("estrategia");

  const navigateToSeguimiento = () => {
    setActiveTab("seguimiento");
    setMobileMenuOpen(false);
  };

  const navigateToEjemplos = () => {
    setActiveTab("ejemplos");
    setMobileMenuOpen(false);
  };

  const getSectionTitle = (): string => {
    if (activeTab === "seguimiento") return "Panel de Seguimiento";
    if (activeTab === "ejemplos") return "Plantillas y Casos Reales";
    if (activeTab === "resultado") return "Tu Estrategia Personalizada";
    const titles: Record<SubTabId, string> = {
      resumen: "Resumen General",
      analisis: "Autodiagnóstico de Negocio",
      estrategia: "Modelo de Riqueza y Estrategia",
      sitioweb: "Optimización de Sitio Web",
      marketing: "Plan de Marketing",
      mentoria: "Mentoría y Acompañamiento",
    };
    return titles[activeSubTab];
  };

  // Sub-tab interactive states
  const [selectedBookingDay, setSelectedBookingDay] = useState<string>("Lunes");
  const [selectedBookingSlot, setSelectedBookingSlot] = useState<string>("10:00 AM");
  const [bookingWhatsApp, setBookingWhatsApp] = useState<string>("");
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [bookingName, setBookingName] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Redirigir pestaña legacy "resultado" hacia estrategia
  useEffect(() => {
    if (activeTab === "resultado") {
      setActiveTab("diagnostico");
      setActiveSubTab("estrategia");
    }
  }, [activeTab]);

  const handleTabNavigation = (tab: "diagnostico" | "resultado" | "seguimiento" | "ejemplos") => {
    if (tab === "resultado") {
      navigateToEstrategia();
    } else if (tab === "diagnostico") {
      navigateToDiagnostico("analisis");
    } else if (tab === "seguimiento") {
      navigateToSeguimiento();
    } else {
      navigateToEjemplos();
    }
  };

  const handleCardDiagnosisClick = () => {
    navigateToAnalisis();

    if (!businessName.trim() || !userEmail.trim() || !niche.trim() || !problema.trim()) {
      setAnalysisNotice("Completa el formulario para generar tu auditoría con IA.");
      setTimeout(() => setAnalysisNotice(null), 4000);
      return;
    }

    const nameToUse = businessName.trim();
    setAnalysisNotice(`Analizando ${nameToUse} con Inteligencia Artificial...`);
    const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
    handleCreatePlan(syntheticEvent, false);
    setTimeout(() => setAnalysisNotice(null), 4500);
  };

  const handleDeveloperReset = () => {
    setBusinessName("");
    setNiche("");
    setProblema("");
    setBusinessModel("Infoproductos / Cursos Online / Membresías");
    setDiagnosticAnswers({
      facturacion: "lanzamiento",
      bloqueoPrincipal: "precios",
      equipoSize: "solo",
      niche: "",
      businessModel: ""
    });
    setCurrentPlan(null);
    setPlansHistory([]);
    setTrackingGoals([]);
    setCredits(3);
    
    localStorage.removeItem("minilab_credits_v1");
    localStorage.removeItem("minilab_current_plan_v1");
    localStorage.removeItem("minilab_history_v1");
    localStorage.removeItem("minilab_tracking_goals_v1");
    
    setActiveTab("diagnostico");
    setCopiedText("✨ ¡Datos vaciados por completo! Listo para iniciar tu nuevo autodiagnóstico.");
    setTimeout(() => setCopiedText(null), 4000);
  };

  const handleNewAnalysis = () => {
    setBusinessName("");
    setNiche("");
    setProblema("");
    setBusinessModel("Infoproductos / Cursos Online / Membresías");
    setDiagnosticAnswers({
      facturacion: "lanzamiento",
      bloqueoPrincipal: "precios",
      equipoSize: "solo",
      niche: "",
      businessModel: ""
    });
    setCurrentPlan(null);
    localStorage.removeItem("minilab_current_plan_v1");
    
    setActiveTab("diagnostico");
    setCopiedText("✨ ¡Formulario limpio! Listo para analizar otra marca o emprendedor.");
    setTimeout(() => setCopiedText(null), 3000);
  };

  // Fetch initial quote safely
  useEffect(() => {
    fetch("/api/motivation-fallback")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error();
      })
      .then((data) => {
        if (data && data.phrase) {
          setCurrentMotivationalPhrase(data.phrase);
        }
      })
      .catch(() => {
        // Fallback silently if offline/error
      });
  }, []);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem("minilab_credits_v1", credits.toString());
  }, [credits]);

  useEffect(() => {
    if (currentPlan) {
      localStorage.setItem("minilab_current_plan_v1", JSON.stringify(currentPlan));
    }
  }, [currentPlan]);

  useEffect(() => {
    localStorage.setItem("minilab_history_v1", JSON.stringify(plansHistory));
  }, [plansHistory]);

  useEffect(() => {
    localStorage.setItem("minilab_tracking_goals_v1", JSON.stringify(trackingGoals));
  }, [trackingGoals]);

  // Loading stage messages rotation to prevent user boredom
  useEffect(() => {
    let interval: any;
    if (isLoading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % 5);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  // Loading steps string array
  const loadingMessages = [
    "Analizando tus respuestas diagnósticas...",
    "Buscando los bloqueos ocultos de flujo de caja...",
    "Estructurando matriz de contenido personalizado para tu nicho...",
    "Calculando argumentos de ventas con disparadores reptilianos...",
    "Compilando la estrategia integral y plan de 7 días..."
  ];

  // Load a preset template
  const handleLoadSample = (sample: typeof SAMPLE_PROBLEMS[0]) => {
    setNiche(sample.niche);
    setProblema(sample.problem);
    setBusinessModel(sample.model);
    setMaxReto(sample.reto);
    
    // Auto map diagnostic answers based on selection to feel premium
    const matchedAnswers = {
      facturacion: sample.reto === "Fijación de Precios" ? "lanzamiento" : sample.reto.includes("liquidez") ? "traccion" : "idea",
      bloqueoPrincipal: sample.reto === "Fijación de Precios" ? "precios" : sample.reto.includes("liquidez") ? "reinversion" : "flujocaja",
      equipoSize: "solo",
      niche: sample.niche,
      businessModel: sample.model
    };

    setDiagnosticAnswers(matchedAnswers);

    // Instant custom pre-designed elite strategy for immediate visual transformation
    const instantPlan = getPrebuiltPlanForSample(sample.niche);
    setCurrentPlan(instantPlan);
    setPlansHistory(prev => [instantPlan, ...prev.filter(p => p.id !== instantPlan.id)]);
    setCurrentMotivationalPhrase(instantPlan.motivationQuote);
    feedTrackingPanel(instantPlan);

    setActiveTab("diagnostico");
    setActiveSubTab("estrategia");
  };

  // Notification Copy Handler
  const handleCopyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Submit and create custom plan
  const handleCreatePlan = async (e: React.FormEvent, useDemoMock: boolean = false) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!businessName.trim()) {
      setErrorMsg("Por favor, ingresa el Nombre del Negocio Local.");
      return;
    }

    if (!userEmail.trim() || !userEmail.includes("@")) {
      setErrorMsg("Por favor, ingresa un Correo Electrónico válido para poder recibir tu auditoría gratis.");
      return;
    }

    if (!niche.trim() || !problema.trim()) {
      setErrorMsg("Por favor, llena tu nicho/industria y redacta tus bloqueos principales.");
      return;
    }

    // Auto-recharge credits to prevent any lockouts or blocks for the user
    if (credits <= 0) {
      setCredits(3);
    }

    setIsLoading(true);
    setActiveTab("diagnostico");
    setActiveSubTab("estrategia");

    try {
      if (useDemoMock) {
        // Instant response with robust mock data
        setTimeout(() => {
          // Personalize fallback mock content with the business name!
          const customizedFallback = {
            ...FALLBACK_PLAN_MOCK,
            diagnostico: FALLBACK_PLAN_MOCK.diagnostico.replace(/tu emprendimiento/gi, businessName).replace(/tu negocio/gi, businessName),
            liderazgo: FALLBACK_PLAN_MOCK.liderazgo.replace(/tus tareas/gi, `las tareas clave en ${businessName}`)
          };

          const generatedMock: MentorPlan = {
            id: "plan-" + Date.now(),
            createdAt: new Date().toLocaleDateString("es-ES", {
              day: "numeric",
              month: "short",
              year: "numeric"
            }),
            userPrompt: {
              niche: niche,
              problem: problema,
              answers: diagnosticAnswers,
              businessName: businessName,
              email: userEmail
            },
            ...customizedFallback
          };
          setCurrentPlan(generatedMock);
          setPlansHistory(prev => [generatedMock, ...prev]);
          setCurrentMotivationalPhrase(generatedMock.motivationQuote);
          
          // Auto fill tracking plan
          feedTrackingPanel(generatedMock);

          setIsLoading(false);
          setShowFestin(true); // Trigger celebratory festines
        }, 3200);
        return;
      }

      // Real server request utilizing Gemini API on backend
      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nicho: niche,
          problema: problema,
          equipo: diagnosticAnswers.equipoSize,
          modeloNegocio: businessModel,
          mayorReto: maxReto,
          respuestasPreguntas: diagnosticAnswers,
          nombreNegocio: businessName,
          email: userEmail
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Fallo en la comunicación con el servidor. Puedes probar con 'Simular con Mock' en el panel.");
      }

      const planData = await response.json();
      
      const newPlan: MentorPlan = {
        id: "plan-" + Date.now(),
        createdAt: new Date().toLocaleDateString("es-ES", {
          day: "numeric",
          month: "short",
          year: "numeric"
        }),
        userPrompt: {
          niche: niche,
          problem: problema,
          answers: diagnosticAnswers,
          businessName: businessName
        },
        ...planData
      };

      setCurrentPlan(newPlan);
      setPlansHistory(prev => [newPlan, ...prev]);
      setCurrentMotivationalPhrase(newPlan.motivationQuote);
      
      // Defer credit deduction
      setCredits(prev => Math.max(0, prev - 1));

      // Load interactive tracking panel goals
      feedTrackingPanel(newPlan);

      setIsLoading(false);
      setShowFestin(true); // Trigger celebratory festines
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "No se pudo conectar con el servicio de Inteligencia Artificial. ¿Está el servidor activo? También puedes utilizar el botón 'Desbloquear Demo Libre' abajo.");
      setIsLoading(false);
    }
  };

  // Helper to load plan action steps into Tracking Goals list
  const feedTrackingPanel = (plan: MentorPlan) => {
    const formattedTasks = plan.plan7Dias.flatMap((day) => 
      day.acciones.map((accionStr, idx) => ({
        id: `task-${day.dia}-${idx}-${Math.random()}`,
        dia: day.dia,
        dayTitle: day.titulo,
        taskText: accionStr,
        completed: false
      }))
    );

    const newTrackingGoal: TrackingGoal = {
      id: "track-" + Date.now(),
      planId: plan.id,
      niche: plan.userPrompt.niche,
      title: plan.userPrompt.businessName?.trim() || plan.userPrompt.niche,
      createdAt: new Date().toLocaleDateString(),
      tasks: formattedTasks.length > 0 ? formattedTasks : [
        { id: "t-default", dia: "Día 1", dayTitle: "Arrancar Implementación", taskText: "Repasar el diagnóstico de MinilabMentor e ideas rápidas.", completed: false }
      ]
    };

    setTrackingGoals(prev => [newTrackingGoal, ...prev]);
    // Inform user of tracking panel population
  };

  const handleToggleTask = (goalId: string, taskId: string) => {
    setTrackingGoals(prev => 
      prev.map(goal => {
        if (goal.id !== goalId) return goal;
        return {
          ...goal,
          tasks: goal.tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t)
        };
      })
    );
  };

  const deleteGoalHistory = (id: string) => {
    setTrackingGoals(prev => prev.filter(g => g.id !== id));
  };

  const deletePlanHistory = (id: string) => {
    setPlansHistory(prev => prev.filter(p => p.id !== id));
    if (currentPlan?.id === id) {
      setCurrentPlan(null);
    }
  };

  const resetAllCredits = () => {
    setCredits(3);
    setErrorMsg(null);
  };

  // Dynamic status evaluation for tracking goals with high-impact motivational stages
  const getGoalProgress = (goal: TrackingGoal) => {
    if (!goal.tasks.length) return { percent: 0, badge: "Fase Exploración Inicial ✨" };
    const comps = goal.tasks.filter(t => t.completed).length;
    const pct = Math.round((comps / goal.tasks.length) * 100);
    
    let b = "Fase Exploración: Mirando el Abismo de Frente 🔍";
    if (pct > 0 && pct <= 25) {
      b = "Fase Aventura: Desafiando Límites y Abrazando la Incertidumbre 🧗";
    } else if (pct > 25 && pct <= 50) {
      b = "Fase Ajuste Crítico: Cortando Fugas Tácticas y Rediseñando Velas ⚙️";
    } else if (pct > 50 && pct <= 75) {
      b = "Fase Ventaja Competitiva: Cierres Letales y Tracción en Marcha 🔥";
    } else if (pct > 75 && pct <= 99) {
      b = "Fase Logro Supremo: La Fórmula Premium Dominada y Lista 🏆";
    } else if (pct === 100) {
      b = "Liderazgo Absoluto: ¡Sube de Nivel y Toma la Mentoría Premium! 👑";
    }

    return { percent: pct, completedCount: comps, totalCount: goal.tasks.length, badge: b };
  };

  const currentStatusInfo = () => {
    // Determine user status textually based on questions selected
    const modelLabel = businessModel;
    const teamLabel = diagnosticAnswers.equipoSize === "solo" ? "Solopreneur" : "Líder de equipo pequeño";
    return `Diagnóstico del Perfil: ${modelLabel} • Nivel actual: ${teamLabel}`;
  };

  const isLandingView = activeTab === "diagnostico" && activeSubTab === "resumen";

  type PublicFlow = "home" | "auditoria" | "jugada-maestra";
  const [publicFlow, setPublicFlow] = useState<PublicFlow>("home");

  useEffect(() => {
    if (!isLandingView) setPublicFlow("home");
  }, [isLandingView]);

  const handleLandingAgendar = (e: React.FormEvent) => {
    e.preventDefault();
    if (userEmail.trim()) {
      localStorage.setItem("minilab_user_email_v1", userEmail);
      setPublicFlow("jugada-maestra");
    }
  };

  const handleAuditoriaSubmit = (e: React.FormEvent) => {
    handleCreatePlan(e, false);
  };

  const handleConfirmBooking = (_data: {
    name: string;
    date: string;
    hour: string;
    business: string;
    email: string;
  }) => {
    setCredits((prev) => Math.max(0, prev - 1));
    setCopiedText("🎉 ¡Cita confirmada! Te hemos enviado las credenciales de Zoom al correo.");
    setTimeout(() => setCopiedText(null), 4500);
  };

  const handleRechargeCredits = () => {
    setCredits(3);
    setCopiedText("✨ ¡Créditos recargados! Tienes 3 auditorías listas.");
    setTimeout(() => setCopiedText(null), 3000);
  };

  return (
    <div className={`min-h-screen flex font-sans ${isLandingView ? "bg-[#050a12] text-white selection:bg-amber-500/30" : "bg-[#050a12] text-white selection:bg-amber-500/30"}`}>
      
      {/* SIDEBAR DE CONTROL PREMIUM — oculto en landing */}
      {!isLandingView && (
      <div className="hidden lg:flex flex-col w-64 bg-[#0a1018] text-slate-300 border-r border-white/5 shrink-0 sticky top-0 h-screen py-6 px-4 justify-between z-40 shadow-2xl">
        <div className="flex flex-col gap-6 w-full">
          {/* Logo con Monograma de la Corona de Oro */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EAD293]/20 to-amber-600/10 border border-[#EAD293]/45 flex items-center justify-center shadow-lg">
              <Crown className="w-5 h-5 text-[#EAD293]" />
            </div>
            <div>
              <span className="text-lg font-serif font-black bg-gradient-to-r from-white via-[#F6E5BF] to-[#EAD293] bg-clip-text text-transparent tracking-tight">
                MiniLabMentor
              </span>
              <p className="text-[8px] text-amber-100/70 font-mono uppercase tracking-widest font-black leading-none mt-0.5">
                ESTRATEGIA ÉLITE
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-slate-800/60" />

          {/* Menú Vertical de Iconos y Etiquetas */}
          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={() => navigateToDiagnostico("resumen")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all cursor-pointer text-xs font-black relative group ${
                activeTab === "diagnostico" && activeSubTab === "resumen"
                  ? "bg-gradient-to-r from-amber-500/15 via-[#EAD293]/10 to-transparent text-white border-l-4 border-amber-500 shadow-md"
                  : "hover:bg-slate-800/40 text-slate-400 hover:text-slate-200"
              }`}
            >
              <Home className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Inicio</span>
            </button>

            <button
              onClick={() => navigateToAnalisis()}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all cursor-pointer text-xs font-black relative group ${
                activeTab === "diagnostico" && activeSubTab === "analisis"
                  ? "bg-gradient-to-r from-amber-500/15 via-[#EAD293]/10 to-transparent text-white border-l-4 border-amber-500 shadow-md"
                  : "hover:bg-slate-800/40 text-slate-400 hover:text-slate-200"
              }`}
            >
              <Briefcase className="w-4 h-4 shrink-0" />
              <span>Diagnóstico</span>
            </button>

            <button
              onClick={() => navigateToEstrategia()}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer text-xs font-black relative group ${
                activeTab === "diagnostico" && activeSubTab === "estrategia"
                  ? "bg-gradient-to-r from-amber-500/15 via-[#EAD293]/10 to-transparent text-white border-l-4 border-amber-500 shadow-md"
                  : "hover:bg-slate-800/40 text-slate-400 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <FileText className="w-4 h-4 shrink-0" />
                <span>Estrategia</span>
              </div>
              {currentPlan && (
                <span className="bg-amber-600 text-white font-mono text-[9px] px-1.5 py-0.5 rounded-full flex items-center justify-center font-black leading-none">
                  ✓
                </span>
              )}
            </button>

            <button
              onClick={navigateToSeguimiento}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all cursor-pointer text-xs font-black relative group ${
                activeTab === "seguimiento"
                  ? "bg-gradient-to-r from-amber-500/15 via-[#EAD293]/10 to-transparent text-white border-l-4 border-amber-500 shadow-md"
                  : "hover:bg-slate-800/40 text-slate-400 hover:text-slate-200"
              }`}
            >
              <ListTodo className="w-4 h-4 shrink-0" />
              <span>Seguimiento</span>
            </button>

            <button
              onClick={() => setRecursosOpen(true)}
              className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-slate-800/40 text-slate-400 hover:text-slate-200 transition-all cursor-pointer text-xs font-black"
            >
              <BookOpen className="w-4 h-4 shrink-0" />
              <span>Recursos</span>
            </button>

            <button
              onClick={navigateToEjemplos}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all cursor-pointer text-xs font-black relative group ${
                activeTab === "ejemplos"
                  ? "bg-gradient-to-r from-amber-500/15 via-[#EAD293]/10 to-transparent text-white border-l-4 border-amber-500 shadow-md"
                  : "hover:bg-slate-800/40 text-slate-400 hover:text-slate-200"
              }`}
            >
              <Table className="w-4 h-4 shrink-0" />
              <span>Plantillas</span>
            </button>

            <button
              onClick={() => setComunidadOpen(true)}
              className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-slate-800/40 text-slate-400 hover:text-slate-200 transition-all cursor-pointer text-xs font-black"
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>Comunidad</span>
            </button>

            <button
              onClick={() => setAreaPremiumOpen(true)}
              className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl hover:bg-slate-800/40 text-slate-400 hover:text-slate-200 transition-all cursor-pointer text-xs font-black"
            >
              <Settings className="w-4 h-4 shrink-0" />
              <span>Ajustes</span>
            </button>
          </div>
        </div>

        {/* Banner Inferior de Jugada Maestra */}
        <div 
          onClick={() => setAgendarSesionOpen(true)}
          className="relative mt-auto bg-gradient-to-br from-[#0F1932] to-[#0A1022] border border-[#EAD293]/30 rounded-2xl p-4 text-center flex flex-col items-center gap-2.5 shadow-xl cursor-pointer hover:border-[#EAD293]/60 transition-all group animate-bounce"
          style={{ animationDuration: '4s' }}
        >
          <div className="w-9 h-9 rounded-full bg-[#EAD293]/10 border border-[#EAD293]/35 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
            <Crown className="w-4 h-4 text-[#EAD293]" />
          </div>
          <div>
            <h5 className="text-[11px] font-black text-white uppercase tracking-wider font-sans leading-tight">
              Quiero obtener mi
            </h5>
            <p className="text-[12px] font-black text-[#EAD293] tracking-tight leading-none mt-1">
              Jugada Maestra
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#EAD293] group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
      )}

      {/* CONTENIDO PRINCIPAL ADYACENTE */}
      <div className={`flex-1 flex flex-col min-h-screen overflow-x-hidden relative ${isLandingView ? "" : ""}`}>
        {/* Landing page completa — diseño oscuro de referencia */}
        {isLandingView ? (
          <>
            {publicFlow === "home" && (
              <LandingPage
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                isLoading={isLoading}
                onJugadaMaestra={() => setPublicFlow("jugada-maestra")}
                onAuditoriaGratis={() => setPublicFlow("auditoria")}
                onAgendarEmail={handleLandingAgendar}
                onOpenMenu={() => setMobileMenuOpen(true)}
              />
            )}
            {publicFlow === "auditoria" && (
              <AuditoriaPage
                onBack={() => setPublicFlow("home")}
                businessName={businessName}
                setBusinessName={setBusinessName}
                niche={niche}
                setNiche={setNiche}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                problema={problema}
                setProblema={setProblema}
                businessModel={businessModel}
                setBusinessModel={setBusinessModel}
                diagnosticAnswers={diagnosticAnswers}
                setDiagnosticAnswers={setDiagnosticAnswers}
                isLoading={isLoading}
                errorMsg={errorMsg}
                onSubmit={handleAuditoriaSubmit}
                onClear={handleNewAnalysis}
              />
            )}
            {publicFlow === "jugada-maestra" && (
              <JugadaMaestraPage
                onBack={() => setPublicFlow("home")}
                businessName={businessName}
                setBusinessName={setBusinessName}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                credits={credits}
                onRechargeCredits={handleRechargeCredits}
                onConfirmBooking={handleConfirmBooking}
              />
            )}
            {/* Menú móvil para landing */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 25 }}
                    className="absolute right-0 top-0 bottom-0 w-72 bg-[#0d1520] border-l border-amber-500/20 p-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-sm font-black text-amber-400 uppercase tracking-wider mb-6">Menú</h3>
                    <div className="flex flex-col gap-2">
                      {[
                        { label: "Inicio", action: () => setPublicFlow("home") },
                        { label: "Auditoría Gratis", action: () => setPublicFlow("auditoria") },
                        { label: "Jugada Maestra", action: () => setPublicFlow("jugada-maestra") },
                        { label: "Estrategia", action: navigateToEstrategia },
                        { label: "Seguimiento", action: navigateToSeguimiento },
                        { label: "Plantillas", action: navigateToEjemplos },
                      ].map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => { item.action(); setMobileMenuOpen(false); }}
                          className="px-4 py-3 rounded-xl text-sm font-bold text-slate-300 hover:bg-white/5 hover:text-white transition-all cursor-pointer text-left"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toast global en flujo landing */}
            <AnimatePresence>
              {copiedText && (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 15, x: "-50%" }}
                  className="fixed bottom-6 left-1/2 z-[60] bg-[#0d1520] text-white text-xs px-4 py-2.5 rounded-xl font-bold shadow-2xl flex items-center gap-2 border border-amber-500/40 whitespace-nowrap max-w-[95vw]"
                >
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{copiedText}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
        <>
        {/* Fondo ajedrez — coherente con la landing */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(rgba(5, 10, 18, 0.88), rgba(5, 10, 18, 0.94)), url('${chessHeroBackground}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Cabecera — tema oscuro unificado */}
        <header className="app-dark-header text-white py-4 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3 flex-1">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-amber-400 transition-all cursor-pointer"
              aria-label="Abrir menú"
            >
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
            </button>
            {activeTab === "diagnostico" && activeSubTab !== "resumen" && (
              <button
                onClick={() => navigateToDiagnostico("resumen")}
                className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-amber-400 transition-all cursor-pointer"
                title="Volver al Inicio"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div className="text-left min-w-0">
              <h2 
                onClick={() => navigateToDiagnostico("resumen")}
                className="text-lg sm:text-2xl font-serif font-black text-white tracking-tight cursor-pointer hover:text-amber-400 transition-colors flex items-center gap-2 truncate"
              >
                <span className="truncate">{getSectionTitle()}</span>
                <span className="hidden sm:inline text-[10px] font-mono font-black uppercase px-2.5 py-1 app-badge-gold rounded-full tracking-wider shrink-0">
                  ◆ App de Ganadores
                </span>
              </h2>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5 hidden sm:block">
                Mentoria MiniLab con Adri • {businessName || "Tu negocio"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 shrink-0">
            <button 
              onClick={() => setAgendarSesionOpen(true)}
              className="cursor-pointer group hidden sm:inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors bg-transparent border-0 shadow-none p-0"
            >
              <Crown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              <span className="border-b border-white/20 group-hover:border-amber-400/60 pb-0.5 transition-colors">
                Jugada maestra
              </span>
            </button>

            <div className="relative">
              <div 
                className="cursor-pointer p-2 hover:bg-white/5 rounded-xl transition-all relative" 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <span className="absolute top-1 right-1 bg-rose-600 text-white font-mono text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black animate-bounce">
                  2
                </span>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>

              <AnimatePresence>
                {notificationsOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setNotificationsOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-80 app-dark-card-accent rounded-2xl shadow-xl p-4 z-50 text-left space-y-3"
                    >
                      <div className="flex justify-between items-center pb-2 border-b border-white/10">
                        <span className="text-xs font-black text-white uppercase">Notificaciones Recientes</span>
                        <span className="text-[9px] font-bold text-teal-300 bg-teal-500/15 border border-teal-500/30 px-2 py-0.5 rounded-full uppercase">Activo</span>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div 
                          onClick={() => {
                            setNotificationsOpen(false);
                            navigateToEstrategia();
                          }}
                          className="p-2.5 hover:bg-white/5 border border-transparent hover:border-amber-500/30 rounded-xl transition-all cursor-pointer flex items-start gap-2.5"
                        >
                          <span className="text-lg">📊</span>
                          <div>
                            <p className="font-bold text-white">¡Auditoría de IA Lista!</p>
                            <p className="text-[10px] text-slate-400 leading-normal">La Inteligencia Artificial ha analizado tu marca. Revisa el Modelo de Riqueza y Estrategia.</p>
                          </div>
                        </div>

                        <div 
                          onClick={() => {
                            setNotificationsOpen(false);
                            setAgendarSesionOpen(true);
                          }}
                          className="p-2.5 hover:bg-white/5 border border-transparent hover:border-amber-500/30 rounded-xl transition-all cursor-pointer flex items-start gap-2.5"
                        >
                          <span className="text-lg">👑</span>
                          <div>
                            <p className="font-bold text-white">Cita estratégica disponible</p>
                            <p className="text-[10px] text-slate-400 leading-normal">Tienes 3 créditos libres para agendar tu mentoría 1:1 directa con Adri.</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex justify-end">
                        <button 
                          onClick={() => setNotificationsOpen(false)}
                          className="text-[10px] font-bold text-slate-500 hover:text-slate-300 uppercase cursor-pointer"
                        >
                          Cerrar panel
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <div 
              onClick={() => setSobreMiOpen(true)}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 p-1.5 pr-3 rounded-full cursor-pointer select-none transition-all"
            >
              <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-serif font-black text-xs">
                A
              </div>
              <div className="hidden lg:flex flex-col text-left leading-none">
                <span className="text-[11px] font-black text-white">Adriana Mentora</span>
              </div>
              <ChevronLeft className="w-3.5 h-3.5 text-slate-500 rotate-270" />
            </div>
          </div>
        </header>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0a1018] border-b border-white/5 px-4 py-3 z-20 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Inicio", action: () => navigateToDiagnostico("resumen"), active: activeTab === "diagnostico" && activeSubTab === "resumen" },
                  { label: "Diagnóstico", action: navigateToAnalisis, active: activeTab === "diagnostico" && activeSubTab === "analisis" },
                  { label: "Estrategia", action: navigateToEstrategia, active: activeTab === "diagnostico" && activeSubTab === "estrategia" },
                  { label: "Seguimiento", action: navigateToSeguimiento, active: activeTab === "seguimiento" },
                  { label: "Plantillas", action: navigateToEjemplos, active: activeTab === "ejemplos" },
                  { label: "Recursos", action: () => { setRecursosOpen(true); setMobileMenuOpen(false); }, active: false },
                  { label: "Comunidad", action: () => { setComunidadOpen(true); setMobileMenuOpen(false); }, active: false },
                  { label: "Ajustes", action: () => { setAreaPremiumOpen(true); setMobileMenuOpen(false); }, active: false },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={item.action}
                    className={`px-3 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                      item.active ? "bg-amber-500/20 text-amber-200 border border-amber-500/40" : "text-slate-300 hover:bg-slate-800/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CONTENIDO INTERACTIVO BAJO LA CABECERA (RÉPLICA DE LA IMAGEN DE REFERENCIA CON BORDER DORADO) */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-8 animate-fadeIn relative z-10 pb-24 lg:pb-8">

          {/* HERO Y NAVEGACIÓN — solo en flujo de diagnóstico (no en landing ni análisis) */}
          {activeTab === "diagnostico" && activeSubTab !== "resumen" && !["analisis", "sitioweb", "marketing", "mentoria"].includes(activeSubTab) && (
          <>
          {/* HERO PREMIUM — legibilidad + divisiones estilizadas */}
          <div className="relative rounded-[2rem] overflow-hidden min-h-[320px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] ring-1 ring-[#C9A87C]/15">
            {/* Fondo ajedrez — más visible */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${chessHeroBackground}')` }}
              aria-hidden="true"
            />
            {/* Velo sutil — deja ver la foto sin taparla con beige */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(12, 18, 32, 0.28) 0%, rgba(20, 14, 10, 0.12) 45%, rgba(8, 12, 22, 0.32) 100%)",
              }}
              aria-hidden="true"
            />
            {/* Borde interior decorativo */}
            <div className="absolute inset-3 sm:inset-4 rounded-[1.5rem] border border-[#C9A87C]/20 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-md divider-ornament-h" aria-hidden="true" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-0 items-stretch">
            
            {/* Contenido principal */}
            <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
                {/* Columna de texto — panel legible */}
                <div className="md:col-span-7 hero-readability-panel rounded-2xl p-6 sm:p-7 space-y-5 text-left">
                  <div className="flex items-center gap-3">
                    <span className="hero-glass-badge text-[9px] uppercase font-mono tracking-[0.18em] font-black px-3 py-1.5 rounded-full">
                      ✦ Estrategia científica · ♟️
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-serif font-black text-winner leading-[1.12] tracking-tight">
                    ¿Tu negocio es un <span className="text-gold-accent italic font-black">hobby</span>... <br/>
                    o una máquina de <span className="text-gold-accent font-black">generar riqueza?</span>
                  </h1>

                  <p className="text-winner-muted text-sm sm:text-[15px] leading-relaxed max-w-md font-sans font-semibold">
                    Diseñado para emprendedores que juegan en serio. Descubre fugas, optimiza tu modelo y escala con una auditoría estratégica al instante.
                  </p>

                  <div className="divider-ornament-h w-full max-w-xs" />

                  {/* CTAs premium — integrales pero con alto contraste */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-y-3 gap-x-10 pt-1">
                    <button
                      onClick={() => setAgendarSesionOpen(true)}
                      type="button"
                      className="cursor-pointer group inline-flex items-center gap-2.5 text-[#faf6ef] hover:text-[#f5d78e] text-xs font-black uppercase tracking-[0.14em] transition-colors bg-transparent border-0 shadow-none p-0"
                    >
                      <Crown className="w-4 h-4 text-[#e8c547] group-hover:scale-110 transition-transform" />
                      <span className="border-b-2 border-[#C9A87C]/50 group-hover:border-[#e8c547] pb-1 transition-colors">
                        Quiero mi jugada maestra
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#e8c547] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>

                    <button
                      onClick={navigateToAnalisis}
                      type="button"
                      className="cursor-pointer group inline-flex items-center gap-2.5 text-[#e8ede4] hover:text-[#c5ddb8] text-xs font-black uppercase tracking-[0.14em] transition-colors bg-transparent border-0 shadow-none p-0"
                    >
                      <Sparkles className="w-4 h-4 text-[#a8c49a] group-hover:scale-110 transition-transform" />
                      <span className="border-b-2 border-[#9bb08a]/50 group-hover:border-[#a8c49a] pb-1 transition-colors">
                        Auditoría gratis
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#a8c49a] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </div>
                </div>

                {/* Beneficios — panel + divisor ornamental */}
                <div className="md:col-span-5 flex gap-5 md:gap-0">
                  <div className="hidden md:flex flex-col items-center justify-center px-1 shrink-0">
                    <div className="divider-ornament-v flex-1 min-h-[60px]" />
                    <span className="text-[#C9A87C] text-[10px] my-2 select-none">◆</span>
                    <div className="divider-ornament-v flex-1 min-h-[60px]" />
                  </div>
                  <div className="hero-readability-panel rounded-2xl p-6 sm:p-7 flex-1 space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#d4c4a8] font-black font-sans flex items-center gap-2">
                      <span className="w-6 h-px bg-gradient-to-r from-[#C9A87C] to-transparent" />
                      Tu diagnóstico incluye
                    </h4>
                    <ul className="space-y-3.5 text-[13px] font-sans">
                      {[
                        "Claridad sobre tu modelo de negocio",
                        "Puntos ciegos y fugas detectadas",
                        "Acciones prioritarias para vender más",
                        "Ruta de crecimiento con enfoque real"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#C9A87C] to-[#A67C52] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                            <Check className="w-3 h-3 text-white stroke-[3]" />
                          </span>
                          <span className="text-[#f5f0e6] font-bold leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Créditos — columna premium */}
            <div className="lg:col-span-1 flex flex-col justify-center items-center text-center px-6 py-8 lg:py-10 relative">
              <div className="hidden lg:block absolute left-0 top-[12%] bottom-[12%] divider-ornament-v" aria-hidden="true" />
              <div className="hero-readability-panel rounded-2xl p-6 w-full max-w-[200px] mx-auto space-y-3">
                <Crown className="w-5 h-5 text-[#e8c547] mx-auto opacity-90" />
                <p className="text-[9px] text-[#d4c4a8] uppercase font-mono tracking-[0.22em] font-black">
                  Auditorías disponibles
                </p>

                <div className="flex items-center justify-center gap-2 py-1">
                  <svg className="w-6 h-9 text-[#C9A87C]/60" viewBox="0 0 24 36" fill="currentColor" aria-hidden="true">
                    <path d="M10 4s-1.5-2-3-2c-2 0-3 1.5-3 3 0 4 3.5 9 6 12M10 10s-1.5-1.5-2.5-1.5-2 1-2 2c0 3 2.5 6 4.5 8M10 16s-1-1-2-1c-1.5 0-2 .5-2 1.5 0 2 2 4 4 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="text-5xl sm:text-6xl font-serif font-black number-winner tracking-tight leading-none">
                    {credits}
                  </span>
                  <svg className="w-6 h-9 text-[#C9A87C]/60 scale-x-[-1]" viewBox="0 0 24 36" fill="currentColor" aria-hidden="true">
                    <path d="M10 4s-1.5-2-3-2c-2 0-3 1.5-3 3 0 4 3.5 9 6 12M10 10s-1.5-1.5-2.5-1.5-2 1-2 2c0 3 2.5 6 4.5 8M10 16s-1-1-2-1c-1.5 0-2 .5-2 1.5 0 2 2 4 4 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  </svg>
                </div>

                <p className="text-[10px] text-[#d4c4a8] font-bold uppercase tracking-widest font-mono">
                  gratuitas
                </p>
                
                <div className="divider-ornament-h w-full" />
                
                <button
                  onClick={() => setAreaPremiumOpen(true)}
                  type="button"
                  className="text-[10px] font-black uppercase tracking-wider text-[#e8c547] hover:text-[#faf6ef] transition-colors bg-transparent border-0 shadow-none cursor-pointer w-full"
                >
                  Acceso premium →
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    setCredits(3);
                    setCopiedText("✨ ¡Créditos recargados! Tienes 3 auditorías de prueba listas.");
                    setTimeout(() => setCopiedText(null), 3000);
                  }}
                  className="text-[9px] hover:underline text-[#d4c4a8] hover:text-[#faf6ef] font-bold cursor-pointer flex items-center gap-1 justify-center mx-auto font-mono uppercase tracking-wider leading-none"
                >
                  <RefreshCw className="w-3 h-3 text-[#e8c547]" />
                  Reiniciar créditos gratis
                </button>
              </div>
            </div>

            </div>
          </div>
          </>
          )}

          {/* Navegación entre secciones del diagnóstico */}
          {activeTab === "diagnostico" && activeSubTab !== "resumen" && (
          <div className="relative py-3 mb-8">
            <div className="divider-ornament-h w-full absolute top-0" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
            <div className="flex flex-wrap items-center gap-0.5 sm:gap-1 w-full md:w-auto justify-center md:justify-start">
              {[
                { id: "resumen", label: "Resumen", icon: Sparkles },
                { id: "analisis", label: "Análisis", icon: FileText },
                { id: "estrategia", label: "Estrategia", icon: TrendingUp },
                { id: "sitioweb", label: "Sitio Web", icon: Monitor },
                { id: "marketing", label: "Marketing", icon: Target },
                { id: "mentoria", label: "Mentoría", icon: Users }
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === "diagnostico" && activeSubTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    data-active={isActive}
                    onClick={() => {
                      setActiveTab("diagnostico");
                      setActiveSubTab(tab.id as SubTabId);
                    }}
                    className={`nav-winner-tab group px-3 sm:px-5 py-3 transition-all duration-200 cursor-pointer flex items-center gap-2.5 bg-transparent border-0 shadow-none ${
                      isActive
                        ? "text-amber-400"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 shrink-0 transition-colors ${isActive ? "text-amber-400" : "text-slate-600 group-hover:text-slate-400"}`} />
                    <span className={`text-xs sm:text-[13px] font-bold tracking-wide font-sans ${isActive ? "font-black text-white" : ""}`}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
            
            <div className="hidden lg:flex items-center gap-2.5 app-badge-gold text-[10px] font-bold px-4 py-2 rounded-full">
              <Crown className="w-3.5 h-3.5" />
              <span className="font-mono uppercase tracking-wider">Motor IA activo</span>
            </div>
            </div>
            <div className="divider-ornament-h w-full absolute bottom-0" />
          </div>
          )}

          {/* Encabezado de secciones fuera del flujo de diagnóstico */}
          {activeTab === "ejemplos" && (
            <div className="app-dark-card-accent p-5 sm:p-6 rounded-2xl">
              <p className="text-xs text-slate-300 leading-relaxed">
                Carga un caso de ejemplo para ver cómo la IA transforma bloqueos en estrategias accionables al instante.
              </p>
            </div>
          )}

          {/* ALERTA DE COPIADO */}
          <AnimatePresence>
            {copiedText && (
              <motion.div 
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 15, x: "-50%" }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 md:transform-none z-50 bg-[#1F354D] text-white text-xs px-4 py-2.5 rounded-xl font-bold shadow-2xl flex items-center gap-2 border border-[#EAD293] whitespace-nowrap max-w-[95vw]"
              >
                <Check className="w-4 h-4 text-[#EAD293] shrink-0" />
                <span>{copiedText}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ALERTA DE ANALISIS INICIADO */}
          <AnimatePresence>
            {analysisNotice && (
              <motion.div 
                initial={{ opacity: 0, y: -20, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: -20, x: "-50%" }}
                className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#1F354D]/95 text-white text-xs px-6 py-3 rounded-2xl font-black shadow-2xl flex items-center gap-3 border-2 border-[#EAD293] whitespace-nowrap max-w-[95vw] backdrop-blur-md"
              >
                <RefreshCw className="w-4 h-4 text-[#EAD293] animate-spin" />
                <span className="font-serif italic text-amber-100 font-bold">{analysisNotice}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ANÁLISIS — panel unificado sin contenido duplicado */}
          {activeTab === "diagnostico" && activeSubTab === "analisis" && (
            <div className="space-y-8">

              {/* Contexto: un solo encabezado con créditos */}
              <div className="app-dark-card rounded-2xl p-5 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-amber-400 font-mono font-black mb-1">Análisis · Paso 1 de 2</p>
                    <h2 className="text-xl sm:text-2xl font-serif font-black text-white">Autodiagnóstico de tu negocio</h2>
                    <p className="text-xs text-slate-400 mt-1.5 max-w-xl leading-relaxed">
                      Completa el formulario para activar tu panel personalizado y la estrategia generada por IA.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                      <Crown className="w-4 h-4 text-amber-400" />
                      <span className="text-lg font-serif font-black text-white">{credits}</span>
                      <span className="text-[10px] text-slate-400 font-mono uppercase">auditorías</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => document.getElementById("auth-diagnosis-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a0f18] text-[11px] font-black uppercase tracking-wider rounded-xl hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Ir al formulario
                    </button>
                  </div>
                </div>
              </div>

              {/* Vista previa del panel MiniLabMentor — superficie unificada */}
              <div className="workspace-shell rounded-[28px] shadow-2xl p-4 sm:p-6">
                <div className="workspace-surface rounded-2xl p-4 sm:p-5 space-y-4">

                  <div className="flex items-center justify-between border-b border-[#806B78]/15 pb-3">
                    <div>
                      <span className="font-serif font-black text-sm text-[#355C7D]">MiniLabMentor</span>
                      <h3 className="text-base font-bold text-[#3C1A2F] mt-0.5">
                        Panel de {businessName}
                      </h3>
                      <p className="text-[10px] text-[#806B78] mt-0.5">Vista previa · se activa al completar el diagnóstico</p>
                    </div>
                    <div
                      className="flex items-center gap-1.5 bg-amber-100/40 border border-amber-200/40 px-2 py-0.5 rounded-full select-none cursor-pointer"
                      onClick={() => setAreaPremiumOpen(true)}
                    >
                      <Crown className="w-2.5 h-2.5 text-amber-600" />
                      <span className="text-[8.5px] uppercase font-mono font-extrabold text-amber-700">Premium</span>
                      <div className="w-4 h-4 rounded-full bg-[#355C7D] text-white flex items-center justify-center text-[8px] font-black uppercase">U</div>
                    </div>
                  </div>

                  {/* Métricas clave */}
                  <div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {[
                        { label: "Tráfico orgánico", value: "12.8K", delta: "+28%", color: "stroke-amber-500", path: "M0,25 Q15,10 30,22 T60,5 T90,12 T100,2" },
                        { label: "Tasa conversión", value: calcConversion > 0 ? `${calcConversion}%` : "3.6%", delta: "+42%", color: "stroke-emerald-500", path: "M0,28 L20,20 L40,24 L60,10 L80,14 L100,3" },
                        {
                          label: "Ingresos netos",
                          value: calcPrice * calcLeads * (calcConversion / 100) > 0
                            ? `€${((calcPrice * calcLeads * (calcConversion / 100)) / 1000).toFixed(1)}K`
                            : "€24.6K",
                          delta: "+35%",
                          color: "stroke-[#A06283]",
                          path: "M0,25 Q20,5 40,20 T80,10 T100,2",
                        },
                        { label: "Clientes nuevos", value: calcLeads > 0 ? String(calcLeads) : "156", delta: "+31%", color: "stroke-blue-500", path: "M0,20 L25,12 L50,18 L75,5 L100,8" },
                      ].map((metric) => (
                        <div key={metric.label} className="workspace-card p-2.5 rounded-xl">
                          <span className="text-[8px] text-[#806B78] uppercase font-bold tracking-wider font-mono">{metric.label}</span>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-sm font-bold font-serif text-[#3C1A2F]">{metric.value}</span>
                            <span className="text-[7.5px] text-emerald-600 font-bold">{metric.delta}</span>
                          </div>
                          <div className="mt-1 h-5 flex items-end">
                            <svg viewBox="0 0 100 30" className={`w-full h-full ${metric.color} stroke-2 fill-none overflow-visible`}>
                              <path d={metric.path} />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[8px] text-[#806B78]/70 text-right mt-1 font-mono uppercase tracking-wider">
                      Variación vs. mes anterior
                    </p>
                  </div>

                  {/* Salud + prioridades */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="workspace-card p-4 rounded-2xl flex flex-col items-center text-center">
                      <h5 className="text-[9px] text-[#806B78] uppercase font-bold font-sans tracking-wide self-start w-full text-left">Salud del negocio</h5>
                      <div className="my-2.5 relative flex items-center justify-center">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle cx="40" cy="40" r="32" stroke="rgba(128,107,120,0.15)" strokeWidth="6" fill="transparent" />
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="url(#gradientMalva)"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray="201"
                            strokeDashoffset="26"
                          />
                          <defs>
                            <linearGradient id="gradientMalva" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#355C7D" />
                              <stop offset="100%" stopColor="#EE6596" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-lg font-serif font-black text-[#355C7D]">87</span>
                          <span className="text-[7px] text-[#806B78] font-bold uppercase tracking-wider -mt-1">/ 100</span>
                        </div>
                      </div>
                      <p className="text-[9px] text-[#806B78] leading-snug px-2">
                        Buen punto de partida. El diagnóstico revelará dónde escalar con más impacto.
                      </p>
                      <button
                        onClick={navigateToEstrategia}
                        type="button"
                        className="mt-3 w-full py-1.5 bg-[#355C7D] hover:bg-[#6D3254] text-white text-[8.5px] font-black uppercase tracking-widest rounded-lg transition-all"
                      >
                        Ver estrategia completa
                      </button>
                    </div>

                    <div className="workspace-card p-4 rounded-2xl flex flex-col justify-between">
                      <div>
                        <h5 className="text-[9px] text-[#806B78] uppercase font-bold font-sans tracking-wide mb-2.5">Próximas prioridades</h5>
                        <div className="space-y-2 text-left">
                          {[
                            "Optimizar embudo de conversión",
                            "Mejorar visibilidad orgánica (SEO)",
                            "Automatizar seguimiento de leads",
                          ].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-[9px] text-[#3C1A2F] font-bold">
                              <span className="w-3.5 h-3.5 rounded-full bg-emerald-100/60 text-emerald-700 flex items-center justify-center text-[7px] font-black">✓</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={navigateToEstrategia}
                        type="button"
                        className="mt-4 text-left text-[9px] text-[#355C7D] hover:text-[#DFC07F] transition-colors font-extrabold flex items-center gap-1"
                      >
                        Ver plan detallado <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Formulario de diagnóstico */}
              <div id="auth-diagnosis-form" className="max-w-4xl mx-auto space-y-4">
                <div className="text-center space-y-1">
                  <h3 className="text-lg font-serif font-bold text-white">Paso 2 · Completa tu diagnóstico</h3>
                  <p className="text-xs text-slate-400">3 minutos · Resultados instantáneos con IA</p>
                </div>

                <div className="app-dark-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                  <form onSubmit={(e) => handleCreatePlan(e, false)} className="space-y-6">

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4 border-b border-white/10">
                      <span className="text-[11px] font-bold text-slate-400 font-sans">
                        Negocio: <strong className="text-amber-300">{businessName.trim() ? businessName : "Sin nombre"}</strong>
                      </span>
                      {(businessName.trim() || niche.trim() || problema.trim()) && (
                        <button
                          type="button"
                          onClick={handleNewAnalysis}
                          className="cursor-pointer text-[10.5px] bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 px-3 py-1.5 rounded-lg border border-rose-500/30 transition-colors font-black flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Limpiar datos
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-black text-slate-200 mb-2 font-sans">
                          Nombre de tu negocio <span className="text-amber-400">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full app-dark-input rounded-xl px-4 py-3 text-sm font-semibold transition-all placeholder-slate-500"
                          placeholder="Ej: Cafetería Aromas"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-black text-slate-200 mb-2">
                          Nicho o sector <span className="text-amber-400">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full app-dark-input rounded-xl px-4 py-3 text-sm font-medium transition-all placeholder-slate-500 font-sans"
                          placeholder="Ej: Pastelería artesanal"
                          value={niche}
                          onChange={(e) => setNiche(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl border border-amber-500/25 bg-amber-500/5">
                      <label className="block text-sm font-black text-slate-200 mb-2 font-sans">
                        Correo electrónico <span className="text-amber-400">*</span>
                        <span className="block text-[10px] text-slate-400 font-normal mt-0.5">Para recibir tu auditoría en PDF</span>
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full app-dark-input rounded-xl px-4 py-3 text-sm font-semibold transition-all placeholder-slate-500"
                        placeholder="tu-correo@ejemplo.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-black text-slate-200 mb-2">
                        Modelo de negocio
                      </label>
                      <select
                        className="w-full app-dark-input rounded-xl px-4 py-3 text-sm transition-all cursor-pointer font-sans"
                        value={businessModel}
                        onChange={(e) => setBusinessModel(e.target.value)}
                      >
                        {BUSINESS_MODELS.map((m) => (
                          <option key={m} value={m} className="bg-[#0a1018] text-slate-200">
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.02] space-y-4">
                      <span className="text-sm font-black text-amber-300 font-mono flex items-center gap-1.5 pb-2.5 border-b border-white/10">
                        <Award className="w-4 h-4" />
                        Preguntas de autodiagnóstico
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {DIAG_QUESTIONS.map((q) => (
                          <div key={q.id} className="space-y-1.5 text-left">
                            <label className="block text-xs font-bold text-slate-300 font-sans leading-tight">
                              {q.question}
                            </label>
                            <select
                              className="w-full app-dark-input rounded-lg px-2.5 py-2.5 text-xs font-sans"
                              value={(diagnosticAnswers as any)[q.id] || ""}
                              onChange={(e) => setDiagnosticAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                            >
                              {q.options.map((opt) => (
                                <option key={opt.value} value={opt.value} className="bg-[#0a1018] text-slate-200">
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-black text-slate-200 mb-2 font-sans">
                        Tu bloqueo o problema actual <span className="text-amber-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full app-dark-input rounded-xl px-4 py-3 text-sm transition-all placeholder-slate-500 leading-relaxed font-sans"
                        placeholder="¿Qué te frena hoy en tu negocio?"
                        value={problema}
                        onChange={(e) => setProblema(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full cursor-pointer bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0a0f18] font-black py-4 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider font-mono active:scale-[0.98] disabled:opacity-75"
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span className="animate-pulse text-xs sm:text-sm">ANALIZANDO SI TIENES UN HOBBY O UNA MAQUINA DE RIQUEZA</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          <span>Generar mi auditoría gratis</span>
                        </>
                      )}
                    </button>

                  </form>
                </div>
              </div>

            </div>
          )}

          {/* SUB-TAB: ESTRATEGIA */}
          {activeTab === "diagnostico" && activeSubTab === "estrategia" && (
            <div className="space-y-6">
              {currentPlan ? (
                <PersonalizedResults
                  isLoading={isLoading}
                  currentPlan={currentPlan}
                  loadingStep={loadingStep}
                  loadingMessages={loadingMessages}
                  setActiveTab={handleTabNavigation}
                  feedTrackingPanel={feedTrackingPanel}
                  handleCopyToClipboard={handleCopyToClipboard}
                  currentStatusInfo={currentStatusInfo}
                  calcPrice={calcPrice}
                  setCalcPrice={setCalcPrice}
                  calcLeads={calcLeads}
                  setCalcLeads={setCalcLeads}
                  calcConversion={calcConversion}
                  setCalcConversion={setCalcConversion}
                  calcSavings={calcSavings}
                  setCalcSavings={setCalcSavings}
                  businessName={businessName}
                  handleNewAnalysis={handleNewAnalysis}
                  onAgendarSesion={() => setAgendarSesionOpen(true)}
                />
              ) : (
                <div className="app-dark-card-accent rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-black text-white">Estrategia de Élite no activa</h3>
                    <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                      Para ver tu hoja de ruta estratégica automatizada, tus finanzas optimizadas y tus 7 metas VIP, primero debes realizar el autodiagnóstico con Inteligencia Artificial.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <button
                      onClick={() => setActiveSubTab("analisis")}
                      className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a0f18] text-xs font-black uppercase tracking-wider rounded-xl hover:shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Sparkles className="w-4 h-4" />
                      Empezar Análisis Gratis
                    </button>
                    <button
                      onClick={(e) => handleCreatePlan(e, true)}
                      className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-amber-500/40 text-amber-300 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5" />
                      Cargar Demo de IA
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SUB-TAB: SITIO WEB */}
          {activeTab === "diagnostico" && activeSubTab === "sitioweb" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="app-dark-card rounded-2xl p-5 sm:p-6 text-center space-y-2">
                <p className="text-[10px] text-amber-400 uppercase font-mono font-black tracking-widest">Plano de conversión</p>
                <h3 className="text-xl font-serif font-black text-white">Estructura web recomendada</h3>
                <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
                  Embudo de 4 bloques orientado a agendar llamadas de alto valor.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  {[
                    {
                      block: "Bloque 1",
                      icon: Monitor,
                      iconClass: "text-slate-400",
                      title: "Hero de impacto",
                      preview: (
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1.5">
                          <div className="h-4 bg-white/10 rounded-sm w-3/4 text-[9px] text-slate-300 px-1 flex items-center font-bold">
                            Promesa clara en 1 frase
                          </div>
                          <div className="h-2.5 bg-white/5 rounded-sm w-1/2" />
                          <div className="h-6 bg-[#355C7D] rounded-md w-36 text-white text-[8px] font-black uppercase flex items-center justify-center">
                            Agendar sesión
                          </div>
                        </div>
                      ),
                    },
                    {
                      block: "Bloque 2",
                      icon: AlertTriangle,
                      iconClass: "text-amber-400",
                      title: "Dolor del cliente",
                      preview: (
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-1.5">
                          <div className="text-[9px] text-amber-200 font-bold">¿Frustrado por no saber de dónde vendrá tu próximo cliente?</div>
                          <p className="text-[8.5px] text-slate-400 leading-relaxed">Conecta con el problema antes de presentar tu solución.</p>
                        </div>
                      ),
                    },
                    {
                      block: "Bloque 3",
                      icon: Compass,
                      iconClass: "text-blue-400",
                      title: "3 pilares del éxito",
                      preview: (
                        <div className="grid grid-cols-3 gap-2 bg-white/5 p-2.5 rounded-lg border border-white/10">
                          {[
                            { title: "Foco", desc: "Prioriza lo que rinde." },
                            { title: "Estructura", desc: "Soporte de conversión." },
                            { title: "Mentoría", desc: "Decisiones claras." },
                          ].map((pilar) => (
                            <div key={pilar.title} className="bg-white/[0.03] p-2 rounded-md border border-white/10 text-center space-y-1">
                              <span className="text-[9px] font-bold text-slate-200 block">{pilar.title}</span>
                              <span className="text-[7.5px] text-slate-500 block leading-tight">{pilar.desc}</span>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                    {
                      block: "Bloque 4",
                      icon: Gift,
                      iconClass: "text-emerald-400",
                      title: "Oferta empaquetada",
                      preview: (
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-slate-200">Programa VIP de acompañamiento</span>
                            <span className="text-[10px] font-black text-emerald-400">Exclusivo</span>
                          </div>
                          <ul className="text-[8.5px] text-slate-400 space-y-1 pl-3 list-disc">
                            <li>Auditoría inicial 360°</li>
                            <li>Web optimizada para agendar llamadas</li>
                            <li>4 sesiones de mentoría con hoja de ruta</li>
                          </ul>
                        </div>
                      ),
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.block}
                        className="app-dark-card rounded-2xl border border-dashed border-white/15 p-4 relative overflow-hidden hover:border-amber-500/30 transition-colors"
                      >
                        <span className="absolute top-3 right-3 text-[9px] uppercase font-mono bg-white/10 px-2 py-0.5 rounded-md font-bold text-slate-400">
                          {item.block}
                        </span>
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5">
                            <Icon className={`w-4 h-4 ${item.iconClass}`} />
                            <span className="text-[11px] font-extrabold text-slate-200 uppercase tracking-wider">{item.title}</span>
                          </div>
                          {item.preview}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-4">
                  <div className="app-dark-card rounded-2xl p-4 space-y-4">
                    <h4 className="text-xs font-serif font-black text-amber-300 uppercase tracking-wider">Preguntas frecuentes</h4>
                    <div className="space-y-2">
                      {[
                        { q: "¿Por qué no una web corporativa tradicional?", a: "Esta estructura tiene un solo objetivo: agendar llamadas de clientes de alto valor." },
                        { q: "¿Cómo se adapta a mi marca?", a: "Reemplazamos textos e imágenes por los tuyos, alineando tu tono de voz." },
                        { q: "¿Necesito programar?", a: "No. Se diseña en plataformas visuales para que seas independiente." },
                      ].map((item, idx) => {
                        const isOpen = openFaqIndex === idx;
                        return (
                          <div key={idx} className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.03]">
                            <button
                              onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                              className="w-full px-3.5 py-2.5 text-left text-[10px] font-bold text-slate-300 hover:text-amber-300 transition-colors flex items-center justify-between"
                            >
                              <span>{item.q}</span>
                              <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                            </button>
                            {isOpen && (
                              <div className="px-3.5 pb-3 pt-1 text-[9px] text-slate-400 leading-relaxed border-t border-white/10">
                                {item.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#1C2C54] to-[#101C3D] text-amber-100 p-4 rounded-2xl border border-[#EAD293]/40 text-center space-y-3">
                    <h5 className="text-[10px] uppercase font-mono font-black tracking-widest text-[#EAD293]">¿Quieres implementarlo?</h5>
                    <p className="text-[9px] text-slate-300 leading-relaxed">
                      Agenda una sesión para que Adriana lo implemente por ti.
                    </p>
                    <button
                      onClick={() => setActiveSubTab("mentoria")}
                      className="w-full py-2 bg-[#EAD293] hover:bg-amber-200 text-[#101C3D] text-[9.5px] uppercase font-black tracking-wider rounded-lg transition-all"
                    >
                      Reservar sesión 1:1
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB: MARKETING */}
          {activeTab === "diagnostico" && activeSubTab === "marketing" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="app-dark-card rounded-2xl p-5 sm:p-6 text-center space-y-2">
                <p className="text-[10px] text-amber-400 uppercase font-mono font-black tracking-widest">Copywriting de impacto</p>
                <h3 className="text-xl font-serif font-black text-white">Ganchos para redes</h3>
                <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
                  Fórmulas listas para Reels, TikTok o emails. Copia y adapta a tu nicho.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "El error oculto",
                    hook: "El error de €500 que casi todos los profesionales cometen al vender servicios de alto valor por internet...",
                    badge: "Alto engagement",
                  },
                  {
                    title: "El síntoma doloroso",
                    hook: "La razón por la cual tu página web espanta a tus clientes ideales en lugar de agendarte llamadas...",
                    badge: "Alta conversión",
                  },
                  {
                    title: "La solución invisible",
                    hook: "3 cosas que tu negocio necesita automatizar hoy si quieres duplicar facturación con menos llamadas...",
                    badge: "Tráfico calificado",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="app-dark-card rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-amber-500/25 transition-colors">
                    <div className="space-y-2">
                      <span className="text-[10px] text-amber-400 font-extrabold uppercase font-mono">{item.badge}</span>
                      <h4 className="text-xs font-serif font-black text-white">{item.title}</h4>
                      <p className="text-[11px] bg-white/5 p-3 rounded-lg border border-white/10 text-slate-300 italic leading-relaxed">
                        &ldquo;{item.hook}&rdquo;
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopyToClipboard(item.hook, idx.toString())}
                      className="w-full py-2 bg-white/5 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9.5px] font-black uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      {copiedText === idx.toString() ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar gancho</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <div className="app-dark-card-accent rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left space-y-1">
                  <h4 className="text-xs font-serif font-black text-amber-300">¿Ganchos para tu micronicho?</h4>
                  <p className="text-[10px] text-slate-400 max-w-md">
                    El autodiagnóstico con IA genera hasta 7 ángulos personalizados para tu negocio.
                  </p>
                </div>
                <button
                  onClick={() => setActiveSubTab("analisis")}
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0a0f18] text-[10px] uppercase font-black tracking-wider rounded-lg shrink-0"
                >
                  Ir al análisis IA
                </button>
              </div>
            </div>
          )}

          {/* SUB-TAB: MENTORÍA */}
          {activeTab === "diagnostico" && activeSubTab === "mentoria" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="app-dark-card rounded-2xl p-5 sm:p-6 text-center space-y-2">
                <p className="text-[10px] text-amber-400 uppercase font-mono font-black tracking-widest">Acompañamiento VIP</p>
                <h3 className="text-xl font-serif font-black text-white">Mentoría con Adriana</h3>
                <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
                  Sesiones 1:1 enfocadas en claridad estratégica y planes de acción concretos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                <div className="md:col-span-5 app-dark-card rounded-3xl p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-serif text-lg font-black text-amber-300">
                        A
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Adriana</h4>
                        <span className="text-[10px] text-slate-400 font-mono">Mentora estratégica</span>
                      </div>
                    </div>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed italic">
                      &ldquo;Ayudo a consultores y prestadores de servicios a ordenar su marca, diseñar webs de impacto y estructurar embudos que agenden clientes estables.&rdquo;
                    </p>
                    <ul className="space-y-2 pt-1">
                      {[
                        "Claridad estratégica en una sesión",
                        "Estructuras ágiles sin rodeos técnicos",
                        "Enfoque en rentabilidad real",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[10.5px] text-slate-300 font-bold">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[9px] uppercase font-mono text-slate-500">Disponibilidad</span>
                    <span className="text-[9px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full">Hoy activo</span>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <div className="bg-gradient-to-br from-[#1C2C54] to-[#101C3D] text-white rounded-3xl p-6 sm:p-8 border border-[#EAD293]/40 shadow-2xl space-y-5 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

                    {bookingSuccess ? (
                      <div className="text-center space-y-4 py-8">
                        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                          <Check className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-serif font-black text-amber-100">Reserva confirmada</h4>
                          <p className="text-[11px] text-slate-300 max-w-sm mx-auto">
                            {selectedBookingDay} a las {selectedBookingSlot}. Te contactaremos por WhatsApp.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setBookingSuccess(false);
                            setBookingWhatsApp("");
                            setBookingName("");
                          }}
                          className="px-6 py-2 bg-[#EAD293] hover:bg-amber-200 text-[#101C3D] text-[10px] font-black uppercase tracking-wider rounded-lg transition-colors"
                        >
                          Agendar otra sesión
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div>
                            <span className="text-[8px] tracking-widest uppercase font-mono font-bold text-amber-400 block">Jugada maestra</span>
                            <h4 className="text-sm font-bold text-white mt-0.5">Agendar sesión 1:1</h4>
                          </div>
                          <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded-full font-bold">
                            1 crédito
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block">Día</label>
                          <div className="grid grid-cols-5 gap-1.5">
                            {["Lunes", "Martes", "Miérc.", "Jueves", "Viern."].map((day) => (
                              <button
                                key={day}
                                type="button"
                                onClick={() => setSelectedBookingDay(day)}
                                className={`py-2 text-[9.5px] font-extrabold uppercase rounded-lg transition-all ${
                                  selectedBookingDay === day
                                    ? "bg-[#355C7D] text-white border border-[#EAD293]"
                                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-transparent"
                                }`}
                              >
                                {day}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block">Hora</label>
                          <div className="grid grid-cols-4 gap-1.5">
                            {["10:00 AM", "12:00 PM", "4:00 PM", "6:00 PM"].map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedBookingSlot(slot)}
                                className={`py-1.5 text-[9px] font-bold rounded-lg transition-all ${
                                  selectedBookingSlot === slot
                                    ? "bg-[#EAD293] text-slate-900 font-black"
                                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="space-y-1">
                            <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block">Nombre</label>
                            <input
                              type="text"
                              value={bookingName}
                              onChange={(e) => setBookingName(e.target.value)}
                              placeholder="Ej: Laura Martínez"
                              className="w-full app-dark-input rounded-lg px-3 py-2 text-[11px] placeholder-slate-500"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[9px] uppercase font-mono font-bold text-slate-400 block">WhatsApp</label>
                            <input
                              type="tel"
                              value={bookingWhatsApp}
                              onChange={(e) => setBookingWhatsApp(e.target.value)}
                              placeholder="Ej: +34 600 000 000"
                              className="w-full app-dark-input rounded-lg px-3 py-2 text-[11px] placeholder-slate-500"
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            if (!bookingName.trim() || !bookingWhatsApp.trim()) {
                              alert("Por favor, completa todos los campos.");
                              return;
                            }
                            if (credits <= 0) {
                              alert("No tienes créditos disponibles. Recárgalos en el panel de Análisis.");
                              return;
                            }
                            setCredits((prev) => Math.max(0, prev - 1));
                            setBookingSuccess(true);
                          }}
                          className="w-full py-3 bg-[#EAD293] hover:bg-amber-200 text-[#101C3D] text-[10.5px] uppercase font-black tracking-widest rounded-xl transition-all shadow-md active:scale-[0.98]"
                        >
                          Reservar mi jugada maestra
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}


        {/* SECTION 2: THE TRACKING DASHBOARD / PANEL DE SEGUIMIENTO */}
        {activeTab === "seguimiento" && (
          <div className="space-y-6">

            <div className="bg-gradient-to-b from-[#1C2C54] to-[#101C3D] text-white p-6 sm:p-8 rounded-3xl border border-[#EAD293]/35 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#EAD293]/15 pb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center gap-2 bg-[#091124] px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-[10px] uppercase font-mono font-extrabold tracking-wider text-cyan-400 shadow-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                      </span>
                      Workspace activo
                    </div>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-[#E7CF91] mt-3 tracking-tight">
                    Seguimiento de metas
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 pb-1 font-medium max-w-lg">
                    Marca cada tarea del plan de 7 días y avanza etapa por etapa.
                  </p>
                </div>

                <button
                  onClick={() => {
                    if (currentPlan) {
                      feedTrackingPanel(currentPlan);
                    } else {
                      alert("Genera una estrategia primero en la pestaña Estrategia, o usa un caso de ejemplo.");
                    }
                  }}
                  className="px-5 py-2.5 bg-transparent border-2 border-[#EAD293]/60 text-[#EAD293] hover:bg-[#EAD293]/10 hover:text-white text-xs font-black rounded-xl cursor-pointer flex items-center gap-1.5 transition-all shadow-md active:scale-95 shrink-0"
                >
                  <Plus className="w-4 h-4 text-[#EAD293]" />
                  Cargar plan activo
                </button>
              </div>

              {trackingGoals.length === 0 ? (
                <div className="py-20 text-center text-slate-400 space-y-4">
                  <ListTodo className="w-16 h-16 text-slate-500 mx-auto opacity-70 animate-bounce" />
                  <p className="text-sm font-black text-[#E7CF91]">Sin planes en seguimiento</p>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Genera tu estrategia en <strong>Estrategia</strong> y pulsa &quot;Cargar plan activo&quot; para empezar.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 mt-6">
                  {trackingGoals.map((gObj) => {
                    const progress = getGoalProgress(gObj);

                    const uniqueDays: string[] = Array.from(new Set(gObj.tasks.map(t => t.dia))).sort((a: any, b: any) => {
                      const strA = String(a);
                      const strB = String(b);
                      const numA = parseInt(strA.replace(/\D/g, '')) || 0;
                      const numB = parseInt(strB.replace(/\D/g, '')) || 0;
                      return numA - numB;
                    }) as string[];

                    const activeDay = selectedDays[gObj.id] || uniqueDays[0] || (gObj.tasks[0]?.dia) || "";
                    const activeDayTasks = gObj.tasks.filter((t) => t.dia === activeDay);
                    const isCurrentStageCompleted = activeDayTasks.length > 0 && activeDayTasks.every((t) => t.completed);
                    const activeDayIndex = uniqueDays.indexOf(activeDay);
                    const hasNextStage = activeDayIndex !== -1 && activeDayIndex < uniqueDays.length - 1;
                    const nextStageName = hasNextStage ? uniqueDays[activeDayIndex + 1] : null;
                    const allPlanCompleted = gObj.tasks.length > 0 && gObj.tasks.every(t => t.completed);

                    return (
                      <div
                        key={gObj.id}
                        className="rounded-3xl p-6 sm:p-8 border border-white/10 bg-white/[0.04] backdrop-blur-sm space-y-5"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                          <div>
                            <h3 className="text-xl font-bold text-white font-serif tracking-tight">
                              {gObj.title}
                            </h3>
                            <span className="text-[10px] text-slate-400 font-mono block mt-1">
                              Iniciado el {gObj.createdAt}
                              {gObj.niche && gObj.niche !== gObj.title ? ` · ${gObj.niche}` : ""}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-xs font-black text-amber-300 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-lg">
                              {progress.badge}
                            </span>
                            <button
                              onClick={() => deleteGoalHistory(gObj.id)}
                              className="p-2 bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-500/30 text-slate-400 hover:text-red-400 rounded-xl transition-all cursor-pointer active:scale-90"
                              title="Eliminar del panel"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-xs mb-2 font-mono font-bold">
                            <span className="text-slate-400 flex items-center gap-1.5">
                              <Crown className="w-3.5 h-3.5 text-amber-400" />
                              Progreso global
                            </span>
                            <span className="font-extrabold text-amber-300 text-sm">
                              {progress.completedCount} / {progress.totalCount} ({progress.percent}%)
                            </span>
                          </div>
                          <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/10">
                            <div
                              className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 h-full transition-all duration-500 rounded-full"
                              style={{ width: `${progress.percent}%` }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-[11px] font-mono font-extrabold text-slate-500 uppercase tracking-widest">
                            Etapas del plan
                          </div>

                          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 snap-x scrollbar-none">
                            {uniqueDays.map((dayName, idx) => {
                              const dayTasks = gObj.tasks.filter(t => t.dia === dayName);
                              const completedDayCount = dayTasks.filter(t => t.completed).length;
                              const isDayCompleted = dayTasks.length > 0 && completedDayCount === dayTasks.length;
                              const isSelected = activeDay === dayName;

                              return (
                                <button
                                  key={dayName}
                                  onClick={() => setSelectedDays(prev => ({ ...prev, [gObj.id]: dayName }))}
                                  className={`flex-1 min-w-[130px] snap-center p-3.5 rounded-2xl border text-left transition-all duration-200 relative cursor-pointer ${
                                    isSelected
                                      ? "bg-[#0B1530] text-white border-[#EAD293] shadow-md ring-2 ring-[#EAD293]/20"
                                      : isDayCompleted
                                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-200"
                                      : "bg-white/5 border-white/10 hover:border-amber-500/30 text-slate-300"
                                  }`}
                                >
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className={`text-[9px] font-mono uppercase tracking-widest font-black ${
                                      isSelected ? "text-[#EAD293]" : isDayCompleted ? "text-emerald-400" : "text-slate-400"
                                    }`}>
                                      Etapa {idx + 1}
                                    </span>
                                    {isDayCompleted ? (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
                                    ) : (
                                      <span className={`text-[9px] font-mono font-black ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                                        {completedDayCount}/{dayTasks.length}
                                      </span>
                                    )}
                                  </div>
                                  <div className="font-bold text-xs truncate">{dayName}</div>
                                  <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                                    <div
                                      className={`h-full transition-all duration-300 ${
                                        isSelected
                                          ? "bg-gradient-to-r from-[#ebd390] to-amber-500"
                                          : isDayCompleted
                                          ? "bg-emerald-500"
                                          : "bg-amber-500/60"
                                      }`}
                                      style={{ width: `${dayTasks.length ? (completedDayCount / dayTasks.length) * 100 : 0}%` }}
                                    />
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-dashed border-amber-500/20 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-black font-mono text-amber-200 uppercase tracking-wider flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                              {activeDay || "Etapa actual"}
                            </h4>
                            <span className="text-[11px] font-mono font-black text-slate-500">
                              {activeDayIndex !== -1 ? activeDayIndex + 1 : 1} / {uniqueDays.length}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {activeDayTasks.map((task) => (
                              <div
                                key={task.id}
                                onClick={() => handleToggleTask(gObj.id, task.id)}
                                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                                  task.completed
                                    ? "bg-emerald-500/10 border-emerald-500/25 text-slate-500 opacity-80"
                                    : "bg-white/5 border-white/10 hover:border-amber-500/30 text-slate-200"
                                }`}
                              >
                                <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                                  task.completed
                                    ? "bg-emerald-500 border-emerald-400 text-white"
                                    : "border-white/20 hover:border-amber-400 bg-white/5"
                                }`}>
                                  {task.completed && <Check className="w-4 h-4 stroke-[3]" />}
                                </div>
                                <div className="space-y-1 flex-1 min-w-0">
                                  <span className={`text-xs font-bold block ${task.completed ? "text-slate-500 line-through" : "text-white"}`}>
                                    {task.dayTitle}
                                  </span>
                                  <p className={`text-xs leading-relaxed ${task.completed ? "text-slate-500 line-through" : "text-slate-400"}`}>
                                    {task.taskText}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {isCurrentStageCompleted && hasNextStage && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-[#0B1530]/80 text-white p-4 rounded-xl border border-[#ebd390]/30 flex flex-col sm:flex-row items-center justify-between gap-4"
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-amber-500/20 rounded-lg text-amber-300 shrink-0">
                                  <Award className="w-5 h-5" />
                                </div>
                                <p className="text-[11px] text-slate-300">
                                  Etapa completada. Siguiente: <strong className="text-amber-200">{nextStageName}</strong>
                                </p>
                              </div>
                              <button
                                onClick={() => {
                                  if (nextStageName) {
                                    setSelectedDays(prev => ({ ...prev, [gObj.id]: nextStageName }));
                                  }
                                }}
                                className="px-4 py-2 bg-[#EAD293] hover:bg-amber-200 text-slate-950 text-xs font-black rounded-lg cursor-pointer flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                              >
                                Ir a {nextStageName}
                                <ChevronRight className="w-3.5 h-3.5 stroke-[3.5]" />
                              </button>
                            </motion.div>
                          )}

                          {allPlanCompleted && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="bg-emerald-500/10 text-emerald-200 p-5 rounded-xl border border-emerald-500/25 text-center space-y-2"
                            >
                              <Crown className="w-6 h-6 text-amber-400 mx-auto" />
                              <h5 className="text-sm font-serif font-black uppercase text-amber-300 tracking-wider">
                                Plan completado
                              </h5>
                              <p className="text-xs text-emerald-100/80 max-w-md mx-auto leading-relaxed">
                                Has concluido todas las tareas del plan de 7 días.
                              </p>
                            </motion.div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}

            </div>
          </div>
        )}

        {/* SECTION 3: TEMPLATE AND QUICK ACCESSIBILITIES */}
        {activeTab === "ejemplos" && (
          <div className="space-y-6">
            
            <div className="app-dark-card p-6 sm:p-8 rounded-2xl">
              <h2 className="text-lg font-serif font-black text-amber-400 uppercase tracking-wide mb-2">
                Casos de Ejemplo Reales
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Descubre cómo MinilabMentor IA resuelve de inmediato conflictos recurrentes en múltiples sectores de negocios. Haz clic en cualquiera de estos ejemplos piloto para rellenar de inmediato tu formulario diagnóstica y probar la respuesta estratégica.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {SAMPLE_PROBLEMS.map((sample, idx) => (
                  <div
                    key={idx}
                    className="p-5 app-dark-card border-amber-500/20 rounded-2xl flex flex-col justify-between hover:border-amber-500/40 hover:bg-white/[0.05] duration-200 transition-all"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-400/90 font-mono tracking-wider">
                        Caso #{idx + 1} • {sample.model}
                      </span>
                      <h4 className="text-sm font-black text-white font-serif mt-1.5">
                        {sample.niche}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
                        Freno: &ldquo;{sample.problem}&rdquo;
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <span className="text-[10px] text-slate-500 font-bold">Reto: {sample.reto}</span>
                      <button
                        onClick={() => handleLoadSample(sample)}
                        className="px-3 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0a0f18] rounded-lg text-[11px] font-black transition-all cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        Cargar Caso
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="app-dark-card-accent p-5 rounded-2xl flex items-start gap-4">
              <div className="p-3.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/30 shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-amber-400 font-serif uppercase tracking-wider">
                  Acerca de MinilabMentor IA
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Esta herramienta está diseñada exclusivamente para que emprendedores eviten la parálisis por análisis (parálisis de bloqueos). Mediante ingeniería de prompts y el modelo Gemini, generamos reportes tácticos adaptados a tu facturación de hoy. Todas tus metas son almacenadas de forma local e irrecuperable en tu navegador (Local Storage) resguardando la privacidad de tu idea comercial.
                </p>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Navegación inferior móvil */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#050a12]/95 backdrop-blur-md border-t border-white/10 z-50 px-2 py-2 safe-area-pb">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          {[
            { id: "resumen", label: "Inicio", icon: Home, action: () => navigateToDiagnostico("resumen"), active: activeTab === "diagnostico" && activeSubTab === "resumen" },
            { id: "analisis", label: "Diagnóstico", icon: Briefcase, action: navigateToAnalisis, active: activeTab === "diagnostico" && activeSubTab === "analisis" },
            { id: "estrategia", label: "Estrategia", icon: FileText, action: navigateToEstrategia, active: activeTab === "diagnostico" && activeSubTab === "estrategia" },
            { id: "seguimiento", label: "Metas", icon: ListTodo, action: navigateToSeguimiento, active: activeTab === "seguimiento" },
            { id: "ejemplos", label: "Casos", icon: Table, action: navigateToEjemplos, active: activeTab === "ejemplos" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all cursor-pointer min-w-[56px] ${
                  item.active ? "text-amber-300" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${item.active ? "text-amber-400" : ""}`} />
                <span className="text-[9px] font-black">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
        </>
        )}

      {/* OVERLAY POPUP MODAL 1: SOBRE MÍ (MINILABMENTOR BIOGRAPHY) */}
      <AnimatePresence>
        {sobreMiOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1530]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSobreMiOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-white rounded-3xl border-2 border-[#EAD293] max-w-lg w-full p-6 sm:p-8 space-y-5 text-left relative shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b border-purple-50 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#355C7D] border border-[#EAD293]/50">
                    <Crown className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="text-base font-serif font-black text-[#3C1A2F]">Sobre mí • MiniLabMentor</h3>
                </div>
                <button 
                  onClick={() => setSobreMiOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-black cursor-pointer text-xs"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed font-sans">
                <p className="font-semibold text-slate-800">
                  Hola, soy director estratégico y creador del ecosistema MiniLabMentor. Mi misión es que dejes atrás el desorden tecnológico y tomes el control absoluto de tu crecimiento.
                </p>
                <p>
                  Comencé diseñando soluciones web boutique enfocado en la conversión y la psicología del consumidor. Con el tiempo, diseñé una metodología inspirada en la estrategia de ajedrez donde cada pieza de tu negocio (tráfico, embudos, marca y liderazgo) cumple un rol estratégico determinante para anticipar tus metas financieras.
                </p>
                <div className="bg-[#FAF7F9] p-4 rounded-xl border border-purple-100/60 italic text-[#355C7D] font-serif">
                  "No se trata de publicar más contenido o de comprar más herramientas. Se trata de estructurar un embudo elegante de valor real y asumir un liderazgo sólido."
                </div>
                <p>
                  A través de esta plataforma interactiva y con la ayuda de la inteligencia artificial avanzada, he democratizado el acceso a análisis tácticos instantáneos para miles de emprendedores de habla hispana.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSobreMiOpen(false);
                    setAgendarSesionOpen(true);
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#355C7D] to-[#5A7E9D] text-white text-[11px] font-black uppercase tracking-wider rounded-xl hover:shadow-md transition-all cursor-pointer"
                >
                  Hablar 1:1 Conmigo
                </button>
                <button
                  type="button"
                  onClick={() => setSobreMiOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-extrabold uppercase rounded-xl transition-colors cursor-pointer"
                >
                  Regresar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY POPUP MODAL 2: SERVICIOS (PREMIUM PORTFOLIO OFFERINGS) */}
      <AnimatePresence>
        {serviciosOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1530]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setServiciosOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-white rounded-3xl border-2 border-[#EAD293] max-w-xl w-full p-6 sm:p-8 space-y-5 text-left relative shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b border-purple-50 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#355C7D] border border-[#EAD293]/50">
                    <Briefcase className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="text-base font-serif font-black text-[#3C1A2F]">Portafolio de Servicios de Alto Valor</h3>
                </div>
                <button 
                  onClick={() => setServiciosOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-black cursor-pointer text-xs"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-500 font-sans">
                Diseñamos e implementamos sistemas cerrados de conversión que te permiten posicionar tu marca con sofisticación y capturar clientes VIP de manera predecible.
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "1. Auditoría Integral & Estrategia en Tablero",
                    price: "€1.500",
                    desc: "Análisis exhaustivo del embudo y posicionamiento SEO. Identificamos en una sesión de 3 horas el cuello de botella exacto que detiene tu crecimiento hoy."
                  },
                  {
                    title: "2. Diseño de Sitio Web Boutique de Alta Conversión",
                    price: "€3.400 - €4.500",
                    desc: "Sistemas web de ultra-rápida velocidad con arquitectura elegante, Copywriting estratégico incluido y optimización SEO local para dominar tu nicho."
                  },
                  {
                    title: "3. Mentoría Executive 1:1 de 3 Meses",
                    price: "€1.200 / mes",
                    desc: "Acompañamiento semanal personalizado para estructurar tus ofertas premium, consolidar tu control financiero y optimizar flujos reales."
                  }
                ].map((serv, index) => (
                  <div key={index} className="p-3.5 bg-gradient-to-tr from-[#FAF8FA] to-[#FAF6EE] rounded-2xl border border-slate-100 hover:border-[#EAD293]/50 transition-colors">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-xs font-serif font-bold text-[#3C1A2F]">{serv.title}</h4>
                      <span className="text-[10px] bg-amber-100 text-[#854d0e] px-2 py-0.5 rounded-md font-mono font-black">{serv.price}</span>
                    </div>
                    <p className="text-[10.5px] text-slate-500 leading-relaxed mt-1 font-sans">{serv.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setServiciosOpen(false);
                    setAgendarSesionOpen(true);
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#355C7D] to-[#5A7E9D] text-white text-[11px] font-black uppercase tracking-wider rounded-xl hover:shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Solicitar Información Especial
                </button>
                <button
                  type="button"
                  onClick={() => setServiciosOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-extrabold uppercase rounded-xl transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY POPUP MODAL 3: METODOLOGÍA (CHESS STRATEGY CORE DESIGN) */}
      <AnimatePresence>
        {metodologiaOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1530]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setMetodologiaOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-white rounded-3xl border-2 border-[#EAD293] max-w-lg w-full p-6 sm:p-8 space-y-5 text-left relative shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b border-purple-50 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#355C7D] border border-[#EAD293]/50">
                    <Target className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="text-base font-serif font-black text-[#3C1A2F]">Nuestra Metodología de 3 Pilares</h3>
                </div>
                <button 
                  onClick={() => setMetodologiaOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-black cursor-pointer text-xs"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Nuestra propuesta combina tres factores fundamentales para que un negocio sea rentable, escalable y visualmente deslumbrante:
              </p>

              <div className="space-y-4 font-sans">
                {[
                  {
                    step: "Pilar I",
                    title: "Estrategia del Tablero (Chess Tactics)",
                    desc: "Diseñamos un mapa táctico del negocio. No respondemos al caos operativo con impulsos. Evaluamos tu modelo, tus cobros recurrentes y tus márgenes reales para predecir futuros obstáculos de caja antes de que sucedan."
                  },
                  {
                    step: "Pilar II",
                    title: "Diseño Conversión Premium",
                    desc: "La sofisticación visual genera confianza inmediata. Estructuramos una jerarquía tipográfica sublime con una paleta balanceada de malvas, dorados e Inter sans-serif, asegurando que tu cliente local procese tu oferta estrella sin fricción."
                  },
                  {
                    step: "Pilar III",
                    title: "Ganchos e Inyección de Clientes Élite",
                    desc: "Automatizamos sistemas de atracción mediante copies persuasivos de alto calibre (disparadores psicológicos reptilianos) conectando tu plan de 7 días formulado con tus KPIs clave de rendimiento."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-[#355C7D] text-white px-2 py-0.5 rounded-full font-mono font-black">{item.step}</span>
                      <h4 className="text-xs font-bold text-[#3C1A2F]">{item.title}</h4>
                    </div>
                    <p className="text-[10.5px] text-slate-500 leading-relaxed pl-2 border-l border-purple-100">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setMetodologiaOpen(false)}
                  className="px-6 py-2.5 bg-[#355C7D] hover:bg-[#2C4E6D] text-white text-[11px] font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY POPUP MODAL 4: RECURSOS (FREE PRODUCTS DOWNLOAD) */}
      <AnimatePresence>
        {recursosOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1530]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setRecursosOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-white rounded-3xl border-2 border-[#EAD293] max-w-lg w-full p-6 sm:p-8 space-y-5 text-left relative shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b border-purple-50 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#355C7D] border border-[#EAD293]/50">
                    <BookOpen className="w-4 h-4 text-[#355C7D]" />
                  </div>
                  <h3 className="text-base font-serif font-black text-[#3C1A2F]">Recursos Gratuitos para Crecimiento</h3>
                </div>
                <button 
                  onClick={() => setRecursosOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-black cursor-pointer text-xs"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Descarga de manera libre y directa nuestras guías estratégicas. Diseñado para darte claridad instantánea sin demoras burocráticas comerciales:
              </p>

              {/* Download item rows with live alert status */}
              <div className="space-y-3 font-sans">
                {[
                  {
                    title: "Guía de Ganchos Psicobioinstintivos 2026",
                    desc: "La matriz exacta de 47 títulos listos para rellenar que detienen el scroll vertical de tus clientes ideales en Instagram, TikTok y LinkedIn."
                  },
                  {
                    title: "Checklist de Auditoría de Conversión Web",
                    desc: "Revisa punto por punto si tu página actual tiene los 12 disparadores del alto valor o si estás perdiendo llamadas por fricción de diseño."
                  },
                  {
                    title: "Ebook: El Tablero del Escalado Inmediato",
                    desc: "Introducción teórica y ejemplos de cómo reorganizar tus precios para duplicar ingresos de marca sin aumentar tus horas laborales."
                  }
                ].map((res, i) => (
                  <div key={i} className="flex items-start justify-between p-3 bg-slate-50/50 hover:bg-[#FAF7FA] rounded-xl border border-slate-100 transition-colors">
                    <div className="space-y-1 pr-3">
                      <h4 className="text-xs font-extrabold text-[#3C1A2F]">{res.title}</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">{res.desc}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCopiedText(`¡${res.title} descargada con éxito!`);
                        setTimeout(() => setCopiedText(null), 3000);
                      }}
                      className="cursor-pointer px-4 py-1.5 bg-gradient-[#355C7D] bg-[#355C7D] hover:bg-[#683250] text-[#EAD293] text-[9.5px] uppercase font-black tracking-wider rounded-lg transition-transform hover:scale-102"
                    >
                      Descargar
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setRecursosOpen(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-extrabold uppercase rounded-lg cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY POPUP MODAL 5: AGENDAR SESIÓN CALENDAR (FULLY OPERATIONAL BOOKING ENGINE) */}
      <AnimatePresence>
        {agendarSesionOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1530]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setAgendarSesionOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-white rounded-3xl border-2 border-[#EAD293] max-w-lg w-full p-6 sm:p-8 space-y-5 text-left relative shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center border-b border-purple-50 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 border border-amber-200/50">
                    <Calendar className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-black text-[#3C1A2F]">Agendar Sesión de Consulta Élite</h3>
                    <p className="text-[9px] text-[#A06283] font-mono leading-none font-bold uppercase mt-0.5">ESTRATEGIA 1:1 CON COBERTURA MÁXIMA</p>
                  </div>
                </div>
                <button 
                  onClick={() => setAgendarSesionOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-black cursor-pointer text-xs"
                >
                  ✕
                </button>
              </div>

              {credits <= 0 ? (
                <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl text-center space-y-3">
                  <p className="text-xs text-amber-900 font-bold">
                    ⚠️ No posees créditos libres para agendar una sesión hoy.
                  </p>
                  <p className="text-[10.5px] text-slate-600">
                    Puedes recargar tus 3 diagnósticos libres instantáneamente con el botón de recarga de la tarjeta en el panel de inicio.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCredits(3);
                      setAgendarSesionOpen(false);
                      setCopiedText("¡Créditos recargados! Intenta agendar ahora.");
                      setTimeout(() => setCopiedText(null), 3000);
                    }}
                    className="cursor-pointer py-2 px-4 bg-[#355C7D] text-white text-[10px] font-black uppercase rounded-lg"
                  >
                    Recargar 3 Créditos Gratis Ahora
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCredits((prev) => Math.max(0, prev - 1));
                    setAgendarSesionOpen(false);
                    setCopiedText("🎉 ¡Cita confirmada! Te hemos enviado las credenciales de Zoom al correo.");
                    setTimeout(() => setCopiedText(null), 4500);
                  }}
                  className="space-y-4 font-sans text-xs"
                >
                  <div className="p-3 bg-purple-50/50 border border-purple-100 rounded-xl">
                    <p className="text-[10px] text-slate-500 leading-normal">
                      Agendar esta videollamada consumirá <strong className="text-[#355C7D]">1 crédito de acceso libre</strong>. Tu saldo posterior será de <strong className="text-slate-800">{credits - 1} créditos</strong>.
                    </p>
                  </div>

                  {/* Input form details */}
                  <div className="space-y-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nombre y Apellidos *</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Ej: Sofía Martínez" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 focus:outline-none focus:border-[#355C7D]"
                      />
                    </div>

                     <div className="space-y-2.5">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Fecha de Sesión *</label>
                        <input 
                          required 
                          type="date" 
                          min="2026-06-22"
                          defaultValue="2026-06-30"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 font-semibold focus:outline-none focus:border-[#355C7D] cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1.5 flex justify-between items-center">
                          <span>Hora Favorita (Slots Disponibles) *</span>
                          <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase">Zona Central</span>
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "10:00 AM",
                            "11:30 AM",
                            "02:00 PM",
                            "04:30 PM",
                            "06:00 PM",
                            "07:30 PM"
                          ].map((hourOption) => {
                            const isSelected = selectedHour.includes(hourOption);
                            return (
                              <button
                                key={hourOption}
                                type="button"
                                onClick={() => setSelectedHour(hourOption + " (Central)")}
                                className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                                  isSelected
                                    ? "bg-[#355C7D] border-[#355C7D] text-[#EAD293] shadow-md scale-102"
                                    : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                                }`}
                              >
                                <span>{hourOption}</span>
                                {isSelected ? (
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                ) : (
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Tu Negocio / Idea a Auditar</label>
                      <input 
                        type="text" 
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Ej: Cafetería Aromas" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                    <button
                      type="submit"
                      className="cursor-pointer px-5 py-2.5 bg-[#355C7D] hover:bg-[#5E2E4B] text-[#EAD293] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm"
                    >
                      Confirmar Cita (1 Crédito)
                    </button>
                    <button
                      type="button"
                      onClick={() => setAgendarSesionOpen(false)}
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold uppercase rounded-xl cursor-pointer"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY POPUP MODAL 6: PLAN PREMIUM (VIP HIGH-TICKET ONBOARDING LIST) */}
      <AnimatePresence>
        {areaPremiumOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1530]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setAreaPremiumOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-gradient-to-tr from-white to-[#FDFBF7] rounded-3xl border-3 border-[#EAD293] max-w-md w-full p-6 sm:p-8 space-y-5 text-center relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3.5 bg-gradient-to-tr from-amber-400 to-[#EAD293] text-slate-900 rounded-2xl shadow-md border border-[#EAD293]">
                  <Crown className="w-8 h-8 text-[#0B1530] animate-bounce" style={{ animationDuration: '3s' }} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-black text-[#0B1530] tracking-tight">MiniLabMentor VIP Club</h3>
                  <span className="text-[9px] text-[#A06283] font-mono leading-none font-black uppercase tracking-widest mt-1 block">ACCESO PLATINO ILIMITADO</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed font-sans">
                <p>
                  Obtén el beneficio de créditos ilimitados de autodiagnóstico con Inteligencia Artificial, informes exportables en PDF, integraciones a CRM y acceso directo a nuestro grupo VIP de WhatsApp de emprendedores de élite.
                </p>
                <div className="p-3 bg-[#F0F4F8] rounded-xl border border-[#EAD293]/30 text-slate-700 font-medium">
                  🌟 Incluye 1 llamada de estrategia VIP 1:1 de 45 minutos conmigo cada mes.
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAD293]/20 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setAreaPremiumOpen(false);
                    setCopiedText("✨ ¡Te has sumado a la lista de espera VIP con rango platino! Te escribiremos.");
                    setTimeout(() => setCopiedText(null), 4500);
                  }}
                  className="w-full py-3 bg-[#0B1530] hover:bg-[#202E5C] text-[#EAD293] font-black uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Unirme a la lista VIP
                </button>
                <button
                  type="button"
                  onClick={() => setAreaPremiumOpen(false)}
                  className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-500 font-bold uppercase rounded-lg transition-colors cursor-pointer text-[10.5px]"
                >
                  Volver al Panel Principal
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY POPUP MODAL 7: PREMIUM ALERT FOR DISABLED CHANNELS */}
      <AnimatePresence>
        {premiumAlertOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-3xs z-50 flex items-center justify-center p-4"
            onClick={() => setPremiumAlertOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 max-w-sm w-full p-5 text-center space-y-3 relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Info className="w-8 h-8 text-amber-500 mx-auto" />
              <h3 className="text-sm font-bold text-[#3C1A2F]">Característica en Desarrollo</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Esta sección requiere conexión activa con el servidor CRM. Suscríbete al Plan VIP utilizando el enlace VIP superior para desbloquear informes continuos.
              </p>
              <button
                type="button"
                onClick={() => setPremiumAlertOpen(false)}
                className="w-full py-2 bg-[#355C7D] hover:bg-[#5E2B4B] text-white text-[11px] font-black uppercase rounded-lg cursor-pointer"
              >
                Entendido
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY POPUP MODAL 8: INTERACTIVE COMMUNITY FEED */}
      <AnimatePresence>
        {comunidadOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1530]/75 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            onClick={() => setComunidadOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 space-y-4 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-tr from-amber-400 to-[#EAD293] rounded-xl text-slate-900 shadow-sm">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Comunidad Élite</h3>
                    <p className="text-[9px] text-slate-400 font-mono font-bold leading-none mt-0.5">SOPORTE Y COLABORACIÓN MENTORÍA</p>
                  </div>
                </div>
                <button 
                  onClick={() => setComunidadOpen(false)}
                  className="text-xs font-black text-slate-400 hover:text-slate-600 uppercase"
                >
                  Cerrar
                </button>
              </div>

              {/* Message input box */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!newMsgText.trim()) return;
                  const newMsg = {
                    id: "usr-" + Date.now(),
                    author: "Tú",
                    role: businessName || "Emprendedor",
                    text: newMsgText.trim(),
                    time: "Ahora mismo",
                    likes: 0
                  };
                  setCommunityMessages(prev => [newMsg, ...prev]);
                  setNewMsgText("");
                }}
                className="space-y-2 bg-slate-50 p-3 rounded-2xl border border-slate-200"
              >
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider text-left">Publicar un pensamiento o duda rápida:</p>
                <div className="flex gap-2">
                  <input 
                    type="text"
                    className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#355C7D]"
                    placeholder="Escribe tu consulta para Adri y la comunidad..."
                    value={newMsgText}
                    onChange={(e) => setNewMsgText(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="cursor-pointer bg-[#355C7D] text-white text-[10px] uppercase font-black px-4 rounded-xl hover:bg-[#2C4E6D] transition-colors"
                  >
                    Enviar
                  </button>
                </div>
              </form>

              {/* Message scroll list */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {communityMessages.map((msg: any) => (
                  <div key={msg.id} className="p-3 bg-white border border-slate-150 rounded-2xl shadow-xs space-y-1.5 text-left">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-black text-slate-800">{msg.author}</span>
                        <span className="text-[9px] text-[#A06283] font-bold ml-2 bg-purple-50 px-1.5 py-0.5 rounded-full uppercase">{msg.role}</span>
                      </div>
                      <span className="text-[9px] text-slate-400">{msg.time}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{msg.text}</p>
                    <div className="flex justify-between items-center pt-1">
                      <button 
                        type="button"
                        onClick={() => {
                          setCommunityMessages(prev => prev.map(m => m.id === msg.id ? { ...m, likes: m.likes + 1 } : m));
                        }}
                        className="text-[10px] text-slate-400 hover:text-amber-600 font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        👍 <span>{msg.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-center text-[10px] text-amber-800 font-medium">
                💬 Adriana Mentora y su IA responden activamente en este panel de debate diario.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY POPUP MODAL 9: FESTINES DE OPTIMIZACIÓN (CONFETTI CELEBRATION) */}
      <AnimatePresence>
        {showFestin && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1530]/85 backdrop-blur-md z-[60] flex items-center justify-center p-4 overflow-hidden"
            onClick={() => setShowFestin(false)}
          >
            {/* FLOATING CONFETTI EMITTER SIMULATOR */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(25)].map((_, i) => {
                const randomX = Math.random() * 100;
                const randomDelay = Math.random() * 3;
                const randomDuration = 3 + Math.random() * 4;
                const emojis = ["🎉", "✨", "🚀", "♟️", "📈", "💎", "👑", "🏆", "🔥", "🎯"];
                const emoji = emojis[i % emojis.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ y: "105vh", x: `${randomX}vw`, rotate: 0, scale: 0.5 }}
                    animate={{ 
                      y: "-10vh", 
                      rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                      scale: [0.5, 1.2, 0.8]
                    }}
                    transition={{ 
                      duration: randomDuration, 
                      repeat: Infinity, 
                      delay: randomDelay,
                      ease: "linear"
                    }}
                    className="absolute text-2xl sm:text-3xl filter drop-shadow-md select-none"
                  >
                    {emoji}
                  </motion.div>
                );
              })}
            </div>

            {/* GOLDEN CELEBRATION CARD */}
            <motion.div 
              initial={{ scale: 0.8, y: 50, rotate: -1 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-3xl border-4 border-amber-400 max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-[0_0_50px_rgba(245,158,11,0.5)] text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* TOP TROPHY EMBLEM */}
              <div className="mx-auto w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-4xl border-2 border-amber-300 shadow-inner animate-bounce">
                🏆
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-serif font-black text-slate-900 tracking-tight">
                  ¡OPTIMIZACIÓN LOGRADA! 🎉
                </h3>
                <p className="text-xs text-amber-850 font-bold uppercase tracking-wider font-mono">
                  Tu Mentor de Negocios IA Élite
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium px-2">
                  Hemos diagnosticado con éxito <strong className="text-[#355C7D]">{businessName || "tu negocio"}</strong>. Hemos detectado las fugas de flujo de caja y diseñado una ruta táctica imparable de 7 días.
                </p>
              </div>

              {/* INTERACTIVE PROGRESS MILESTONES WITH DELAYED REVEAL */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 space-y-2.5 text-left font-sans">
                {[
                  { label: "Modelo de Riqueza Calculado", icon: "📊" },
                  { label: "Mapeo de Nicho y Cliente Ideal Completado", icon: "🎯" },
                  { label: "Gancho Psicológico de 3s Formulado", icon: "🔥" },
                  { label: "Plan Táctico de 7 Días Estructurado", icon: "♟️" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 * idx }}
                    className="flex items-center gap-3 text-xs font-semibold text-slate-700"
                  >
                    <span className="text-emerald-500 font-bold text-base">✓</span>
                    <span>{item.icon} {item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* REWARD CALL TO ACTION BUTTON */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => {
                    setShowFestin(false);
                    navigateToEstrategia();
                  }}
                  className="w-full cursor-pointer py-3.5 px-6 bg-gradient-to-r from-amber-500 via-[#DFC07F] to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-black uppercase tracking-wider rounded-xl shadow-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 font-sans"
                >
                  <span>♟️ VER MI PLAN ESTRATÉGICO AHORA</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <p className="text-[10px] text-slate-400 font-medium">
                  Copia del plan y seguimiento interactivo listos para su análisis.
                </p>
              </div>

              {/* CLOSE BUTTON */}
              <button 
                onClick={() => setShowFestin(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      {!isLandingView && (
      <footer className="mt-20 border-t border-[#ebd390]/30 bg-amber-50/10 py-8 text-center text-xs text-slate-500 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-slate-600">© 2026 MinilabMentor IA • Diseñado para Emprendedores Imparables.</p>
          <p className="text-[10px] text-amber-800 tracking-wider font-mono uppercase font-black">
            No Más Bloqueos • Sólo Planes de Acción
          </p>
        </div>
      </footer>
      )}



      </div> {/* CLOSING FOR THE ADJACENT MAIN CONTENT WRAPPER */}
    </div>
  );
}

// Minimal missing component icon wrapper to satisfy typescript build
function HistoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}
