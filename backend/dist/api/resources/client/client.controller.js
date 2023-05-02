"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _httpStatusCodes = require("http-status-codes");

var _client = require("./client.service");

var _client2 = _interopRequireDefault(_client);

var _client3 = require("./client.model");

var _client4 = _interopRequireDefault(_client3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _clientService$valida, value, error, client;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _clientService$valida = _client2.default.validateCreateSchema(req.body), value = _clientService$valida.value, error = _clientService$valida.error;

              if (!error) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json(error));

            case 4:
              _context.next = 6;
              return _client4.default.create(value);

            case 6:
              client = _context.sent;
              return _context.abrupt("return", res.json(client));

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

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  findAll: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var client;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _client4.default.find();

            case 3:
              client = _context2.sent;
              return _context2.abrupt("return", res.json(client));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));

    function findAll(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return findAll;
  }(),
  findOne: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var id, client;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _client4.default.findById(id);

            case 4:
              client = _context3.sent;

              if (client) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({ err: "Could not find a client" }));

            case 7:
              return _context3.abrupt("return", res.json(client));

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(_context3.t0));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 10]]);
    }));

    function findOne(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return findOne;
  }(),
  delete: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var id, client;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _client4.default.findByIdAndRemove(id);

            case 4:
              client = _context4.sent;

              if (client) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({ err: "Conld not delete a client" }));

            case 7:
              return _context4.abrupt("return", res.json(client));

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(_context4.t0));

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 10]]);
    }));

    function _delete(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return _delete;
  }(),
  update: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var _clientService$valida2, value, error, id, client;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _clientService$valida2 = _client2.default.validateCreateSchema(req.body), value = _clientService$valida2.value, error = _clientService$valida2.error;

              if (!error) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json(error));

            case 4:
              id = req.params.id;
              _context5.next = 7;
              return _client4.default.findByIdAndUpdate(id, value, { new: true });

            case 7:
              client = _context5.sent;

              if (client) {
                _context5.next = 10;
                break;
              }

              return _context5.abrupt("return", res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({ err: "Could not update client" }));

            case 10:
              return _context5.abrupt("return", res.json(client));

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](0);

              res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR);

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 13]]);
    }));

    function update(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return update;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJyZXEiLCJyZXMiLCJjbGllbnRTZXJ2aWNlIiwidmFsaWRhdGVDcmVhdGVTY2hlbWEiLCJib2R5IiwidmFsdWUiLCJlcnJvciIsInN0YXR1cyIsIlN0YXR1c0NvZGVzIiwiQkFEX1JFUVVFU1QiLCJqc29uIiwiQ2xpZW50IiwiY2xpZW50IiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiZmluZEFsbCIsImZpbmQiLCJmaW5kT25lIiwiaWQiLCJwYXJhbXMiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsImVyciIsImRlbGV0ZSIsImZpbmRCeUlkQW5kUmVtb3ZlIiwidXBkYXRlIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJuZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ1BBLFFBRE87QUFBQSx5R0FDQUMsR0FEQSxFQUNLQyxHQURMO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUdnQkMsaUJBQWNDLG9CQUFkLENBQW1DSCxJQUFJSSxJQUF2QyxDQUhoQixFQUdEQyxLQUhDLHlCQUdEQSxLQUhDLEVBR01DLEtBSE4seUJBR01BLEtBSE47O0FBQUEsbUJBSUxBLEtBSks7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBS0FMLElBQUlNLE1BQUosQ0FBV0MsNkJBQVlDLFdBQXZCLEVBQW9DQyxJQUFwQyxDQUF5Q0osS0FBekMsQ0FMQTs7QUFBQTtBQUFBO0FBQUEscUJBUVlLLGlCQUFPWixNQUFQLENBQWNNLEtBQWQsQ0FSWjs7QUFBQTtBQVFITyxvQkFSRztBQUFBLCtDQVNGWCxJQUFJUyxJQUFKLENBQVNFLE1BQVQsQ0FURTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FXRlgsSUFBSU0sTUFBSixDQUFXQyw2QkFBWUsscUJBQXZCLEVBQThD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N0IsRUFBb0MsRUFBRXFCLEtBQUssSUFBUCxFQUFwQyxDQWpFWjs7QUFBQTtBQWlFSGQsb0JBakVHOztBQUFBLGtCQW1FSkEsTUFuRUk7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBb0VBWCxJQUNKTSxNQURJLENBQ0dDLDZCQUFZWSxTQURmLEVBRUpWLElBRkksQ0FFQyxFQUFFVyxLQUFLLHlCQUFQLEVBRkQsQ0FwRUE7O0FBQUE7QUFBQSxnREF3RUZwQixJQUFJUyxJQUFKLENBQVNFLE1BQVQsQ0F4RUU7O0FBQUE7QUFBQTtBQUFBOztBQTBFVFgsa0JBQUlNLE1BQUosQ0FBV0MsNkJBQVlLLHFCQUF2Qjs7QUExRVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6ImNsaWVudC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcclxuXHJcbmltcG9ydCBjbGllbnRTZXJ2aWNlIGZyb20gXCIuL2NsaWVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBDbGllbnQgZnJvbSBcIi4vY2xpZW50Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYXN5bmMgY3JlYXRlKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gY2xpZW50U2VydmljZS52YWxpZGF0ZUNyZWF0ZVNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmNyZWF0ZSh2YWx1ZSk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjbGllbnQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGZpbmRBbGwocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5maW5kKCk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjbGllbnQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGZpbmRPbmUocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5maW5kQnlJZChpZCk7XHJcblxyXG4gICAgICBpZiAoIWNsaWVudCkge1xyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgIC5zdGF0dXMoU3RhdHVzQ29kZXMuTk9UX0ZPVU5EKVxyXG4gICAgICAgICAgLmpzb24oeyBlcnI6IFwiQ291bGQgbm90IGZpbmQgYSBjbGllbnRcIiB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGNsaWVudCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgZGVsZXRlKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuZmluZEJ5SWRBbmRSZW1vdmUoaWQpO1xyXG5cclxuICAgICAgaWYgKCFjbGllbnQpIHtcclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAuc3RhdHVzKFN0YXR1c0NvZGVzLk5PVF9GT1VORClcclxuICAgICAgICAgIC5qc29uKHsgZXJyOiBcIkNvbmxkIG5vdCBkZWxldGUgYSBjbGllbnRcIiB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGNsaWVudCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHZhbHVlLCBlcnJvciB9ID0gY2xpZW50U2VydmljZS52YWxpZGF0ZUNyZWF0ZVNjaGVtYShyZXEuYm9keSk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHZhbHVlLCB7IG5ldzogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIGlmICghY2xpZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cyhTdGF0dXNDb2Rlcy5OT1RfRk9VTkQpXHJcbiAgICAgICAgICAuanNvbih7IGVycjogXCJDb3VsZCBub3QgdXBkYXRlIGNsaWVudFwiIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjbGllbnQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKTtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iXX0=