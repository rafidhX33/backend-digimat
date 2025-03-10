import { Request, Response } from "express";
import { createMaterial, getAllMaterialsOnly, getMaterialsByArea, getMaterialsByVendor } from "../services/material.service";

// ✅ Ambil semua material
export const getMaterials = async (req: Request, res: Response) => {
  try {
    const materials = await getAllMaterialsOnly() ?? [];

    if (!Array.isArray(materials) || materials.length === 0) {
      return res.json({ success: true, data: [] });
    }

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


// ✅ Ambil material berdasarkan area (PM/RM)
export const getMaterialsByCategory = async (req: Request, res: Response) => {
  const { area } = req.params; // Ambil parameter area dari URL

  try {
    if (!area) {
      return res.status(400).json({ success: false, message: "Area harus diisi!" });
    }

    // Panggil service untuk ambil data material berdasarkan area
    const materials = await getMaterialsByArea(area);

    if (materials.length === 0) {
      return res.json({ success: true, message: "Tidak ada material untuk kategori ini", data: [] });
    }

    res.json({ success: true, data: materials });
  } catch (error) {
    console.error("Error fetching materials by area:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
