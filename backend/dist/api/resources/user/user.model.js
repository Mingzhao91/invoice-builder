"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre("save", (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var salt, hash;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(this.isModified("password") || this.isNew)) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return _bcryptjs2.default.genSalt();

        case 3:
          salt = _context.sent;
          _context.next = 6;
          return _bcryptjs2.default.hash(this.password, salt);

        case 6:
          hash = _context.sent;

          this.password = hash;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));

exports.default = _mongoose2.default.model("User", UserSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxvd2VyY2FzZSIsInVuaXF1ZSIsInBhc3N3b3JkIiwicHJlIiwiaXNNb2RpZmllZCIsImlzTmV3IiwiYmNyeXB0anMiLCJnZW5TYWx0Iiwic2FsdCIsImhhc2giLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFUUEsTSxHQUFXQyxrQixDQUFYRCxNOztBQUNSLElBQU1FLGFBQWEsSUFBSUYsTUFBSixDQUFXO0FBQzVCRyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsY0FBVSxJQUZMO0FBR0xDLGVBQVcsSUFITjtBQUlMQyxZQUFRO0FBSkgsR0FEcUI7QUFPNUJDLFlBQVU7QUFDUkwsVUFBTUMsTUFERTtBQUVSQyxjQUFVO0FBRkY7QUFQa0IsQ0FBWCxDQUFuQjs7QUFhQUosV0FBV1EsR0FBWCxDQUFlLE1BQWYsMkVBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNqQixLQUFLQyxVQUFMLENBQWdCLFVBQWhCLEtBQStCLEtBQUtDLEtBRG5CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsaUJBRUFDLG1CQUFTQyxPQUFULEVBRkE7O0FBQUE7QUFFYkMsY0FGYTtBQUFBO0FBQUEsaUJBR0FGLG1CQUFTRyxJQUFULENBQWMsS0FBS1AsUUFBbkIsRUFBNkJNLElBQTdCLENBSEE7O0FBQUE7QUFHYkMsY0FIYTs7QUFJbkIsZUFBS1AsUUFBTCxHQUFnQk8sSUFBaEI7O0FBSm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCOztrQkFRZWYsbUJBQVNnQixLQUFULENBQWUsTUFBZixFQUF1QmYsVUFBdkIsQyIsImZpbGUiOiJ1c2VyLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgYmNyeXB0anMgZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBsb3dlcmNhc2U6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcblxyXG5Vc2VyU2NoZW1hLnByZShcInNhdmVcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLmlzTW9kaWZpZWQoXCJwYXNzd29yZFwiKSB8fCB0aGlzLmlzTmV3KSB7XHJcbiAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0anMuZ2VuU2FsdCgpO1xyXG4gICAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdGpzLmhhc2godGhpcy5wYXNzd29yZCwgc2FsdCk7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gaGFzaDtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG4iXX0=