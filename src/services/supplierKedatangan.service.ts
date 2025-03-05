// src/services/supplierKedatangan.service.ts
import { PrismaClient } from '../../prisma/generated/qa_tracking_suplier';

// Buat instance PrismaClient untuk database QA_RM dengan override datasource
const prismaRM = new PrismaClient({
  datasources: {
    db: { url: process.env.QA_RM_DATABASE_URL } // Pastikan QA_RM_DATABASE_URL sudah diset di environment
  }
});

export class KedatanganService {
  static async getKedatangan(
    supplier: string,
    material: string,
    start: string,
    end: string
  ) {
    // Pastikan format tanggal start dan end sudah sesuai (misalnya "YYYY-MM-DD")
    return prismaRM.kedatanganSapNew.findMany({
      where: {
        vendor: supplier,   // view: kolom vendor yang berisi kode_vendor
        material: material, // view: kolom material yang berisi material_code
        insp_start_date: {
          gte: new Date(start),
          lte: new Date(end)
        }
      }
    });
  }
}
