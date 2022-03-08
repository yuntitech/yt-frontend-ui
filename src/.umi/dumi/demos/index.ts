// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'ActionModal-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/fafa/my-project/dumi-app/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  require("antd/es/button/style");

  var _button = _interopRequireDefault(require("antd/es/button"));

  var _react = _interopRequireDefault(require("react"));

  var _dumiApp = require("dumi-app");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_dumiApp.ActionModal, {
      btn: /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "primary"
      }, "\u5BFC\u5165"),
      modalProps: {
        title: '导入',
        destroyOnClose: true
      }
    }, /*#__PURE__*/_react["default"].createElement("h2", null, "\u4F60\u597D \u6D4B\u8BD5\u4E2D"));
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { ActionModal } from 'dumi-app';\nimport { Button } from 'antd';\n\nexport default () => (\n  <ActionModal\n    btn={<Button type=\"primary\">导入</Button>}\n    modalProps={{\n      title: '导入',\n      destroyOnClose: true,\n    }}\n  >\n    <h2>你好 测试中</h2>\n  </ActionModal>\n);"}},"dependencies":{"antd":{"version":"4.18.8","css":"antd/dist/antd.css"},"react":{"version":">=16.9.0"},"dumi-app":{"version":"1.0.0"},"react-dom":{"version":">=16.9.0"}},"componentName":"ActionModal","identifier":"ActionModal-demo"},
  },
};
