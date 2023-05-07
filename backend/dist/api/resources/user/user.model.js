"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
  local: {
    email: String,
    password: String
  },
  google: {
    email: String,
    id: String,
    displayName: String,
    token: String
  },
  github: {
    email: String,
    id: String,
    displayName: String,
    token: String
  }
});

exports.default = _mongoose2.default.model("User", UserSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsIlVzZXJTY2hlbWEiLCJsb2NhbCIsImVtYWlsIiwiU3RyaW5nIiwicGFzc3dvcmQiLCJnb29nbGUiLCJpZCIsImRpc3BsYXlOYW1lIiwidG9rZW4iLCJnaXRodWIiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztJQUVRQSxNLEdBQVdDLGtCLENBQVhELE07O0FBQ1IsSUFBTUUsYUFBYSxJQUFJRixNQUFKLENBQVc7QUFDNUJHLFNBQU87QUFDTEMsV0FBT0MsTUFERjtBQUVMQyxjQUFVRDtBQUZMLEdBRHFCO0FBSzVCRSxVQUFRO0FBQ05ILFdBQU9DLE1BREQ7QUFFTkcsUUFBSUgsTUFGRTtBQUdOSSxpQkFBYUosTUFIUDtBQUlOSyxXQUFPTDtBQUpELEdBTG9CO0FBVzVCTSxVQUFRO0FBQ05QLFdBQU9DLE1BREQ7QUFFTkcsUUFBSUgsTUFGRTtBQUdOSSxpQkFBYUosTUFIUDtBQUlOSyxXQUFPTDtBQUpEO0FBWG9CLENBQVgsQ0FBbkI7O2tCQW1CZUosbUJBQVNXLEtBQVQsQ0FBZSxNQUFmLEVBQXVCVixVQUF2QixDIiwiZmlsZSI6InVzZXIubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBsb2NhbDoge1xyXG4gICAgZW1haWw6IFN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBTdHJpbmcsXHJcbiAgfSxcclxuICBnb29nbGU6IHtcclxuICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICBpZDogU3RyaW5nLFxyXG4gICAgZGlzcGxheU5hbWU6IFN0cmluZyxcclxuICAgIHRva2VuOiBTdHJpbmcsXHJcbiAgfSxcclxuICBnaXRodWI6IHtcclxuICAgIGVtYWlsOiBTdHJpbmcsXHJcbiAgICBpZDogU3RyaW5nLFxyXG4gICAgZGlzcGxheU5hbWU6IFN0cmluZyxcclxuICAgIHRva2VuOiBTdHJpbmcsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XHJcbiJdfQ==