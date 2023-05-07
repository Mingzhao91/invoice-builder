"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRounter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _user = require("./user.controller");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRounter = exports.userRounter = _express2.default.Router();

userRounter.post("/signup", _user2.default.signup);
userRounter.post("/login", _user2.default.login);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5yb3V0ZXIuanMiXSwibmFtZXMiOlsidXNlclJvdW50ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsInVzZXJDb250cm9sbGVyIiwic2lnbnVwIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxvQ0FBY0Msa0JBQVFDLE1BQVIsRUFBcEI7O0FBRVBGLFlBQVlHLElBQVosQ0FBaUIsU0FBakIsRUFBNEJDLGVBQWVDLE1BQTNDO0FBQ0FMLFlBQVlHLElBQVosQ0FBaUIsUUFBakIsRUFBMkJDLGVBQWVFLEtBQTFDIiwiZmlsZSI6InVzZXIucm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHVzZXJDb250cm9sbGVyIGZyb20gXCIuL3VzZXIuY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSb3VudGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnVzZXJSb3VudGVyLnBvc3QoXCIvc2lnbnVwXCIsIHVzZXJDb250cm9sbGVyLnNpZ251cCk7XHJcbnVzZXJSb3VudGVyLnBvc3QoXCIvbG9naW5cIiwgdXNlckNvbnRyb2xsZXIubG9naW4pO1xyXG4iXX0=