import { prismaMain } from "../config/db"; // Menggunakan named import dari db.ts

// ✅ Ambil semua material tanpa supplier
export const getAllMaterialsOnly = async () => {
  return (await prismaMain.supplierMaterialView.findMany({
    select: {
      material_code: true,
      nama_material: true,
      area: true, // PM/RM
    },
    distinct: ["material_code"],
  })) ?? [];
};


// Get materials by vendor (kode_vendor)
export const getMaterialsByVendor = async (kode_vendor: string) => {
  return await prismaMain.mstMaterialCapa.findMany({
    where: { kode_vendor },
    select: {
      material_code: true,
      nama_material: true,
    },
  });
};

// Create a new material entry
export const createMaterial = async (data: { material_code: string; nama_material: string; kode_vendor: string }) => {
  return await prismaMain.mstMaterialCapa.create({
    data,
  });
};



// ✅ Ambil semua material dengan area PM atau RM
export const getMaterialsByArea = async (area: string) => {
  return await prismaMain.supplierMaterialView.findMany({
    where: { area }, // Filter berdasarkan area
    select: {
      material_code: true,
      nama_material: true,
      area: true, // PM (Packaging Supplier) atau RM (RAW Supplier)
    },
    distinct: ["material_code"],
  });
};


