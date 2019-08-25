const router = require("express").Router();
const yControllerRoutes = require("./yControllerRoutes");
const bookContentRoutes = require("./bookContentRoutes");
const bookStatusRoutes = require("./bookStatusRoutes");


// User routes
router.use("/store", yControllerRoutes);
router.use("/getbookcontent", bookContentRoutes);
router.use("/bookstatus", bookStatusRoutes)

module.exports = router;
