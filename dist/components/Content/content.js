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
            weekData: Object
        }, _this.data = {}, _this.components = {}, _this.methods = {
            gotoDetail: function gotoDetail(itemData) {
                _wepy2.default.navigateTo({
                    url: '../pages/detail?itemData=' + JSON.stringify(itemData)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwid2Vla0RhdGEiLCJPYmplY3QiLCJkYXRhIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJnb3RvRGV0YWlsIiwiaXRlbURhdGEiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNKQyxzQkFBVUM7QUFETixTLFFBSVJDLEksR0FBTyxFLFFBRVBDLFUsR0FBYSxFLFFBRWJDLE8sR0FBVTtBQUNOQyxzQkFETSxzQkFDS0MsUUFETCxFQUNlO0FBQ2pCQywrQkFBS0MsVUFBTCxDQUFnQjtBQUNaQyx5QkFBSyw4QkFBOEJDLEtBQUtDLFNBQUwsQ0FBZUwsUUFBZjtBQUR2QixpQkFBaEI7QUFHSDtBQUxLLFMsUUFRVk0sTSxHQUFTLEUsUUFFVEMsSyxHQUFRLEUsUUFFUkMsUSxHQUFXLEU7Ozs7O2lDQUVGLENBQUc7OztpQ0FFSCxDQUFHOzs7O0VBekJ1QlAsZUFBS1EsUzs7a0JBQXJCakIsTyIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIHdlZWtEYXRhOiBPYmplY3RcclxuICAgIH07XHJcblxyXG4gICAgZGF0YSA9IHt9O1xyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIGdvdG9EZXRhaWwoaXRlbURhdGEpIHtcclxuICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2RldGFpbD9pdGVtRGF0YT0nICsgSlNPTi5zdHJpbmdpZnkoaXRlbURhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuXHJcbiAgICB3YXRjaCA9IHt9O1xyXG5cclxuICAgIGNvbXB1dGVkID0ge307XHJcblxyXG4gICAgb25Mb2FkKCkgeyB9O1xyXG5cclxuICAgIG9uU2hvdygpIHsgfTtcclxuICB9XHJcbiJdfQ==