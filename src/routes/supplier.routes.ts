import express from "express";
import { 
  getSuppliers, 
  getSuppliersByMaterial, 
  addSupplier, 
  getSupplierGradeController, 
  getComplaintCountController 
} from "../controllers/supplier.controller";

const router = express.Router();

// ✅ Route untuk mendapatkan semua suppliers
router.get("/", getSuppliers);

// ✅ Route untuk mendapatkan suppliers berdasarkan material_code
router.get("/material/:material_code", getSuppliersByMaterial);

// ✅ Route untuk menambahkan supplier baru
router.post("/", addSupplier);

// ✅ Route untuk mendapatkan Supplier Score (GET)
router.get("/grade", getSupplierGradeController);

// ✅ Route untuk mendapatkan jumlah Complaint (GET)
router.get("/complaints", getComplaintCountController);

export default router;
