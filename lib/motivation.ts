export function getMotivationPhrase(): string {
  const customPhrases = [
    "La distancia entre tus sueños y la realidad se llama acción obstinada.",
    "El verdadero peligro en los negocios no es cambiar mucho, es no hacerlo a tiempo.",
    "Un bloqueo no es un muro de concreto; es un rompecabezas esperando tu creatividad.",
    "La venta no empieza cuando el cliente dice 'sí', sino cuando tú decides resolver su problema real.",
    "Domina tu mente financiera, delega lo secundario y el crecimiento será inevitable.",
  ];
  return customPhrases[Math.floor(Math.random() * customPhrases.length)];
}
