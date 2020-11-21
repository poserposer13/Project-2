const router = require("express").Router();
// Import our controllers
const userRoutes = require("./usersController");
const employeeRoutes = require("./employeeController");
const departmentRoutes = require("./departmentController");
const payRoutes = require("./payController");
const commitmentRoutes = require("./commitmentController");

// Hook up to the router
router.use("/users", userRoutes);
router.use("/employee", employeeRoutes);
router.use("/departments", departmentRoutes);
router.use("/pay", payRoutes);
router.use("/commitment", commitmentRoutes);

// Export the router
module.exports = router;
