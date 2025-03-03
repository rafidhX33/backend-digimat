import { Request, Response } from 'express';
import path from 'path';
import { SupplierInfoService } from '../services/supplierInfo.service';

export class SupplierInfoController {
  // POST /api/supplier-info : Upload atau update logo dan status supplier
  static async uploadSupplierInfo(req: Request, res: Response) {
    try {
      const { kode_vendor, status } = req.body;
      let logoPath: string | undefined;
      if (req.file) {
        // Gunakan path.basename untuk mengambil hanya nama file
        logoPath = path.basename(req.file.path);
      }
      const supplierInfo = await SupplierInfoService.createOrUpdateSupplierInfo({
        kode_vendor,
        logo: logoPath,
        status,
      });
      return res.status(200).json({
        success: true,
        data: supplierInfo,
        message: 'Supplier info berhasil diperbarui',
      });
    } catch (error: any) {
      console.error('Error uploading supplier info:', error);
      return res.status(500).json({ success: false, message: 'Terjadi kesalahan', error: error.message });
    }
  }

  // GET /api/supplier-info/:kode_vendor : Ambil data supplier info
  static async getSupplierInfo(req: Request, res: Response) {
    try {
      const { kode_vendor } = req.params;
      const info = await SupplierInfoService.getSupplierInfo(kode_vendor);
      return res.status(200).json({ success: true, data: info });
    } catch (error: any) {
      console.error('Error fetching supplier info:', error);
      return res.status(500).json({ success: false, message: 'Terjadi kesalahan', error: error.message });
    }
  }
}
