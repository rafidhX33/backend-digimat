import prisma from "../config/db";

// Get all unique vendors
export const getAllSuppliers = async () => {
  return await prisma.mstMaterialCapa.findMany({
    select: {
      kode_vendor: true,
      name_vendor: true,
      material_code: true,
      nama_material: true,
    },
    distinct: ["kode_vendor"], // Pastikan tidak ada duplikasi vendor
  });
};

// Get vendors by material
export const getVendorsByMaterial = async (material_code: string) => {
  return await prisma.mstMaterialCapa.findMany({
    where: { material_code },
    select: {
      kode_vendor: true,
      name_vendor: true,
    },
    distinct: ["kode_vendor"], // Pastikan vendor yang sama tidak muncul berkali-kali
  });
};

// Create a new supplier entry
export const createSupplier = async (data: { kode_vendor: string; name_vendor: string }) => {
  return await prisma.mstMaterialCapa.create({
    data,
  });
};
