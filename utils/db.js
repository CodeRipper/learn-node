/**
 * Created by Xiaofan Zhang　on 2015-10-28.
 */
var fs = require('fs');
var mysql = require('mysql');

var prop = JSON.parse(fs.readFileSync('/data/prop.json', 'utf8'));
console.info('db: prop read');
var db = {
  conn: (function () {
//    console.info('db: conn');
    return mysql.createConnection(prop);
  })()
};

module.exports = db;