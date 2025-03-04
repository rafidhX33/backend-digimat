// src/routes/abnormality.routes.ts
import express from 'express';
import { AbnormalityController } from '../controllers/abnormality.controller';

const router = express.Router();

// Endpoint untuk mendapatkan abnormality historical berdasarkan kode_vendor dan range waktu
router.get('/:kode_vendor', AbnormalityController.getBySupplier);

export default router;
