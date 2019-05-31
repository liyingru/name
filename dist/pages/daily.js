'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _cards = require('./../components/Cards/cards.js');

var _cards2 = _interopRequireDefault(_cards);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _actions = require('./../store/actions/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = (_dec = (0, _wepyRedux.connect)({}, {
  update: _actions.update
}), _dec(_class = function (_wepy$page) {
  _inherits(Example, _wepy$page);

  function Example() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Example);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "历史日签"
    }, _this.data = {
      allData: {},
      month: new Date().getMonth() + 2,
      year: new Date().getFullYear(),
      page: 8
    }, _this.$repeat = { "allData": { "com": "Cards", "props": "" } }, _this.$props = { "Cards": { "xmlns:v-bind": { "value": "", "for": "allData", "item": "item", "index": "index", "key": "key" }, "v-bind:cardsList.sync": { "value": "allData[index]", "for": "allData", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      Cards: _cards2.default
    }, _this.methods = {}, _this.events = {}, _this.watch = {}, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Example, [{
    key: 'onReachBottom',


    // 上拉加载更多
    value: function onReachBottom() {
      var _this2 = this;

      this.month = --this.month;
      this.page = --this.page;
      if (this.page <= 0) {
        _wepy2.default.hideLoading();
      } else {
        _wepy2.default.showLoading({
          title: '正在拼命加载中……'
        });

        if (!this.month) {
          this.month = 12;
          this.year = --this.year;
        }
        this.fetchData(this.month, this.year).then(function (res) {
          _this2.solveData(res.data.dailyRecmdCardList);
          _wepy2.default.hideLoading();
        });
      }
    }
  }, {
    key: 'fetchData',

    // 发起请求
    value: function fetchData(month, year) {
      return _wepy2.default.request({
        url: 'https://dswxapp.dushemovie.com/dsmovieapi/ssl2/weixin_recmd/list_daily_card/1',
        method: 'POST',
        data: {
          month: month,
          userId: 5933871,
          year: year,
          sign: '2dd2fc0647b6fb792f5d9005821dd9b4'
        }
      });
    }

    // 初始渲染数据

  }, {
    key: 'initData',
    value: function initData() {
      var _this3 = this;

      for (var i = 0; i < 3; i++) {
        this.page = --this.page;
        this.month = --this.month;
        if (!this.month) {
          this.month = 12;
          this.year = --this.year;
        }
        this.fetchData(this.month, this.year).then(function (res) {
          _this3.solveData(res.data.dailyRecmdCardList);
        });
      }
    }
    // 下拉刷新

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.month = new Date().getMonth() + 2;
      this.year = new Date().getFullYear();
      this.page = 8;
      this.allData = {};
      this.initData();
    }
    // 处理数据

  }, {
    key: 'solveData',
    value: function solveData(list) {
      var _this4 = this;

      var arr = list[0].day.split('-');
      var key = arr[0] + '年' + arr[1] + '月';
      var newArr = list.map(function (item) {
        item.day = item.day.slice(5);
        return item;
      });
      this.allData[key] = newArr;
      setTimeout(function () {
        console.log(_this4.allData);
      }, 1000);
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.initData();
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Example;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Example , 'pages/daily'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaWx5LmpzIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJ1cGRhdGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImFsbERhdGEiLCJtb250aCIsIkRhdGUiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInBhZ2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJDYXJkcyIsIm1ldGhvZHMiLCJldmVudHMiLCJ3YXRjaCIsImNvbXB1dGVkIiwid2VweSIsImhpZGVMb2FkaW5nIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImZldGNoRGF0YSIsInRoZW4iLCJzb2x2ZURhdGEiLCJyZXMiLCJkYWlseVJlY21kQ2FyZExpc3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwidXNlcklkIiwic2lnbiIsImkiLCJpbml0RGF0YSIsImxpc3QiLCJhcnIiLCJkYXkiLCJzcGxpdCIsImtleSIsIm5ld0FyciIsIm1hcCIsIml0ZW0iLCJzbGljZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUlxQkEsTyxXQUhwQix3QkFBUSxFQUFSLEVBQVk7QUFDWEM7QUFEVyxDQUFaLEM7Ozs7Ozs7Ozs7Ozs7O3dMQUlDQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxhQUFPLElBQUlDLElBQUosR0FBV0MsUUFBWCxLQUF3QixDQUYxQjtBQUdMQyxZQUFNLElBQUlGLElBQUosR0FBV0csV0FBWCxFQUhEO0FBSUxDLFlBQU07QUFKRCxLLFFBT1JDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxPQUFNLE9BQVAsRUFBZSxTQUFRLEVBQXZCLEVBQVgsRSxRQUNiQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFB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R0FBV0ssS0FBS0wsR0FBTCxDQUFTTSxLQUFULENBQWUsQ0FBZixDQUFYO0FBQ0EsZUFBT0QsSUFBUDtBQUNELE9BSFksQ0FBYjtBQUlBLFdBQUt2QyxPQUFMLENBQWFvQyxHQUFiLElBQW9CQyxNQUFwQjtBQUNBSSxpQkFBVyxZQUFNO0FBQ2ZDLGdCQUFRQyxHQUFSLENBQVksT0FBSzNDLE9BQWpCO0FBQ0QsT0FGRCxFQUVHLElBRkg7QUFHQSxXQUFLNEMsTUFBTDtBQUNEOzs7NkJBQ1E7QUFDTCxXQUFLYixRQUFMO0FBQ0g7Ozs2QkFFUSxDQUFHOzs7O0VBeEd1QmYsZUFBS1YsSTtrQkFBckJYLE8iLCJmaWxlIjoiZGFpbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgQ2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkcy9jYXJkcyc7XHJcbiAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xyXG4gIGltcG9ydCB7IHVwZGF0ZSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnO1xyXG4gIEBjb25uZWN0KHt9LCB7XHJcbiAgICB1cGRhdGVcclxuICB9KVxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuWOhuWPsuaXpeetvlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBhbGxEYXRhOiB7fSxcclxuICAgICAgbW9udGg6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDIsXHJcbiAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgcGFnZTogOFxyXG4gICAgfTtcclxuXHJcbiAgICRyZXBlYXQgPSB7XCJhbGxEYXRhXCI6e1wiY29tXCI6XCJDYXJkc1wiLFwicHJvcHNcIjpcIlwifX07XHJcbiRwcm9wcyA9IHtcIkNhcmRzXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJhbGxEYXRhXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmNhcmRzTGlzdC5zeW5jXCI6e1widmFsdWVcIjpcImFsbERhdGFbaW5kZXhdXCIsXCJmb3JcIjpcImFsbERhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgQ2FyZHNcclxuICAgIH07XHJcblxyXG4gICAgLy8g5LiK5ouJ5Yqg6L295pu05aSaXHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICB0aGlzLm1vbnRoID0gLS10aGlzLm1vbnRoO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAtLXRoaXMucGFnZTtcclxuICAgICAgaWYgKHRoaXMucGFnZSA8PSAwKSB7XHJcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmraPlnKjmi7zlkb3liqDovb3kuK3igKbigKYnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1vbnRoKSB7XHJcbiAgICAgICAgICB0aGlzLm1vbnRoID0gMTI7XHJcbiAgICAgICAgICB0aGlzLnllYXIgPSAtLXRoaXMueWVhclxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZldGNoRGF0YSh0aGlzLm1vbnRoLCB0aGlzLnllYXIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuc29sdmVEYXRhKHJlcy5kYXRhLmRhaWx5UmVjbWRDYXJkTGlzdClcclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGV2ZW50cyA9IHt9O1xyXG5cclxuICAgIHdhdGNoID0ge307XHJcblxyXG4gICAgY29tcHV0ZWQgPSB7fTtcclxuICAgIC8vIOWPkei1t+ivt+axglxyXG4gICAgZmV0Y2hEYXRhKG1vbnRoLCB5ZWFyKSB7XHJcbiAgICAgIHJldHVybiB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZHN3eGFwcC5kdXNoZW1vdmllLmNvbS9kc21vdmllYXBpL3NzbDIvd2VpeGluX3JlY21kL2xpc3RfZGFpbHlfY2FyZC8xJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBtb250aCxcclxuICAgICAgICAgIHVzZXJJZDogNTkzMzg3MSxcclxuICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICBzaWduOiAnMmRkMmZjMDY0N2I2ZmI3OTJmNWQ5MDA1ODIxZGQ5YjQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+a4suafk+aVsOaNrlxyXG4gICAgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5wYWdlID0gLS10aGlzLnBhZ2U7XHJcbiAgICAgICAgICB0aGlzLm1vbnRoID0gLS10aGlzLm1vbnRoO1xyXG4gICAgICAgICAgaWYgKCF0aGlzLm1vbnRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGggPSAxMjtcclxuICAgICAgICAgICAgdGhpcy55ZWFyID0gLS10aGlzLnllYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmZldGNoRGF0YSh0aGlzLm1vbnRoLCB0aGlzLnllYXIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zb2x2ZURhdGEocmVzLmRhdGEuZGFpbHlSZWNtZENhcmRMaXN0KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDkuIvmi4nliLfmlrBcclxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICB0aGlzLm1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMjtcclxuICAgICAgdGhpcy55ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICB0aGlzLnBhZ2UgPSA4O1xyXG4gICAgICB0aGlzLmFsbERhdGEgPSB7fTtcclxuICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgfVxyXG4gICAgLy8g5aSE55CG5pWw5o2uXHJcbiAgICBzb2x2ZURhdGEobGlzdCkge1xyXG4gICAgICBsZXQgYXJyID0gbGlzdFswXS5kYXkuc3BsaXQoJy0nKTtcclxuICAgICAgbGV0IGtleSA9IGFyclswXSArICflubQnICsgYXJyWzFdICsgJ+aciCc7XHJcbiAgICAgIGxldCBuZXdBcnIgPSBsaXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmRheSA9IGl0ZW0uZGF5LnNsaWNlKDUpO1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmFsbERhdGFba2V5XSA9IG5ld0FycjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hbGxEYXRhKVxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uU2hvdygpIHsgfTtcclxuICB9XHJcbiJdfQ==