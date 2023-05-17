const AppError = require("../utils/AppError");

class UsersController {
  create(req, res) {
    const { name, email, password } = req.body;

    if (!name) {
      throw new AppError("You must provide a name");
    }

    res.send(`Nome: ${name}, email: ${email}, password: ${password}`);
  }
}

module.exports = UsersController;
