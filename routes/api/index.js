const router = require("express").Router();
const yControllerRoutes = require("./yControllerRoutes");
const bookContentRoutes = require("./bookContentRoutes");
const helloworld = require("./helloworld");


// User routes
router.use("/store", yControllerRoutes);
router.use("/getbookcontent", bookContentRoutes);
router.use("/helloworld", helloworld);

module.exports = router;
