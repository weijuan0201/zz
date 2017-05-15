/**
 * Created by qingyun on 17/5/15.
 */
var name;
exports.setName = function (tempName) {
  name = tempName;
};
exports.sayHello = function () {
    console.log('hello ' + name);
};
