const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys');

const ItemController = require('./routes/api/ItemController');


const app = express();


// Bodyparser middleware

app.use(bodyParser.json());

// DB Connection
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongoDB connected')
}).catch(err => {
    console.error(err);
});

// Use Routes

app.use('/api/items', ItemController);

// Configuring Port

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
