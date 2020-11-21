module.exports = function (sequelize, DataTypes) {
  const Department = sequelize.define("Department", {
    // department name, cannot be null
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    // department description, cannot be null
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Department.associate = function (models) {
    // associate Department with Employee
    Department.hasMany(models.Employee, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // =====================================================================
  // what should we do upon deletion of a department (reassign vs remove)?
  // =====================================================================

  return Department;
};
