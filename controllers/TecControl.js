const Tec = require('../models/Tecnologie').default
const User = require("../models/User")

module.exports = {
    async store(req, res) {
        const { user_id } = req.params
        const { name } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: "User not found" })
        }

        const [tech] = await Tec.findOrCreate({ where: { name } })

        await user.addTecs(tech)

        return res.json(tech);
    },

    async index(req, res) {
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { association: "Tecs", through: { attributes: [] } }
            //include: { association: "Tecs", attributes: ['name'], through: { attributes: [] } }
        })


        return res.json(user)
    },


    async delete(req, res) {
        const { user_id } = req.params
        const { name } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: "User not found" })
        }

        const tech = await Tec.findOne({ where: { name } })

        await user.removeTecs(tech)

        return res.json()
    }

}