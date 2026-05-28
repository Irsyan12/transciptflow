# project-structure.md

# Project Structure

```txt
TranscriptFlow/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── types/
│   │   ├── modules/
│   │   │   ├── jobs/
│   │   │   ├── reporters/
│   │   │   ├── editors/
│   │   │   └── payments/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── utils/
│   │   └── styles/
│   │
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.local
│
├── docs/
│   ├── backend-endpoints.md
│   ├── database-schema.md
│   └── project-structure.md
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# Suggested Tech Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Axios

---

## Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL

---

# Recommended Features

## Frontend

* Job dashboard
* Status badges
* Assignment modal/form
* Payment summary
* Filtering by status

---

## Backend

* REST API
* Status transition validation
* Payment calculation service
* Assignment logic
* Error handling middleware
