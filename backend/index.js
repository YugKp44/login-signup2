const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRoutes');
//const ProductRouter = require('./Routes/ProductRouter');


const corsOptions = {
    origin: 'https://login-signup2-ui.vercel.app', // Your frontend's origin
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

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

app.listen(8000,()=>{
    console.log('Server is running on  port 8000');
});