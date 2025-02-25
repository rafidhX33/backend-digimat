// src/services/doc.service.ts

import { PrismaClient, mst_doc } from '../../prisma/generated/digimat'; 
// Pastikan path ini sesuai dengan struktur proyek Anda

const digimatPrisma = new PrismaClient();

export class DocService {
  // CREATE: Membuat dokumen baru
  static async createDoc(data: Partial<mst_doc>): Promise<mst_doc> {
    return await digimatPrisma.mst_doc.create({ data });
  }

  // READ - All: Mengambil semua dokumen
  static async getAllDocs(): Promise<mst_doc[]> {
    return await digimatPrisma.mst_doc.findMany();
  }

  // READ - By ID: Mengambil dokumen berdasarkan ID
  static async getDocById(id: number): Promise<mst_doc | null> {
    return await digimatPrisma.mst_doc.findUnique({
      where: { id },
    });
  }

  // UPDATE: Memperbarui dokumen berdasarkan ID
  static async updateDoc(id: number, data: Partial<mst_doc>): Promise<mst_doc> {
    return await digimatPrisma.mst_doc.update({
      where: { id },
      data,
    });
  }

  // DELETE: Menghapus dokumen berdasarkan ID
  static async deleteDoc(id: number): Promise<mst_doc> {
    return await digimatPrisma.mst_doc.delete({
      where: { id },
    });
  }
}
