const User = require("../model/user")

const registerUser = async (req,res) => {
    const { username, password, email, role} = req.body;
    try {
        const isExistingUser = await User.exists({ username })
        if(isExistingUser) {
            return res.status(400).json({ message: 'User already exists'})
        }

        const user = new User({
            username: username,
            password: password,
            email: email,
            role: role
        })

        await user.save();

        res.status(201).json({
            message: 'User registered successfully.',
            user: {
                username: user.username,
                email: user.email
            }
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = registerUser;