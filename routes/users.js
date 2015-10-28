var express = require('express');
var router = express.Router();
var user = require('../models/user');
var db = require('../utils/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
  res.render('user', {title: 'user page', users: [user], db: db});
});

module.exports = router;
