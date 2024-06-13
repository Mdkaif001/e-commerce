const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, name, password } = req.body;

    console.log(req.body,"===")
    if (!email) {
      throw new Error("Please provide email!");
    }

    const user =  await userModel.findOne({email});

    if(user){
        throw new Error("User already exist!");
    }

    if (!name) {
      throw new Error("Please provide name!");
    }
    if (!password) {
      throw new Error("Please provide password!");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Some thing went wrong!");
    }

    console.log(hashPassword, "==hashPassword");

    const payload = {
      ...req.body,
      password : hashPassword,
    }

    const userData = new userModel(payload);

    const saveUser = userData.save();

    res.status({
      data: saveUser,
      success: true,
      error: false,
      message: "User created successfully!",
    });
  } catch (error) {
    res.json({
      message: error.message ?? error,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
