const router = require("express").Router();
const yControllerRoutes = require("./yControllerRoutes");
const bookContentRoutes = require("./bookContentRoutes");


// User routes
router.use("/store", yControllerRoutes);

router.use("/getbookcontent", bookContentRoutes);

module.exports = router;
