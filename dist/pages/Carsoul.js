'use strict';

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

var Exp = function (_wepy$page) {
  _inherits(Exp, _wepy$page);

  function Exp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Exp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Exp.__proto__ || Object.getPrototypeOf(Exp)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "历史日签"
    }, _this.data = {
      cardsList: [],
      cur: 0,
      tip: ''
    }, _this.components = {}, _this.methods = {
      // 下载图片
      downImg: function downImg() {
        var _this2 = this;

        var imgUrl = this.cardsList[this.cur].downloadImageUrl;

        var downloadTask = wx.downloadFile({
          url: imgUrl,
          success: function success(res) {
            if (res.statusCode === 200) {
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function success(res) {
                  wx.showToast({
                    title: '保存图片成功……'
                  });
                },
                faile: function faile() {
                  wx.showToast({
                    title: '保存图片失败……'
                  });
                }
              });
            }
          }
        });
        // // 进度条
        downloadTask.onProgressUpdate(function (res) {
          if (res.progress === 100) {
            _this2.tip = '';
            _this2.$apply();
          } else {
            _this2.tip = res.progress + '%';
            _this2.$apply();
          }
        });
      }
    }, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Exp, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.cardsList = this.$parent.globalData.cardsList;
      this.cur = options.cur;
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Exp;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Exp , 'pages/Carsoul'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcnNvdWwuanMiXSwibmFtZXMiOlsiRXhwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjYXJkc0xpc3QiLCJjdXIiLCJ0aXAiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImRvd25JbWciLCJpbWdVcmwiLCJkb3dubG9hZEltYWdlVXJsIiwiZG93bmxvYWRUYXNrIiwid3giLCJkb3dubG9hZEZpbGUiLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzQ29kZSIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJmaWxlUGF0aCIsInRlbXBGaWxlUGF0aCIsInNob3dUb2FzdCIsInRpdGxlIiwiZmFpbGUiLCJvblByb2dyZXNzVXBkYXRlIiwicHJvZ3Jlc3MiLCIkYXBwbHkiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwib3B0aW9ucyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLFdBQUssQ0FGQTtBQUdMQyxXQUFLO0FBSEEsSyxRQU1QQyxVLEdBQWEsRSxRQUViQyxPLEdBQVU7QUFDUjtBQUNBQyxhQUZRLHFCQUVFO0FBQUE7O0FBQ1IsWUFBSUMsU0FBUyxLQUFLTixTQUFMLENBQWUsS0FBS0MsR0FBcEIsRUFBeUJNLGdCQUF0Qzs7QUFFQSxZQUFNQyxlQUFlQyxHQUFHQyxZQUFILENBQWdCO0FBQ25DQyxlQUFLTCxNQUQ4QjtBQUVuQ00saUJBRm1DLG1CQUUzQkMsR0FGMkIsRUFFdEI7QUFDWCxnQkFBSUEsSUFBSUMsVUFBSixLQUFtQixHQUF2QixFQUE0QjtBQUMxQkwsaUJBQUdNLHNCQUFILENBQTBCO0FBQ3hCQywwQkFBVUgsSUFBSUksWUFEVTtBQUV4QkwsdUJBRndCLG1CQUVoQkMsR0FGZ0IsRUFFWDtBQUNYSixxQkFBR1MsU0FBSCxDQUFhO0FBQ1hDLDJCQUFPO0FBREksbUJBQWI7QUFHRCxpQkFOdUI7QUFPeEJDLHFCQVB3QixtQkFPaEI7QUFDTlgscUJBQUdTLFNBQUgsQ0FBYTtBQUNYQywyQkFBTztBQURJLG1CQUFiO0FBR0Q7QUFYdUIsZUFBMUI7QUFhRDtBQUNGO0FBbEJrQyxTQUFoQixDQUFyQjtBQW9CQTtBQUNBWCxxQkFBYWEsZ0JBQWIsQ0FBOEIsVUFBQ1IsR0FBRCxFQUFTO0FBQ3JDLGNBQUlBLElBQUlTLFFBQUosS0FBaUIsR0FBckIsRUFBMEI7QUFDeEIsbUJBQUtwQixHQUFMLEdBQVcsRUFBWDtBQUNBLG1CQUFLcUIsTUFBTDtBQUNELFdBSEQsTUFHTztBQUNMLG1CQUFLckIsR0FBTCxHQUFXVyxJQUFJUyxRQUFKLEdBQWUsR0FBMUI7QUFDQSxtQkFBS0MsTUFBTDtBQUNEO0FBQ0YsU0FSRDtBQVVEO0FBcENPLEssUUF1Q1ZDLE0sR0FBUyxFLFFBRVRDLEssR0FBUSxFLFFBRVJDLFEsR0FBVyxFOzs7OzsyQkFFSkMsTyxFQUFTO0FBQ1osV0FBSzNCLFNBQUwsR0FBaUIsS0FBSzRCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QjdCLFNBQXpDO0FBQ0EsV0FBS0MsR0FBTCxHQUFXMEIsUUFBUTFCLEdBQW5CO0FBQ0g7Ozs2QkFFUSxDQUFHOzs7O0VBL0RtQjZCLGVBQUtDLEk7O2tCQUFqQm5DLEciLCJmaWxlIjoiQ2Fyc291bC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5Y6G5Y+y5pel562+XCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGNhcmRzTGlzdDogW10sXHJcbiAgICAgIGN1cjogMCxcclxuICAgICAgdGlwOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g5LiL6L295Zu+54mHXHJcbiAgICAgIGRvd25JbWcoKSB7XHJcbiAgICAgICAgbGV0IGltZ1VybCA9IHRoaXMuY2FyZHNMaXN0W3RoaXMuY3VyXS5kb3dubG9hZEltYWdlVXJsO1xyXG5cclxuICAgICAgICBjb25zdCBkb3dubG9hZFRhc2sgPSB3eC5kb3dubG9hZEZpbGUoe1xyXG4gICAgICAgICAgdXJsOiBpbWdVcmwsXHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5Zu+54mH5oiQ5Yqf4oCm4oCmJ1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWxlKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5Zu+54mH5aSx6LSl4oCm4oCmJ1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIC8vIOi/m+W6puadoVxyXG4gICAgICAgIGRvd25sb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMucHJvZ3Jlc3MgPT09IDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpcCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aXAgPSByZXMucHJvZ3Jlc3MgKyAnJSc7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcblxyXG4gICAgd2F0Y2ggPSB7fTtcclxuXHJcbiAgICBjb21wdXRlZCA9IHt9O1xyXG5cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc0xpc3QgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5jYXJkc0xpc3Q7XHJcbiAgICAgICAgdGhpcy5jdXIgPSBvcHRpb25zLmN1cjtcclxuICAgIH07XHJcblxyXG4gICAgb25TaG93KCkgeyB9O1xyXG4gIH1cclxuIl19