import { createError } from "../middleware/errorHandler.js"
import User from "../models/user.model.js"

export const deleteUser = async ( req, res ,next) =>
{
  const user = User.findById(req.params.id)
    if (req.userId !== user._conditions._id) {
      return next(createError("not allowed", 403))
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send("deleted.")
}
