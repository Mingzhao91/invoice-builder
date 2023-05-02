"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _httpStatusCodes = require("http-status-codes");

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require("./user.service");

var _user2 = _interopRequireDefault(_user);

var _user3 = require("./user.model");

var _user4 = _interopRequireDefault(_user3);

var _development = require("../../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signup: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _userService$validate, value, error, user;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validate = _user2.default.validateSchema(req.body), value = _userService$validate.value, error = _userService$validate.error;

              if (!error) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json(error));

            case 4:
              _context.next = 6;
              return _user4.default.create(value);

            case 6:
              user = _context.sent;
              return _context.abrupt("return", res.json({ success: true, message: "User create successfully" }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(_context.t0));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    }));

    function signup(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return signup;
  }(),
  login: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _userService$validate2, value, error, user, matched, token;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validate2 = _user2.default.validateSchema(req.body), value = _userService$validate2.value, error = _userService$validate2.error;

              if (!error) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json(error));

            case 4:
              _context2.next = 6;
              return _user4.default.findOne({ email: value.email });

            case 6:
              user = _context2.sent;


              console.log("user: ", user);

              if (user) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({ err: "Invalid emai or password." }));

            case 10:
              _context2.next = 12;
              return _bcryptjs2.default.compare(value.password, user.password);

            case 12:
              matched = _context2.sent;


              if (!matched) {
                res.status(_httpStatusCodes.StatusCodes.UNAUTHORIZED).json({ err: "invalid credential" });
              }
              token = _jsonwebtoken2.default.sign({ id: user._id }, _development.devConfig.secret, {
                expiresIn: "1d"
              });
              return _context2.abrupt("return", res.json({ success: true, token: token }));

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 18]]);
    }));

    function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return login;
  }(),
  test: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", res.json(req.user));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function test(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return test;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsInN0YXR1cyIsIlN0YXR1c0NvZGVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwiVXNlciIsImNyZWF0ZSIsInVzZXIiLCJzdWNjZXNzIiwibWVzc2FnZSIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImxvZ2luIiwiZmluZE9uZSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsImVyciIsImJjcnlwdGpzIiwiY29tcGFyZSIsInBhc3N3b3JkIiwibWF0Y2hlZCIsIlVOQVVUSE9SSVpFRCIsInRva2VuIiwiand0Iiwic2lnbiIsImlkIiwiX2lkIiwiZGV2Q29uZmlnIiwic2VjcmV0IiwiZXhwaXJlc0luIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O2tCQUVlO0FBQ1BBLFFBRE87QUFBQSx5R0FDQUMsR0FEQSxFQUNLQyxHQURMO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUdnQkMsZUFBWUMsY0FBWixDQUEyQkgsSUFBSUksSUFBL0IsQ0FIaEIsRUFHREMsS0FIQyx5QkFHREEsS0FIQyxFQUdNQyxLQUhOLHlCQUdNQSxLQUhOOztBQUFBLG1CQUlMQSxLQUpLO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUtBTCxJQUFJTSxNQUFKLENBQVdDLDZCQUFZQyxXQUF2QixFQUFvQ0MsSUFBcEMsQ0FBeUNKLEtBQXpDLENBTEE7O0FBQUE7QUFBQTtBQUFBLHFCQVFVSyxlQUFLQyxNQUFMLENBQVlQLEtBQVosQ0FSVjs7QUFBQTtBQVFIUSxrQkFSRztBQUFBLCtDQVNGWixJQUFJUyxJQUFKLENBQVMsRUFBRUksU0FBUyxJQUFYLEVBQWlCQyxTQUFTLDBCQUExQixFQUFULENBVEU7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBV0ZkLElBQUlNLE1BQUosQ0FBV0MsNkJBQVlRLHFCQUF2QixFQUE4Q04sSUFBOUMsYUFYRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWVQTyxPQWZPO0FBQUEsMkdBZURqQixHQWZDLEVBZUlDLEdBZko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBaUJnQkMsZUFBWUMsY0FBWixDQUEyQkgsSUFBSUksSUFBL0IsQ0FqQmhCLEVBaUJEQyxLQWpCQywwQkFpQkRBLEtBakJDLEVBaUJNQyxLQWpCTiwwQkFpQk1BLEtBakJOOztBQUFBLG1CQWtCTEEsS0FsQks7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBbUJBTCxJQUFJTSxNQUFKLENBQVdDLDZCQUFZQyxXQUF2QixFQUFvQ0MsSUFBcEMsQ0FBeUNKLEtBQXpDLENBbkJBOztBQUFBO0FBQUE7QUFBQSxxQkFzQlVLLGVBQUtPLE9BQUwsQ0FBYSxFQUFFQyxPQUFPZCxNQUFNYyxLQUFmLEVBQWIsQ0F0QlY7O0FBQUE7QUFzQkhOLGtCQXRCRzs7O0FBd0JUTyxzQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JSLElBQXRCOztBQXhCUyxrQkEwQkpBLElBMUJJO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQTJCQVosSUFDSk0sTUFESSxDQUNHQyw2QkFBWUMsV0FEZixFQUVKQyxJQUZJLENBRUMsRUFBRVksS0FBSywyQkFBUCxFQUZELENBM0JBOztBQUFBO0FBQUE7QUFBQSxxQkFnQ2FDLG1CQUFTQyxPQUFULENBQWlCbkIsTUFBTW9CLFFBQXZCLEVBQWlDWixLQUFLWSxRQUF0QyxDQWhDYjs7QUFBQTtBQWdDSEMscUJBaENHOzs7QUFrQ1Qsa0JBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1p6QixvQkFDR00sTUFESCxDQUNVQyw2QkFBWW1CLFlBRHRCLEVBRUdqQixJQUZILENBRVEsRUFBRVksS0FBSyxvQkFBUCxFQUZSO0FBR0Q7QUFDS00sbUJBdkNHLEdBdUNLQyx1QkFBSUMsSUFBSixDQUFTLEVBQUVDLElBQUlsQixLQUFLbUIsR0FBWCxFQUFULEVBQTJCQyx1QkFBVUMsTUFBckMsRUFBNkM7QUFDekRDLDJCQUFXO0FBRDhDLGVBQTdDLENBdkNMO0FBQUEsZ0RBMENGbEMsSUFBSVMsSUFBSixDQUFTLEVBQUVJLFNBQVMsSUFBWCxFQUFpQmMsWUFBakIsRUFBVCxDQTFDRTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREE0Q0YzQixJQUFJTSxNQUFKLENBQVdDLDZCQUFZUSxxQkFBdkIsRUFBOENOLElBQTlDLGNBNUNFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBZ0RQMEIsTUFoRE87QUFBQSwyR0FnREZwQyxHQWhERSxFQWdER0MsR0FoREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQWlESkEsSUFBSVMsSUFBSixDQUFTVixJQUFJYSxJQUFiLENBakRJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJ1c2VyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5cclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYXN5bmMgc2lnbnVwKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh2YWx1ZSk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiVXNlciBjcmVhdGUgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgbG9naW4ocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiB2YWx1ZS5lbWFpbCB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlcjogXCIsIHVzZXIpO1xyXG5cclxuICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cyhTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVClcclxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcIkludmFsaWQgZW1haSBvciBwYXNzd29yZC5cIiB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbWF0Y2hlZCA9IGF3YWl0IGJjcnlwdGpzLmNvbXBhcmUodmFsdWUucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgaWYgKCFtYXRjaGVkKSB7XHJcbiAgICAgICAgcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKFN0YXR1c0NvZGVzLlVOQVVUSE9SSVpFRClcclxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcImludmFsaWQgY3JlZGVudGlhbFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oeyBpZDogdXNlci5faWQgfSwgZGV2Q29uZmlnLnNlY3JldCwge1xyXG4gICAgICAgIGV4cGlyZXNJbjogXCIxZFwiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdG9rZW4gfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgdGVzdChyZXEsIHJlcykge1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHJlcS51c2VyKTtcclxuICB9LFxyXG59O1xyXG4iXX0=