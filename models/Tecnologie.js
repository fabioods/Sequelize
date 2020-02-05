const { Model, DataTypes } = require('sequelize');

class Tecnologie extends Model {
  static init(sequelize) {
    super.init({
        name: {
        type: DataTypes.STRING,
        validate:{
          notEmpty: true
        }
      },
      
    }, {sequelize}
  )
  }

  static associate(models) {
    this.belongsToMany(models.User, {foreignKey: 'tec_id', through: "Tec_users", as: "User"})
  }
}

module.exports = Tecnologie;