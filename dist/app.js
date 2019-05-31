'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/remark', 'pages/video', 'pages/mine', 'pages/Carsoul', 'pages/detail', 'pages/search', 'pages/classify', 'pages/daily'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true
      },
      tabBar: {
        list: [{
          pagePath: 'pages/index',
          text: '首页',
          iconPath: 'assets/image/home.png',
          selectedIconPath: 'assets/image/homeSelected.png'
        }, {
          pagePath: 'pages/remark',
          text: '影评',
          iconPath: 'assets/image/remark.png',
          selectedIconPath: 'assets/image/remarkSelected.png'
        }, {
          pagePath: 'pages/video',
          text: '视频',
          iconPath: 'assets/image/videoSelected.png',
          selectedIconPath: 'assets/image/video.png'
        }, {
          pagePath: 'pages/mine',
          text: '我的',
          iconPath: 'assets/image/mine.png',
          selectedIconPath: 'assets/image/mineSelected.png'
        }]
      }
    };
    _this.globalData = {
      scroll_height: 0,
      cardsList: []
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsInRhYkJhciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJnbG9iYWxEYXRhIiwic2Nyb2xsX2hlaWdodCIsImNhcmRzTGlzdCIsInVzZSIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7Ozs7QUF5REUsc0JBQWU7QUFBQTs7QUFBQTs7QUFBQSxVQXREZkMsTUFzRGUsR0F0RE47QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxjQUZLLEVBR0wsYUFISyxFQUlMLFlBSkssRUFLTCxlQUxLLEVBTUwsY0FOSyxFQU9MLGNBUEssRUFRTCxnQkFSSyxFQVNMLGFBVEssQ0FEQTtBQVlQQyxjQUFRO0FBQ05DLDZCQUFxQixNQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCLE9BSmxCO0FBS05DLCtCQUF1QjtBQUxqQixPQVpEO0FBbUJQQyxjQUFRO0FBQ05DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSxhQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsdUJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBREksRUFPSjtBQUNFSCxvQkFBVSxjQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUseUJBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBUEksRUFhSjtBQUNFSCxvQkFBVSxhQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsZ0NBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBYkksRUFtQko7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLHVCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQW5CSTtBQURBO0FBbkJELEtBc0RNO0FBQUEsVUFMZkMsVUFLZSxHQUxGO0FBQ1hDLHFCQUFlLENBREo7QUFFWEMsaUJBQVc7QUFGQSxLQUtFOztBQUViLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFIYTtBQUlkOzs7OytCQUVVLENBRVY7Ozs7RUEvRDBCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxuc2V0U3RvcmUoc3RvcmUpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvcmVtYXJrJyxcbiAgICAgICdwYWdlcy92aWRlbycsXG4gICAgICAncGFnZXMvbWluZScsXG4gICAgICAncGFnZXMvQ2Fyc291bCcsXG4gICAgICAncGFnZXMvZGV0YWlsJyxcbiAgICAgICdwYWdlcy9zZWFyY2gnLFxuICAgICAgJ3BhZ2VzL2NsYXNzaWZ5JyxcbiAgICAgICdwYWdlcy9kYWlseSdcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ltYWdlL2hvbWUucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnYXNzZXRzL2ltYWdlL2hvbWVTZWxlY3RlZC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3JlbWFyaycsXG4gICAgICAgICAgdGV4dDogJ+W9seivhCcsXG4gICAgICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2UvcmVtYXJrLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2Fzc2V0cy9pbWFnZS9yZW1hcmtTZWxlY3RlZC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3ZpZGVvJyxcbiAgICAgICAgICB0ZXh0OiAn6KeG6aKRJyxcbiAgICAgICAgICBpY29uUGF0aDogJ2Fzc2V0cy9pbWFnZS92aWRlb1NlbGVjdGVkLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2Fzc2V0cy9pbWFnZS92aWRlby5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxuICAgICAgICAgIHRleHQ6ICfmiJHnmoQnLFxuICAgICAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ltYWdlL21pbmUucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnYXNzZXRzL2ltYWdlL21pbmVTZWxlY3RlZC5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHNjcm9sbF9oZWlnaHQ6IDAsXG4gICAgY2FyZHNMaXN0OiBbXVxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICBcbiAgfVxufVxuIl19