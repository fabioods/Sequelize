const Address = require('../models/Address')
const User = require("../models/User")

module.exports = {
    async store(req, res) {
        const {
            user_id
        } = req.params
        const {
            street,
            number
        } = req.body

        const user = await User.findByPk(user_id)
        if (!user) {
            return res.status(400).json({
                "error": "user not found"
            })
        }

        const address = await Address.create({
            street,
            number,
            user_id
        })

        return res.json(address);
    },

    async index(req, res) {
        const {
            user_id
        } = req.params

        const user = await User.findByPk(user_id, {
            include: {
                association: 'addresses'
            }
        }).then((user) => {
            return res.json({
                user
            })
        }).catch((erro) => {
            return res.json({
                "user": "user not found",
                "erro": erro
            })
        })
    }

}