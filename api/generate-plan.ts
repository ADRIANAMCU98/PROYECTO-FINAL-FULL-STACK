import type { VercelRequest, VercelResponse } from "@vercel/node";
import { generatePlan } from "../lib/gemini";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Método no permitido" });
    return;
  }

  try {
    const planData = await generatePlan(req.body ?? {});
    res.status(200).json(planData);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Algo falló al contactar al mentor. Por favor, reintenta.";
    const status = message.includes("nicho y problema") ? 400 : 500;
    console.error("Error generating plan:", error);
    res.status(status).json({ error: message });
  }
}
