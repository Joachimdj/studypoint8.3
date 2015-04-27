var express = require('express');
var router = express.Router();
var data = require('../data');

router.get('/getmembers', function (req, res) {
    res.json(data);
});

module.exports = router;
