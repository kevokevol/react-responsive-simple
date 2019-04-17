'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LargeDesktop = exports.SmallDesktop = exports.Desktop = exports.MobileAndTablet = exports.Tablet = exports.Mobile = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./App.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Mobile(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden-sm hidden-md hidden-lg' },
        props.children
    );
}
function Tablet(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden-xs hidden-md hidden-lg' },
        props.children
    );
}
function MobileAndTablet(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden-md hidden-lg' },
        props.children
    );
}
function Desktop(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden-xs hidden-sm' },
        props.children
    );
}
function SmallDesktop(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden-xs hidden-sm hidden-lg' },
        props.children
    );
}
function LargeDesktop(props) {
    return _react2.default.createElement(
        'div',
        { className: 'hidden-xs hidden-sm hidden-md' },
        props.children
    );
}

exports.Mobile = Mobile;
exports.Tablet = Tablet;
exports.MobileAndTablet = MobileAndTablet;
exports.Desktop = Desktop;
exports.SmallDesktop = SmallDesktop;
exports.LargeDesktop = LargeDesktop;