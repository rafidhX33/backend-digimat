import express from 'express';
import multer from 'multer';
import path from 'path';
import { SupplierInfoController } from '../controllers/supplierInfo.controller';

const router = express.Router();

// Setup multer: simpan file logo ke folder 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Endpoint untuk upload/update supplier info (logo dan status)
router.post('/', upload.single('logo'), SupplierInfoController.uploadSupplierInfo);

// Endpoint untuk mendapatkan supplier info berdasarkan kode_vendor
router.get('/:kode_vendor', SupplierInfoController.getSupplierInfo);

export default router;
