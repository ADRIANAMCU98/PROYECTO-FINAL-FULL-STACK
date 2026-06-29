export interface DiagnosticAnswers {
  facturacion: string;
  bloqueoPrincipal: string;
  equipoSize: string;
  niche: string;
  businessModel: string;
}

export interface ContentItem {
  dolor: string;
  idea: string;
  formato: string;
  plataforma: string;
}

export interface SalesArgument {
  enfoque: string;
  guion: string;
}

export interface DayPlan {
  dia: string;
  titulo: string;
  acciones: string[];
}

export interface MentorPlan {
  id: string; // generated locally
  createdAt: string;
  userPrompt: {
    niche: string;
    problem: string;
    answers: DiagnosticAnswers;
    businessName?: string;
  };
  motivationQuote: string;
  diagnostico: string;
  finanzas: string;
  contenidoTabla: ContentItem[];
  liderazgo: string;
  ventasReptilianas: SalesArgument[];
  ideasRapidas: string[];
  plan7Dias: DayPlan[];
  hooksVirales: string[];
}

export interface GoalTask {
  id: string;
  dia: string;
  dayTitle: string;
  taskText: string;
  completed: boolean;
}

export interface TrackingGoal {
  id: string;
  planId: string;
  niche: string;
  title: string;
  createdAt: string;
  tasks: GoalTask[];
}
