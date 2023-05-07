"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _development = require("../../../config/env/development");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  sendJWTToken: function sendJWTToken(req, res) {
    var token = _jsonwebtoken2.default.sign({ id: req.currentUser._id }, _development.devConfig.secret, {
      expiresIn: "1d"
    });

    return res.json({ success: true, token: token });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbInNlbmRKV1RUb2tlbiIsInJlcSIsInJlcyIsInRva2VuIiwiand0Iiwic2lnbiIsImlkIiwiY3VycmVudFVzZXIiLCJfaWQiLCJkZXZDb25maWciLCJzZWNyZXQiLCJleHBpcmVzSW4iLCJqc29uIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztrQkFFZTtBQUNiQSxjQURhLHdCQUNBQyxHQURBLEVBQ0tDLEdBREwsRUFDVTtBQUNyQixRQUFNQyxRQUFRQyx1QkFBSUMsSUFBSixDQUFTLEVBQUVDLElBQUlMLElBQUlNLFdBQUosQ0FBZ0JDLEdBQXRCLEVBQVQsRUFBc0NDLHVCQUFVQyxNQUFoRCxFQUF3RDtBQUNwRUMsaUJBQVc7QUFEeUQsS0FBeEQsQ0FBZDs7QUFJQSxXQUFPVCxJQUFJVSxJQUFKLENBQVMsRUFBRUMsU0FBUyxJQUFYLEVBQWlCVixZQUFqQixFQUFULENBQVA7QUFDRDtBQVBZLEMiLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcblxyXG5pbXBvcnQgeyBkZXZDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2Vudi9kZXZlbG9wbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNlbmRKV1RUb2tlbihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IGlkOiByZXEuY3VycmVudFVzZXIuX2lkIH0sIGRldkNvbmZpZy5zZWNyZXQsIHtcclxuICAgICAgZXhwaXJlc0luOiBcIjFkXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCB0b2tlbiB9KTtcclxuICB9LFxyXG59O1xyXG4iXX0=