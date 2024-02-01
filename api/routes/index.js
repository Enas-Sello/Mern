import express from "express";
import user from "./user.route.js";
import review from "./review.route.js";
import orders from "./orders.route.js";
import message from "./message.route.js";
import gig from "./gig.route.js";
import conversation from "./conversation.route.js";
import auth from "./auth.route.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/review", review);
router.use("/orders", orders);
router.use("/message", message);
router.use("/gig", gig);
router.use("/conversation", conversation);

export default router;
