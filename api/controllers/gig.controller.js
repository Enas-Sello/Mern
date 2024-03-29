import {
  ForbiddenResponse,
  NotFoundResponse,
  SellerResponse,
} from "../core/ApiResponse.js";
import { validationError } from "../core/ValidationError.js";
import { pagination } from "../core/pagination.js";
import { createError } from "../middleware/errorHandler.js";
import gigModel from "../models/gig.model.js";

// createGig
export const createGig = async (req, res, next) => {
  if (!req.isSeller) return next(createError(SellerResponse, 403));
  const newGig = new gigModel({
    userId: req.userId,
    ...req.body,
  });
  // Validate the gig instance
  const errors = validationError(newGig);
  if (errors) {
    res.status(400).json({ errors });
  }

  try {
    const saveGig = await newGig.save();
    res.status(200).json(saveGig);
  } catch (error) {
    next(error);
  }
};
// getAllGigs
export const getAllGigs = async (req, res, next) => {
  const { page, limit, search } = req.query;
  const { skip, limit: paginatedLimit } = pagination(page, limit);
  // let searchFilters = {};
  // if (search) {
  //   searchFilters = searchFilters(search, ["title", "category"]);
  // }

  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q?.userId }),
    ...(q.category && { category: q?.category }),
    ...(q.search && { title: { $regex: q?.search, $options: "i" } }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
  };

  try {
    const gigs = await gigModel
      .find(filters)
      .sort({ [q.sort]: -1 })
      .skip(skip)
      .limit(paginatedLimit);

    const totalgigs = await gigModel.countDocuments(filters);
    res
      .status(200)
      .send({ data: gigs, total: totalgigs, page, limit: paginatedLimit });
  } catch (error) {
    next(error);
  }
};
// getGig
export const getGig = async (req, res, next) => {
  try {
    const gig = await gigModel.findById(req.params.id);
    if (!gig) next(createError(NotFoundResponse, 401));
    res.status(200).send(gig);
  } catch (error) {
    next(error);
  }
};
// deleteGig
export const deleteGig = async (req, res, next) => {
  try {
    const gig = await gigModel.findById(req.params.id);
    if (!gig) next(createError(NotFoundResponse, 401));
    if (gig.userId !== req.userId)
      return next(createError(ForbiddenResponse, 403));
    await gigModel.findByIdAndDelete(req.params.id);
    res.status(200).send("success");
  } catch (error) {
    next(error);
  }
};
