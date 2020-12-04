# Bob Dev
Execution to start:

# Root:

- Executes `docker-compose up -d`

# Backend:
- Copy env.template to .env
- Executes the next commands:
  - `npm ci`
  - `npm run build`
  - `npm run start:cli`

# Frontend:

- Copy env.template to .env
- Executes the next commands:
  - `npm ci`
  - `npm run start`
