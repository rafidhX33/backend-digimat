import express from "express";
import cors from "cors";
import path from "path";

import supplierRoutes from "./routes/supplier.routes";
import materialRoutes from "./routes/material.routes";
import docRoutes from "./routes/doc.routes";
import supplierAuditRoutes from "./routes/supplierAudit.routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

console.log("Serving uploads from:", path.join(__dirname, "../uploads"));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/suppliers", supplierRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/doc", docRoutes);
app.use("/api/supplier-audit", supplierAuditRoutes);

export default app;
