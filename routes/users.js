var express = require('express');
var router = express.Router();
var user = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var model = {
    title: 'user page'
  };

  var list = [];
  function loadUsers (err, rows) {
    if (err) throw err;

//    console.info('users: array');
    list = Array.prototype.map.call(rows, function (o) {
      return o;
    });

    model.users = list;
//    console.info('users: model-users ' + model.users);
    res.render('user', model);
  }

  user.getUsers(loadUsers);
});

module.exports = router;