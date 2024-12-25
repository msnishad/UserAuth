const express = require("express")
const loginUsers = require("./module/login")
const registerUser = require("./module/register")

const router = express.Router()


router.post('/login', loginUsers)
router.post('/register', registerUser)

module.exports= router