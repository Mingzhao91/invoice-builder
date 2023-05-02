"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureJWTStrategy = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passportJwt = require("passport-jwt");

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _development = require("../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureJWTStrategy = exports.configureJWTStrategy = function configureJWTStrategy() {
  var opts = {};
  opts.jwtFromRequest = _passportJwt2.default.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = _development.devConfig.secret;

  _passport2.default.use(new _passportJwt2.default.Strategy(opts, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload, done) {
      var user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _user2.default.findOne({ _id: payload.id });

            case 3:
              user = _context.sent;

              console.log(user);

              if (!user) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", done(null, user));

            case 9:
              return _context.abrupt("return", done(null, false));

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", done(_context.t0, false));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 12]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtand0LmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUpXVFN0cmF0ZWd5Iiwib3B0cyIsImp3dEZyb21SZXF1ZXN0IiwiUGFzc3BvcnRKV1QiLCJFeHRyYWN0Snd0IiwiZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuIiwic2VjcmV0T3JLZXkiLCJkZXZDb25maWciLCJzZWNyZXQiLCJwYXNzcG9ydCIsInVzZSIsIlN0cmF0ZWd5IiwicGF5bG9hZCIsImRvbmUiLCJVc2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwidXNlciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUN4QyxNQUFJQyxPQUFPLEVBQVg7QUFDQUEsT0FBS0MsY0FBTCxHQUFzQkMsc0JBQVlDLFVBQVosQ0FBdUJDLDJCQUF2QixFQUF0QjtBQUNBSixPQUFLSyxXQUFMLEdBQW1CQyx1QkFBVUMsTUFBN0I7O0FBRUFDLHFCQUFTQyxHQUFULENBQ0UsSUFBSVAsc0JBQVlRLFFBQWhCLENBQXlCVixJQUF6QjtBQUFBLHdGQUErQixpQkFBZ0JXLE9BQWhCLEVBQXlCQyxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRVJDLGVBQUtDLE9BQUwsQ0FBYSxFQUFFQyxLQUFLSixRQUFRSyxFQUFmLEVBQWIsQ0FGUTs7QUFBQTtBQUVyQkMsa0JBRnFCOztBQUczQkMsc0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7QUFIMkIsbUJBS3ZCQSxJQUx1QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FNbEJMLEtBQUssSUFBTCxFQUFXSyxJQUFYLENBTmtCOztBQUFBO0FBQUEsK0NBUWxCTCxLQUFLLElBQUwsRUFBVyxLQUFYLENBUmtCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FXcEJBLGtCQUFVLEtBQVYsQ0FYb0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQWdCRCxDQXJCTSIsImZpbGUiOiJwYXNzcG9ydC1qd3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFzc3BvcnRKV1QgZnJvbSBcInBhc3Nwb3J0LWp3dFwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcblxyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUpXVFN0cmF0ZWd5ID0gKCkgPT4ge1xyXG4gIHZhciBvcHRzID0ge307XHJcbiAgb3B0cy5qd3RGcm9tUmVxdWVzdCA9IFBhc3Nwb3J0SldULkV4dHJhY3RKd3QuZnJvbUF1dGhIZWFkZXJBc0JlYXJlclRva2VuKCk7XHJcbiAgb3B0cy5zZWNyZXRPcktleSA9IGRldkNvbmZpZy5zZWNyZXQ7XHJcblxyXG4gIHBhc3Nwb3J0LnVzZShcclxuICAgIG5ldyBQYXNzcG9ydEpXVC5TdHJhdGVneShvcHRzLCBhc3luYyBmdW5jdGlvbiAocGF5bG9hZCwgZG9uZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBfaWQ6IHBheWxvYWQuaWQgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcblxyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvbmUoZXJyLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxufTtcclxuIl19