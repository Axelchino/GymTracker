# GymTracker Pro

> The Data Scientist's Gym App - Exceptional analytics, structured programming, and progressive overload insights for self-directed lifters.

## Project Vision

A premium, data-driven gym analytics and workout tracking application that embodies Apple's design philosophy: **simple on the surface, powerful underneath**. Built as a personal project focused on exceptional user experience and deep analytics.

## Current Status

**Phase 1: Data Layer - COMPLETE**

- Offline-first IndexedDB database with Dexie.js
- Complete data models and TypeScript types
- Exercise library with 229+ exercises
- Database service layer with CRUD operations
- Seed data initialization

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Database:** IndexedDB via Dexie.js (offline-first)
- **Icons:** Lucide React
- **Charts:** Recharts (planned for Phase 3)

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app runs on `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components (future)
├── services/          # Business logic layer
│   ├── database.ts    # Dexie database setup
│   └── exerciseService.ts
├── types/             # TypeScript type definitions
│   ├── exercise.ts
│   ├── workout.ts
│   ├── user.ts
│   └── program.ts
├── data/              # Static data & seed files
│   └── exercises.ts   # 229 default exercises
├── App.tsx           # Root component (demo page)
└── main.tsx          # Entry point
```

## Features Roadmap

### Phase 0: Foundation (COMPLETE)
- React + TypeScript + Vite setup
- Tailwind CSS configuration
- Design system foundation

### Phase 1: Data Layer (COMPLETE)
- IndexedDB schema with Dexie.js
- Complete data models
- Exercise library (229 exercises)
- Database service layer

### Phase 2: Workout Tracking (Next)
- Exercise library browser
- Workout template builder
- Active workout logging interface
- Set logging (<3 seconds per set)

### Phase 3: Analytics & Visualization
- Progress charts (Recharts)
- PR detection and tracking
- Volume/strength analytics
- Interactive dashboards

### Phase 4: Programming System
- Multi-week program builder
- Calendar scheduling
- Pre-built program templates

### Phase 5: Multi-User & Cloud Sync
- Authentication system
- Cloud backup
- Cross-device sync

## Core Principles

1. **Offline-first** - Works perfectly without internet
2. **Data ownership** - Users control their data completely
3. **Performance** - Fast is a feature (set logging <3 seconds)
4. **Simplicity** - Simple surface, powerful underneath
5. **Zero data loss** - Robust data integrity

## License

Personal project - not for commercial use

## Documentation

Full project plan and technical specs available in `../projectplan.md`
