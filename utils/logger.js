/**
 * Created by Xiaofan Zhang　on 2015-10-30.
 */
var fs = require('fs');
var logger = {
  log: function(text) {
    var date = new Date();
    var content = date.toString() + ': ' + text + '\n';
    var file = fs.createWriteStream('/data/video-map.log', {flags: 'a'});

    file.write(content);
    file.end(function() {
      console.log('write log');
    });
  }
};

module.exports = logger;