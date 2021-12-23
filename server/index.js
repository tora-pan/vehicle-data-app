const express = require("express");
const db = require("./queries");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/cars", db.getCars);
app.get("/cars/:id", db.getCarById);
app.post("/cars", db.createCar);
app.put("/cars/:id", db.updateCar);
app.delete("/cars/:id", db.deleteCar);

app.listen(port, () => {
  console.log(`APP listening on port ${port}.`);
});
