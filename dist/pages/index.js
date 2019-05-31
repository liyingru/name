'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _dialog = require('./../components/Dialog/dialog.js');

var _dialog2 = _interopRequireDefault(_dialog);

var _content = require('./../components/Content/content.js');

var _content2 = _interopRequireDefault(_content);

var _swiper = require('./../components/Swiper/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_wepy$page) {
  _inherits(Example, _wepy$page);

  function Example() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "毒舌Pro"
    }, _this.data = {
      swiperData: [],
      choiceness: [],
      weekData: [],
      recentData: [],
      play: [],
      scroll_height: 0,
      dialogShow: true
    }, _this.$repeat = {}, _this.$props = { "Swiper": { "xmlns:v-bind": "", "v-bind:swiperData.sync": "swiperData" }, "Content1": { "v-bind:weekData.sync": "weekData" }, "Content2": { "v-bind:weekData.sync": "recentData" }, "Content3": { "v-bind:weekData.sync": "play" }, "Dialog": { "v-bind:flag.sync": "dialogShow" } }, _this.$events = {}, _this.components = {
      Swiper: _swiper2.default,
      Content1: _content2.default,
      Content2: _content2.default,
      Content3: _content2.default,
      Dialog: _dialog2.default
    }, _this.methods = {
      gotoSearch: function gotoSearch() {
        _wepy2.default.navigateTo({
          url: './search'
        });
      },
      gotoClassify: function gotoClassify() {
        _wepy2.default.navigateTo({
          url: './classify'
        });
      },
      con_dialog: function con_dialog() {
        this.dialogShow = false;
      }
    }, _this.events = {
      myClose: function myClose() {
        this.dialogShow = true;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      _wepy2.default.request({
        url: 'https://dswxapp.dushemovie.com/dsmovieapi/ssl2/weixin_movie/list_weixin_banner/2',
        method: 'POST',
        data: {
          position: 1,
          userId: 5996621,
          sign: '20b935453c4666cccfa020dcefc60e29'
        }
      }).then(function (res) {
        _this2.swiperData = res.data.discoveryBannerList;
        _this2.$apply();
      });

      _wepy2.default.request({
        url: 'https://cdnapp.dushemovie.com/dsmovieapi/ssl2/video/list_videos/1?count=4&startIndex=0'
      }).then(function (res) {
        _this2.choiceness = res.data.videoDataList;
        _this2.$apply();
      });

      _wepy2.default.request({
        url: 'https://cdnapp.dushemovie.com/dsmovieapi/ssl2/weixin_movie/list_daily_recmd_movie_sheet/2?count=10&movieCount=5&position=2&startIndex=0'
      }).then(function (res) {
        _this2.weekData = res.data.movieSheetList[1];
        _this2.recentData = res.data.movieSheetList[2];
        _this2.play = res.data.movieSheetList[3];
        _this2.$apply();
      });

      var windowHeight = wx.getSystemInfoSync().windowHeight; // 屏幕的高度
      var windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度

      this.scroll_height = windowHeight * 750 / windowWidth - 50 - 30;
    }
  }]);

  return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInN3aXBlckRhdGEiLCJjaG9pY2VuZXNzIiwid2Vla0RhdGEiLCJyZWNlbnREYXRhIiwicGxheSIsInNjcm9sbF9oZWlnaHQiLCJkaWFsb2dTaG93IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU3dpcGVyIiwiQ29udGVudDEiLCJDb250ZW50IiwiQ29udGVudDIiLCJDb250ZW50MyIsIkRpYWxvZyIsIm1ldGhvZHMiLCJnb3RvU2VhcmNoIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnb3RvQ2xhc3NpZnkiLCJjb25fZGlhbG9nIiwiZXZlbnRzIiwibXlDbG9zZSIsInJlcXVlc3QiLCJtZXRob2QiLCJwb3NpdGlvbiIsInVzZXJJZCIsInNpZ24iLCJ0aGVuIiwicmVzIiwiZGlzY292ZXJ5QmFubmVyTGlzdCIsIiRhcHBseSIsInZpZGVvRGF0YUxpc3QiLCJtb3ZpZVNoZWV0TGlzdCIsIndpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxrQkFBWSxFQURQO0FBRUxDLGtCQUFZLEVBRlA7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxrQkFBWSxFQUpQO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxxQkFBZSxDQU5WO0FBT0xDLGtCQUFZO0FBUFAsSyxRQVVSQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLFlBQTVDLEVBQVYsRUFBb0UsWUFBVyxFQUFDLHdCQUF1QixVQUF4QixFQUEvRSxFQUFtSCxZQUFXLEVBQUMsd0JBQXVCLFlBQXhCLEVBQTlILEVBQW9LLFlBQVcsRUFBQyx3QkFBdUIsTUFBeEIsRUFBL0ssRUFBK00sVUFBUyxFQUFDLG9CQUFtQixZQUFwQixFQUF4TixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyw4QkFEUTtBQUVSQyxnQkFBVUMsaUJBRkY7QUFHUkMsZ0JBQVVELGlCQUhGO0FBSVJFLGdCQUFVRixpQkFKRjtBQUtSRztBQUxRLEssUUFRVkMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNLO0FBQ1hDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsa0JBTlEsMEJBTU87QUFDYkgsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FWTztBQVdSRSxnQkFYUSx3QkFXSztBQUNYLGFBQUtqQixVQUFMLEdBQWtCLEtBQWxCO0FBQ0Q7QUFiTyxLLFFBZ0JWa0IsTSxHQUFTO0FBQ1BDLGFBRE8scUJBQ0c7QUFDUixhQUFLbkIsVUFBTCxHQUFrQixJQUFsQjtBQUNEO0FBSE0sSzs7Ozs7NkJBTUE7QUFBQTs7QUFDUGEscUJBQUtPLE9BQUwsQ0FBYTtBQUNYTCxhQUFLLGtGQURNO0FBRVhNLGdCQUFRLE1BRkc7QUFHWDVCLGNBQU07QUFDQTZCLG9CQUFVLENBRFY7QUFFQUMsa0JBQVEsT0FGUjtBQUdBQyxnQkFBTTtBQUhOO0FBSEssT0FBYixFQVFHQyxJQVJILENBUVEsZUFBTztBQUNiLGVBQUsvQixVQUFMLEdBQWtCZ0MsSUFBSWpDLElBQUosQ0FBU2tDLG1CQUEzQjtBQUNBLGVBQUtDLE1BQUw7QUFDRCxPQVhEOztBQWNBZixxQkFBS08sT0FBTCxDQUFhO0FBQ1hMLGFBQUs7QUFETSxPQUFiLEVBRUdVLElBRkgsQ0FFUSxlQUFPO0FBQ2IsZUFBSzlCLFVBQUwsR0FBa0IrQixJQUFJakMsSUFBSixDQUFTb0MsYUFBM0I7QUFDQSxlQUFLRCxNQUFMO0FBQ0QsT0FMRDs7QUFRQWYscUJBQUtPLE9BQUwsQ0FBYTtBQUNYTCxhQUFLO0FBRE0sT0FBYixFQUVHVSxJQUZILENBRVEsZUFBTztBQUNiLGVBQUs3QixRQUFMLEdBQWdCOEIsSUFBSWpDLElBQUosQ0FBU3FDLGNBQVQsQ0FBd0IsQ0FBeEIsQ0FBaEI7QUFDQSxlQUFLakMsVUFBTCxHQUFrQjZCLElBQUlqQyxJQUFKLENBQVNxQyxjQUFULENBQXdCLENBQXhCLENBQWxCO0FBQ0EsZUFBS2hDLElBQUwsR0FBWTRCLElBQUlqQyxJQUFKLENBQVNxQyxjQUFULENBQXdCLENBQXhCLENBQVo7QUFDQSxlQUFLRixNQUFMO0FBQ0QsT0FQRDs7QUFVQSxVQUFJRyxlQUFlQyxHQUFHQyxpQkFBSCxHQUF1QkYsWUFBMUMsQ0FqQ08sQ0FpQ2dEO0FBQ3ZELFVBQUlHLGNBQWNGLEdBQUdDLGlCQUFILEdBQXVCQyxXQUF6QyxDQWxDTyxDQWtDOEM7O0FBRXJELFdBQUtuQyxhQUFMLEdBQXFCZ0MsZUFBZSxHQUFmLEdBQXFCRyxXQUFyQixHQUFtQyxFQUFuQyxHQUF3QyxFQUE3RDtBQUVBOzs7O0VBdEZpQ3JCLGVBQUtzQixJOztrQkFBckI3QyxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuXG4gIGltcG9ydCBEaWFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9EaWFsb2cvZGlhbG9nJztcbiAgaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50L2NvbnRlbnQnO1xuICBpbXBvcnQgU3dpcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3dpcGVyL3N3aXBlcic7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLmr5LoiIxQcm9cIixcbiAgICB9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIHN3aXBlckRhdGE6IFtdLFxuICAgICAgY2hvaWNlbmVzczogW10sXG4gICAgICB3ZWVrRGF0YTogW10sXG4gICAgICByZWNlbnREYXRhOiBbXSxcbiAgICAgIHBsYXk6IFtdLFxuICAgICAgc2Nyb2xsX2hlaWdodDogMCxcbiAgICAgIGRpYWxvZ1Nob3c6IHRydWVcbiAgICB9O1xuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN3aXBlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3dpcGVyRGF0YS5zeW5jXCI6XCJzd2lwZXJEYXRhXCJ9LFwiQ29udGVudDFcIjp7XCJ2LWJpbmQ6d2Vla0RhdGEuc3luY1wiOlwid2Vla0RhdGFcIn0sXCJDb250ZW50MlwiOntcInYtYmluZDp3ZWVrRGF0YS5zeW5jXCI6XCJyZWNlbnREYXRhXCJ9LFwiQ29udGVudDNcIjp7XCJ2LWJpbmQ6d2Vla0RhdGEuc3luY1wiOlwicGxheVwifSxcIkRpYWxvZ1wiOntcInYtYmluZDpmbGFnLnN5bmNcIjpcImRpYWxvZ1Nob3dcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU3dpcGVyLFxuICAgICAgQ29udGVudDE6IENvbnRlbnQsXG4gICAgICBDb250ZW50MjogQ29udGVudCxcbiAgICAgIENvbnRlbnQzOiBDb250ZW50LFxuICAgICAgRGlhbG9nXG4gICAgfTtcblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBnb3RvU2VhcmNoKCkge1xuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4vc2VhcmNoJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvdG9DbGFzc2lmeSgpIHtcbiAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuL2NsYXNzaWZ5J1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGNvbl9kaWFsb2coKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nU2hvdyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBldmVudHMgPSB7XG4gICAgICBteUNsb3NlKCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1Nob3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2Rzd3hhcHAuZHVzaGVtb3ZpZS5jb20vZHNtb3ZpZWFwaS9zc2wyL3dlaXhpbl9tb3ZpZS9saXN0X3dlaXhpbl9iYW5uZXIvMicsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAxLFxuICAgICAgICAgICAgICB1c2VySWQ6IDU5OTY2MjEsXG4gICAgICAgICAgICAgIHNpZ246ICcyMGI5MzU0NTNjNDY2NmNjY2ZhMDIwZGNlZmM2MGUyOSdcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnN3aXBlckRhdGEgPSByZXMuZGF0YS5kaXNjb3ZlcnlCYW5uZXJMaXN0O1xuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcblxuXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2NkbmFwcC5kdXNoZW1vdmllLmNvbS9kc21vdmllYXBpL3NzbDIvdmlkZW8vbGlzdF92aWRlb3MvMT9jb3VudD00JnN0YXJ0SW5kZXg9MCdcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5jaG9pY2VuZXNzID0gcmVzLmRhdGEudmlkZW9EYXRhTGlzdDtcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0pXG5cblxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jZG5hcHAuZHVzaGVtb3ZpZS5jb20vZHNtb3ZpZWFwaS9zc2wyL3dlaXhpbl9tb3ZpZS9saXN0X2RhaWx5X3JlY21kX21vdmllX3NoZWV0LzI/Y291bnQ9MTAmbW92aWVDb3VudD01JnBvc2l0aW9uPTImc3RhcnRJbmRleD0wJ1xuICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLndlZWtEYXRhID0gcmVzLmRhdGEubW92aWVTaGVldExpc3RbMV07XG4gICAgICAgIHRoaXMucmVjZW50RGF0YSA9IHJlcy5kYXRhLm1vdmllU2hlZXRMaXN0WzJdO1xuICAgICAgICB0aGlzLnBsYXkgPSByZXMuZGF0YS5tb3ZpZVNoZWV0TGlzdFszXVxuICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgfSlcblxuICAgICAgXG4gICAgICBsZXQgd2luZG93SGVpZ2h0ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQgLy8g5bGP5bmV55qE6auY5bqmXG4gICAgICBsZXQgd2luZG93V2lkdGggPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8vIOWxj+W5leeahOWuveW6plxuICAgICAgXG4gICAgICB0aGlzLnNjcm9sbF9oZWlnaHQgPSB3aW5kb3dIZWlnaHQgKiA3NTAgLyB3aW5kb3dXaWR0aCAtIDUwIC0gMzA7XG5cbiAgICAgfTtcbiAgfVxuIl19