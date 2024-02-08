import jwt from "jsonwebtoken"
import { createError } from "./errorHandler.js"
import { AccessTokenErrorResponse, AuthFailureResponse } from "../core/ApiResponse.js"

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken
  if (!token) return next(createError(AuthFailureResponse, 401))
  jwt.verify(token, process.env.JWT, async (err, payload) => {
    if (err) return next(createError(AccessTokenErrorResponse, 403))
    req.userId = payload.id
    req.isSeller = payload.isSeller
    next()
  })
}
