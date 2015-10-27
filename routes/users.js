var express = require('express');
var router = express.Router();
var user = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
  res.render('user', {title: 'user page', users: [user]});
});

module.exports = router;