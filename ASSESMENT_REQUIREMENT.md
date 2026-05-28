# 🧪 Fullstack Assessment

**Theme: Court Reporting Workflow System**

---

## Overview

```yaml
Title: Court Reporting Workflow Manager

Goal: Build a simplified workflow system for managing transcription jobs
```

---

## Core Scenario

```yaml
A court reporting agency receives audio recordings.

They need to:
1. Assign jobs to court reporters
2. Assign editors to review transcripts
3. Track job status
4. Calculate payments
```

---

## Required Features

### 1. Job Management

```yaml
Create a job:
- case_name
- duration (minutes)
- location (physical / remote)
- status
```

Statuses:

```yaml
NEW → ASSIGNED → TRANSCRIBED → REVIEWED → COMPLETED
```

---

### 2. Reporter Assignment

* Assign job to a reporter
* Reporter attributes:

  * name
  * location
  * availability

Logic:

* Prefer same city for physical jobs
* Allow remote assignment

---

### 3. Editor Assignment

* Assign editor after transcription
* Track review status

---

### 4. Payment Calculation

```yaml
Example rules:
- Reporter paid per minute (e.g. 2000 IDR/min)
- Editor paid per job (flat fee)

System should:
- calculate total payout
- display per-job earnings
```

---

## Frontend Requirements

* Simple dashboard:

  * job list
  * status
  * assignments

* Basic UI is fine (function > design)

---

## Backend Requirements

* REST API:

  * create job
  * assign reporter/editor
  * update status
  * calculate payment

* Use:

  * Node.js + TypeScript
  * any DB (Postgres preferred, SQLite OK)


**Role:** Fullstack TypeScript Developer (React + Node)
**Location:** South Jakarta (Hybrid)
**Type:** Full-time

## About AutoScript

AutoScript builds AI-powered tools for legal workflows, including transcription, real-time analysis, and case intelligence. Our platform coordinates court reporters, editors, and AI systems into a unified workflow.

## What You’ll Work On

You will build the systems that power real-world operations:

* Job assignment systems for court reporters
* Workflow management (transcription → review → completion)
* Payment calculation and tracking
* Interfaces for managing real-time transcription workflows

This is a **product engineering role** focused on building usable systems.

## Responsibilities

* Build frontend applications using React / Next.js
* Develop backend APIs using Node.js / TypeScript
* Design and implement workflow systems and state transitions
* Integrate with AI services (transcription, LLM outputs)
* Model real-world business logic (assignments, payments, status flows)
* Collaborate with AI and QA engineers

## Requirements

* 2–5 years experience in fullstack development
* Strong TypeScript skills
* Experience with React (Next.js preferred)
* Experience building REST APIs
* Familiarity with databases (Postgres preferred)

## Nice to Have

* Experience with real-time systems (WebSockets)
* Experience designing workflow/state systems
* Experience integrating third-party APIs (AI or otherwise)
* Experience building internal tools or dashboards

## Application Process

As part of your application, you will complete a technical assessment involving:

* building a workflow system for managing jobs
* implementing assignment logic and state transitions
* basic frontend + backend integration

We are looking for engineers who can build practical, real-world systems—not just tutorials.