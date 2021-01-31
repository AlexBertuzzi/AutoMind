module.exports = function(sequelize, DataTypes) {
  const SalesPerson = sequelize.define("SalesPerson", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  SalesPerson.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  SalesPerson.addHook("beforeCreate", salesPerson => {
    salesPerson.password = bcrypt.hashSync(
      salesPerson.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  SalesPerson.associate = function(models) {
    SalesPerson.hasMany(models.Client);
  };
  return SalesPerson;
};
