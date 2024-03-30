const user = require("../models/usersModel");

const getAllUser = async (req, res)=>{
    try {
        const userData = await user.find();
        res.status(200).json({
            message: "All User Data",
            success : true,
            data : userData
        })
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

const getSingleUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const userData = await user.findOne({_id:id});
        res.status(200).json({
            message : "Single User Data",
            success : true,
            data : userData
        })
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

const createUser = async (req, res)=>{
    try {
        const name = req.body?.name;
        const email = req.body?.email;
        const newUser = new user({
            name,
            email
        });
        const userData = await newUser.save();
        res.status(200).json({
            message : "User is created",
            success : true,
            data : userData
        })
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

module.exports = {getAllUser, createUser, getSingleUser}