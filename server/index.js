const express = require("express");
const jwt = require("jsonwebtoken");
const secret = require("./secret");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/login", (req, res) => {
  let user = req.query.user;
  let pwd = req.query.pwd;
  let token = jwt.sign({ user, id: 123 }, secret.secretKey, { expiresIn: 20 });
  res.send({
    info: "success",
    status: 200,
    token,
  });
});

app.listen(8888, () => {
  console.log(8888);
});
