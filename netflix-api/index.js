const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const moviesRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB connected successfully !!!!"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/lists", listRoute);

app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server running in port 8800");
});
