module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define("Client", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
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
      type: DataTypes.STRING,
      allowNull: true
    },
    followUp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  Client.associate = function(models) {
    Client.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Client;
};
