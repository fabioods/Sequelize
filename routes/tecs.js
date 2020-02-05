const TecController = require("../controllers/TecControl")

module.exports = app => {
    app.route("/users/:user_id/tecs")
    .post(TecController.store) // cadastra endereços
    .get(TecController.index) // retonar os endereços de um usuário existente
    .delete(TecController.delete) //exclui uma tecnologia do usuário
}