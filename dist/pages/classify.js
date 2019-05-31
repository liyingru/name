'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _type = require('./../components/Type/type.js');

var _type2 = _interopRequireDefault(_type);

var _list = require('./../components/List/list.js');

var _list2 = _interopRequireDefault(_list);

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
            navigationBarTitleText: "分类"
        }, _this.data = {
            areaList: [],
            featureList: [],
            mediaList: [],
            typeList: [],
            conList: [],
            selected: {
                area: '全部',
                feature: '全部',
                media: '电影',
                type: '全部'
            },
            h: 0,
            count: 20
        }, _this.$repeat = {}, _this.$props = { "Type1": { "xmlns:v-bind": "", "v-bind:allType.sync": "mediaList", "type": "media" }, "Type2": { "v-bind:allType.sync": "areaList", "type": "area" }, "Type3": { "v-bind:allType.sync": "typeList", "type": "type" }, "Type4": { "v-bind:allType.sync": "featureList", "type": "feature" }, "List": { "v-bind:movieList.sync": "conList" } }, _this.$events = {}, _this.components = {
            Type1: _type2.default,
            Type2: _type2.default,
            Type3: _type2.default,
            Type4: _type2.default,
            List: _list2.default
        }, _this.methods = {
            // 上拉加载
            lower: function lower() {
                _wepy2.default.showLoading({
                    title: '正在拼命加载中……'
                });
                this.count += 5;
                this.initData();
                _wepy2.default.hideLoading();
            }
        }, _this.events = {
            // 点击切换电影类型
            mySelected: function mySelected(type) {
                this.selected[type.t] = type.m;
                this.initData();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Example, [{
        key: 'onPullDownRefresh',

        // 下拉刷新
        value: function onPullDownRefresh() {
            wx.showNavigationBarLoading(); //在标题栏显示下拉刷新
            this.count = 20;
            this.initData();
            setTimeout(function () {
                wx.hideNavigationBarLoading(); //完成停止加载
                wx.stopPullDownRefresh(); //停止下拉刷新
            }, 2000);
        }
        // 发起请求

    }, {
        key: 'fetchData',
        value: function fetchData(url) {
            return _wepy2.default.request({
                url: url
            });
        }

        // 请求电影列表

    }, {
        key: 'initData',
        value: function initData() {
            var _this2 = this;

            this.fetchData('https://cdnapp.dushemovie.com/dsmovieapi/ssl2/movie/list_movie_by_type/1?area=' + this.selected['area'] + '&count=' + this.count + '&feature=' + this.selected['feature'] + '&media=' + this.selected['media'] + '&startIndex=0&type=' + this.selected['type']).then(function (res) {
                _this2.conList = res.data.movieDataList;
                _this2.$apply();
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this3 = this;

            // 请求分类
            this.fetchData('https://cdnapp.dushemovie.com/dsmovieapi/ssl2/movie/list_type/1').then(function (res) {
                var _res$data$movieTypeDa = res.data.movieTypeData,
                    typeList = _res$data$movieTypeDa.typeList,
                    featureList = _res$data$movieTypeDa.featureList,
                    mediaList = _res$data$movieTypeDa.mediaList,
                    areaList = _res$data$movieTypeDa.areaList;

                _this3.typeList = typeList;
                _this3.featureList = featureList;
                _this3.mediaList = mediaList;
                _this3.areaList = areaList;
                _this3.$apply();
            });
            // 加载电影列表
            this.initData();

            // 适配所有屏幕的scroll-view高度
            var windowHeight = wx.getSystemInfoSync().windowHeight; // 屏幕的高度
            var windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度
            this.h = windowHeight * 750 / windowWidth - 180 - 30;
        }
    }]);

    return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/classify'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImFyZWFMaXN0IiwiZmVhdHVyZUxpc3QiLCJtZWRpYUxpc3QiLCJ0eXBlTGlzdCIsImNvbkxpc3QiLCJzZWxlY3RlZCIsImFyZWEiLCJmZWF0dXJlIiwibWVkaWEiLCJ0eXBlIiwiaCIsImNvdW50IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVHlwZTEiLCJUeXBlIiwiVHlwZTIiLCJUeXBlMyIsIlR5cGU0IiwiTGlzdCIsIm1ldGhvZHMiLCJsb3dlciIsIndlcHkiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiaW5pdERhdGEiLCJoaWRlTG9hZGluZyIsImV2ZW50cyIsIm15U2VsZWN0ZWQiLCJ0IiwibSIsInd4Iiwic2hvd05hdmlnYXRpb25CYXJMb2FkaW5nIiwic2V0VGltZW91dCIsImhpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZyIsInN0b3BQdWxsRG93blJlZnJlc2giLCJ1cmwiLCJyZXF1ZXN0IiwiZmV0Y2hEYXRhIiwidGhlbiIsInJlcyIsIm1vdmllRGF0YUxpc3QiLCIkYXBwbHkiLCJtb3ZpZVR5cGVEYXRhIiwid2luZG93SGVpZ2h0IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUlUQyxJLEdBQU87QUFDSEMsc0JBQVUsRUFEUDtBQUVIQyx5QkFBYSxFQUZWO0FBR0hDLHVCQUFXLEVBSFI7QUFJSEMsc0JBQVUsRUFKUDtBQUtIQyxxQkFBUyxFQUxOO0FBTUhDLHNCQUFVO0FBQ05DLHNCQUFNLElBREE7QUFFTkMseUJBQVMsSUFGSDtBQUdOQyx1QkFB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LFlBQTFDLENBZEssQ0Fja0Q7QUFDdkQsZ0JBQUlFLGNBQWNmLEdBQUdjLGlCQUFILEdBQXVCQyxXQUF6QyxDQWZLLENBZWdEO0FBQ3JELGlCQUFLdEMsQ0FBTCxHQUFTb0MsZUFBZSxHQUFmLEdBQXFCRSxXQUFyQixHQUFtQyxHQUFuQyxHQUF5QyxFQUFsRDtBQUNIOzs7O0VBaEdrQ3hCLGVBQUt5QixJOztrQkFBckJyRCxPIiwiZmlsZSI6ImNsYXNzaWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IFR5cGUgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBlL3R5cGUnO1xyXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdC9saXN0JztcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLliIbnsbtcIlxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGFyZWFMaXN0OiBbXSxcclxuICAgICAgICBmZWF0dXJlTGlzdDogW10sXHJcbiAgICAgICAgbWVkaWFMaXN0OiBbXSxcclxuICAgICAgICB0eXBlTGlzdDogW10sXHJcbiAgICAgICAgY29uTGlzdDogW10sXHJcbiAgICAgICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgYXJlYTogJ+WFqOmDqCcsXHJcbiAgICAgICAgICAgIGZlYXR1cmU6ICflhajpg6gnLFxyXG4gICAgICAgICAgICBtZWRpYTogJ+eUteW9sScsXHJcbiAgICAgICAgICAgIHR5cGU6ICflhajpg6gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoOiAwLFxyXG4gICAgICAgIGNvdW50OiAyMFxyXG4gICAgfTtcclxuXHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiVHlwZTFcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmFsbFR5cGUuc3luY1wiOlwibWVkaWFMaXN0XCIsXCJ0eXBlXCI6XCJtZWRpYVwifSxcIlR5cGUyXCI6e1widi1iaW5kOmFsbFR5cGUuc3luY1wiOlwiYXJlYUxpc3RcIixcInR5cGVcIjpcImFyZWFcIn0sXCJUeXBlM1wiOntcInYtYmluZDphbGxUeXBlLnN5bmNcIjpcInR5cGVMaXN0XCIsXCJ0eXBlXCI6XCJ0eXBlXCJ9LFwiVHlwZTRcIjp7XCJ2LWJpbmQ6YWxsVHlwZS5zeW5jXCI6XCJmZWF0dXJlTGlzdFwiLFwidHlwZVwiOlwiZmVhdHVyZVwifSxcIkxpc3RcIjp7XCJ2LWJpbmQ6bW92aWVMaXN0LnN5bmNcIjpcImNvbkxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIFR5cGUxOiBUeXBlLFxyXG4gICAgICAgIFR5cGUyOiBUeXBlLFxyXG4gICAgICAgIFR5cGUzOiBUeXBlLFxyXG4gICAgICAgIFR5cGU0OiBUeXBlLFxyXG4gICAgICAgIExpc3RcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvLyDkuIrmi4nliqDovb1cclxuICAgICAgICBsb3dlcigpIHtcclxuICAgICAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+ato+WcqOaLvOWRveWKoOi9veS4reKApuKApidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5jb3VudCArPSA1O1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAgIC8vIOeCueWHu+WIh+aNoueUteW9seexu+Wei1xyXG4gICAgICAgIG15U2VsZWN0ZWQodHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkW3R5cGUudF0gPSB0eXBlLm07XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8g5LiL5ouJ5Yi35pawXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgICB3eC5zaG93TmF2aWdhdGlvbkJhckxvYWRpbmcoKSAgIC8v5Zyo5qCH6aKY5qCP5pi+56S65LiL5ouJ5Yi35pawXHJcbiAgICAgICAgdGhpcy5jb3VudCA9IDIwO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd3guaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nKCkgLy/lrozmiJDlgZzmraLliqDovb1cclxuICAgICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpIC8v5YGc5q2i5LiL5ouJ5Yi35pawXHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgLy8g5Y+R6LW36K+35rGCXHJcbiAgICBmZXRjaERhdGEodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDor7fmsYLnlLXlvbHliJfooahcclxuICAgIGluaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKGBodHRwczovL2NkbmFwcC5kdXNoZW1vdmllLmNvbS9kc21vdmllYXBpL3NzbDIvbW92aWUvbGlzdF9tb3ZpZV9ieV90eXBlLzE/YXJlYT0ke3RoaXMuc2VsZWN0ZWRbJ2FyZWEnXX0mY291bnQ9JHt0aGlzLmNvdW50fSZmZWF0dXJlPSR7dGhpcy5zZWxlY3RlZFsnZmVhdHVyZSddfSZtZWRpYT0ke3RoaXMuc2VsZWN0ZWRbJ21lZGlhJ119JnN0YXJ0SW5kZXg9MCZ0eXBlPSR7dGhpcy5zZWxlY3RlZFsndHlwZSddfWApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25MaXN0ID0gcmVzLmRhdGEubW92aWVEYXRhTGlzdDtcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHsgXHJcbiAgICAgICAgLy8g6K+35rGC5YiG57G7XHJcbiAgICAgICAgdGhpcy5mZXRjaERhdGEoJ2h0dHBzOi8vY2RuYXBwLmR1c2hlbW92aWUuY29tL2RzbW92aWVhcGkvc3NsMi9tb3ZpZS9saXN0X3R5cGUvMScpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgbGV0IHsgdHlwZUxpc3QsIGZlYXR1cmVMaXN0LCBtZWRpYUxpc3QsIGFyZWFMaXN0IH0gPSByZXMuZGF0YS5tb3ZpZVR5cGVEYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVMaXN0ID0gdHlwZUxpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZUxpc3QgPSBmZWF0dXJlTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5tZWRpYUxpc3QgPSBtZWRpYUxpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlYUxpc3QgPSBhcmVhTGlzdDtcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIOWKoOi9veeUteW9seWIl+ihqFxyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDpgILphY3miYDmnInlsY/luZXnmoRzY3JvbGwtdmlld+mrmOW6plxyXG4gICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAvLyDlsY/luZXnmoTpq5jluqZcclxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8vIOWxj+W5leeahOWuveW6plxyXG4gICAgICAgIHRoaXMuaCA9IHdpbmRvd0hlaWdodCAqIDc1MCAvIHdpbmRvd1dpZHRoIC0gMTgwIC0gMzA7XHJcbiAgICB9O1xyXG4gIH1cclxuIl19