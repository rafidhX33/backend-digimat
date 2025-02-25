import { Router, Request } from 'express';
import multer from 'multer';
import DocController from '../controllers/doc.controller';

// Konfigurasi Multer dengan anotasi tipe
const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, 'uploads/');
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

const router = Router();

// Contoh route dengan upload fields
router.post(
  '/',
  upload.fields([
    { name: 'doc_qs', maxCount: 1 },
    { name: 'doc_ss', maxCount: 1 },
    { name: 'doc_aios', maxCount: 1 },
  ]),
  DocController.createDoc
);

// Route lainnya...
router.get('/', DocController.getAllDocs);
router.get('/:id', DocController.getDocById);
router.put(
  '/:id',
  upload.fields([
    { name: 'doc_qs', maxCount: 1 },
    { name: 'doc_ss', maxCount: 1 },
    { name: 'doc_aios', maxCount: 1 },
  ]),
  DocController.updateDoc
);
router.delete('/:id', DocController.deleteDoc);

export default router;
