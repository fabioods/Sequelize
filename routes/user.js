const UserControl = require('../controllers/UserControl')

module.exports = app =>{
    try {
        app.route('/users')
        .post(UserControl.store) //cadastro de usuário
        .get(UserControl.index) // lista todos os usuários
    } catch (error) {
        console.log(error)
    }
   

}