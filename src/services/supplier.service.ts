import { prismaMain } from "../config/db"; // Gunakan Prisma untuk database utama

// ✅ Ambil semua supplier
export const getAllSuppliers = async () => {
  return await prismaMain.mstMaterialCapa.findMany({
    select: {
      kode_vendor: true,
      name_vendor: true,
      material_code: true,
      nama_material: true,
    },
    distinct: ["kode_vendor"],
  });
};

// ✅ Ambil suppliers berdasarkan material
export const getVendorsByMaterial = async (material_code: string) => {
  return await prismaMain.mstMaterialCapa.findMany({
    where: { material_code },
    select: {
      kode_vendor: true,
      name_vendor: true,
    },
    distinct: ["kode_vendor"],
  });
};

// ✅ Tambahkan supplier baru
export const createSupplier = async (data: { kode_vendor: string; name_vendor: string }) => {
  return await prismaMain.mstMaterialCapa.create({
    data,
  });
};

// ✅ Ambil Supplier Score dari `v_suplier_value`
export const getSupplierGrade = async (kode_vendor: string, start: string, end: string) => {
  return await prismaMain.$queryRaw`
    SELECT 
        kode_vendor, 
        suplier_name, 
        Grade_Material, 
        tgl
    FROM v_suplier_value
    WHERE kode_vendor = ${kode_vendor}
    AND tgl BETWEEN ${start} AND ${end};
  `;
};
// ✅ Ambil jumlah Complaint dari `v_tr_complan_approve`
export const getComplaintCount = async (kode_vendor: string, start: string, end: string) => {
  const complaints = await prismaMain.complaintStatus.count({
    where: {
      kode_vendor,
      tgl_complain: {
        gte: new Date(start),
        lte: new Date(end),
      },
    },
  });

  return { kode_vendor, total_complaints: complaints };
};
