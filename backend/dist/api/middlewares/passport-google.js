"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureGoogleStrategy = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportGoogleOauth = require("passport-google-oauth");

var _passportGoogleOauth2 = _interopRequireDefault(_passportGoogleOauth);

var _development = require("../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureGoogleStrategy = exports.configureGoogleStrategy = function configureGoogleStrategy() {
  _passport2.default.use(new _passportGoogleOauth2.default.OAuth2Strategy({
    clientID: _development.devConfig.google.clientId,
    clientSecret: _development.devConfig.google.clientSecret,
    callbackURL: _development.devConfig.google.callbackURL
  }, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(accessToken, refreshToken, profile, done) {
      var user, newUser;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _user2.default.findOne({
                "google.id": profile.id
              });

            case 3:
              user = _context.sent;

              if (!user) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", done(null, user));

            case 6:

              // console.log("user does not exists, create a new user");
              newUser = new _user2.default({});

              newUser.google.id = profile.id;
              newUser.google.token = accessToken;
              newUser.google.displayName = profile.displayName;
              newUser.google.email = profile.emails[0].value;
              _context.next = 13;
              return newUser.save();

            case 13:
              done(null, newUser);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", done(_context.t0));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 16]]);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtZ29vZ2xlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUdvb2dsZVN0cmF0ZWd5IiwicGFzc3BvcnQiLCJ1c2UiLCJHb29nbGVTdHJhdGVneSIsIk9BdXRoMlN0cmF0ZWd5IiwiY2xpZW50SUQiLCJkZXZDb25maWciLCJnb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJwcm9maWxlIiwiZG9uZSIsIlVzZXIiLCJmaW5kT25lIiwiaWQiLCJ1c2VyIiwibmV3VXNlciIsInRva2VuIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsImVtYWlscyIsInZhbHVlIiwic2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSw0REFBMEIsU0FBMUJBLHVCQUEwQixHQUFNO0FBQzNDQyxxQkFBU0MsR0FBVCxDQUNFLElBQUlDLDhCQUFlQyxjQUFuQixDQUNFO0FBQ0VDLGNBQVVDLHVCQUFVQyxNQUFWLENBQWlCQyxRQUQ3QjtBQUVFQyxrQkFBY0gsdUJBQVVDLE1BQVYsQ0FBaUJFLFlBRmpDO0FBR0VDLGlCQUFhSix1QkFBVUMsTUFBVixDQUFpQkc7QUFIaEMsR0FERjtBQUFBLHdGQU1FLGlCQUFnQkMsV0FBaEIsRUFBNkJDLFlBQTdCLEVBQTJDQyxPQUEzQyxFQUFvREMsSUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU11QkMsZUFBS0MsT0FBTCxDQUFhO0FBQzlCLDZCQUFhSCxRQUFRSTtBQURTLGVBQWIsQ0FOdkI7O0FBQUE7QUFNVUMsa0JBTlY7O0FBQUEsbUJBVVFBLElBVlI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBWWFKLEtBQUssSUFBTCxFQUFXSSxJQUFYLENBWmI7O0FBQUE7O0FBZUk7QUFDTUMscUJBaEJWLEdBZ0JvQixJQUFJSixjQUFKLENBQVMsRUFBVCxDQWhCcEI7O0FBaUJJSSxzQkFBUVosTUFBUixDQUFlVSxFQUFmLEdBQW9CSixRQUFRSSxFQUE1QjtBQUNBRSxzQkFBUVosTUFBUixDQUFlYSxLQUFmLEdBQXVCVCxXQUF2QjtBQUNBUSxzQkFBUVosTUFBUixDQUFlYyxXQUFmLEdBQTZCUixRQUFRUSxXQUFyQztBQUNBRixzQkFBUVosTUFBUixDQUFlZSxLQUFmLEdBQXVCVCxRQUFRVSxNQUFSLENBQWUsQ0FBZixFQUFrQkMsS0FBekM7QUFwQko7QUFBQSxxQkFxQlVMLFFBQVFNLElBQVIsRUFyQlY7O0FBQUE7QUFzQklYLG1CQUFLLElBQUwsRUFBV0ssT0FBWDtBQXRCSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQXlCV0wsaUJBekJYOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQXFDRCxDQXRDTSIsImZpbGUiOiJwYXNzcG9ydC1nb29nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCBHb29nbGVTdHJhdGVneSBmcm9tIFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoXCI7XHJcblxyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZUdvb2dsZVN0cmF0ZWd5ID0gKCkgPT4ge1xyXG4gIHBhc3Nwb3J0LnVzZShcclxuICAgIG5ldyBHb29nbGVTdHJhdGVneS5PQXV0aDJTdHJhdGVneShcclxuICAgICAge1xyXG4gICAgICAgIGNsaWVudElEOiBkZXZDb25maWcuZ29vZ2xlLmNsaWVudElkLFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogZGV2Q29uZmlnLmdvb2dsZS5jbGllbnRTZWNyZXQsXHJcbiAgICAgICAgY2FsbGJhY2tVUkw6IGRldkNvbmZpZy5nb29nbGUuY2FsbGJhY2tVUkwsXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIChhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBwcm9maWxlLCBkb25lKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWNjZXNzVG9rZW46IFwiLCBhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlZnJlc2hUb2tlbjogXCIsIHJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInByb2ZpbGU6IFwiLCBwcm9maWxlKTtcclxuXHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtcclxuICAgICAgICAgICAgXCJnb29nbGUuaWRcIjogcHJvZmlsZS5pZCxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXNlciBleGlzdHNcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXNlciBkb2VzIG5vdCBleGlzdHMsIGNyZWF0ZSBhIG5ldyB1c2VyXCIpO1xyXG4gICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHt9KTtcclxuICAgICAgICAgIG5ld1VzZXIuZ29vZ2xlLmlkID0gcHJvZmlsZS5pZDtcclxuICAgICAgICAgIG5ld1VzZXIuZ29vZ2xlLnRva2VuID0gYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICBuZXdVc2VyLmdvb2dsZS5kaXNwbGF5TmFtZSA9IHByb2ZpbGUuZGlzcGxheU5hbWU7XHJcbiAgICAgICAgICBuZXdVc2VyLmdvb2dsZS5lbWFpbCA9IHByb2ZpbGUuZW1haWxzWzBdLnZhbHVlO1xyXG4gICAgICAgICAgYXdhaXQgbmV3VXNlci5zYXZlKCk7XHJcbiAgICAgICAgICBkb25lKG51bGwsIG5ld1VzZXIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHJldHVybiBkb25lKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuIl19