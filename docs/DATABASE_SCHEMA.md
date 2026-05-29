# Database Schema

---

# Table: jobs

| Column           | Type          | Description       |
| ---------------- | ------------- | ----------------- |
| id               | uuid          | Primary key       |
| case_name        | varchar       | Case name         |
| duration_minutes | integer       | Audio duration    |
| job_type         | enum          | PHYSICAL / REMOTE |
| city             | varchar       | Job location      |
| status           | enum          | Workflow status   |
| reporter_id      | uuid nullable | Assigned reporter |
| editor_id        | uuid nullable | Assigned editor   |
| reporter_payment | integer       | Reporter earnings |
| editor_payment   | integer       | Editor earnings   |
| total_payment    | integer       | Total payout      |
| created_at       | timestamp     | Created time      |
| updated_at       | timestamp     | Updated time      |

---

# Table: reporters

| Column          | Type      | Description         |
| --------------- | --------- | ------------------- |
| id              | uuid      | Primary key         |
| name            | varchar   | Reporter name       |
| city            | varchar   | Reporter city       |
| is_available    | boolean   | Availability status |
| rate_per_minute | integer   | Payment rate        |
| created_at      | timestamp | Created time        |

---

# Table: editors

| Column       | Type      | Description         |
| ------------ | --------- | ------------------- |
| id           | uuid      | Primary key         |
| name         | varchar   | Editor name         |
| flat_fee     | integer   | Flat fee payment    |
| is_available | boolean   | Availability status |
| created_at   | timestamp | Created time        |

---

# Enums

## JobStatus

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

## JobType

```ts
enum JobType {
  PHYSICAL,
  REMOTE
}
```

---

# Relationships

```txt
Reporter (1) ---- (*) Jobs
Editor   (1) ---- (*) Jobs
```

One reporter/editor can handle multiple jobs.
