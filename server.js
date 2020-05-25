const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const subscribersRouter = require("./routes/subscribers");
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("connected to database");
});
app.use(express.json());

app.use("/subscribers/", subscribersRouter);

app.listen(3099, () => {
  const str = `server started 2 AT ${JSON.stringify(process.env)}`;
  const str2 = "server started at 3099";
  console.log(str2);
});
