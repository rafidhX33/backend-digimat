import { PrismaClient as PrismaMainClient } from "../../prisma/generated/qa_tracking_suplier"; 
import { PrismaClient as PrismaDigimatClient } from "../../prisma/generated/digimat"; 

// Database utama (qa_tracking_suplier)
export const prismaMain = new PrismaMainClient();

// Database kedua (digimat)
export const prismaDigimat = new PrismaDigimatClient();
