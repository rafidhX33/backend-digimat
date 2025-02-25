// src/services/doc.service.ts

import { PrismaClient } from '../../prisma/generated/digimat' 
// sesuaikan path-nya. Misal jika "digimat" ada di "prisma/generated/digimat"

const digimatPrisma = new PrismaClient()

export class DocService {
  // CREATE
  static async createDoc(data: any) {
    return digimatPrisma.mst_doc.create({ data })
  }

  // READ - All
  static async getAllDocs() {
    return digimatPrisma.mst_doc.findMany()
  }

  // READ - By ID
  static async getDocById(id: number) {
    return digimatPrisma.mst_doc.findUnique({
      where: { id },
    })
  }

  // UPDATE
  static async updateDoc(id: number, data: any) {
    return digimatPrisma.mst_doc.update({
      where: { id },
      data,
    })
  }

  // DELETE
  static async deleteDoc(id: number) {
    return digimatPrisma.mst_doc.delete({
      where: { id },
    })
  }
}
