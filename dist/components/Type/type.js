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
            allType: Array,
            type: String
        }, _this.data = {
            currentMovie: 0
        }, _this.components = {}, _this.methods = {
            chooseMovie: function chooseMovie(movie, key) {
                this.currentMovie = key;
                this.$emit('mySelected', {
                    t: this.type,
                    m: movie
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGUuanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwiYWxsVHlwZSIsIkFycmF5IiwidHlwZSIsIlN0cmluZyIsImRhdGEiLCJjdXJyZW50TW92aWUiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImNob29zZU1vdmllIiwibW92aWUiLCJrZXkiLCIkZW1pdCIsInQiLCJtIiwiZXZlbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ0pDLHFCQUFTQyxLQURMO0FBRUpDLGtCQUFNQztBQUZGLFMsUUFLUkMsSSxHQUFPO0FBQ0hDLDBCQUFjO0FBRFgsUyxRQUlQQyxVLEdBQWEsRSxRQUViQyxPLEdBQVU7QUFDTkMsdUJBRE0sdUJBQ01DLEtBRE4sRUFDYUMsR0FEYixFQUNrQjtBQUNwQixxQkFBS0wsWUFBTCxHQUFvQkssR0FBcEI7QUFDQSxxQkFBS0MsS0FBTCxDQUFXLFlBQVgsRUFBeUI7QUFDckJDLHVCQUFHLEtBQUtWLElBRGE7QUFFckJXLHVCQUFHSjtBQUZrQixpQkFBekI7QUFJSDtBQVBLLFMsUUFVVkssTSxHQUFTLEUsUUFFVEMsSyxHQUFRLEUsUUFFUkMsUSxHQUFXLEU7Ozs7O2lDQUVGLENBRVA7OztpQ0FFTyxDQUFHOzs7O0VBaEN1QkMsZUFBS0MsUzs7a0JBQXJCcEIsTyIsImZpbGUiOiJ0eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIGFsbFR5cGU6IEFycmF5LFxyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIGN1cnJlbnRNb3ZpZTogMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnRzID0ge307XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBjaG9vc2VNb3ZpZShtb3ZpZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vdmllID0ga2V5O1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdteVNlbGVjdGVkJywge1xyXG4gICAgICAgICAgICAgICAgdDogdGhpcy50eXBlLFxyXG4gICAgICAgICAgICAgICAgbTogbW92aWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuXHJcbiAgICB3YXRjaCA9IHt9O1xyXG5cclxuICAgIGNvbXB1dGVkID0ge307XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICB9O1xyXG5cclxuICAgIG9uU2hvdygpIHsgfTtcclxuICB9XHJcbiJdfQ==