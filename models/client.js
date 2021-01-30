module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define("Client", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [9]
      }
    },
    make: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [30]
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [30]
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [20]
      }
    },
    quote: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [12]
      }
    },
    timeStamp: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.now()
    }
  });
  Client.associate = function(models){
    Client.belongsTo(models.SalesPerson, {
      foreignKey: {
        allowNull: false
      }
    });
    Client.hasMany(models.Notes,{
      onDelete: 'cascade'
    });
  }
  return Client;
}
