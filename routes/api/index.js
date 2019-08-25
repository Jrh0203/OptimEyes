const router = require("express").Router();
const yControllerRoutes = require("./yControllerRoutes");
const bookContentRoutes = require("./bookContentRoutes");
const bookStatusRoutes = require("./bookStatusRoutes");
const getMetadataRoutes = require("./getMetadataRoute");


// User routes
router.use("/store", yControllerRoutes);
router.use("/getbookcontent", bookContentRoutes);
router.use("/bookstatus", bookStatusRoutes)
router.use("/getMetadata", getMetadataRoutes)

module.exports = router;
