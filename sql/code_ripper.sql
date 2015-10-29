/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : code_ripper

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2015-10-29 11:41:34
*/
SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'Anonymous', 'password', '1', '24');
