'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

var _counter = require('./../types/counter.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {
  daily: {}
};
exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _counter.UPDATE, function (state, action) {
  return _extends({}, state, {
    daily: _extends({}, action.payload)
  });
}), initState);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiaW5pdFN0YXRlIiwiZGFpbHkiLCJVUERBVEUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQSxJQUFNQSxZQUFZO0FBQ2hCQyxTQUFPO0FBRFMsQ0FBbEI7a0JBR2UscURBQ1pDLGVBRFksWUFDSEMsS0FERyxFQUNJQyxNQURKLEVBQ1k7QUFDdkIsc0JBQ0tELEtBREw7QUFFRUYsd0JBQVdHLE9BQU9DLE9BQWxCO0FBRkY7QUFJRCxDQU5ZLEdBT1pMLFNBUFksQyIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gJ3JlZHV4LWFjdGlvbnMnXG5pbXBvcnQgeyBVUERBVEUgfSBmcm9tICcuLi90eXBlcy9jb3VudGVyJ1xuY29uc3QgaW5pdFN0YXRlID0ge1xuICBkYWlseToge31cbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoe1xuICBbVVBEQVRFXSAoc3RhdGUsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGRhaWx5OiB7Li4uYWN0aW9uLnBheWxvYWR9XG4gICAgfVxuICB9XG59LCBpbml0U3RhdGUpIl19