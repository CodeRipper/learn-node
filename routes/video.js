var express = require('express');
var router = express.Router();
var http = require('http');

var db = require('../utils/db');
var logger = require('../utils/logger');
var squash = require('../utils/squash');
var type = [33, 32, 94];
/*
动漫剧番：13
  连载动画：33
  完结动画：32
  剧场·OVA：94
*/

/* GET home page. */
router.get('/', function(req, res, next) {

  http.get({
    hostname: 'api.bilibili.cn',
    port: 80,
    path: '/index'
  }, function(b_res) {

    console.log("Got bilibili response: " + b_res.statusCode);
    logger.log("Got bilibili response: " + b_res.statusCode);

    var videoTotalStr = '';
    b_res.on('data', function (chunk) {
      videoTotalStr += chunk;
    });

    b_res.on('end', function(){
      var videoTotal = JSON.parse(videoTotalStr);

      var videos = squash([], videoTotal);

      logger.log(videos);
      res.render('video', { title: 'video list', videos: videos});
    });

  }).on('error', function(e) {
    console.log("Got bilibili error: " + e.message);
    logger.log("Got bilibili error: " + e.message);
  });
});

router.get('/show/:id', function(req, res, next) {
  //http://www.bilibili.com/m/html5?aid=3127020&page=1
  http.get({
    hostname: 'www.bilibili.com',
    port: 80,
    path: '/m/html5?aid='+ req.params.id + '&page=1'
  }, function(b_res) {

    logger.log("Got bilibili video src: " + b_res.statusCode);

    var videoStr = '';
    b_res.on('data', function (chunk) {
      videoStr += chunk;
    });

    b_res.on('end', function(){
      console.info('videoStr:' + videoStr);
      var video = JSON.parse(videoStr);

      logger.log(video);
      res.render('show', { title: 'video show', video: video});
    });

  }).on('error', function(e) {
    logger.log("Got bilibili video src error: " + e.message);
  });
});

module.exports = router;