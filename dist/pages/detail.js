"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emple = function (_wepy$page) {
    _inherits(Emple, _wepy$page);

    function Emple() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Emple);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Emple.__proto__ || Object.getPrototypeOf(Emple)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: "详情页"
        }, _this.data = {
            detailData: {}
        }, _this.components = {}, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Emple, [{
        key: "onLoad",
        value: function onLoad(options) {
            var itemData = JSON.parse(options.itemData);
            wx.setNavigationBarTitle({
                title: itemData.movieInfo.title
            });
            this.detailData = itemData;
        }
    }, {
        key: "onShow",
        value: function onShow() {}
    }]);

    return Emple;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Emple , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJFbXBsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiZGV0YWlsRGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsIm9wdGlvbnMiLCJpdGVtRGF0YSIsIkpTT04iLCJwYXJzZSIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJtb3ZpZUluZm8iLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCO0FBRGpCLFMsUUFJVEMsSSxHQUFPO0FBQ0xDLHdCQUFZO0FBRFAsUyxRQUlQQyxVLEdBQWEsRSxRQUViQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRSxRQUVUQyxLLEdBQVEsRSxRQUVSQyxRLEdBQVcsRTs7Ozs7K0JBRUpDLE8sRUFBUztBQUNaLGdCQUFJQyxXQUFXQyxLQUFLQyxLQUFMLENBQVdILFFBQVFDLFFBQW5CLENBQWY7QUFDQUcsZUFBR0MscUJBQUgsQ0FBeUI7QUFDckJDLHVCQUFPTCxTQUFTTSxTQUFULENBQW1CRDtBQURMLGFBQXpCO0FBR0EsaUJBQUtaLFVBQUwsR0FBa0JPLFFBQWxCO0FBQ0Y7OztpQ0FFTyxDQUFHOzs7O0VBM0JxQk8sZUFBS0MsSTs7a0JBQW5CbkIsSyIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBFbXBsZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi6K+m5oOF6aG1XCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGRldGFpbERhdGE6IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuXHJcbiAgICBtZXRob2RzID0ge307XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcblxyXG4gICAgd2F0Y2ggPSB7fTtcclxuXHJcbiAgICBjb21wdXRlZCA9IHt9O1xyXG5cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1EYXRhID0gSlNPTi5wYXJzZShvcHRpb25zLml0ZW1EYXRhKTtcclxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogaXRlbURhdGEubW92aWVJbmZvLnRpdGxlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmRldGFpbERhdGEgPSBpdGVtRGF0YTtcclxuICAgICB9O1xyXG5cclxuICAgIG9uU2hvdygpIHsgfTtcclxuICB9XHJcbiJdfQ==