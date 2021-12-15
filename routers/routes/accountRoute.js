const express = require("express");
const accountRoute  = express.Router()

const  {profileInfo, usersInfo}  = require("../controllers/account")

//
accountRoute.get("/profile/:id" , profileInfo )
accountRoute.get("/users" , usersInfo )

module.exports = accountRoute