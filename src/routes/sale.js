const express = require('express');
const router = express();
const sales = require("../models/sales");

router.get("/sale", (req, res) => {
    sales.find().then((data) => {
        res.send(data)
    })
    .catch((e) => {
        res.send(e);
    })
});

module.exports = router;