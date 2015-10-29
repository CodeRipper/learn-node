/**
 * Created by Xiaofan Zhang on 2015-10-28.
 */
var db = require('../utils/db');
var result = [];

var userDao = {
  getUsers: function (callback) {
    db.conn.query('select * from user', function (err, rows, fields) {
      if (err) throw err;

//      console.info('userDao: rows--' + rows);
      return callback(null, rows)
    });
  }
};

module.exports = userDao;