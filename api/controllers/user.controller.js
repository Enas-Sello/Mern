import User from "../models/user.model.js"
import jwt from "jsonwebtoken"

export const deleteUser = async (req , res)=>{
    const user = User.findById(req.params.id)
    const token = req.cookies.accessToken
        if (!token) res.status(401).send("not authenticated")
        jwt.verify(token,process.env.JWT,async(err,payload)=>{
        if (err) console.error(err);
        if (payload.id !== user._conditions._id )
        { return res.status(403).send("not allowed")}
        await User.findByIdAndDelete(req.params.id);
        res.send("don")
        } )
}