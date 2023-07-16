const mongoose = require('mongoose');
require('dotenv').config();
// CONNECTION=mongodb://localhost:27017/social  
module.exports = mongoose.connect(process.env.CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (!err) {
            console.log("successfully connected")
        }
        else {
            console.log("error in database connection", err)
        }
    })
