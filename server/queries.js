const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

// get all cars
const getCars = (req, res) => {
  pool.query("SELECT * FROM cars ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

// get car by ID
const getCarById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM cars WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

// post a new car
const createCar = (req, res) => {
  const { make, model, year, color } = request.body;

  pool.query(
    "INSERT INTO cars (make, model, year, color) VALUES ($1, $2, $3, $4)",
    [make, model, year, color],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Car added with ID: ${result.insertID}`);
    }
  );
};

// put updated car
const updateCar = (req, res) => {
  const id = parseInt(req.params.id);
  const { make, model, year, color } = request.body;

  pool.query(
    "UPDATE cars SET make = $1, model=$2, year=$3, color=$4",
    [make, model, year, color],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Updated car ${id}.`);
    }
  );
};

// delete car
const deleteCar = (req, res) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM cars WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Car deleted with ID: ${id}.`);
  });
};

module.exports = {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
