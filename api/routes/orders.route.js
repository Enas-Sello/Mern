import express from "express";
import { createOrder, getOrders } from "../controllers/order.controller.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.post("/create/:gigId", verifyToken, createOrder);
// router.get("/single", verifyToken, singleOrder);
router.get("/myOrder", verifyToken, getOrders);
export default router;
