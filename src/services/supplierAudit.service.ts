import { PrismaClient, TrSupplierAudit } from '../../prisma/generated/qa_tracking_suplier';

const prisma = new PrismaClient();

export class SupplierAuditService {
  // CREATE: Menambahkan data audit baru
  static async createAudit(data: Partial<TrSupplierAudit>): Promise<TrSupplierAudit> {
    return prisma.trSupplierAudit.create({ data });
  }

  // READ: Mengambil semua data audit
  static async getAllAudits(): Promise<TrSupplierAudit[]> {
    return prisma.trSupplierAudit.findMany();
  }

  // READ: Mengambil data audit berdasarkan code_supplier
  static async getAuditBySupplier(code_supplier: string): Promise<TrSupplierAudit[]> {
    return prisma.trSupplierAudit.findMany({
      where: { code_supplier: code_supplier },
      orderBy: { id: 'desc' },
    });
  }

  // UPDATE: Memperbarui data audit berdasarkan ID
  static async updateAudit(id: number, data: Partial<TrSupplierAudit>): Promise<TrSupplierAudit> {
    return prisma.trSupplierAudit.update({
      where: { id },
      data,
    });
  }

  // DELETE: Menghapus data audit berdasarkan ID
  static async deleteAudit(id: number): Promise<TrSupplierAudit> {
    return prisma.trSupplierAudit.delete({
      where: { id },
    });
  }
}
