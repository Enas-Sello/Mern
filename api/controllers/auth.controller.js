import User from "../models/user.model.js"
import bcrypt from "bcrypt"
// register
export const register = async (req ,res)=>{
try
{
    const hasdPass = bcrypt.hashSync(req.body.password ,5)
    const newUser = new User({
        ...req.body,
        password:hasdPass
    });
    await newUser.save()
    res.status(201).send("done")
}
catch(error)
{res.status(500).send(`some thing went wrong!. ${error}`)}}

// login
export const login = async (req ,res)=>{
try{
    const user = await User.findOne({username:req.body.username})
    if (!user)return res.status(404).send("user not found")
    const userPass = bcrypt.compareSync(req.body.password , user.password)
    if (!userPass)return res.status(400).send("wrong password or username")
   const {password , ...info} = user 
    res.status(200).send(info)

}
catch(error)
{res.status(500).send(`some thing went wrong!. ${error}`)}}

// logout
export const logout = async (req ,res)=>{
try{}
catch(error)
{res.status(500).send(`some thing went wrong!. ${error}`)}}
