import userModel from "../models/user.model"

export const register = async (req ,res)=>{
try
{
    const newUser = new userModel({
        username:"test",
        email:"test@",
        password:"123456",
        country:"eg"
    })

    await newUser.save()
    res.status(201).send("done")
}
catch(error)
{res.status(500).send("some thing went wrong!.")}}
export const login = async (req ,res)=>{
try{}
catch(error)
{res.status(500).send("some thing went wrong!.")}}
export const logout = async (req ,res)=>{
try{}
catch(error)
{res.status(500).send("some thing went wrong!.")}}