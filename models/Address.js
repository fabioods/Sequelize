const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
        street: {
        type: DataTypes.STRING,
        validate:{
          notEmpty: true
        }
      },
      
      number: {
        type: DataTypes.INTEGER,
        validate:{
          isNumeric: true
        }
      },

      user_id: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
          notEmpty: true
        }
      }
    }, {sequelize}
  )
  }

  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'user_id', as: "User"})
  }
}

module.exports = Address;


