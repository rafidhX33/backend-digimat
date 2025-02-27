import { Request, Response } from "express";
import { SupplierAuditService } from "../services/supplierAudit.service";

export class SupplierAuditController {
  // GET /api/supplier-audit/:code_supplier
  static async getAuditBySupplier(req: Request, res: Response) {
    console.log("GET supplier audit with code_supplier:", req.params.code_supplier);
    try {
      const { code_supplier } = req.params;
      if (!code_supplier) {
        return res.status(400).json({ success: false, message: "code_supplier is required" });
      }
      const audits = await SupplierAuditService.getAuditBySupplier(code_supplier);
      return res.json({ success: true, data: audits });
    } catch (error: any) {
      console.error("Error fetching supplier audits:", error);
      return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }

  // POST /api/supplier-audit
  static async createAudit(req: Request, res: Response) {
    try {
      const { code_supplier, name_vendor, city, date_complete, evidence, improvment } = req.body;
      const newAudit = await SupplierAuditService.createAudit({
        code_supplier,
        city,
        date_complete: date_complete ? new Date(date_complete) : undefined,
        evidence,
        improvment,
      });
      return res.status(201).json({ success: true, data: newAudit });
    } catch (error: any) {
      console.error("Error creating supplier audit:", error);
      return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }

  // PUT /api/supplier-audit/:id
  static async updateAudit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { code_supplier, name_vendor, city, date_complete, evidence, improvment } = req.body;
      const updatedAudit = await SupplierAuditService.updateAudit(Number(id), {
        code_supplier,
        city,
        date_complete: date_complete ? new Date(date_complete) : undefined,
        evidence,
        improvment,
      });
      return res.json({ success: true, data: updatedAudit });
    } catch (error: any) {
      console.error("Error updating supplier audit:", error);
      return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }

  // DELETE /api/supplier-audit/:id
  static async deleteAudit(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedAudit = await SupplierAuditService.deleteAudit(Number(id));
      return res.json({ success: true, data: deletedAudit });
    } catch (error: any) {
      console.error("Error deleting supplier audit:", error);
      return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  }
}
