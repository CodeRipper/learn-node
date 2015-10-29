/**
 * Created by Xiaofan Zhang on 2015-10-28.
 */
var db = require('../utils/db');
var result = [];

var user = {
  getUsers: function (callback) {
    db.conn.query('select * from user', function (err, rows, fields) {
      if (err) throw err;

//      console.info('user: rows--' + rows);
      return callback(null, rows)
    });
  }
};

module.exports = user;