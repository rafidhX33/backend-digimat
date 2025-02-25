// src/types/express/index.d.ts
import 'express';

declare module 'express' {
  export interface Request {
    file?: Express.Multer.File;
    // Jika Anda menggunakan multiple file upload dengan multer.fields
    files?: {
      [fieldname: string]: Express.Multer.File[];
    } | Express.Multer.File[];
  }
}
