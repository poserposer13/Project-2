module.exports = function (sequelize, DataTypes) {
  const Pay = sequelize.define("Pay", {
    // Giving the Author model a name of type STRING
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    payDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ptoAccrual: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: true,
      },
    },
  });

  Pay.associate = function (models) {
    // Associating Employee with Paychecks
    Pay.belongsTo(models.Employee, {
      onDelete: "cascade",
    });
  };

  return Pay;
};
