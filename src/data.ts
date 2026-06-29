export interface DiagnosticQuestion {
  id: string;
  question: string;
  options: { value: string; label: string }[];
}

export const DIAG_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "facturacion",
    question: "¿En qué etapa está tu negocio hoy?",
    options: [
      { value: "idea", label: "Idea / Fase inicial sin ventas consistentes aún" },
      { value: "lanzamiento", label: "Lanzamiento / Facturación baja e intermitente" },
      { value: "traccion", label: "Tracción / Ventas estables, buscando escalar" },
      { value: "crecimiento", label: "Crecimiento de Élite / Facturación alta, buscando delegar" }
    ]
  },
  {
    id: "bloqueoPrincipal",
    question: "¿Cuál es tu mayor obstáculo en finanzas?",
    options: [
      { value: "precios", label: "Fijación de Precios: No sé cobrar el valor real o premium" },
      { value: "flujocaja", label: "Flujo de Caja: El dinero entra pero frena o se esfuma rápido" },
      { value: "reinversion", label: "Reinversión: Sin liquidez para contratar talentos o herramientas" },
      { value: "costos", label: "Costos Elevados: Desperdicio en suscripciones u operaciones" }
    ]
  },
  {
    id: "contenidoNicho",
    question: "¿Qué te frena al crear contenido para capturar prospectos?",
    options: [
      { value: "temas", label: "Desconocimiento: No sé de qué hablar para captar clientes calificados" },
      { value: "ventas", label: "Contenido que 'gusta' pero no convierte visitas a clientes" },
      { value: "constancia", label: "Constancia y fatiga: Paso incontables horas creando sin viralidad" },
      { value: "embudo", label: "Falta de embudo: No tengo ganchos o llamados a la acción virales" }
    ]
  },
  {
    id: "equipoSize",
    question: "¿Cómo gestionas el liderazgo en tu negocio?",
    options: [
      { value: "solo", label: "Solopreneur absoluto (Hago todo yo mismo y temo delegar)" },
      { value: "pequeno", label: "De 2 a 5 personas (Desorganización y falta de autonomía)" },
      { value: "mediano", label: "Más de 5 personas (Dependen de mí al 100% para avanzar)" }
    ]
  },
  {
    id: "ventasReptilianas",
    question: "¿Cuál es el mayor freno en tus llamadas o textos de venta?",
    options: [
      { value: "miedo_obj", label: "Miedo a las objeciones de precio o dar descuentos rápidos" },
      { value: "tecnico_larp", label: "Discurso aburrido: Explico especificaciones técnicas en vez de tocar el instinto primordial" },
      { value: "seguimiento", label: "Falta de rapidez y argumentos feroces para cerrar de forma inmediata" }
    ]
  }
];

export const BUSINESS_MODELS = [
  "Servicios de Consultoría / Coaching",
  "Agencia Digital / Freelancer",
  "E-commerce / Venta de Productos Físicos",
  "Infoproductos / Cursos Online / Membresías",
  "Negocio Físico / Servicios Locales",
  "Software / SaaS"
];

export const SAMPLE_PROBLEMS = [
  {
    niche: "Fitness y Nutrición Online",
    problem: "Me cuesta vender planes de $150 USD. La gente dice que es muy caro o que se lo pensará y no sé cómo liderar mi marca para cobrar premium.",
    model: "Infoproductos / Cursos Online / Membresías",
    reto: "Fijación de Precios"
  },
  {
    niche: "Agencia de Diseño y Desarrollo Web",
    problem: "Hago todo yo solo. No tengo tiempo para buscar clientes porque estoy atrapado diseñando. Me da miedo delegar porque siento que perderé calidad y dinero.",
    model: "Agencia Digital / Freelancer",
    reto: "Falta de liquidez para delegar"
  },
  {
    niche: "Tienda online de Cosmética Orgánica",
    problem: "Hago videos geniales de mis cremas, pero solo consigo likes y nada de ventas. Necesito hooks virales y un plan de acción para convertir la atención en flujos estables.",
    model: "E-commerce / Venta de Productos Físicos",
    reto: "Contenido que no convierte"
  }
];

export const FALLBACK_PLAN_MOCK = {
  motivationQuote: "El miedo al cobro es el impuesto invisible que pagas por dudar de tu propia transformación. Ofrece poder, no procesos.",
  diagnostico: "Tu negocio se encuentra en una fase crítica de cuello de botella operativa donde TÚ ERES EL CUELLO DE BOTELLA total y absoluto de tu propio negocio. Debes aceptar de inmediato subir de nivel en tu liderazgo, dejar ir el micromanagement y dejar de actuar como autoempleado. Tu parálisis operativa te cuesta miles de dólares en crecimiento desperdiciado. La única ruta real y prestigiosa para salir de esta prisión autoimpuesta y escalar masivamente es unirte hoy a nuestra Mentoría Premium, donde configuraremos tus sistemas delegables y aceleraremos tus cierres high-ticket de manera letal e inmediata.",
  finanzas: "Plan de Saneamiento: 1) Ajusta tus precios agregando una opción 'High Ticket' con bonos de implementación rápida. 2) Separa inmediatamente un 10% de cada ingreso en una cuenta de Reserva Operativa y reinvierte el 15% en campañas automatizadas. Deja de cotizar de forma variable; empaqueta tus servicios en 3 niveles fijos.",
  contenidoTabla: [
    {
      dolor: "Siente que gasta dinero en marketing que no le da retornos.",
      idea: "Revela la auditoría secreta de 3 pasos que sus competidores ignoran.",
      formato: "Carrusel estratégico con datos concisos",
      plataforma: "LinkedIn / Instagram"
    },
    {
      dolor: "No quiere contratar porque cree que nadie trabaja igual de bien.",
      idea: "Comparte el sistema de tableros de delegación que libera 15 horas semanales.",
      formato: "Reel educativo ágil con pantalla en mano",
      plataforma: "Instagram / TikTok"
    },
    {
      dolor: "Tiene miedo de que sus precios altos ahuyenten a los compradores.",
      idea: "Demuestra cómo reparar un error de $10,000 USD comparando soluciones baratas frente al valor real.",
      formato: "Video interactivo explicativo",
      plataforma: "YouTube / Email"
    }
  ],
  liderazgo: "Regla del 80%: Configura un manual rápido con las 3 tareas diarias innegociables. Prefiere contratar freelancers especializados para tareas de diseño o administración y libérate para la estrategia y ventas. Deja de ser el bombero de tu propio negocio.",
  ventasReptilianas: [
    {
      enfoque: "Disparador de Confort y Reducción del Esfuerzo (Supervivencia Básica)",
      guion: "'Con este sistema no vas a tener que aprender desarrollo web en un mes ni lidiar con códigos complejos. Nosotros nos encargamos de ensamblar todo para que tú entres con un interruptor directo y empieces a recibir leads en 72 horas operativas. Ahorras el dolor de cabeza y estrés.'"
    },
    {
      enfoque: "Estatus y Superioridad Social (Dominancia)",
      guion: "'Esto no es para empresas que quieren mantenerse estables. Es para marcas fundadoras que listan su nombre entre los referentes del sector este año. Al implementarlo, tus compradores finales te percibirán como la opción premium innegociable.'"
    }
  ],
  ideasRapidas: [
    "Llama o escribe hoy a 3 exclientes ofreciéndoles un upgrade exclusivo con 20% de descuento solo por 48 horas.",
    "Revisa tus suscripciones de software activas y da de baja al menos 2 herramientas que no uses mensualmente.",
    "Cambia el hook del enlace de tu biografía por un llamado a la acción específico que prometa resolver 'tu dolor número uno hoy'.",
    "Establece una sesión de 30 minutos semanales solo para revisar el flujo de caja del negocio."
  ],
  plan7Dias: [
    {
      dia: "Día 1",
      titulo: "Auditoría de Bloqueos y Precios",
      acciones: [
        "Anota todos tus gastos fijos del último mes.",
        "Acrecienta un 20% tus tarifas actuales para prospectos nuevos."
      ]
    },
    {
      dia: "Día 2",
      titulo: "Redefinición del Cliente Ideal (Dolor)",
      acciones: [
        "Entrevista a un cliente activo o investiga qué quejas de precio repite tu nicho.",
        "Listar las 3 quejas de dolor recurrentes para tu tabla de contenido."
      ]
    },
    {
      dia: "Día 3",
      titulo: "Construcción de Ganchos de Ventas",
      acciones: [
        "Construye 3 argumentos usando gatillos reptilianos (atacar el miedo, el confort o estatus).",
        "Escríbelos y practícalos ante un espejo o grábate en audio."
      ]
    },
    {
      dia: "Día 4",
      titulo: "Lanzamiento del Hook Viral",
      acciones: [
        "Crea e implementa un video o carrusel usando uno de los viral hooks proporcionados.",
        "Haz un llamado a la acción directo solicitando mensajes directos (DM) con una palabra clave."
      ]
    },
    {
      dia: "Día 5",
      titulo: "Sistematización del Liderazgo",
      acciones: [
        "Escribe un breve paso a paso (SOP) de cómo realizas tu tarea más repetitiva.",
        "Prepara esa guía para poder dársela a un asistente o freelancer en el futuro inmediato."
      ]
    },
    {
      dia: "Día 6",
      titulo: "Cerrar Prospectos Activos",
      acciones: [
        "Envía un mensaje de seguimiento con urgencia a los clientes indecisos.",
        "Asegúrate de tocar el gatillo reptil de seguridad o ahorro de tiempo."
      ]
    },
    {
      dia: "Día 7",
      titulo: "Evaluación Financiera",
      acciones: [
        "Valora el progreso del flujo de dinero de este plan.",
        "Abre una cuenta de ahorros específica para tu reserva del 10%."
      ]
    }
  ],
  hooksVirales: [
    "🔥 Este es el costoso error que los emprendedores cometen al intentar vender servicios altos...",
    "❌ Deja de crear videos para ganar 'likes' y empieza a hacer esto si quieres clientes calificados...",
    "Por favor, no contrates a nadie para tu equipo de ventas hasta que respondas estas 3 preguntas...",
    "La cruda verdad sobre por qué tu flujo de caja se está desangrando en herramientas secretas...",
    "Si tuvieras que cobrar el triple por lo que haces hoy, ¿qué servicio agregarías ahora mismo?"
  ]
};
