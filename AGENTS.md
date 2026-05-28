# AGENTS.md

# CourtFlow — Engineering Guidelines

Dokumen ini berisi panduan untuk coding agents, AI assistants, dan developer yang berkontribusi pada project CourtFlow.

Tujuan utama project:

* membangun workflow management system sederhana
* clean architecture
* maintainable code
* modern TypeScript practices
* practical engineering solution

---

# Tech Stack

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL

---

# General Principles

## Prioritas Utama

Urutan prioritas engineering:

1. Correctness
2. Readability
3. Maintainability
4. Simplicity
5. Performance

Jangan melakukan over-engineering.

---

# Code Style Rules

## TypeScript First

Gunakan TypeScript secara konsisten:

* hindari `any`
* gunakan type/interface yang jelas
* gunakan enum untuk workflow status

Contoh:

```ts
enum JobStatus {
  NEW,
  ASSIGNED,
  TRANSCRIBED,
  REVIEWED,
  COMPLETED
}
```

---

## Gunakan Naming yang Jelas

### Good

```ts
calculateReporterPayment()
assignEditorToJob()
updateJobStatus()
```

### Bad

```ts
calc()
handle()
process()
```

---

## Hindari Logic Besar di Controller

Controller hanya bertugas:

* menerima request
* validasi dasar
* memanggil service
* mengembalikan response

Business logic harus berada di:

* service layer

---

# Backend Guidelines

## Struktur Backend

Gunakan modular structure:

```txt
src/
├── controllers/
├── services/
├── routes/
├── middleware/
├── modules/
├── utils/
└── prisma/
```

---

## REST API Convention

Gunakan convention berikut:

### GET

Untuk mengambil data

### POST

Untuk create/action

### PATCH

Untuk update partial

### DELETE

Untuk delete data

---

## Response Format

Gunakan response JSON yang konsisten.

### Success

```json
{
  "success": true,
  "data": {}
}
```

### Error

```json
{
  "success": false,
  "message": "Job not found"
}
```

---

## Error Handling

Gunakan centralized error handling middleware.

Jangan gunakan:

* duplicated try-catch berlebihan
* raw Prisma error ke client

---

## Status Transition Validation

Workflow harus tervalidasi.

Allowed flow:

```txt
NEW
→ ASSIGNED
→ TRANSCRIBED
→ REVIEWED
→ COMPLETED
```

Tidak boleh:

* lompat status
* rollback status sembarangan

---

## Payment Logic

Gunakan service terpisah untuk payment calculation.

Contoh:

```ts
calculateReporterPayment()
calculateEditorPayment()
calculateTotalPayment()
```

---

# Database Guidelines

## Prisma

Gunakan Prisma ORM sebagai database layer utama.

Hindari:

* raw SQL jika tidak diperlukan
* duplicated query logic

---

## Relasi

* satu reporter dapat memiliki banyak jobs
* satu editor dapat memiliki banyak jobs

Gunakan relational modeling yang sederhana dan jelas.

---

# Frontend Guidelines

## Fokus Utama

Frontend tidak perlu terlalu kompleks.

Prioritas:

1. usability
2. clean UI
3. easy navigation
4. clear workflow visibility

---

## Component Structure

Pisahkan:

* UI component
* business logic
* API service

Contoh:

```txt
components/
services/
hooks/
```

---

## Hindari Logic API di Component

Jangan langsung fetch API di banyak component.

Gunakan:

* service layer
* custom hooks jika diperlukan

---

## UI Principles

Gunakan UI sederhana:

* table jobs
* status badge
* modal/form assignment
* loading state
* empty state

Design tidak perlu berlebihan.

---

# Clean Code Rules

## Hindari

* nested logic berlebihan
* duplicated code
* magic number
* hardcoded string status

---

## Gunakan

* constants
* enums
* reusable functions
* reusable components

---

# Folder Naming Rules

Gunakan:

* lowercase
* kebab-case untuk folder tertentu jika perlu
* konsisten

---

# Git Commit Convention

Gunakan conventional commit sederhana.

Contoh:

```txt
feat: add reporter assignment endpoint
fix: validate invalid status transition
refactor: simplify payment calculation service
```

---

# Scope Control

Project ini adalah technical assessment.

Jangan menambahkan:

* authentication kompleks
* microservices
* websocket
* AI transcription
* payment gateway
* notification system

kecuali memang diperlukan.

Fokus utama:

* workflow system
* assignment logic
* clean architecture
* maintainable code

---

# Final Goal

Project harus:

* mudah dijalankan
* mudah dibaca
* mudah dipahami interviewer
* menunjukkan kemampuan fullstack engineering practical