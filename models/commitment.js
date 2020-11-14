module.exports = function (sequelize, DataTypes) {
  const Commitment = sequelize.define("Commitment", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    payRate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    accrualRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Commitment.associate = function (models) {
    Commitment.belongsToMany(models.Department, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  Commitment.associate = function (models) {
    Commitment.hasMany(models.Employee, {
      // Should employees be deleted when a commitment gets deleted????
      // onDelete: "cascade",
    });
  };

  return Commitment;
};
