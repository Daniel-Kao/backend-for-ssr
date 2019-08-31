const express = require("express");

const app = express();

app.use("/", (req, res) => res.send("hello world"));

app.listen(4322, () => console.log("server started on port 4322"));
