const router = require("express").Router();
const getMetadataController = require("../../controller/getMetadataController");

    // Matches with "/api/store"
    router
        .route("/:id")
        .get(getMetadataController.getBookMetadata)

    module.exports = router;
