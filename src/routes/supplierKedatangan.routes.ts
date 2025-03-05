// src/routes/supplierKedatangan.routes.ts
import express from 'express';
import { SupplierKedatanganController } from '../controllers/supplierKedatangan.controller';

const router = express.Router();

// Route untuk mengambil data kedatangan dengan filter supplier, material, dan range tanggal
router.get('/', SupplierKedatanganController.getKedatangan);

export default router;
