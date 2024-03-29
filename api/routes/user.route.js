import express from "express"
import { deleteUser , getUser} from "../controllers/user.controller.js"
import { verifyToken } from "../middleware/auth.js"
const router = express.Router()

router.delete("/:id", verifyToken, deleteUser)
router.get("/single/:id", getUser)
export default router