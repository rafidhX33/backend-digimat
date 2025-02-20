import express from "express";
import cors from "cors";  // ✅ Pastikan ini diimpor

import supplierRoutes from "./routes/supplier.routes";
import materialRoutes from "./routes/material.routes";

const app = express();

// ✅ Aktifkan CORS
app.use(cors({
  origin: "http://localhost:4200",  // Izinkan Angular mengakses backend
  methods: ["GET", "POST", "PUT", "DELETE"],  // Metode yang diizinkan
  allowedHeaders: ["Content-Type"]
}));

// Middleware untuk parsing JSON
app.use(express.json());

// ✅ Gunakan Routes
app.use("/api/suppliers", supplierRoutes);
app.use("/api/materials", materialRoutes);

export default app;
