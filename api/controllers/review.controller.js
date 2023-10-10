import { createError } from "../middleware/errorHandler.js"
import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";
// createReview
export const createReview = async (req, res, next) => {
  if (req.isSeller) {
    return next(createError("seller can not crearte review", 403));
  }
  const NewReview = new Review({
    userId: req.userId,
    gigID: req.body.userId,
    description: req.body.description,
    star: req.body.star,
  });
  try {
    const review = await Review.findOne({
      gigID: req.body.gigID,
      userId: req.userId,
    });
    if (review) {
      return next(
        createError("you have already created review for this gig", 403)
      );
    }
    const saveReview = await NewReview.save();
    await Gig.findOneAndUpdate(req.body.gigID, {
      $inc: { totalStars: req.body.totalStars, starNumber: 1 },
    });
    res.status(201).send(saveReview);
  } catch (error) {
    next(error);
  }
};

// getReview
export const getReview = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

// deleteReview
export const deleteReview = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
