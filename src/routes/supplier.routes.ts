import express from "express";
import { getSuppliers, getSuppliersByMaterial, addSupplier } from "../controllers/supplier.controller";

const router = express.Router();

// Route untuk mendapatkan semua suppliers
router.get("/", getSuppliers);

// Route untuk mendapatkan suppliers berdasarkan material_code
router.get("/material/:material_code", getSuppliersByMaterial);

// Route untuk menambahkan supplier baru
router.post("/", addSupplier);

export default router;
