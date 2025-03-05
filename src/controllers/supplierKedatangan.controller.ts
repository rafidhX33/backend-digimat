// src/controllers/supplierKedatangan.controller.ts
import { Request, Response } from 'express';
import { KedatanganService } from '../services/supplierKedatangan.service';

export class SupplierKedatanganController {
  // GET /api/kedatangan?supplier=xxx&material=yyy&start=YYYY-MM-DD&end=YYYY-MM-DD
  static async getKedatangan(req: Request, res: Response) {
    try {
      const { supplier, material, start, end } = req.query;
      if (!supplier || !material || !start || !end) {
        return res.status(400).json({
          success: false,
          message: 'Parameter supplier, material, start, dan end harus disediakan.'
        });
      }
      const data = await KedatanganService.getKedatangan(
        supplier as string,
        material as string,
        start as string,
        end as string
      );
      return res.status(200).json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching kedatangan:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
        error: error.message
      });
    }
  }
}
