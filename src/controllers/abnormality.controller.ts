// src/controllers/abnormality.controller.ts
import { Request, Response } from 'express';
import { AbnormalityService } from '../services/abnormality.service';

export class AbnormalityController {
  // GET /api/abnormalities/:kode_vendor?range=xxx
  static async getBySupplier(req: Request, res: Response) {
    try {
      const { kode_vendor } = req.params;
      // Pastikan range selalu berupa string; jika tidak diberikan, default ke 'all'
      const range = (req.query.range as string) || 'all';
      const abnormalities = await AbnormalityService.getBySupplier(kode_vendor, range);
      return res.json({ success: true, data: abnormalities });
    } catch (error: any) {
      console.error('Error fetching abnormalities by supplier:', error);
      return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
  }
}
