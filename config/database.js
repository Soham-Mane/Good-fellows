// Setting up our mongoose database;


const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://sohamnmane03:sohamnm03@cluster0.bo0evhv.mongodb.net/finalproject?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected");
});

module.exports = db;