module.exports = function (sequelize, DataTypes) {
    let Pay = sequelize.define("Pay", {
        // Giving the Author model a name of type STRING
        amount: DataTypes.DECIMAL(10,2),    
        payDate: DataTypes.DATE,
        ptoAccrual: DataTypes.DECIMAL(10,2)
    });

    Pay.associate = function (models) {
        // Associating Employee with Paychecks
        Pay.belongsTo(models.Employee, {
            onDelete: "cascade"
        });
    };

    return Pay;
};