import { createError } from "../middleware/errorHandler.js";
import Review from "../models/review.model.js";
import gigModel from "../models/gig.model.js";
import User from "../models/user.model.js";
import orderModel from "../models/order.model.js";
import {
  DuplicateResponse,
  ForbiddenResponse,
  PurchasedResponse,
  ReviewResponse,
} from "../core/ApiResponse.js";
import { pagination } from "../core/pagination.js";

// createReview
export const createReview = async (req, res, next) => {
  if (req.isSeller) {
    return next(createError(ReviewResponse, 403));
  }
  const NewReview = new Review({
    userId: req.userId,
    gigID: req.body.gigID,
    description: req.body.description,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      gigID: req.body.gigID,
      userId: req.userId,
    });
    const purchasedReview = await orderModel.findOne({
      gigID: req.body.gigID,
      userId: req.userId,
    });

    if (review) {
      return next(createError(DuplicateResponse, 403));
    }

    if (!purchasedReview) {
      return next(createError(PurchasedResponse, 403));
    }

    const saveReview = await NewReview.save();

    await gigModel.findOneAndUpdate(
      { _id: req.body.gigID },
      {
        $inc: { totalStars: req.body.star, starNumber: 1 },
      }
    );

    res.status(201).send(saveReview);
  } catch (error) {
    next(error);
  }
};

// getReview
export const getReview = async (req, res, next) => {
  const { page, limit } = req.query;
  const { skip, limit: paginatedLimit } = pagination(page, limit);

  try {
    const allReviews = await Review.find({ gigID: req.params.gigID })
      // .sort({ [q.sort]: -1 })
      .skip(skip)
      .limit(paginatedLimit);
    const totalReviews = await Review.countDocuments();

    res
      .status(201)
      .send({
        data: allReviews,
        page,
        limit: paginatedLimit,
        total: totalReviews,
      });
  } catch (error) {
    next(error);
  }
};

// deleteReview
export const deleteReview = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const review = await Review.findById(req.params.gigId);
  try {
    if (user.isSeller) createError(ReviewResponse, 403);
    if (review && review.userId !== req.userId)
      createError(ForbiddenResponse, 403);
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).send("success");
  } catch (error) {
    next(error);
  }
};
