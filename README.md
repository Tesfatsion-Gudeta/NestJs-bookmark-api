# NestJS API

This is a **modular Bookmark NestJS API** that includes authentication, user management, and bookmark resources. The project uses **Prisma** for database access, **Docker Compose** for development/test environments, and includes full support for testing and code quality tools.

## 📦 Tech Stack

- **Framework**: NestJS v11
- **Database**: PostgreSQL (via Docker)
- **ORM**: Prisma
- **Auth**: JWT w/ Passport + Argon2
- **Validation**: class-validator, class-transformer
- **Testing**: Jest, Pactum
- **Code Quality**: ESLint, Prettier

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env` and `.env.test`:

```
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret
```

### 3. Run Development Database

```bash
npm run db:dev:restart
```

Or step-by-step:

```bash
npm run db:dev:rm
npm run db:dev:up
npm run prisma:dev:deploy
```

### 4. Start Dev Server

```bash
npm run start:dev
```

## 🧪 Testing

### E2E Tests

```bash
npm run test:e2e
```

Restart the test DB with:

```bash
npm run db:test:restart
```

## 📂 Folder Structure

```text
src/
├── auth/                      # Authentication logic
│   ├── decorator/             # Custom decorators (e.g. @GetUser)
│   ├── dto/                   # DTOs for Auth
│   ├── guard/                 # Guards (e.g. JWT Guard)
│   ├── strategy/              # Passport strategies
│   ├── auth.controller.ts     # Routes for login/signup
│   ├── auth.module.ts
│   └── auth.service.ts
│
├── bookmark/                  # Bookmark feature
│   ├── dto/                   # DTOs for bookmarks
│   ├── bookmark.controller.ts
│   ├── bookmark.module.ts
│   └── bookmark.service.ts
│
├── user/                      # User profile feature
│   ├── dto/                   # DTOs for users
│   ├── user.controller.ts
│   ├── user.module.ts
│   └── user.service.ts
│
├── prisma/                    # Prisma service wrapper
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── app.module.ts              # Root module
└── main.ts                    # App bootstrap
```

## 🧰 Available Scripts

```text
start               - Run app in production
start:dev           - Start in watch mode
start:debug         - Start with debugger
start:prod          - Run compiled dist version
build               - Compile TypeScript
format              - Run Prettier
lint                - Run ESLint
test                - Run unit tests
test:watch          - Watch unit tests
test:cov            - Run tests with coverage
test:e2e            - Run e2e tests
db:dev:restart      - Restart dev DB and apply migrations
db:test:restart     - Restart test DB and apply migrations
```


