const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRoutes');
const dotenv = require('dotenv');
dotenv.config();
//const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
//app.use('/products', ProductRouter);

app.listen(3000,()=>{
    console.log('Server is running on  port 3000');
});
//console.log('JWT_SECRET:', process.env.JWT_SECRET);
