// src/controllers/doc.controller.ts

import { Request, Response } from 'express'
import { DocService } from '../services/doc.service'

class DocController {
  // CREATE
  static async createDoc(req: Request, res: Response) {
    try {
      const { kode_vendor, material_code } = req.body

      // path untuk setiap file (jika di-upload)
      let doc_url_qs: string | undefined
      let doc_url_ss: string | undefined
      let doc_url_aios: string | undefined

      // Karena pakai fields, Multer menyimpan file di req.files sebagai object
      if (req.files && (req.files as any).doc_qs) {
        doc_url_qs = (req.files as any).doc_qs[0].path
      }
      if (req.files && (req.files as any).doc_ss) {
        doc_url_ss = (req.files as any).doc_ss[0].path
      }
      if (req.files && (req.files as any).doc_aios) {
        doc_url_aios = (req.files as any).doc_aios[0].path
      }

      const newDoc = await DocService.createDoc({
        kode_vendor,
        material_code,
        doc_name_qs: (req.files as any).doc_qs
          ? (req.files as any).doc_qs[0].originalname
          : null,
        doc_url_qs,
        doc_name_ss: (req.files as any).doc_ss
          ? (req.files as any).doc_ss[0].originalname
          : null,
        doc_url_ss,
        doc_name_aios: (req.files as any).doc_aios
          ? (req.files as any).doc_aios[0].originalname
          : null,
        doc_url_aios,
      })

      return res.status(201).json({
        message: 'Dokumen berhasil ditambahkan',
        data: newDoc,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Terjadi kesalahan' })
    }
  }

  // READ - All
  static async getAllDocs(req: Request, res: Response) {
    try {
      const docs = await DocService.getAllDocs()
      return res.json(docs)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Terjadi kesalahan' })
    }
  }

  // READ - By ID
  static async getDocById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const doc = await DocService.getDocById(Number(id))
      if (!doc) {
        return res.status(404).json({ message: 'Dokumen tidak ditemukan' })
      }
      return res.json(doc)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Terjadi kesalahan' })
    }
  }

  // UPDATE
  static async updateDoc(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { kode_vendor, material_code } = req.body

      let doc_url_qs: string | undefined
      let doc_url_ss: string | undefined
      let doc_url_aios: string | undefined

      if (req.files && (req.files as any).doc_qs) {
        doc_url_qs = (req.files as any).doc_qs[0].path
      }
      if (req.files && (req.files as any).doc_ss) {
        doc_url_ss = (req.files as any).doc_ss[0].path
      }
      if (req.files && (req.files as any).doc_aios) {
        doc_url_aios = (req.files as any).doc_aios[0].path
      }

      const updatedDoc = await DocService.updateDoc(Number(id), {
        kode_vendor,
        material_code,
        doc_name_qs: (req.files as any).doc_qs
          ? (req.files as any).doc_qs[0].originalname
          : undefined,
        doc_url_qs,
        doc_name_ss: (req.files as any).doc_ss
          ? (req.files as any).doc_ss[0].originalname
          : undefined,
        doc_url_ss,
        doc_name_aios: (req.files as any).doc_aios
          ? (req.files as any).doc_aios[0].originalname
          : undefined,
        doc_url_aios,
      })

      return res.json({
        message: 'Dokumen berhasil diperbarui',
        data: updatedDoc,
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Terjadi kesalahan' })
    }
  }

  // DELETE
  static async deleteDoc(req: Request, res: Response) {
    try {
      const { id } = req.params
      const deletedDoc = await DocService.deleteDoc(Number(id))
      return res.json({ message: 'Dokumen berhasil dihapus', data: deletedDoc })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Terjadi kesalahan' })
    }
  }
}

export default DocController
