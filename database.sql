CREATE DATABASE todolist;

CREATE TABLE "tasks"(
  "id" SERIAL PRIMARY KEY,
  "title" text NOT NULL,
  "description" text NOT NULL,
  "created_at" timestamp DEFAULT (now()),
);