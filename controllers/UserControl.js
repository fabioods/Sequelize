const Users = require('../models/User')

module.exports = {
    async store(req,res){
        const {name, email, login, senha} =  req.body

        const user = await Users.create({name, email, login, senha})

        return res.json(user)
    },

    async index(req,res){
        const users = await Users.findAll()
        return res.json(users);
    }
}