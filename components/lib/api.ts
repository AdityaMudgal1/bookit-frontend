// src/lib/api.ts
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

if (!baseURL) {
  console.warn("⚠️ NEXT_PUBLIC_API_URL not set — using localhost fallback");
}

export const api = axios.create({
  baseURL: baseURL || "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});
