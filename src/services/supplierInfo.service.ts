// src/services/supplierInfo.service.ts

import { PrismaClient } from '../../prisma/generated/digimat';

const prisma = new PrismaClient();

export class SupplierInfoService {
  // Create atau update data supplier info berdasarkan kode_vendor
  static async createOrUpdateSupplierInfo(data: { kode_vendor: string; logo?: string; status?: string }) {
    const existing = await prisma.tr_supplier_info.findUnique({
      where: { kode_vendor: data.kode_vendor },
    });
    if (existing) {
      return prisma.tr_supplier_info.update({
        where: { kode_vendor: data.kode_vendor },
        data,
      });
    } else {
      return prisma.tr_supplier_info.create({ data });
    }
  }

  // Ambil data supplier info berdasarkan kode_vendor
  static async getSupplierInfo(kode_vendor: string) {
    return prisma.tr_supplier_info.findUnique({
      where: { kode_vendor },
    });
  }
}
