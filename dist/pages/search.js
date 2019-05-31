'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
            navigationBarTitleText: "搜资源"
        }, _this.data = {
            hotList: ["碟中谍", "苹果", "狄仁杰", "斗破苍穹", "如懿传", "人类清除计划", "遗传厄运", "天成唱歌", "疯人院", "快把我哥带走"],
            flag: false,
            iptVal: '',
            movieList: null,
            moviePeople: null,
            storage: [],
            timer: null,
            iptArr: [],
            iptflag: true,
            h: 0
        }, _this.$repeat = {}, _this.$props = { "List": { "xmlns:v-bind": "", "v-bind:movieList.sync": "movieList" } }, _this.$events = {}, _this.components = {
            List: _list2.default
        }, _this.methods = {
            iptFunc: function iptFunc(e) {
                var _this2 = this;

                this.iptVal = e.detail.value;
                this.iptflag = false;
                clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                    if (_this2.iptVal !== '') {
                        _this2.fetchData('https://dswxapp.dushemovie.com/dsmovieapi/ssl2/search/search_movie/1', _this2.iptVal).then(function (res) {
                            _this2.iptArr = res.data.movieDataList;
                            _this2.$apply();
                        });
                    }
                }, 500);
            },
            search: function search(v) {
                var _this3 = this;

                this.flag = true;
                this.iptflag = true;
                // this.fetchData('https://dswxapp.dushemovie.com/dsmovieapi/ssl2/search/search_movie/1', v).then(res => {
                //     this.movieList = res.data.movieDataList;
                //     this.$apply();
                // })

                var movieData = this.fetchData('https://dswxapp.dushemovie.com/dsmovieapi/ssl2/search/search_movie/1', v);
                var peopleData = this.fetchData('https://dswxapp.dushemovie.com/dsmovieapi/ssl2/search/search_movie_person/1', v);

                Promise.all([movieData, peopleData]).then(function (res) {
                    console.log(res[1].data.moviePersonDataList);
                    _this3.movieList = res[0].data.movieDataList;
                    _this3.moviePeople = res[1].data.moviePersonDataList;
                    _this3.$apply();
                });
                wx.setNavigationBarTitle({
                    title: v
                });

                // 本地存储
                var isHas = this.storage && this.storage.some(function (item) {
                    return item === v;
                });

                if (!isHas) {
                    this.storage.push(v);
                    wx.setStorageSync('history', JSON.stringify(this.storage));
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Example, [{
        key: 'fetchData',
        value: function fetchData(url, v) {
            return _wepy2.default.request({
                url: url,
                method: 'POST',
                data: {
                    count: 5,
                    key: v,
                    startIndex: 0,
                    userId: 5933871,
                    sign: '20469378ebafade92cc857206d134de1'
                }
            });
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var windowHeight = wx.getSystemInfoSync().windowHeight; // 屏幕的高度
            var windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕的宽度
            this.h = windowHeight * 750 / windowWidth - 45 - 30;
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            try {
                this.storage = JSON.parse(wx.getStorageSync('history')) || [];
            } catch (e) {}
        }
    }]);

    return Example;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJob3RMaXN0IiwiZmxhZyIsImlwdFZhbCIsIm1vdmllTGlzdCIsIm1vdmllUGVvcGxlIiwic3RvcmFnZSIsInRpbWVyIiwiaXB0QXJyIiwiaXB0ZmxhZyIsImgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJMaXN0IiwibWV0aG9kcyIsImlwdEZ1bmMiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZmV0Y2hEYXRhIiwidGhlbiIsInJlcyIsIm1vdmllRGF0YUxpc3QiLCIkYXBwbHkiLCJzZWFyY2giLCJ2IiwibW92aWVEYXRhIiwicGVvcGxlRGF0YSIsIlByb21pc2UiLCJhbGwiLCJjb25zb2xlIiwibG9nIiwibW92aWVQZXJzb25EYXRhTGlzdCIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJpc0hhcyIsInNvbWUiLCJpdGVtIiwicHVzaCIsInNldFN0b3JhZ2VTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsIndlcHkiLCJyZXF1ZXN0IiwibWV0aG9kIiwiY291bnQiLCJrZXkiLCJzdGFydEluZGV4IiwidXNlcklkIiwic2lnbiIsIndpbmRvd0hlaWdodCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJwYXJzZSIsImdldFN0b3JhZ2VTeW5jIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUlUQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLEtBQWQsRUFBcUIsTUFBckIsRUFBNkIsS0FBN0IsRUFBb0MsUUFB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QUFXSDs7O2lDQW9EUTtBQUNOLGdCQUFJQyxlQUFlbkIsR0FBR29CLGlCQUFILEdBQXVCRCxZQUExQyxDQURNLENBQ2lEO0FBQ3RELGdCQUFJRSxjQUFjckIsR0FBR29CLGlCQUFILEdBQXVCQyxXQUF6QyxDQUZLLENBRWdEO0FBQ3JELGlCQUFLaEQsQ0FBTCxHQUFTOEMsZUFBZSxHQUFmLEdBQXFCRSxXQUFyQixHQUFtQyxFQUFuQyxHQUF3QyxFQUFqRDtBQUNIOzs7aUNBRVE7QUFDTCxnQkFBSTtBQUNBLHFCQUFLcEQsT0FBTCxHQUFldUMsS0FBS2MsS0FBTCxDQUFXdEIsR0FBR3VCLGNBQUgsQ0FBa0IsU0FBbEIsQ0FBWCxLQUE0QyxFQUEzRDtBQUNILGFBRkQsQ0FFRSxPQUFNMUMsQ0FBTixFQUFTLENBQUU7QUFFaEI7Ozs7RUFwR2tDOEIsZUFBS2EsSTs7a0JBQXJCaEUsTyIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QvbGlzdCc7XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi5pCc6LWE5rqQXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgaG90TGlzdDogW1wi56Kf5Lit6LCNXCIsIFwi6Iu55p6cXCIsIFwi54uE5LuB5p2wXCIsIFwi5paX56C06IuN56m5XCIsIFwi5aaC5oe/5LygXCIsIFwi5Lq657G75riF6Zmk6K6h5YiSXCIsIFwi6YGX5Lyg5Y6E6L+QXCIsIFwi5aSp5oiQ5ZSx5q2MXCIsIFwi55av5Lq66ZmiXCIsIFwi5b+r5oqK5oiR5ZOl5bim6LWwXCJdLFxyXG4gICAgICAgIGZsYWc6IGZhbHNlLFxyXG4gICAgICAgIGlwdFZhbDogJycsXHJcbiAgICAgICAgbW92aWVMaXN0OiBudWxsLFxyXG4gICAgICAgIG1vdmllUGVvcGxlOiBudWxsLFxyXG4gICAgICAgIHN0b3JhZ2U6IFtdLFxyXG4gICAgICAgIHRpbWVyOiBudWxsLFxyXG4gICAgICAgIGlwdEFycjogW10sXHJcbiAgICAgICAgaXB0ZmxhZzogdHJ1ZSxcclxuICAgICAgICBoOiAwXHJcbiAgICB9O1xyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDptb3ZpZUxpc3Quc3luY1wiOlwibW92aWVMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICBMaXN0XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSh1cmwsIHYpIHtcclxuICAgICAgICByZXR1cm4gd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IDUsXHJcbiAgICAgICAgICAgICAgICBrZXk6IHYsXHJcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiA1OTMzODcxLFxyXG4gICAgICAgICAgICAgICAgc2lnbjogJzIwNDY5Mzc4ZWJhZmFkZTkyY2M4NTcyMDZkMTM0ZGUxJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgaXB0RnVuYyhlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXB0VmFsID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXB0ZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlwdFZhbCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoRGF0YSgnaHR0cHM6Ly9kc3d4YXBwLmR1c2hlbW92aWUuY29tL2RzbW92aWVhcGkvc3NsMi9zZWFyY2gvc2VhcmNoX21vdmllLzEnLCB0aGlzLmlwdFZhbCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlwdEFyciA9IHJlcy5kYXRhLm1vdmllRGF0YUxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZWFyY2godikge1xyXG4gICAgICAgICAgICB0aGlzLmZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlwdGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmZldGNoRGF0YSgnaHR0cHM6Ly9kc3d4YXBwLmR1c2hlbW92aWUuY29tL2RzbW92aWVhcGkvc3NsMi9zZWFyY2gvc2VhcmNoX21vdmllLzEnLCB2KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm1vdmllTGlzdCA9IHJlcy5kYXRhLm1vdmllRGF0YUxpc3Q7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IG1vdmllRGF0YSA9IHRoaXMuZmV0Y2hEYXRhKCdodHRwczovL2Rzd3hhcHAuZHVzaGVtb3ZpZS5jb20vZHNtb3ZpZWFwaS9zc2wyL3NlYXJjaC9zZWFyY2hfbW92aWUvMScsIHYpO1xyXG4gICAgICAgICAgICBsZXQgcGVvcGxlRGF0YSA9IHRoaXMuZmV0Y2hEYXRhKCdodHRwczovL2Rzd3hhcHAuZHVzaGVtb3ZpZS5jb20vZHNtb3ZpZWFwaS9zc2wyL3NlYXJjaC9zZWFyY2hfbW92aWVfcGVyc29uLzEnLCB2KTtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFttb3ZpZURhdGEsIHBlb3BsZURhdGFdKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNbMV0uZGF0YS5tb3ZpZVBlcnNvbkRhdGFMaXN0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpZUxpc3QgPSByZXNbMF0uZGF0YS5tb3ZpZURhdGFMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpZVBlb3BsZSA9IHJlc1sxXS5kYXRhLm1vdmllUGVyc29uRGF0YUxpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHZcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAvLyDmnKzlnLDlrZjlgqhcclxuICAgICAgICAgICAgbGV0IGlzSGFzID0gdGhpcy5zdG9yYWdlICYmIHRoaXMuc3RvcmFnZS5zb21lKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHZcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNIYXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5wdXNoKHYpO1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2hpc3RvcnknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAvLyDlsY/luZXnmoTpq5jluqZcclxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC8vIOWxj+W5leeahOWuveW6plxyXG4gICAgICAgIHRoaXMuaCA9IHdpbmRvd0hlaWdodCAqIDc1MCAvIHdpbmRvd1dpZHRoIC0gNDUgLSAzMDtcclxuICAgIH07XHJcblxyXG4gICAgb25TaG93KCkgeyBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UgPSBKU09OLnBhcnNlKHd4LmdldFN0b3JhZ2VTeW5jKCdoaXN0b3J5JykpIHx8IFtdO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge31cclxuICAgICAgICBcclxuICAgIH07XHJcbiAgfVxyXG4iXX0=