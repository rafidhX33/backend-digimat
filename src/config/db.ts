import { PrismaClient as PrismaMainClient } from "../../prisma/generated/qa_tracking_suplier";
import { PrismaClient as PrismaDigimatClient } from "../../prisma/generated/digimat";

declare global {
  var prismaMain: PrismaMainClient | undefined;
  var prismaDigimat: PrismaDigimatClient | undefined;
}

// Database utama (qa_tracking_suplier)
export const prismaMain = global.prismaMain || new PrismaMainClient();
export const prismaDigimat = global.prismaDigimat || new PrismaDigimatClient();

if (process.env.NODE_ENV !== "production") {
  global.prismaMain = prismaMain;
  global.prismaDigimat = prismaDigimat;
}

console.log("✅ PrismaMain (qa_tracking_suplier) initialized");
console.log("✅ PrismaDigimat (digimat) initialized");
