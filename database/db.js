const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://root:sysadmin@cluster0.jrvjy.mongodb.net/taskman?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoBD");
        console.log(error);
    })