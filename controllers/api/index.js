const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const commitmentRoutes = require("./commitmentController");

// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/commitment", commitmentRoutes);

// Export the router
module.exports = router;
