import prisma from "../config/db";

// Get all materials
export const getAllMaterials = async () => {
  return await prisma.mstMaterialCapa.findMany({
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
  return await prisma.mstMaterialCapa.findMany({
    where: { kode_vendor },
    select: {
      material_code: true,
      nama_material: true,
    },
  });
};

// Create a new material entry
export const createMaterial = async (data: { material_code: string; nama_material: string; kode_vendor: string }) => {
  return await prisma.mstMaterialCapa.create({
    data,
  });
};
