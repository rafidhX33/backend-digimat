// src/services/abnormality.service.ts
import { PrismaClient } from '../../prisma/generated/qa_tracking_suplier';
import { subMonths, subYears, format } from 'date-fns';

const prisma = new PrismaClient();

export class AbnormalityService {
  static async getBySupplier(kode_vendor: string, range: string): Promise<any[]> {
    let dateCondition = '';
    const now = new Date();

    if (range === '1m') {
      const oneMonthAgo = subMonths(now, 1);
      dateCondition = `AND tgl_complain >= '${format(oneMonthAgo, 'yyyy-MM-dd')}'`;
    } else if (range === '6m') {
      const sixMonthsAgo = subMonths(now, 6);
      dateCondition = `AND tgl_complain >= '${format(sixMonthsAgo, 'yyyy-MM-dd')}'`;
    } else if (range === '1y') {
      const oneYearAgo = subYears(now, 1);
      dateCondition = `AND tgl_complain >= '${format(oneYearAgo, 'yyyy-MM-dd')}'`;
    }

    const query = `
      SELECT 
        abnormal,
        COUNT(*) AS total_case
      FROM tr_complan
      WHERE nama_supplier = ? ${dateCondition}
      GROUP BY abnormal
      ORDER BY total_case DESC
    `;
    
    // Eksekusi query raw dan konversi BigInt ke Number
    const result = await prisma.$queryRawUnsafe<any[]>(query, kode_vendor);
    return result.map((item: any) => ({
      abnormal: item.abnormal,
      total_case: Number(item.total_case)
    }));
  }
}
