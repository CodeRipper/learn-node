/**
 * Created by Xiaofan Zhang　on 2015-10-28.
 */
var fs = require('fs');
var db = JSON.parse(fs.readFileSync('/data/prop.json', 'utf8'));
console.info('....db read....');

module.exports = db;