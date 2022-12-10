const express = require('express');
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/auth");
const homeRoute = require("./routes/homeRoute");
const passport = require('passport');
const cors = require("cors");

const app = express();
require("dotenv").config();

const ONE_DAY_EXPIRES = 24 * 60 * 60 * 100;

app.use(cookieSession({
    name: "session",
    keys: ["pluswhale"],
    maxAge: ONE_DAY_EXPIRES,
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB CONNECTED SUCCESSFULLY");
})
  .catch((e) => {
    console.log(e);
  })

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000/",
    credentials: true,
    methods: "GET,POST,PUT,DELETE, PATCH",
    
}));

app.use("/api/auth", userRoute);
app.use("/auth", authRoute);
app.use("/", homeRoute);

const server = app.listen(process.env.PORT, () => {
    console.log(`server is running on port: ${process.env.PORT}`);
});