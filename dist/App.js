"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LargeDesktop = exports.SmallDesktop = exports.Desktop = exports.MobileAndTablet = exports.Tablet = exports.Mobile = exports.ResponsiveComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveComponent = function (_Component) {
    _inherits(ResponsiveComponent, _Component);

    function ResponsiveComponent(props) {
        _classCallCheck(this, ResponsiveComponent);

        var _this = _possibleConstructorReturn(this, (ResponsiveComponent.__proto__ || Object.getPrototypeOf(ResponsiveComponent)).call(this, props));

        _this.state = {
            display: _this.breakpointActive(window.innerWidth)
        };
        _this.breakpointActive = _this.breakpointActive.bind(_this);
        _this.updateDimensions = _this.updateDimensions.bind(_this);
        return _this;
    }

    _createClass(ResponsiveComponent, [{
        key: "breakpointActive",
        value: function breakpointActive(width) {
            if (!this.props.min && !this.props.max) return true;else if (!this.props.min) return width < this.props.max;else if (!this.props.max) return width >= this.props.min;else return width >= this.props.min && width < this.props.max;
        }
    }, {
        key: "updateDimensions",
        value: function updateDimensions() {
            if (this.state.display != this.breakpointActive(window.innerWidth)) this.setState({ display: this.breakpointActive(window.innerWidth) });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            window.addEventListener("resize", this.updateDimensions);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.updateDimensions);
        }
    }, {
        key: "render",
        value: function render() {
            return this.state.display ? _react2.default.createElement(
                "div",
                null,
                this.props.children
            ) : _react2.default.createElement("div", null);
        }
    }]);

    return ResponsiveComponent;
}(_react.Component);

function Mobile(props) {
    return _react2.default.createElement(
        ResponsiveComponent,
        { min: Number.MIN_VALUE, max: 768 },
        props.children
    );
}
function Tablet(props) {
    return _react2.default.createElement(
        ResponsiveComponent,
        { min: 768, max: 992 },
        props.children
    );
}
function MobileAndTablet(props) {
    return _react2.default.createElement(
        ResponsiveComponent,
        { max: 992 },
        props.children
    );
}
function Desktop(props) {
    return _react2.default.createElement(
        ResponsiveComponent,
        { min: 992 },
        props.children
    );
}
function SmallDesktop(props) {
    return _react2.default.createElement(
        ResponsiveComponent,
        { min: 992, max: 1200 },
        props.children
    );
}
function LargeDesktop(props) {
    return _react2.default.createElement(
        ResponsiveComponent,
        { min: 1200 },
        props.children
    );
}

exports.ResponsiveComponent = ResponsiveComponent;
exports.Mobile = Mobile;
exports.Tablet = Tablet;
exports.MobileAndTablet = MobileAndTablet;
exports.Desktop = Desktop;
exports.SmallDesktop = SmallDesktop;
exports.LargeDesktop = LargeDesktop;