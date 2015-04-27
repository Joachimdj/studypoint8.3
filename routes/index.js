var express = require('express');
var router = express.Router();
var data = require('../data');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Exam Question Performance'});
});

router.get('/jadeDemo', function (req, res) {
    res.render('jadeFileForExercise.jade', {introText: 'Jade Member Table', members: require("../data")});
});

router.get('/details/:id', function (req, res) {

    var selectedMember;

    for (var i in data) {
        if (data[i].id == req.params.id) {
            selectedMember = data[i];
            console.log(selectedMember);
        }
    }
    res.render('details.jade', {member: selectedMember});

});

module.exports = router;
