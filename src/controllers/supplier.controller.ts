import { Request, Response } from "express";
import { getAllSuppliers, getVendorsByMaterial, createSupplier } from "../services/supplier.service";

// Get all suppliers
export const getSuppliers = async (req: Request, res: Response) => {
  try {
    const suppliers = await getAllSuppliers();
    res.json({ success: true, data: suppliers });
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get vendors by material
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

// Add a new supplier
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
