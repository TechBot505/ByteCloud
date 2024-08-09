import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Defining a schema for the file returned from backend to frontend
export default defineSchema({
  files: defineTable({ name: v.string() }),
});