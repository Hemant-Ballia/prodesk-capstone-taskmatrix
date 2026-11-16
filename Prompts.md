
# AI Prompt Engineering Documentation
**Project:** TaskMatrix (Agile Project Management)
**Sprint:** 13 (Capstone Planning Phase)

## Overview
This document outlines the AI prompt engineering strategy utilized during the product planning, system architecture, and PRD generation phases of the Capstone project. The prompts were designed using persona adoption, strict output constraints, and tool-specific formatting to ensure enterprise-grade architectural decisions.

---

### Prompt 1: Strategic Project Selection
**Objective:** Evaluate the provided RFPs to select the most impactful project for a Fullstack engineering portfolio.
* **Prompt Used:** 
  > "Act as a Senior Staff Software Engineer. Analyze the three Prodesk Capstone RFPs: EduCore, VitalSync, and TaskMatrix. Evaluate which project offers the highest technical ceiling for a Fullstack Developer aiming to demonstrate advanced frontend state management, real-time backend pipelines, and modern UI/UX execution. Provide a comparative analysis and a final recommendation."
* **Result:** Highlighted TaskMatrix as the optimal choice due to the technical weight of implementing drag-and-drop Kanban states and WebSocket-driven activity feeds.

### Prompt 2: PRD & MVP Feature Scoping
**Objective:** Draft a concise, professional Product Requirements Document strictly aligned with Prodesk's Phase 1 requirements.
* **Prompt Used:** 
  > "Generate a formal README.md acting as a Product Requirements Document (PRD) for 'TaskMatrix'. Include the following sections exactly: High-Level Description, Designated Track (Fullstack), Tech Stack (specifying Next.js, Tailwind, Shadcn UI, Zustand, Express, MongoDB, Socket.io), and Core Features. Limit the Core Features to 4 strictly MVP-focused pipelines to prevent scope creep."
* **Result:** Produced a lean, highly focused PRD that establishes a single source of truth for the development phase without overextending the feature set.

### Prompt 3: Database Schema & ERD Generation
**Objective:** Design a normalized MongoDB schema and format it for immediate diagram generation.
* **Prompt Used:** 
  > "Design a MongoDB schema for the TaskMatrix MVP. It must include 3 to 5 collections (Users, Projects, Tasks) supporting Role-Based Access Control (Manager/Developer) and Kanban status tracking. Format the output entirely in DBML (Database Markup Language) syntax so it can be pasted directly into dbdiagram.io to generate an Entity Relationship Diagram (ERD). Do not include any standard code blocks, only the DBML text."
* **Result:** Generated the exact DBML syntax, allowing for seamless integration with dbdiagram.io and accurate visualization of relational connections between the Collections.
