const router = require("express").Router();

    // Matches with "/api/store"
    router
        .route("/")
        .get(function(req, res) {
            res.send("hello world");
        })

    module.exports = router;