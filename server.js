// require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
// const cors = require("cors");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DB"));

app.use(express.json());
app.use(cors());
app.use(express.static("client/build"));

const todoRouter = require("./route/todo");
const userRouter = require("./route/user");
app.use("/todo", todoRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`App running at port ${process.env.PORT}`)
);
