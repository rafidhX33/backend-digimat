import { prismaDigimat } from "../config/db"; // Gunakan Prisma Client dari config
import { mst_doc } from "../../prisma/generated/digimat"; // Model dari Prisma

export class DocService {
  // ✅ CREATE: Membuat dokumen baru
  static async createDoc(data: Partial<mst_doc>): Promise<mst_doc> {
    return await prismaDigimat.mst_doc.create({ data });
  }

  // ✅ READ - All: Mengambil semua dokumen
  static async getAllDocs(): Promise<mst_doc[]> {
    return await prismaDigimat.mst_doc.findMany();
  }

  // ✅ READ - By ID: Mengambil dokumen berdasarkan ID
  static async getDocById(id: number): Promise<mst_doc | null> {
    return await prismaDigimat.mst_doc.findUnique({
      where: { id },
    });
  }

  // ✅ UPDATE: Memperbarui dokumen berdasarkan ID
  static async updateDoc(id: number, data: Partial<mst_doc>): Promise<mst_doc> {
    return await prismaDigimat.mst_doc.update({
      where: { id },
      data,
    });
  }

  // ✅ DELETE: Menghapus dokumen berdasarkan ID
  static async deleteDoc(id: number): Promise<mst_doc> {
    return await prismaDigimat.mst_doc.delete({
      where: { id },
    });
  }
}
