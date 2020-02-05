const AddressControl = require("../controllers/AddressControl")

module.exports = app => {
    app.route("/users/:user_id/addresses")
    .post(AddressControl.store) // cadastra endereços
    .get(AddressControl.index) // retonar os endereços de um usuário existente
}