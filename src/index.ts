import express, { type Request, type Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

// Shape returned to clients: options as a plain string array, in `index` order.
function serializeQuestion(q: {
  id: number;
  topic: string;
  question: string;
  correctIndex: number;
  category: { name: string };
  options: { text: string; index: number }[];
}) {
  return {
    id: q.id,
    category: q.category.name,
    topic: q.topic,
    question: q.question,
    options: [...q.options].sort((a, b) => a.index - b.index).map((o) => o.text),
    correctIndex: q.correctIndex,
  };
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ ok: true });
});

// All categories, e.g. for building a topic picker in the frontend.
app.get("/api/categories", async (_req: Request, res: Response) => {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });
  res.json(categories);
});

// Distinct topics grouped by category, e.g. for a "what's covered" overview screen.
app.get("/api/topics", async (_req: Request, res: Response) => {
  const questions = await prisma.question.findMany({
    include: { category: true },
    orderBy: [{ categoryId: "asc" }, { topic: "asc" }],
  });

  const grouped: Record<string, string[]> = {};
  for (const q of questions) {
    const catName = q.category.name;
    if (!grouped[catName]) grouped[catName] = [];
    if (!grouped[catName].includes(q.topic)) grouped[catName].push(q.topic);
  }
  res.json(grouped);
});

// All questions in the database (id order). Mostly useful for admin/debugging.
app.get("/api/questions", async (_req: Request, res: Response) => {
  const questions = await prisma.question.findMany({
    include: { category: true, options: true },
    orderBy: { id: "asc" },
  });
  res.json(questions.map(serializeQuestion));
});

// The endpoint the quiz frontend actually uses: a random subset of questions.
// GET /api/questions/random?count=50
app.get("/api/questions/random", async (req: Request, res: Response) => {
  const requested = Number(req.query.count);
  const count = Number.isFinite(requested) && requested > 0 ? Math.floor(requested) : 50;

  const all = await prisma.question.findMany({
    include: { category: true, options: true },
  });

  const picked = shuffle(all).slice(0, Math.min(count, all.length));
  res.json(picked.map(serializeQuestion));
});

// Quick counts for the start screen ("120 questions in the bank" etc).
app.get("/api/stats", async (_req: Request, res: Response) => {
  const total = await prisma.question.count();
  const categories = await prisma.category.findMany({
    include: { _count: { select: { questions: true } } },
  });
  res.json({
    total,
    byCategory: Object.fromEntries(categories.map((c) => [c.name, c._count.questions])),
  });
});

app.get("/api/questions/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const q = await prisma.question.findUnique({
    where: { id },
    include: { category: true, options: true },
  });
  if (!q) {
    res.status(404).json({ error: "Question not found" });
    return;
  }
  res.json(serializeQuestion(q));
});

app.listen(PORT, () => {
  console.log(`Quiz API listening on http://localhost:${PORT}`);
});
