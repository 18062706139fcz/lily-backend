# Lily Backend

Backend service for Lily Protocol, the autonomous agent finance infrastructure built on Stellar.

## Stack

- Express
- TypeScript
- Zod environment validation
- Helmet, CORS allowlist, and rate limiting
- Vitest and Supertest
- Docker
- GitHub Actions CI

## Getting started

```bash
cp .env.example .env
npm install
npm run dev
```

Server defaults to `http://localhost:4000` and exposes:

- `GET /`
- `GET /api/v1/health`
- `GET /api/v1/agents`
- `POST /api/v1/agents`

## Example API

The repository includes a sample `agents` module to show contributors how we structure:

- route registration
- request validation with Zod
- typed controllers and responses
- service-layer business logic
- module-local TypeScript interfaces

Example request:

```bash
curl -X POST http://localhost:4000/api/v1/agents \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Payments Runner",
    "description": "AgentLily responsible for autonomous USDC payment execution.",
    "capabilities": ["payments", "marketplace-purchases"]
  }'
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run test
```

## Project structure

```text
src/
  common/
  config/
  modules/
    agents/
  routes/
  app.ts
  server.ts
tests/
```

## Docker

```bash
docker build -t lily-backend .
docker run --env-file .env -p 4000:4000 lily-backend
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for local setup and contribution guidelines.
