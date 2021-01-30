module.exports = function(sequelize, DataTypes){
    var SalesPerson = sequelize.define("SalesPerson", {
        name: DataTypes.STRING,
        allowNull: false
    });
    SalesPerson.associate = function(models){
        SalesPerson.hasMany(models.Client);
    };
    return SalesPerson;
}
