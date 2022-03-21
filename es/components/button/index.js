import "antd/es/button/style";
import _Button from "antd/es/button";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: fafa
 * @Date: 2022-03-18 09:48:52
 * @LastEditors: fafa
 * @LastEditTime: 2022-03-18 10:29:03
 * @Description:
 */
import React from 'react';
import classNames from 'classnames';
import './index.less';

var Button = function Button(props) {
  var danger = props.danger,
      loading = props.loading,
      style = props.style,
      children = props.children,
      _props$large = props.large,
      large = _props$large === void 0 ? false : _props$large,
      className = props.className,
      onClick = props.onClick,
      _props$type = props.type,
      type = _props$type === void 0 ? 'primary' : _props$type,
      icon = props.icon,
      _props$block = props.block,
      block = _props$block === void 0 ? false : _props$block,
      disabled = props.disabled,
      htmlType = props.htmlType,
      color = props.color;
  var classes = classNames('fish-btn', className, {
    'fish-btn-large': large,
    'fish-btn-block': block,
    'fish-btn-link': type === 'link'
  });
  var displayStyle = block ? 'block' : 'inline-block';
  var newTpye = type;
  var isDanger = danger;

  if (color) {
    switch (color) {
      case 'blue':
        newTpye = 'primary';
        break;

      case 'red':
        isDanger = true;
        break;

      case 'white':
        newTpye = 'default';
        break;

      case 'yellow':
        classes = classNames(classes, 'fish-yellow-btn');
        break;

      case 'green':
        classes = classNames(classes, 'fish-green-btn');
        break;

      default:
        break;
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: _objectSpread({
      display: displayStyle
    }, style)
  }, /*#__PURE__*/React.createElement(_Button, {
    icon: icon,
    onClick: onClick,
    disabled: disabled,
    type: newTpye,
    block: block,
    htmlType: htmlType,
    danger: isDanger,
    loading: loading
  }, children));
};

export default Button;