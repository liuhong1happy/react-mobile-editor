'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _img = require('../images/img.png');

var _img2 = _interopRequireDefault(_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertImage = function (_Component) {
    _inherits(InsertImage, _Component);

    function InsertImage() {
        _classCallCheck(this, InsertImage);

        return _possibleConstructorReturn(this, (InsertImage.__proto__ || Object.getPrototypeOf(InsertImage)).apply(this, arguments));
    }

    _createClass(InsertImage, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                imgWidth = _props.imgWidth,
                imgHeight = _props.imgHeight,
                sources = _props.sources;

            var images = sources.contact(upload);
            return _react2.default.createElement(
                'div',
                { className: 'insert-image' },
                _react2.default.createElement('img', { src: _img2.default }),
                _react2.default.createElement(
                    'span',
                    null,
                    '\u63D2\u5165\u56FE\u7247'
                )
            );
        }
    }]);

    return InsertImage;
}(_react.Component);

InsertImage.defaultProps = {
    onChange: function onChange(context, type, images) {}
};

InsertImage.protoTypes = {
    onChange: _react.PropTypes.func
};

exports.default = InsertImage;