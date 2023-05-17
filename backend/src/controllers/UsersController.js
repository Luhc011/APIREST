/**
 * # METODOS CONTROLLER #
 *
 * index - GET (listar)
 * show - GET (exibir)
 * create - POST (criar)
 * update - PUT (atualizar)
 * delete - DELETE (deletar)
 */

class UsersController {
  create(req, res) {
    const { name, email, password } = req.body;

    res.send(`Nome: ${name}, email: ${email}, password: ${password}`);
  }
}

module.exports = UsersController;
