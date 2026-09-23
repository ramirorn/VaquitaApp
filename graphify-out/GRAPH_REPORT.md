# Graph Report - VaquitaApp  (2026-09-23)

## Corpus Check
- Corpus is ~784 words - fits in a single context window. You may not need a graph.

## Summary
- 93 nodes · 108 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Project Metadata
- TypeScript Configuration
- Authentication Services
- Express Routing
- Runtime Dependencies
- Development Dependencies
- PostgreSQL Infrastructure
- JWT Middleware
- User Migration
- Legacy User Migration

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `express` - 8 edges
3. `db` - 4 edges
4. `jsonwebtoken` - 3 edges
5. `prisma` - 3 edges
6. `registerUser()` - 3 edges
7. `loginUser()` - 3 edges
8. `registerAuthService()` - 3 edges
9. `loginAuthService()` - 3 edges
10. `scripts` - 2 edges

## Surprising Connections (you probably didn't know these)
- `registerUser()` --calls--> `registerAuthService()`  [EXTRACTED]
  src/controllers/auth.controllers.ts → src/services/auth.services.ts
- `loginUser()` --calls--> `loginAuthService()`  [EXTRACTED]
  src/controllers/auth.controllers.ts → src/services/auth.services.ts

## Import Cycles
- None detected.

## Communities (11 total, 3 thin omitted)

### Community 0 - "Project Metadata"
Cohesion: 0.10
Nodes (20): author, description, keywords, license, main, name, scripts, dev (+12 more)

### Community 1 - "TypeScript Configuration"
Cohesion: 0.12
Nodes (16): compilerOptions, declaration, declarationMap, exactOptionalPropertyTypes, isolatedModules, jsx, module, moduleDetection (+8 more)

### Community 2 - "Authentication Services"
Cohesion: 0.26
Nodes (8): bcryptjs, @prisma/client, prisma, loginUser(), registerUser(), JWT_SECRET, loginAuthService(), registerAuthService()

### Community 3 - "Express Routing"
Cohesion: 0.33
Nodes (5): express, app, authRouter, router, userRouter

### Community 4 - "Runtime Dependencies"
Cohesion: 0.25
Nodes (8): dependencies, bcrypt, bcryptjs, dotenv, express, express-validator, jsonwebtoken, @prisma/client

### Community 5 - "Development Dependencies"
Cohesion: 0.25
Nodes (8): devDependencies, prisma, tsx, @types/bcryptjs, @types/express, @types/jsonwebtoken, @types/node, typescript

### Community 6 - "PostgreSQL Infrastructure"
Cohesion: 0.40
Nodes (5): db, postgres:15-alpine, vaquita_data, vaquita_db, vaquita_db

### Community 7 - "JWT Middleware"
Cohesion: 0.40
Nodes (3): jsonwebtoken, AuthRequest, JWT_SECRET

## Knowledge Gaps
- **56 isolated node(s):** `name`, `version`, `description`, `main`, `dev` (+51 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 60 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `express` connect `Express Routing` to `Project Metadata`, `Authentication Services`, `JWT Middleware`?**
  _High betweenness centrality (0.164) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Development Dependencies` to `Project Metadata`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Project Metadata`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **What connects `name`, `version`, `description` to the rest of the system?**
  _56 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._