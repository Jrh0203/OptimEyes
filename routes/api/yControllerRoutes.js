const router = require("express").Router();
const yController = require("../../controller/yController");

    // Matches with "/api/store"
    router
        .route("/")
        .post(yController.getBooks)

    module.exports = router;