import { PrismaClient } from '../../prisma/generated/qa_tracking_suplier';
import { startOfMonth, endOfMonth, endOfYear, format } from 'date-fns';

const prisma = new PrismaClient();

export class AbnormalityService {
  /**
   * Ambil data abnormality historical untuk supplier (kode_vendor) dengan filter range.
   * Filter range:
   *  - 'all': Semua data sejak 1 Januari 2025.
   *  - '1m': Data dari bulan berjalan (misal 1 Maret sampai 31 Maret 2025).
   *  - '6m': Data dari Januari sampai Juni tahun 2025.
   *  - '1y': Data dari 1 Januari sampai 31 Desember 2025.
   */
  static async getBySupplier(kode_vendor: string, range: string): Promise<any[]> {
    // Batasi data hanya dari 1 Januari 2025 ke atas
    const minDate = '2025-01-01';
    let dateFilter = `AND tgl_complain >= '${minDate}'`;

    if (range === '1m') {
      // Gunakan bulan berjalan dengan tahun 2025
      const currentYear = 2025;
      // Gunakan currentMonth berdasarkan saat query dijalankan, atau bisa ditentukan secara eksplisit
      const currentMonth = new Date().getMonth(); // 0-indexed (misal Maret = 2)
      const startDate = format(new Date(currentYear, currentMonth, 1), 'yyyy-MM-dd');
      const endDate = format(endOfMonth(new Date(currentYear, currentMonth, 1)), 'yyyy-MM-dd');
      dateFilter += ` AND tgl_complain >= '${startDate}' AND tgl_complain <= '${endDate}'`;
    } else if (range === '6m') {
      // Data dari Januari sampai Juni tahun 2025
      const startDate = '2025-01-01';
      const endDate = format(endOfMonth(new Date(2025, 5, 1)), 'yyyy-MM-dd');
      dateFilter += ` AND tgl_complain >= '${startDate}' AND tgl_complain <= '${endDate}'`;
    } else if (range === '1y') {
      // Data untuk tahun 2025
      const startDate = '2025-01-01';
      const endDate = '2025-12-31';
      dateFilter += ` AND tgl_complain >= '${startDate}' AND tgl_complain <= '${endDate}'`;
    }
    // Untuk 'all', hanya gunakan minDate

    // Query: Group by abnormal dan hitung total kasus, sertakan tanggal kejadian pertama dan terakhir.
    const query = `
      SELECT 
        nama_supplier AS kode_vendor,
        abnormal,
        COUNT(*) AS total_case,
        MIN(tgl_complain) AS first_occurrence,
        MAX(tgl_complain) AS last_occurrence
      FROM tr_complan
      WHERE nama_supplier = '${kode_vendor}'
      ${dateFilter}
      GROUP BY nama_supplier, abnormal
      ORDER BY total_case DESC
    `;
    
    const result: any[] = await prisma.$queryRawUnsafe(query);

    // Konversi nilai BigInt ke number (misal total_case)
    return result.map(item => ({
      ...item,
      total_case: Number(item.total_case),
      first_occurrence: item.first_occurrence,
      last_occurrence: item.last_occurrence
    }));
  }
}
