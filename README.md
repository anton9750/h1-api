# kahoot-quiz-api

Express + Prisma + SQLite API that serves the quiz questions. The database has
three related tables:

- **Category** — `JavaScript`, `Service`, `React`
- **Question** — topic, question text, correct answer index, belongs to a Category
- **Option** — the 4 answer choices for a Question (one row each, ordered by `index`)

The dataset has **100 seeded questions**.

## Setup

```bash
npm install

# Create the SQLite file + tables from prisma/schema.prisma
npx prisma migrate dev --name init

# Populate the tables with the 100 questions (also runs automatically
# right after `migrate dev` the first time)
npx prisma db seed
```

This creates `prisma/dev.db` — a real SQLite file you can open directly with
any SQLite browser (e.g. DB Browser for SQLite, TablePlus, VS Code's SQLite
extension) to inspect the `Category`, `Question`, and `Option` tables.

## Run the API

```bash
npm run dev
```

Starts the server on `http://localhost:4000` (change with `PORT` in `.env`).

## Endpoints

| Method | Path                      | Description                                             |
| ------ | ------------------------- | --------------------------------------------------------- |
| GET    | `/api/health`             | Health check                                               |
| GET    | `/api/categories`         | All categories                                             |
| GET    | `/api/questions`          | All 100 questions                                           |
| GET    | `/api/questions/random?count=50` | A random subset of questions (defaults to 50)         |
| GET    | `/api/questions/:id`      | A single question by id                                     |

Example response from `/api/questions/random?count=2`:

```json
[
  {
    "id": 14,
    "category": "JavaScript",
    "topic": "Loops (Iteration)",
    "question": "What does `for...of` iterate over?",
    "options": ["Object keys", "Iterable values (arrays, strings, etc.)", "Only numbers", "Function parameters"],
    "correctIndex": 1
  },
  {
    "id": 90,
    "category": "React",
    "topic": "Component",
    "question": "What naming convention should React component functions follow?",
    "options": ["camelCase", "snake_case", "PascalCase", "kebab-case"],
    "correctIndex": 2
  }
]
```

## Inspecting the database directly

You can also browse the data with Prisma's built-in GUI:

```bash
npx prisma studio
```

## Re-seeding / resetting

```bash
npm run db:reset   # drops the db, re-runs migrations, re-seeds
```

## Editing the question bank

The 100 seed questions live in `prisma/questions.seed.ts` as plain objects.
Edit that file and re-run `npx prisma db seed` to reload the database.
