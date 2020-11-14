// Creating our Employee model
module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define("Employee", {
    employeeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmployeeName: true,
      },
    },

    employeelastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmployeeLastName: true,
      },
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
      allowNull: false,
    },
  });

  Employee.associate = function (models) {
    Employee.hasMany(models.Pay, {
      onDelete: "cascade",
    });
  };

  return Employee;
};
