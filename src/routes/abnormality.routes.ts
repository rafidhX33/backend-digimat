import express from 'express';
import { AbnormalityController } from '../controllers/abnormality.controller';

const router = express.Router();

// GET /api/abnormalities/:kode_vendor?range=all|1m|6m|1y
router.get('/:kode_vendor', AbnormalityController.getBySupplier);

export default router;
