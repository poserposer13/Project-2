// Creating our Employee model
module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define("Employee", {
    employeeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    employeelastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Employee.associate = function (models) {
    Employee.hasMany(models.Pay, {
      onDelete: "cascade",
    });
    Employee.belongsTo(models.Department, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: true,
      },
    });
  };

  return Employee;
};
