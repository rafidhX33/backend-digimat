import { Request, Response } from 'express';
import { AbnormalityService } from '../services/abnormality.service';

export class AbnormalityController {
  // GET /api/abnormalities/:kode_vendor?range=all|1m|6m|1y
  static async getBySupplier(req: Request, res: Response) {
    try {
      const { kode_vendor } = req.params;
      const { range } = req.query; // range bisa 'all', '1m', '6m', '1y'
      if (!kode_vendor) {
        return res.status(400).json({ success: false, message: "kode_vendor is required" });
      }
      // Default range 'all' jika tidak ada
      const selectedRange = typeof range === 'string' ? range : 'all';
      const data = await AbnormalityService.getBySupplier(kode_vendor, selectedRange);
      return res.json({ success: true, data });
    } catch (error: any) {
      console.error('Error fetching abnormalities by supplier:', error);
      return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
  }
}
