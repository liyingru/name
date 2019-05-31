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
            flag: Boolean
        }, _this.data = {}, _this.components = {}, _this.methods = {
            close: function close() {
                this.$emit('myClose');
            },
            gotoDaily: function gotoDaily() {
                _wepy2.default.navigateTo({
                    url: './daily'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwicHJvcHMiLCJmbGFnIiwiQm9vbGVhbiIsImRhdGEiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImNsb3NlIiwiJGVtaXQiLCJnb3RvRGFpbHkiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ0pDLGtCQUFNQztBQURGLFMsUUFJUkMsSSxHQUFPLEUsUUFHUEMsVSxHQUFhLEUsUUFFYkMsTyxHQUFVO0FBQ05DLGlCQURNLG1CQUNFO0FBQ0oscUJBQUtDLEtBQUwsQ0FBVyxTQUFYO0FBQ0gsYUFISztBQUlOQyxxQkFKTSx1QkFJTTtBQUNSQywrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx5QkFBSztBQURPLGlCQUFoQjtBQUdIO0FBUkssUyxRQVdWQyxNLEdBQVMsRSxRQUVUQyxLLEdBQVEsRSxRQUVSQyxRLEdBQVcsRTs7Ozs7aUNBRUYsQ0FBRzs7O2lDQUVILENBQUc7Ozs7RUE3QnVCTCxlQUFLTSxTOztrQkFBckJoQixPIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgICBmbGFnOiBCb29sZWFuXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdteUNsb3NlJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvdG9EYWlseSgpIHtcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4vZGFpbHknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuXHJcbiAgICB3YXRjaCA9IHt9O1xyXG5cclxuICAgIGNvbXB1dGVkID0ge307XHJcblxyXG4gICAgb25Mb2FkKCkgeyB9O1xyXG5cclxuICAgIG9uU2hvdygpIHsgfTtcclxuICB9XHJcbiJdfQ==