import "antd/es/modal/style";
import _Modal from "antd/es/modal";
import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import "antd/es/message/style";
import _message from "antd/es/message";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Author: fafa
 * @Date: 2022-04-13 19:33:47
 * @LastEditors: fafa
 * @LastEditTime: 2022-04-20 16:39:10
 * @Description: 供应链公共图片上传 直接用于Form子组件也可
 */
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { checkImageWH } from './rcUtil';
import { isEmpty } from 'lodash';

function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    file && reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}

var ImageUpload = function ImageUpload(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      previewVisible = _useState2[0],
      setPreviewVisible = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      previewImage = _useState4[0],
      setPreviewImage = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      previewTitle = _useState6[0],
      setPreviewTitle = _useState6[1];

  var _props$maxCount = props.maxCount,
      maxCount = _props$maxCount === void 0 ? 1 : _props$maxCount,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$fileList = props.fileList,
      fileList = _props$fileList === void 0 ? [] : _props$fileList,
      sizeProps = props.sizeProps,
      uploadType = props.uploadType,
      actionUrl = props.actionUrl;

  var handleCancel = function handleCancel() {
    setPreviewVisible(false);
  };

  var _beforeUpload = function beforeUpload(file, fileList, _ref) {
    var _ref$uploadType = _ref.uploadType,
        uploadType = _ref$uploadType === void 0 ? [] : _ref$uploadType,
        sizeProps = _ref.sizeProps;
    var limitSize = true,
        fitUploadType = true;
    var fileSizeSum = fileList.map(function (item) {
      return Number(item.size || 0);
    }).reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    var limitSumSize = fileSizeSum <= 1024 * 1024 * 1024 * 2;

    if (!limitSumSize) {
      _message.destroy();

      _message.error("\u6587\u4EF6\u603B\u5927\u5C0F\u4E0A\u9650\u4E3A2GB!");
    }

    if (sizeProps) {
      var _sizeProps$maxSize = sizeProps.maxSize,
          maxSize = _sizeProps$maxSize === void 0 ? 1 : _sizeProps$maxSize,
          minSize = sizeProps.minSize,
          minImageSize = sizeProps.minImageSize,
          maxImageSize = sizeProps.maxImageSize;

      if (maxSize && file.size) {
        limitSize = file.size <= 1024 * 1024 * Number(maxSize);

        if (!limitSize) {
          _message.destroy();

          _message.error("\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E0A\u9650\u4E3A".concat(maxSize, "MB!"));
        }
      }

      if (minSize && file.size) {
        limitSize = file.size >= 1024 * 1024 * Number(maxSize);

        if (!limitSize) {
          _message.destroy();

          _message.error("\u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u6700\u5C0F\u4E3A".concat(maxSize, "MB!"));
        }
      }

      if (maxImageSize && minImageSize && !isEmpty(maxImageSize) && !isEmpty(minImageSize) && maxImageSize.width === minImageSize.width && maxImageSize.height === minImageSize.height) {
        return checkImageWH(file, maxImageSize.width, maxImageSize.height, '=');
      } else {
        if (maxImageSize && !isEmpty(maxImageSize)) {
          var width = maxImageSize.width,
              height = maxImageSize.height;
          return checkImageWH(file, width, height, '>');
        }

        if (minImageSize && !isEmpty(minImageSize)) {
          var _width = minImageSize.width,
              _height = minImageSize.height;
          return checkImageWH(file, _width, _height, '<');
        }
      }
    }

    if (uploadType) {
      var newUploadType = uploadType.filter(function (item) {
        return !!item;
      });
      var fileName = file.name.toLowerCase();
      var fileType = fileName.substring(fileName.lastIndexOf('.'), fileName.length).replace('.', '');
      fitUploadType = newUploadType.includes(fileType);

      if (!fitUploadType) {
        _message.destroy();

        _message.error("\u6587\u4EF6\u7C7B\u578B\u4E0D\u5339\u914D!");
      }
    }

    var validRule = limitSize && limitSumSize && fitUploadType;

    if (!validRule) {
      return _Upload.LIST_IGNORE;
    }

    return validRule || _Upload.LIST_IGNORE;
  };

  var handlePreview = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
      var _file$url, url, _file$preview, preview;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _file$url = file.url, url = _file$url === void 0 ? '' : _file$url, _file$preview = file.preview, preview = _file$preview === void 0 ? '' : _file$preview;

              if (!(!file.url && !file.preview)) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return getBase64(file === null || file === void 0 ? void 0 : file.originFileObj);

            case 4:
              file.preview = _context.sent;

            case 5:
              setPreviewImage(url || preview);
              setPreviewVisible(true);
              setPreviewTitle(file.name || url.substring(url.lastIndexOf('/') + 1));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handlePreview(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var uploadButton = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlusOutlined, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "\u70B9\u51FB\u4E0A\u4F20"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Upload, _objectSpread({
    name: "file",
    listType: "picture-card",
    withCredentials: true,
    accept: ".jpg,.jpeg,.png,.gif",
    multiple: multiple,
    beforeUpload: function beforeUpload(file, fileList) {
      return _beforeUpload(file, fileList, {
        sizeProps: sizeProps,
        uploadType: uploadType !== null && uploadType !== void 0 ? uploadType : ['jpg', 'jpeg', 'png', 'gif']
      });
    },
    action: actionUrl,
    onPreview: handlePreview
  }, props), fileList.length >= maxCount ? null : uploadButton), /*#__PURE__*/React.createElement(_Modal, {
    visible: previewVisible,
    title: previewTitle,
    footer: null,
    onCancel: handleCancel
  }, /*#__PURE__*/React.createElement("img", {
    alt: "example",
    style: {
      width: '100%'
    },
    src: previewImage
  })));
};

export default ImageUpload;