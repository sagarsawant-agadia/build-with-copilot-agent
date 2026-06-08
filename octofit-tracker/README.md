# OctoFit Tracker

This repo subtree bootstraps a modern multi-tier app for the OctoFit Tracker exercise.

Structure created on branch `build-octofit-app`:

- octofit-tracker/frontend — Vite + React 19 app (port 5173)
- octofit-tracker/backend — Node + Express + TypeScript + Mongoose (port 8000; MongoDB 27017)

Quickstart

1) Frontend

cd octofit-tracker/frontend
npm install
npm run dev

2) Backend

cd octofit-tracker/backend
npm install
npm run dev

MongoDB should be available at mongodb://localhost:27017 (default port 27017). You can customize via environment variables in the backend folder:

- PORT (default 8000)
- MONGO_URL (default mongodb://localhost:27017/octofit)

