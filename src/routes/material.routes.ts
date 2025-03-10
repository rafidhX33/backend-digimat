import express from "express";
import { getMaterials, getMaterialsBySupplier, addMaterial, getMaterialsByCategory,  } from "../controllers/material.controller";


const router = express.Router();

// GET /api/materials - Get all materials
router.get("/", getMaterials);

// GET /api/materials/:kode_vendor - Get materials by supplier
router.get("/:kode_vendor", getMaterialsBySupplier);

// POST /api/materials - Add a new material
router.post("/", addMaterial);

router.get("/category/:area", getMaterialsByCategory);
export default router;
