const express = require('express');
const { Mongoose } = require('mongoose');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Imported Middlewares
app.use(cors());
app.use(bodyParser.json());

//Importing routes to GET API
const postsRoute = require('./routes/posts');

app.use('/products', postsRoute);

//Routes
app.get('/', (req,res) => { 
    res.send('Welcome to Olu Clothings');
});


//Connected to database
mongoose.connect(process.env.MONGODB, () =>
    console.log('connected to mongoDB!')
);
//Listen on server
const PORT = process.env.PORT || 5600;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));