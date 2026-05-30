# Backend API Endpoints

Base URL:

```txt
/api
```

---

# Jobs

## Create Job

```http
POST /api/jobs
```

Request Body:

```json
{
  "caseName": "Case A",
  "durationMinutes": 90,
  "jobType": "PHYSICAL",
  "city": "Jakarta"
}
```

Response (201 Created):

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "NEW"
  }
}
```

---

## Get All Jobs

```http
GET /api/jobs
```

Optional Query:

```http
GET /api/jobs?status=ASSIGNED
```

---

## Get Job By ID

```http
GET /api/jobs/:id
```

---

## Update Job Status

```http
PATCH /api/jobs/:id/status
```

Request Body:

```json
{
  "status": "TRANSCRIBED"
}
```

Allowed Status Flow:

```txt
NEW
→ ASSIGNED
→ TRANSCRIBED
→ REVIEWED
→ COMPLETED
```

---

# Reporter

## Get All Reporters

```http
GET /api/reporters
```

---

## Assign Reporter to Job

```http
POST /api/jobs/:id/assign-reporter
```

Request Body:

```json
{
  "reporterId": "uuid"
}
```

Rules:

- Physical jobs prefer reporters from the same city
- Remote jobs allow any available reporter

When assigned:

- job status becomes `ASSIGNED`

---

# Editor

## Get All Editors

```http
GET /api/editors
```

---

## Assign Editor to Job

```http
POST /api/jobs/:id/assign-editor
```

Request Body:

```json
{
  "editorId": "uuid"
}
```

Rules:

- Editor can only be assigned after transcription
- Job status must be `TRANSCRIBED`

---

# Payment

## Calculate Job Payment

```http
GET /api/jobs/:id/payment
```

Response:

```json
{
  "success": true,
  "data": {
    "reporterPayment": 180000,
    "editorPayment": 50000,
    "totalPayment": 230000
  }
}
```

Payment Rules:

- Reporter payment = duration × rate per minute
- Editor payment = flat fee per job
