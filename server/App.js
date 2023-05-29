const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://jshwa0429:asrai%237931@cluster0.9njhpor.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongoDB");
  } catch (error) {
    console.error("MongoDB 연결 실퍠:", error);
  }
}

connect();

const { Schema } = mongoose;
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.listen(8000, () => {
  console.log("Server Listening on port 8000");
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.post("/api/signup", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    console.log(req.body);
    user.save();
    res.status(201).json({ message: "회원가입이 성공적으로 완료되었습니다." });
  } catch (error) {
    res.status(500).json({ message: "회원가입에 실패하였습니다" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!User || !bcrypt.compareSync(password, user.password)) {
      res
        .status(401)
        .json({ message: "유효하지 않은 이메일 또는 비밀번호입니다." });
    } else {
      res.status(200).json({ message: "로그인에 성공했습니다" });
    }
  } catch (error) {
    res.status(500).json({ message: "로그인에 실패하였습니다" });
  }
});
