import express from "express"
import {
  createGig,
  getAllGigs,
  getGig,
  deleteGig,
} from "../controllers/gig.controller.js"
import { verifyToken } from "../middleware/auth.js"
const router = express.Router()

router.post("/create", verifyToken, createGig)
router.get("/allGigs", verifyToken, getAllGigs)
router.get("/:id", verifyToken, getGig)
router.delete("/:id", verifyToken, deleteGig)
export default router
