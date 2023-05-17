const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
  const { name, email, password } = req.body;

  res.send(`Nome: ${name}, email: ${email}, password: ${password}`);
});

module.exports = usersRoutes;
