const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const employeeRoutes = require("./employeeController");

// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/employee", employeeRoutes);

// Export the router
module.exports = router;
