const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Usermodel = require('../Models/User');

const signup = async (req, res) => {
    try {
       const {username, email, password } = req.body;
        const user=await Usermodel.findOne({email});
        if(user){
            return res.status(400).send('User already exists');
        } else if (!password || !email || !username) {
            return res.status(400).send('All fields are required');
        }
        const usermodel = new Usermodel({ username, email, password });
        usermodel.password = await bcrypt.hash(password, 12);
       await usermodel.save(); 
        res.send('User registered successfully');
        await user.save();
    } catch (e) {
        res.status(400).send(e);    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!password || !email) {
            return res.status(400).json('All fields are required');
        }

        const user = await Usermodel.findOne({ email });
        if (!user) {
            return res.status(400).json('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json('Invalid credentials');
        }
        
        const jwtToken = jwt.sign({ email: user.email, user: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ message: 'User logged in successfully', token: jwtToken, email: user.email, username: user.username });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports={signup,login}; 

