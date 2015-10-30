/**
 * Created by Xiaofan Zhang on 2015/10/30.
 * for bilibili data to array
 */
module.exports = function squash (array, obj) {
  var arr = array;
  for (var key in obj) {
    if (/^\d+$/.test(key) && obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    } else {
      squash(arr, obj[key]);
    }
  }

  return arr;
};