import orderModel from "../models/order.model.js";
import gigModel from "../models/gig.model.js";

// creat eOrder
export const createOrder = async (req, res, next) => {
  try {
    const gig = await gigModel.findById(req.params.gigId);
    const newOrder = new orderModel({
      gigID: gig._id,
      Image: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temporary",
    });
    await newOrder.save()
    res.status(200).send(newOrder);
  } catch (error) {
    next(error);
  }
};
// all Orders
export const getOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.find({sellerId:req.userId});

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};