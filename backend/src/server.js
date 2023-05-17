require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");

const express = require("express");

migrationsRun();

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
