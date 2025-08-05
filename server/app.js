const express = require("express");
const session = require("express-session");
const passport = require("passport");
// require("./auth/google");
require("./auth/github");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Auth routes
// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:5173/profile",
    failureRedirect: "http://localhost:5173/login",
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/profile",
    failureRedirect: "http://localhost:5173/login",
  })
);



app.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: req.user,
    });
  } else {
    res.status(401).json({ success: false });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5173");
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
