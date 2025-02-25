import express from "express";
import cors from "cors";
import path from "path";

import supplierRoutes from "./routes/supplier.routes";
import materialRoutes from "./routes/material.routes";
import docRoutes from "./routes/doc.routes";

const app = express();

// Aktifkan CORS
app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware untuk parsing JSON
app.use(express.json());

// Sajikan folder uploads secara statis
console.log('Serving uploads from:', path.join(__dirname, '../uploads'));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Daftarkan Routes
app.use("/api/suppliers", supplierRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/doc", docRoutes);

export default app;
