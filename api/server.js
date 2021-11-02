const express = require("express");
const carsRouter = require("./cars/cars-router");
const server = express();
server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.status(200).json("Heres your car info");
});
module.exports = server;
