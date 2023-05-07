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
      var _userService$validate, value, error, existingUser, user, salt, hash;

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
              return _user4.default.findOne({ "local.email": value.email });

            case 6:
              existingUser = _context.sent;

              if (!existingUser) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({ err: "You have already created an account" }));

            case 9:
              _context.next = 11;
              return new _user4.default();

            case 11:
              user = _context.sent;

              user.local.email = value.email;
              _context.next = 15;
              return _bcryptjs2.default.genSalt();

            case 15:
              salt = _context.sent;
              _context.next = 18;
              return _bcryptjs2.default.hash(value.password, salt);

            case 18:
              hash = _context.sent;

              user.local.password = hash;
              _context.next = 22;
              return user.save();

            case 22:
              return _context.abrupt("return", res.json({ success: true, message: "User created successfully" }));

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(_context.t0));

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 25]]);
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
              return _user4.default.findOne({ "local.email": value.email });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json({ err: "Invalid emai or password." }));

            case 9:
              _context2.next = 11;
              return _bcryptjs2.default.compare(value.password, user.local.password);

            case 11:
              matched = _context2.sent;


              if (!matched) {
                res.status(_httpStatusCodes.StatusCodes.UNAUTHORIZED).json({ err: "invalid credential" });
              }
              token = _jsonwebtoken2.default.sign({ id: user._id }, _development.devConfig.secret, {
                expiresIn: "1d"
              });
              return _context2.abrupt("return", res.json({ success: true, token: token }));

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 17]]);
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
              return _context3.abrupt("return", res.json(req.currentUser));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsInJlcSIsInJlcyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGVTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsInN0YXR1cyIsIlN0YXR1c0NvZGVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwiVXNlciIsImZpbmRPbmUiLCJlbWFpbCIsImV4aXN0aW5nVXNlciIsImVyciIsInVzZXIiLCJsb2NhbCIsImJjcnlwdGpzIiwiZ2VuU2FsdCIsInNhbHQiLCJoYXNoIiwicGFzc3dvcmQiLCJzYXZlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJsb2dpbiIsImNvbXBhcmUiLCJtYXRjaGVkIiwiVU5BVVRIT1JJWkVEIiwidG9rZW4iLCJqd3QiLCJzaWduIiwiaWQiLCJfaWQiLCJkZXZDb25maWciLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJ0ZXN0IiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztrQkFFZTtBQUNQQSxRQURPO0FBQUEseUdBQ0FDLEdBREEsRUFDS0MsR0FETDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FHZ0JDLGVBQVlDLGNBQVosQ0FBMkJILElBQUlJLElBQS9CLENBSGhCLEVBR0RDLEtBSEMseUJBR0RBLEtBSEMsRUFHTUMsS0FITix5QkFHTUEsS0FITjs7QUFBQSxtQkFJTEEsS0FKSztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FLQUwsSUFBSU0sTUFBSixDQUFXQyw2QkFBWUMsV0FBdkIsRUFBb0NDLElBQXBDLENBQXlDSixLQUF6QyxDQUxBOztBQUFBO0FBQUE7QUFBQSxxQkFRa0JLLGVBQUtDLE9BQUwsQ0FBYSxFQUFFLGVBQWVQLE1BQU1RLEtBQXZCLEVBQWIsQ0FSbEI7O0FBQUE7QUFRSEMsMEJBUkc7O0FBQUEsbUJBVUxBLFlBVks7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBV0FiLElBQ0pNLE1BREksQ0FDR0MsNkJBQVlDLFdBRGYsRUFFSkMsSUFGSSxDQUVDLEVBQUVLLEtBQUsscUNBQVAsRUFGRCxDQVhBOztBQUFBO0FBQUE7QUFBQSxxQkFnQlUsSUFBSUosY0FBSixFQWhCVjs7QUFBQTtBQWdCSEssa0JBaEJHOztBQWlCVEEsbUJBQUtDLEtBQUwsQ0FBV0osS0FBWCxHQUFtQlIsTUFBTVEsS0FBekI7QUFqQlM7QUFBQSxxQkFrQlVLLG1CQUFTQyxPQUFULEVBbEJWOztBQUFBO0FBa0JIQyxrQkFsQkc7QUFBQTtBQUFBLHFCQW1CVUYsbUJBQVNHLElBQVQsQ0FBY2hCLE1BQU1pQixRQUFwQixFQUE4QkYsSUFBOUIsQ0FuQlY7O0FBQUE7QUFtQkhDLGtCQW5CRzs7QUFvQlRMLG1CQUFLQyxLQUFMLENBQVdLLFFBQVgsR0FBc0JELElBQXRCO0FBcEJTO0FBQUEscUJBcUJITCxLQUFLTyxJQUFMLEVBckJHOztBQUFBO0FBQUEsK0NBdUJGdEIsSUFBSVMsSUFBSixDQUFTLEVBQUVjLFNBQVMsSUFBWCxFQUFpQkMsU0FBUywyQkFBMUIsRUFBVCxDQXZCRTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0F5QkZ4QixJQUFJTSxNQUFKLENBQVdDLDZCQUFZa0IscUJBQXZCLEVBQThDaEIsSUFBOUMsYUF6QkU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUE2QlBpQixPQTdCTztBQUFBLDJHQTZCRDNCLEdBN0JDLEVBNkJJQyxHQTdCSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0ErQmdCQyxlQUFZQyxjQUFaLENBQTJCSCxJQUFJSSxJQUEvQixDQS9CaEIsRUErQkRDLEtBL0JDLDBCQStCREEsS0EvQkMsRUErQk1DLEtBL0JOLDBCQStCTUEsS0EvQk47O0FBQUEsbUJBZ0NMQSxLQWhDSztBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFpQ0FMLElBQUlNLE1BQUosQ0FBV0MsNkJBQVlDLFdBQXZCLEVBQW9DQyxJQUFwQyxDQUF5Q0osS0FBekMsQ0FqQ0E7O0FBQUE7QUFBQTtBQUFBLHFCQW9DVUssZUFBS0MsT0FBTCxDQUFhLEVBQUUsZUFBZVAsTUFBTVEsS0FBdkIsRUFBYixDQXBDVjs7QUFBQTtBQW9DSEcsa0JBcENHOztBQUFBLGtCQXNDSkEsSUF0Q0k7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBdUNBZixJQUNKTSxNQURJLENBQ0dDLDZCQUFZQyxXQURmLEVBRUpDLElBRkksQ0FFQyxFQUFFSyxLQUFLLDJCQUFQLEVBRkQsQ0F2Q0E7O0FBQUE7QUFBQTtBQUFBLHFCQTRDYUcsbUJBQVNVLE9BQVQsQ0FDcEJ2QixNQUFNaUIsUUFEYyxFQUVwQk4sS0FBS0MsS0FBTCxDQUFXSyxRQUZTLENBNUNiOztBQUFBO0FBNENITyxxQkE1Q0c7OztBQWlEVCxrQkFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWjVCLG9CQUNHTSxNQURILENBQ1VDLDZCQUFZc0IsWUFEdEIsRUFFR3BCLElBRkgsQ0FFUSxFQUFFSyxLQUFLLG9CQUFQLEVBRlI7QUFHRDtBQUNLZ0IsbUJBdERHLEdBc0RLQyx1QkFBSUMsSUFBSixDQUFTLEVBQUVDLElBQUlsQixLQUFLbUIsR0FBWCxFQUFULEVBQTJCQyx1QkFBVUMsTUFBckMsRUFBNkM7QUFDekRDLDJCQUFXO0FBRDhDLGVBQTdDLENBdERMO0FBQUEsZ0RBMERGckMsSUFBSVMsSUFBSixDQUFTLEVBQUVjLFNBQVMsSUFBWCxFQUFpQk8sWUFBakIsRUFBVCxDQTFERTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnREE0REY5QixJQUFJTSxNQUFKLENBQVdDLDZCQUFZa0IscUJBQXZCLEVBQThDaEIsSUFBOUMsY0E1REU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFnRVA2QixNQWhFTztBQUFBLDJHQWdFRnZDLEdBaEVFLEVBZ0VHQyxHQWhFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBaUVKQSxJQUFJUyxJQUFKLENBQVNWLElBQUl3QyxXQUFiLENBakVJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJ1c2VyLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5cclxuaW1wb3J0IHVzZXJTZXJ2aWNlIGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IGRldkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvZW52L2RldmVsb3BtZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYXN5bmMgc2lnbnVwKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gdXNlclNlcnZpY2UudmFsaWRhdGVTY2hlbWEocmVxLmJvZHkpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyhTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCkuanNvbihlcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFwibG9jYWwuZW1haWxcIjogdmFsdWUuZW1haWwgfSk7XHJcblxyXG4gICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cyhTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVClcclxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcIllvdSBoYXZlIGFscmVhZHkgY3JlYXRlZCBhbiBhY2NvdW50XCIgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBuZXcgVXNlcigpO1xyXG4gICAgICB1c2VyLmxvY2FsLmVtYWlsID0gdmFsdWUuZW1haWw7XHJcbiAgICAgIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHRqcy5nZW5TYWx0KCk7XHJcbiAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHRqcy5oYXNoKHZhbHVlLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgICAgdXNlci5sb2NhbC5wYXNzd29yZCA9IGhhc2g7XHJcbiAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgbG9naW4ocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGVycm9yIH0gPSB1c2VyU2VydmljZS52YWxpZGF0ZVNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IFwibG9jYWwuZW1haWxcIjogdmFsdWUuZW1haWwgfSk7XHJcblxyXG4gICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKVxyXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiSW52YWxpZCBlbWFpIG9yIHBhc3N3b3JkLlwiIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBtYXRjaGVkID0gYXdhaXQgYmNyeXB0anMuY29tcGFyZShcclxuICAgICAgICB2YWx1ZS5wYXNzd29yZCxcclxuICAgICAgICB1c2VyLmxvY2FsLnBhc3N3b3JkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIW1hdGNoZWQpIHtcclxuICAgICAgICByZXNcclxuICAgICAgICAgIC5zdGF0dXMoU3RhdHVzQ29kZXMuVU5BVVRIT1JJWkVEKVxyXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiaW52YWxpZCBjcmVkZW50aWFsXCIgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IGlkOiB1c2VyLl9pZCB9LCBkZXZDb25maWcuc2VjcmV0LCB7XHJcbiAgICAgICAgZXhwaXJlc0luOiBcIjFkXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgdG9rZW4gfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgdGVzdChyZXEsIHJlcykge1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHJlcS5jdXJyZW50VXNlcik7XHJcbiAgfSxcclxufTtcclxuIl19