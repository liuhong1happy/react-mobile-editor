'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ImportImages = require('./ImportImages');

var _ImportImages2 = _interopRequireDefault(_ImportImages);

var _InsertImage = require('./InsertImage');

var _InsertImage2 = _interopRequireDefault(_InsertImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactMobileEditor = function (_Component) {
    _inherits(ReactMobileEditor, _Component);

    function ReactMobileEditor() {
        _classCallCheck(this, ReactMobileEditor);

        return _possibleConstructorReturn(this, (ReactMobileEditor.__proto__ || Object.getPrototypeOf(ReactMobileEditor)).apply(this, arguments));
    }

    _createClass(ReactMobileEditor, [{
        key: 'handleChange',
        value: function handleChange(context, type, value) {
            if (this.props.onChange) {
                this.props.onChange(context, type, value);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                content = _props.content,
                uploadResponseHandler = _props.uploadResponseHandler;


            return _react2.default.createElement(
                'div',
                { className: 'react-mobile-editor' },
                content.map(function (c) {
                    switch (c.type) {
                        case 'text':
                            return _react2.default.createElement('textarea', { value: c.text, onChange: function onChange(e) {
                                    return _this2.handleChange(e, 'text', e.target.value);
                                } });
                        case 'images':
                            return _react2.default.createElement(_ImportImages2.default, { sources: c.sources, uploadResponseHandler: uploadResponseHandler, onChange: function onChange(e) {
                                    return _this2.handleChange(e, 'images', e.sources);
                                } });
                        default:
                            return null;
                    }
                }),
                _react2.default.createElement(_InsertImage2.default, null)
            );
        }
    }]);

    return ReactMobileEditor;
}(_react.Component);

ReactMobileEditor.propTypes = {
    content: _react.PropTypes.array,
    uploadResponseHandler: _react.PropTypes.func
};

ReactMobileEditor.defaultProps = {
    content: [{
        type: 'text',
        text: '请输入内容'
    }, {
        type: 'images',
        sources: []
    }],
    uploadResponseHandler: function uploadResponseHandler(res) {
        return res.status === 'success' ? res.data.src : false;
    }
};

exports.default = ReactMobileEditor;