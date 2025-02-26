import { prismaMain } from "../config/db"; // Menggunakan named import dari db.ts

// Get all materials
export const getAllMaterials = async () => {
  return await prismaMain.mstMaterialCapa.findMany({
    select: {
      material_code: true,
      nama_material: true,
      kode_vendor: true,
      name_vendor: true,
    },
  });
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
