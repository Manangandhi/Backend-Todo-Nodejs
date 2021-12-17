require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DB"));

app.use(express.json());

const todoRoutes = require("./routes/todo");
app.use("/todos", todoRoutes);

const port = 5000;
app.listen(port, () => console.log(`Server Started at Port ${port}`));
