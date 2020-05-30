const express = require("express");
const app = express();
const connectDB= require("./config/db");

const authRouter = require("./routes/api/auth");
const postsRouter = require("./routes/api/posts");
const profileRouter = require("./routes/api/profile");
const usersRouter = require("./routes/api/users");

connectDB();

app.use(express.json({extended:false}))
app.get("/", (req, res) => {
    res.send("hello world");
})

app.use("/api/auth",authRouter);
app.use("/api/posts",postsRouter);
app.use("/api/profile",profileRouter);
app.use("/api/users",usersRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server connected");
})