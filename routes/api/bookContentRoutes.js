const router = require("express").Router();
const booksController = require("../../controller/bookCcontroller");

    // Matches with "/api/store"
    router
        .route("/:id")
        .get(booksController.getBookText)

    module.exports = router;