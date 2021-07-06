const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://keegan217:keegan217@users.8i9z7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

server.listen(PORT);
console.log("server listening on port:" + PORT);
