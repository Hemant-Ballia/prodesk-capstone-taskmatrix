# AI Prompt Engineering Documentation
**Project:** TaskMatrix (Agile Project Management)
**Sprint:** 13 (Capstone Planning Phase)

## Overview
During the Capstone planning phase, AI was utilized strictly as an architectural sounding board. Prompting was limited to high-level strategic decisions, database normalization checks, and exploring edge cases for real-time state management. All core logic and feature scoping were defined manually.

---

### Prompt 1: Architectural Trade-off Analysis
**Objective:** Determine the most optimal data-fetching strategy for the Kanban board before locking in the tech stack.
* **Prompt Used:** 
  > "I am designing an Agile Project Management tool (TaskMatrix) using the MERN stack. For the Kanban board drag-and-drop feature, what are the architectural trade-offs between using standard REST API polling versus WebSockets (Socket.io) for real-time state synchronization? Focus on server load and optimistic UI updates."
* **Result:** Helped solidify the decision to use Socket.io for the activity feed and task movements to reduce database read overhead during high-frequency updates.

### Prompt 2: Database Schema Normalization Review
**Objective:** Validate my manually drafted database schema for potential querying bottlenecks.
* **Prompt Used:** 
  > "Review my proposed MongoDB schema for a project management tool. I plan to use 3 collections: Users, Projects, and Tasks. The Tasks collection will reference both projectId and assigneeId. For Role-Based Access Control (Manager vs Developer), is it better to embed the role directly in the Users collection as a string, or should I create a separate Roles collection for scalability?"
* **Result:** Confirmed that for an MVP scope, embedding the role string inside the Users collection is highly efficient and avoids unnecessary aggregate `$lookup` pipelines.

### Prompt 3: State Management Optimization (Zustand)
**Objective:** Research best practices for handling complex client-side state during drag-and-drop actions.
* **Prompt Used:** 
  > "In Next.js with Zustand and dnd-kit, what is the best enterprise pattern for handling 'optimistic UI updates'? If a user drags a task to 'Done', how should I structure the Zustand store to immediately show the change on the client, while waiting for the Socket.io server confirmation in the background?"
* **Result:** Provided a clear structural pattern for rolling back Zustand state if the backend WebSocket event returns an error, ensuring a seamless user experience.
