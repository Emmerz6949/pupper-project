const router = require("express").Router();
const mailRoutes = require("./mail");

// routes
router.use("/mail", mailRoutes);

module.exports = router;
