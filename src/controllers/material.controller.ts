import { Request, Response } from "express";
import { getAllMaterials, getMaterialsByVendor, createMaterial } from "../services/material.service";

// Get all materials
export const getMaterials = async (req: Request, res: Response) => {
  try {
    const materials = await getAllMaterials();
    res.json({ success: true, data: materials });
  } catch (error) {
    console.error("Error fetching materials:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get materials by vendor (kode_vendor)
export const getMaterialsBySupplier = async (req: Request, res: Response) => {
  const { kode_vendor } = req.params;

  try {
    const materials = await getMaterialsByVendor(kode_vendor);
    res.json({ success: true, data: materials });
  } catch (error) {
    console.error("Error fetching materials for supplier:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Add a new material
export const addMaterial = async (req: Request, res: Response) => {
  const { material_code, nama_material, kode_vendor } = req.body;

  try {
    const material = await createMaterial({ material_code, nama_material, kode_vendor });
    res.status(201).json({ success: true, data: material });
  } catch (error) {
    console.error("Error creating material:", error);
    res.status(500).json({ success: false, message: "Failed to create material" });
  }
};
