require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

//DATABASE_URL=mongodb://localhost:27017/Subscribers

const db = mongoose.connection;

db.on("error", (error) => {
    console.error(error);
});
db.once("open", () => {
    console.log("Connected to DataBase");
});

app.use(express.json());

app.use(cors());

// // Subscriber
// const subscribersRouter = require("./routes/subscribers");
// app.use("/subscribers", subscribersRouter);
const adminUserRouter = require("./routes/adminUser");
app.use("/adminUser", adminUserRouter);
const newPlaceRouter = require("./routes/newPlace");
app.use("/newPlace", newPlaceRouter);

app.listen(3000, () => {
    console.log('Server Started');

});
