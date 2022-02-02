const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connected successfully !!!!"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

app.listen(8800, () => {
  console.log("Backend server running in port 8800");
});
