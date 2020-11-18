const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const departmentRoutes = require("./departmentController");
const payRoutes = require("./payController");


// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/departments", departmentRoutes);
router.use("/pay", payRoutes);


// Export the router
module.exports = router;
