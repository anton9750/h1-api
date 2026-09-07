import { PrismaClient } from "@prisma/client";
import { questions } from "./questions.seed";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Wipe existing data (children first because of the FK to Question)
  await prisma.option.deleteMany();
  await prisma.question.deleteMany();
  await prisma.category.deleteMany();

  // Create one Category row per distinct category name found in the dataset
  const categoryNames = [...new Set(questions.map((q) => q.category))];
  const categoryMap = new Map<string, number>();

  for (const name of categoryNames) {
    const category = await prisma.category.create({ data: { name } });
    categoryMap.set(name, category.id);
  }

  // Create each Question together with its 4 nested Options
  for (const q of questions) {
    await prisma.question.create({
      data: {
        topic: q.topic,
        question: q.question,
        correctIndex: q.correctIndex,
        categoryId: categoryMap.get(q.category)!,
        options: {
          create: q.options.map((text, index) => ({ text, index })),
        },
      },
    });
  }

  const total = await prisma.question.count();
  console.log(`Seed complete: ${total} questions across ${categoryNames.length} categories.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
