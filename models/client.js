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
      allowNull: true
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quote: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    timeStamp: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.now()
    }
  });
  Client.associate = function(models) {
    Client.belongsTo(models.SalesPerson, {
      foreignKey: {
        allowNull: false
      }
    });
    Client.hasMany(models.Notes, {
      onDelete: "cascade"
    });
  };
  return Client;
};
