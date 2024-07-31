const mongoose = require('mongoose');
const mongo_url = 'mongodb://localhost:27017/LOGIN-SIGNUP';
mongoose.connect(mongo_url, {
    
}).then(() => {
    console.log('Database connected');
}).catch((e) => {
    console.log('Database connection failed');
});