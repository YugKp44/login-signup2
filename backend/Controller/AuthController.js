const bcrypt = require('bcrypt');
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
        usermodel.save();
        res.send('User registered successfully');
        await user.save();
    } catch (e) {
        res.status(400).send(e);    }
}
module.exports={signup}; 

