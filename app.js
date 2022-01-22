const express = require('express');
const { Mongoose } = require('mongoose');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Middlewares
app.use(cors());
app.use(bodyParser.json());

// app.use(express.json());
// app.use('/api/products',productRoutes)


// app.use('/products', () => {
//     console.log('');
// });

//Importing routes
const postsRoute = require('./routes/posts');

app.use('/products', postsRoute);

//Routes
app.get('/', (req,res) => { 
    res.send('Welcome to Olu Clothings');
});


//Connect to database
mongoose.connect(process.env.MONGODB, () =>
    console.log('connected to mongoDB!')
);
//Listen on server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));