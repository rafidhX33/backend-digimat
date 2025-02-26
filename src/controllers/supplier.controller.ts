import { Request, Response } from "express";
import { 
  getAllSuppliers, 
  getVendorsByMaterial, 
  createSupplier, 
  getSupplierGrade, 
  getComplaintCount 
} from "../services/supplier.service";

// ✅ API untuk mendapatkan semua supplier
export const getSuppliers = async (req: Request, res: Response) => {
  try {
    const suppliers = await getAllSuppliers();
    res.json({ success: true, data: suppliers });
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ API untuk mendapatkan suppliers berdasarkan material
export const getSuppliersByMaterial = async (req: Request, res: Response) => {
  const { material_code } = req.params;

  try {
    const suppliers = await getVendorsByMaterial(material_code);
    if (suppliers.length === 0) {
      return res.status(404).json({ success: false, message: "No suppliers found for this material" });
    }
    res.json({ success: true, data: suppliers });
  } catch (error) {
    console.error("Error fetching suppliers for material:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ API untuk menambahkan supplier baru
export const addSupplier = async (req: Request, res: Response) => {
  const { kode_vendor, name_vendor } = req.body;

  try {
    const supplier = await createSupplier({ kode_vendor, name_vendor });
    res.status(201).json({ success: true, data: supplier });
  } catch (error) {
    console.error("Error creating supplier:", error);
    res.status(500).json({ success: false, message: "Failed to create supplier" });
  }
};

// ✅ API untuk mendapatkan Grade Supplier (A, B, C, D)
export const getSupplierGradeController = async (req: Request, res: Response) => {
  try {
    const { kode_vendor, start, end } = req.query;

    if (!kode_vendor || !start || !end) {
      return res.status(400).json({ success: false, message: "Parameter tidak lengkap" });
    }

    const data = await getSupplierGrade(kode_vendor as string, start as string, end as string);
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching Supplier Grade:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ✅ API untuk mendapatkan jumlah Complaint
export const getComplaintCountController = async (req: Request, res: Response) => {
  try {
    const { kode_vendor, start, end } = req.query;

    if (!kode_vendor || !start || !end) {
      return res.status(400).json({ success: false, message: "Parameter tidak lengkap" });
    }

    const data = await getComplaintCount(kode_vendor as string, start as string, end as string);
    res.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching Complaint Count:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
