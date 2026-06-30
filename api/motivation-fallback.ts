import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getMotivationPhrase } from "../lib/gemini";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ phrase: getMotivationPhrase() });
}
