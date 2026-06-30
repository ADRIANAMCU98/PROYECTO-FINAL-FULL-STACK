import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { generatePlan, getMotivationPhrase } from "./lib/gemini";

dotenv.config({ path: ".env.local" });
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/api/motivation-fallback", (_req, res) => {
  res.json({ phrase: getMotivationPhrase() });
});

app.post("/api/generate-plan", async (req, res) => {
  try {
    const planData = await generatePlan(req.body);
    res.json(planData);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Algo falló al contactar al mentor. Por favor, reintenta.";
    const status = message.includes("nicho y problema") ? 400 : 500;
    console.error("Error generating plan:", error);
    res.status(status).json({ error: message });
  }
});

if (process.env.NODE_ENV !== "production") {
  (async () => {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  })();
} else {
  const distPath = path.join(process.cwd(), "dist");
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`MinilabMentor IA is listening on http://0.0.0.0:${PORT}`);
});
