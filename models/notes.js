module.exports = function(sequelize, DataTypes) {
  const Notes = sequelize.define("Notes", {
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  Notes.associate = function(models) {
    Notes.belongsTo(models.Client, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Notes;
};
