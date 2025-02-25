import express from "express";
import cors from "cors";

import supplierRoutes from "./routes/supplier.routes";
import materialRoutes from "./routes/material.routes";
import docRoutes from "./routes/doc.routes"; // Import route untuk dokumen PDF

const app = express();

// Aktifkan CORS
app.use(
  cors({
    origin: "http://localhost:4200", // Izinkan Angular mengakses backend
    methods: ["GET", "POST", "PUT", "DELETE"], // Metode yang diizinkan
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware untuk parsing JSON
app.use(express.json());

// Daftarkan Routes
app.use("/api/suppliers", supplierRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/doc", docRoutes); // Route CRUD untuk dokumen (menggunakan DB berbeda)

export default app;
