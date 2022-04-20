"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkImageWH = checkImageWH;

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 返回一个promise  检测通过返回resolve  失败返回reject阻止图片上传
function checkImageWH(file, width, height, type) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      var _e$target;

      var src = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.result;
      var image = new Image();

      image.onload = function () {
        var actionMap = {
          '=': {
            express: image.width != width && image.height != height,
            title: "\u8BF7\u4E0A\u4F20\u5BBD\u4E3A".concat(width, "\uFF0C\u9AD8\u4E3A").concat(height, "\u7684\u56FE\u7247")
          },
          '>': {
            express: image.width > width && image.height > height,
            title: "\u8BF7\u4E0A\u4F20\u5BBD\u5C0F\u4E8E".concat(width, "\uFF0C\u9AD8\u5C0F\u4E8E").concat(height, "\u7684\u56FE\u7247")
          },
          '<': {
            express: image.width < width && image.height < height,
            title: "\u8BF7\u4E0A\u4F20\u5BBD\u5927\u4E8E".concat(width, "\uFF0C\u9AD8\u5927\u4E8E").concat(height, "\u7684\u56FE\u7247")
          }
        }; // 上传图片的宽高与传递过来的限制宽高作比较，超过限制则调用失败回调

        if (actionMap[type].express) {
          _message2.default.destroy();

          _message2.default.error(actionMap[type].title, 2);

          reject();
        } else {
          resolve();
        }
      };

      image.onerror = reject;
      image.src = src;
    };

    fileReader.readAsDataURL(file);
  });
}