const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://jshwa0429:asrai%237931@cluster0.9njhpor.mongodb.net/test";

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.listen(8000, () => {
  console.log("Server Listening on port 8000");
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.post("/api/account", (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user
    .save()
    .then(() => res.send("User saved to the database"))
    .catch((error) => res.status(500).send(error));
});
