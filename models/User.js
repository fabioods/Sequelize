const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        validate:{
          notEmpty: true
        }
      },
      
      email: {
        type: DataTypes.STRING,
        validate:{
          isEmail: true
        }
      },

      login: {
        type: DataTypes.STRING,
        validate:{
          notEmpty: true,
        }
      },

      senha: {
        type: DataTypes.STRING,
        validate:{
          notEmpty: true,
        }
      }
    }, {sequelize}
  )
  }

  static associate(models) {
    this.hasMany(models.Address, {foreignKey: 'user_id', as: "addresses"})
    this.belongsToMany(models.Tecnologie, {foreignKey: 'user_id', through: "Tec_users", as: "Tecs"})
  }
}

module.exports = User;