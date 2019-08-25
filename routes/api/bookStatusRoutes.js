const router = require("express").Router();
const bookStatusController = require("../../controller/bookStatusController");

    router
        .route("/")
        .post(bookStatusController.SaveBook)

    router
        .route("/:id")
        .get(bookStatusController.GetSavedBook)

module.exports = router;