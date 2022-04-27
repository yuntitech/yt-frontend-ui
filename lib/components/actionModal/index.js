"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ActionModal = /*#__PURE__*/function (_Component) {
  _inherits(ActionModal, _Component);

  var _super = _createSuper(ActionModal);

  function ActionModal(props) {
    var _this;

    _classCallCheck(this, ActionModal);

    _this = _super.call(this, props);

    _this.changeVisible = function (bool) {
      var _this$props = _this.props,
          onVisibleChange = _this$props.onVisibleChange,
          init = _this$props.init;

      _this.setState({
        visible: bool
      }, function () {
        onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(bool);
      }); // 执行初始化条件


      bool && (init === null || init === void 0 ? void 0 : init());
    };

    _this.btnClick = function () {
      var _this$props$btn$onCli = _this.props.btn.onClick,
          onClick = _this$props$btn$onCli === void 0 ? function () {
        return true;
      } : _this$props$btn$onCli;

      try {
        var _this$props$beforeSho, _this$props2, _this$props2$beforeSh;

        onClick === null || onClick === void 0 ? void 0 : onClick();
        ((_this$props$beforeSho = (_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$beforeSh = _this$props2.beforeShow) === null || _this$props2$beforeSh === void 0 ? void 0 : _this$props2$beforeSh.call(_this$props2)) !== null && _this$props$beforeSho !== void 0 ? _this$props$beforeSho : true) && _this.changeVisible(true);
      } catch (err) {
        console.error(err);
      }
    };

    _this.handleOk = function (e) {
      e.preventDefault();
      var onOk = _this.props.modalProps.onOk;

      if (onOk) {
        onOk(function () {
          return _this.changeVisible(false);
        });
      } else {
        _this.changeVisible(false);
      }
    };

    _this.handleCancel = function (e) {
      var onCancel = _this.props.modalProps.onCancel;
      onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);

      _this.changeVisible(false);
    };

    _this.renderInternalButton = function () {
      var btn = _this.props.btn;
      var btnNode = (btn === null || btn === void 0 ? void 0 : btn.title) || btn;
      return btnNode ? /*#__PURE__*/_react.default.createElement(_button.default, {
        type: "primary",
        onClick: _this.btnClick
      }, btnNode) : null;
    };

    _this.renderFooter = function () {
      var footer = _this.props.modalProps.footer;
      var result = {};

      if (footer === null) {
        result.footer = null;
      } else if (footer === undefined) {
        result.footer = undefined;
      } else if (typeof footer === 'function') {
        result.footer = footer(_this.handleCancel, _this.handleOk);
      } else {
        result.footer = footer;
      }

      return result;
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(ActionModal, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          btn = _this$props3.btn,
          children = _this$props3.children,
          modalProps = _this$props3.modalProps,
          _this$props3$style = _this$props3.style,
          style = _this$props3$style === void 0 ? {} : _this$props3$style;
      var visible = this.state.visible;
      return /*#__PURE__*/_react.default.createElement("span", {
        style: _objectSpread({}, style)
      }, btn && btn.$$typeof ? /*#__PURE__*/_react.default.createElement("span", {
        onClick: !btn.props.disabled ? this.btnClick : undefined
      }, btn) : this.renderInternalButton(), /*#__PURE__*/_react.default.createElement(_modal.default, _objectSpread(_objectSpread(_objectSpread({
        visible: visible
      }, modalProps), this.renderFooter()), {}, {
        onOk: this.handleOk,
        onCancel: this.handleCancel
      }), children));
    }
  }]);

  return ActionModal;
}(_react.Component);

var _default = ActionModal;
exports.default = _default;