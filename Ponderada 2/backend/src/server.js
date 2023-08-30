const express = require("express");
const todosroutes = require("./routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(todosroutes);
app.get("/hello", (req, res) => {
  return res.json("hello world");
});

app.listen(1234);
