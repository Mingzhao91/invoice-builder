"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureGithubStrategy = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportGithub = require("passport-github");

var _passportGithub2 = _interopRequireDefault(_passportGithub);

var _development = require("../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureGithubStrategy = exports.configureGithubStrategy = function configureGithubStrategy() {
  _passport2.default.use(new _passportGithub2.default.Strategy({
    clientID: _development.devConfig.github.clientId,
    clientSecret: _development.devConfig.github.clientSecret,
    callbackURL: _development.devConfig.github.callbackURL
  }, function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token, tokenSecret, profile, done) {
      var user, newUser;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _user2.default.findOne({ "github.id": profile.id });

            case 3:
              user = _context.sent;

              console.log(profile);

              if (!user) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", done(null, user));

            case 7:
              newUser = new _user2.default({});

              newUser.github.id = profile.id;
              newUser.github.token = token;
              newUser.github.displayName = profile.displayName;
              newUser.github.email = profile.emails[0].value;
              _context.next = 14;
              return newUser.save();

            case 14:
              done(null, newUser);
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);

              console.error(_context.t0);
              return _context.abrupt("return", done(_context.t0));

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 17]]);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvcGFzc3BvcnQtZ2l0aHViLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZUdpdGh1YlN0cmF0ZWd5IiwicGFzc3BvcnQiLCJ1c2UiLCJHaXRodWJTdHJhdGVneSIsIlN0cmF0ZWd5IiwiY2xpZW50SUQiLCJkZXZDb25maWciLCJnaXRodWIiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwidG9rZW4iLCJ0b2tlblNlY3JldCIsInByb2ZpbGUiLCJkb25lIiwiVXNlciIsImZpbmRPbmUiLCJpZCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwibmV3VXNlciIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJlbWFpbHMiLCJ2YWx1ZSIsInNhdmUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQSw0REFBMEIsU0FBMUJBLHVCQUEwQixHQUFNO0FBQzNDQyxxQkFBU0MsR0FBVCxDQUNFLElBQUlDLHlCQUFlQyxRQUFuQixDQUNFO0FBQ0VDLGNBQVVDLHVCQUFVQyxNQUFWLENBQWlCQyxRQUQ3QjtBQUVFQyxrQkFBY0gsdUJBQVVDLE1BQVYsQ0FBaUJFLFlBRmpDO0FBR0VDLGlCQUFhSix1QkFBVUMsTUFBVixDQUFpQkc7QUFIaEMsR0FERjtBQUFBLHdGQU1FLGlCQUFPQyxLQUFQLEVBQWNDLFdBQWQsRUFBMkJDLE9BQTNCLEVBQW9DQyxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR3VCQyxlQUFLQyxPQUFMLENBQWEsRUFBRSxhQUFhSCxRQUFRSSxFQUF2QixFQUFiLENBSHZCOztBQUFBO0FBR1VDLGtCQUhWOztBQUlJQyxzQkFBUUMsR0FBUixDQUFZUCxPQUFaOztBQUpKLG1CQUtRSyxJQUxSO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQU1hSixLQUFLLElBQUwsRUFBV0ksSUFBWCxDQU5iOztBQUFBO0FBUVVHLHFCQVJWLEdBUW9CLElBQUlOLGNBQUosQ0FBUyxFQUFULENBUnBCOztBQVNJTSxzQkFBUWQsTUFBUixDQUFlVSxFQUFmLEdBQW9CSixRQUFRSSxFQUE1QjtBQUNBSSxzQkFBUWQsTUFBUixDQUFlSSxLQUFmLEdBQXVCQSxLQUF2QjtBQUNBVSxzQkFBUWQsTUFBUixDQUFlZSxXQUFmLEdBQTZCVCxRQUFRUyxXQUFyQztBQUNBRCxzQkFBUWQsTUFBUixDQUFlZ0IsS0FBZixHQUF1QlYsUUFBUVcsTUFBUixDQUFlLENBQWYsRUFBa0JDLEtBQXpDO0FBWko7QUFBQSxxQkFhVUosUUFBUUssSUFBUixFQWJWOztBQUFBO0FBY0laLG1CQUFLLElBQUwsRUFBV08sT0FBWDtBQWRKO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWdCSUYsc0JBQVFRLEtBQVI7QUFoQkosK0NBaUJXYixpQkFqQlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBNkJELENBOUJNIiwiZmlsZSI6InBhc3Nwb3J0LWdpdGh1Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXNzcG9ydCBmcm9tIFwicGFzc3BvcnRcIjtcclxuaW1wb3J0IEdpdGh1YlN0cmF0ZWd5IGZyb20gXCJwYXNzcG9ydC1naXRodWJcIjtcclxuaW1wb3J0IHsgZGV2Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9lbnYvZGV2ZWxvcG1lbnRcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3Jlc291cmNlcy91c2VyL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmVHaXRodWJTdHJhdGVneSA9ICgpID0+IHtcclxuICBwYXNzcG9ydC51c2UoXHJcbiAgICBuZXcgR2l0aHViU3RyYXRlZ3kuU3RyYXRlZ3koXHJcbiAgICAgIHtcclxuICAgICAgICBjbGllbnRJRDogZGV2Q29uZmlnLmdpdGh1Yi5jbGllbnRJZCxcclxuICAgICAgICBjbGllbnRTZWNyZXQ6IGRldkNvbmZpZy5naXRodWIuY2xpZW50U2VjcmV0LFxyXG4gICAgICAgIGNhbGxiYWNrVVJMOiBkZXZDb25maWcuZ2l0aHViLmNhbGxiYWNrVVJMLFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyAodG9rZW4sIHRva2VuU2VjcmV0LCBwcm9maWxlLCBkb25lKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIGZpbmQgdGhlIHVzZXIgYnkgZ2l0aHViIGlkXHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgXCJnaXRodWIuaWRcIjogcHJvZmlsZS5pZCB9KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2ZpbGUpO1xyXG4gICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoe30pO1xyXG4gICAgICAgICAgbmV3VXNlci5naXRodWIuaWQgPSBwcm9maWxlLmlkO1xyXG4gICAgICAgICAgbmV3VXNlci5naXRodWIudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAgIG5ld1VzZXIuZ2l0aHViLmRpc3BsYXlOYW1lID0gcHJvZmlsZS5kaXNwbGF5TmFtZTtcclxuICAgICAgICAgIG5ld1VzZXIuZ2l0aHViLmVtYWlsID0gcHJvZmlsZS5lbWFpbHNbMF0udmFsdWU7XHJcbiAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcclxuICAgICAgICAgIGRvbmUobnVsbCwgbmV3VXNlcik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcbiJdfQ==