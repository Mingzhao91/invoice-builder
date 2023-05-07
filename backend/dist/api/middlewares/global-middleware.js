"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalMiddleware = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _swaggerUiExpress = require("swagger-ui-express");

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require("express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _swagger = require("../../config/swagger.json");

var _swagger2 = _interopRequireDefault(_swagger);

var _passportJwt = require("./passport-jwt");

var _passportGoogle = require("./passport-google");

var _passportGithub = require("./passport-github");

var _development = require("../../config/env/development");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setGlobalMiddleware = exports.setGlobalMiddleware = function setGlobalMiddleware(app) {
  app.use(_express2.default.json());
  app.use(_express2.default.urlencoded({ extended: true }));
  app.use((0, _cors2.default)());
  app.use((0, _morgan2.default)("dev"));
  app.use((0, _expressSession2.default)({
    secret: _development.devConfig.secret,
    resave: true,
    saveUninitialized: true
  }));
  app.use(_passport2.default.initialize({ userProperty: "currentUser" }));
  app.use(_passport2.default.session());
  (0, _passportJwt.configureJWTStrategy)();
  (0, _passportGoogle.configureGoogleStrategy)();
  (0, _passportGithub.configureGithubStrategy)();

  // save user into session
  _passport2.default.serializeUser(function (user, done) {
    done(null, user._id);
  });

  // extract the userId from session
  _passport2.default.deserializeUser(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id, done) {
      var user;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = _user2.default.findById(id);

              if (user) {
                done(null, user);
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  app.use("/api-docs", _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, {
    explorer: true
  }));

  app.get("/failure", function (req, res) {
    return res.redirect(_development.devConfig.appDomain + "/login");
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvZ2xvYmFsLW1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsic2V0R2xvYmFsTWlkZGxld2FyZSIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic2VjcmV0IiwiZGV2Q29uZmlnIiwicmVzYXZlIiwic2F2ZVVuaW5pdGlhbGl6ZWQiLCJwYXNzcG9ydCIsImluaXRpYWxpemUiLCJ1c2VyUHJvcGVydHkiLCJzZXNzaW9uIiwic2VyaWFsaXplVXNlciIsInVzZXIiLCJkb25lIiwiX2lkIiwiZGVzZXJpYWxpemVVc2VyIiwiaWQiLCJVc2VyIiwiZmluZEJ5SWQiLCJzd2FnZ2VyVWkiLCJzZXJ2ZSIsInNldHVwIiwic3dhZ2dlckRvY3VtZW50IiwiZXhwbG9yZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJyZWRpcmVjdCIsImFwcERvbWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsb0RBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsR0FBRCxFQUFTO0FBQzFDQSxNQUFJQyxHQUFKLENBQVFDLGtCQUFRQyxJQUFSLEVBQVI7QUFDQUgsTUFBSUMsR0FBSixDQUFRQyxrQkFBUUUsVUFBUixDQUFtQixFQUFFQyxVQUFVLElBQVosRUFBbkIsQ0FBUjtBQUNBTCxNQUFJQyxHQUFKLENBQVEscUJBQVI7QUFDQUQsTUFBSUMsR0FBSixDQUFRLHNCQUFPLEtBQVAsQ0FBUjtBQUNBRCxNQUFJQyxHQUFKLENBQ0UsOEJBQVE7QUFDTkssWUFBUUMsdUJBQVVELE1BRFo7QUFFTkUsWUFBUSxJQUZGO0FBR05DLHVCQUFtQjtBQUhiLEdBQVIsQ0FERjtBQU9BVCxNQUFJQyxHQUFKLENBQVFTLG1CQUFTQyxVQUFULENBQW9CLEVBQUVDLGNBQWMsYUFBaEIsRUFBcEIsQ0FBUjtBQUNBWixNQUFJQyxHQUFKLENBQVFTLG1CQUFTRyxPQUFULEVBQVI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUgscUJBQVNJLGFBQVQsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ3JDQSxTQUFLLElBQUwsRUFBV0QsS0FBS0UsR0FBaEI7QUFDRCxHQUZEOztBQUlBO0FBQ0FQLHFCQUFTUSxlQUFUO0FBQUEsd0ZBQXlCLGlCQUFPQyxFQUFQLEVBQVdILElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCRCxrQkFEaUIsR0FDVkssZUFBS0MsUUFBTCxDQUFjRixFQUFkLENBRFU7O0FBRXZCLGtCQUFJSixJQUFKLEVBQVU7QUFDUkMscUJBQUssSUFBTCxFQUFXRCxJQUFYO0FBQ0Q7O0FBSnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU9BZixNQUFJQyxHQUFKLENBQ0UsV0FERixFQUVFcUIsMkJBQVVDLEtBRlosRUFHRUQsMkJBQVVFLEtBQVYsQ0FBZ0JDLGlCQUFoQixFQUFpQztBQUMvQkMsY0FBVTtBQURxQixHQUFqQyxDQUhGOztBQVFBMUIsTUFBSTJCLEdBQUosQ0FBUSxVQUFSLEVBQW9CLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2hDLFdBQU9BLElBQUlDLFFBQUosQ0FBZ0J2Qix1QkFBVXdCLFNBQTFCLFlBQVA7QUFDRCxHQUZEO0FBR0QsQ0ExQ00iLCJmaWxlIjoiZ2xvYmFsLW1pZGRsZXdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJtb3JnYW5cIjtcclxuaW1wb3J0IHN3YWdnZXJVaSBmcm9tIFwic3dhZ2dlci11aS1leHByZXNzXCI7XHJcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tIFwicGFzc3BvcnRcIjtcclxuaW1wb3J0IHNlc3Npb24gZnJvbSBcImV4cHJlc3Mtc2Vzc2lvblwiO1xyXG5cclxuaW1wb3J0IHN3YWdnZXJEb2N1bWVudCBmcm9tIFwiLi4vLi4vY29uZmlnL3N3YWdnZXIuanNvblwiO1xyXG5pbXBvcnQgeyBjb25maWd1cmVKV1RTdHJhdGVneSB9IGZyb20gXCIuL3Bhc3Nwb3J0LWp3dFwiO1xyXG5pbXBvcnQgeyBjb25maWd1cmVHb29nbGVTdHJhdGVneSB9IGZyb20gXCIuL3Bhc3Nwb3J0LWdvb2dsZVwiO1xyXG5pbXBvcnQgeyBjb25maWd1cmVHaXRodWJTdHJhdGVneSB9IGZyb20gXCIuL3Bhc3Nwb3J0LWdpdGh1YlwiO1xyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbE1pZGRsZXdhcmUgPSAoYXBwKSA9PiB7XHJcbiAgYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbiAgYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XHJcbiAgYXBwLnVzZShjb3JzKCkpO1xyXG4gIGFwcC51c2UobG9nZ2VyKFwiZGV2XCIpKTtcclxuICBhcHAudXNlKFxyXG4gICAgc2Vzc2lvbih7XHJcbiAgICAgIHNlY3JldDogZGV2Q29uZmlnLnNlY3JldCxcclxuICAgICAgcmVzYXZlOiB0cnVlLFxyXG4gICAgICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcclxuICAgIH0pXHJcbiAgKTtcclxuICBhcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoeyB1c2VyUHJvcGVydHk6IFwiY3VycmVudFVzZXJcIiB9KSk7XHJcbiAgYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xyXG4gIGNvbmZpZ3VyZUpXVFN0cmF0ZWd5KCk7XHJcbiAgY29uZmlndXJlR29vZ2xlU3RyYXRlZ3koKTtcclxuICBjb25maWd1cmVHaXRodWJTdHJhdGVneSgpO1xyXG5cclxuICAvLyBzYXZlIHVzZXIgaW50byBzZXNzaW9uXHJcbiAgcGFzc3BvcnQuc2VyaWFsaXplVXNlcigodXNlciwgZG9uZSkgPT4ge1xyXG4gICAgZG9uZShudWxsLCB1c2VyLl9pZCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGV4dHJhY3QgdGhlIHVzZXJJZCBmcm9tIHNlc3Npb25cclxuICBwYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoYXN5bmMgKGlkLCBkb25lKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gVXNlci5maW5kQnlJZChpZCk7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBkb25lKG51bGwsIHVzZXIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBhcHAudXNlKFxyXG4gICAgXCIvYXBpLWRvY3NcIixcclxuICAgIHN3YWdnZXJVaS5zZXJ2ZSxcclxuICAgIHN3YWdnZXJVaS5zZXR1cChzd2FnZ2VyRG9jdW1lbnQsIHtcclxuICAgICAgZXhwbG9yZXI6IHRydWUsXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGFwcC5nZXQoXCIvZmFpbHVyZVwiLCAocmVxLCByZXMpID0+IHtcclxuICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7ZGV2Q29uZmlnLmFwcERvbWFpbn0vbG9naW5gKTtcclxuICB9KTtcclxufTtcclxuIl19