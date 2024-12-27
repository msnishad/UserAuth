const user = require("../model/user");
const User = require("../model/user")


const loginUsers = async (req,res) => {

    const { username, password, email, role} = req.body;

    const userExists = await User.exists({ username })

    if (!userExists) {
      return res.status(400).json({ message: 'User does not exists' });
    }

    const user = await User.findOne({ username });
    const succ = user.matchPassword(password); 
    if(succ) {
        res.json({
            message: 'Login successful',
            token: 'token',
        });
    } else {
        res.json({
            message: 'Invalid Credentials',
        });
    }

}

module.exports = loginUsers;