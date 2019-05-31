'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_wepy$component) {
    _inherits(Example, _wepy$component);

    function Example() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Example);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            cardsList: Array
        }, _this.data = {}, _this.components = {}, _this.methods = {
            gotoCarsoul: function gotoCarsoul(cardsList, key) {
                this.$parent.$parent.globalData.cardsList = cardsList;
                _wepy2.default.navigateTo({
                    url: '../pages/Carsoul?cur=' + key
                });
            }
        }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Example, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Example;
}(_wepy2.default.component);

exports.default = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJwcm9wcyIsImNhcmRzTGlzdCIsIkFycmF5IiwiZGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZ290b0NhcnNvdWwiLCJrZXkiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDSkMsdUJBQVdDO0FBRFAsUyxRQUlSQyxJLEdBQU8sRSxRQUVQQyxVLEdBQWEsRSxRQUViQyxPLEdBQVU7QUFDTkMsdUJBRE0sdUJBQ01MLFNBRE4sRUFDaUJNLEdBRGpCLEVBQ3NCO0FBQ3hCLHFCQUFLQyxPQUFMLENBQWFBLE9BQWIsQ0FBcUJDLFVBQXJCLENBQWdDUixTQUFoQyxHQUE0Q0EsU0FBNUM7QUFDQVMsK0JBQUtDLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUssMEJBQTBCTDtBQURuQixpQkFBaEI7QUFHSDtBQU5LLFMsUUFTVk0sTSxHQUFTLEUsUUFFVEMsSyxHQUFRLEUsUUFFUkMsUSxHQUFXLEU7Ozs7O2lDQUVGLENBRVI7OztpQ0FJUSxDQUFHOzs7O0VBOUJ1QkwsZUFBS00sUzs7a0JBQXJCakIsTyIsImZpbGUiOiJjYXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgICBjYXJkc0xpc3Q6IEFycmF5XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7fTtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBnb3RvQ2Fyc291bChjYXJkc0xpc3QsIGtleSkge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLmNhcmRzTGlzdCA9IGNhcmRzTGlzdDtcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL3BhZ2VzL0NhcnNvdWw/Y3VyPScgKyBrZXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHt9O1xyXG5cclxuICAgIHdhdGNoID0ge307XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7fTtcclxuXHJcbiAgICBvbkxvYWQoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgb25TaG93KCkgeyB9O1xyXG4gIH1cclxuIl19