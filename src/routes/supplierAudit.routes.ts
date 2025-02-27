import { Router } from "express";
import { SupplierAuditController } from "../controllers/supplierAudit.controller";

const router = Router();

// Endpoint untuk mengambil data audit berdasarkan code_supplier
router.get("/:code_supplier", SupplierAuditController.getAuditBySupplier);

// Endpoint untuk menambahkan data audit baru
router.post("/", SupplierAuditController.createAudit);

// Endpoint untuk memperbarui data audit berdasarkan ID
router.put("/:id", SupplierAuditController.updateAudit);

// Endpoint untuk menghapus data audit berdasarkan ID
router.delete("/:id", SupplierAuditController.deleteAudit);

export default router;
