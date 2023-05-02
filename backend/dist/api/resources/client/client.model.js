"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var clientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

exports.default = _mongoose2.default.model("Client", clientSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJjbGllbnRTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImVtYWlsIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7SUFFUUEsTSxHQUFXQyxrQixDQUFYRCxNOztBQUNSLElBQU1FLGVBQWUsSUFBSUYsTUFBSixDQUFXO0FBQzlCRyxhQUFXO0FBQ1RDLFVBQU1DLE1BREc7QUFFVEMsY0FBVTtBQUZELEdBRG1CO0FBSzlCQyxZQUFVO0FBQ1JILFVBQU1DLE1BREU7QUFFUkMsY0FBVTtBQUZGLEdBTG9CO0FBUzlCRSxTQUFPO0FBQ0xKLFVBQU1DLE1BREQ7QUFFTEMsY0FBVTtBQUZMO0FBVHVCLENBQVgsQ0FBckI7O2tCQWVlTCxtQkFBU1EsS0FBVCxDQUFlLFFBQWYsRUFBeUJQLFlBQXpCLEMiLCJmaWxlIjoiY2xpZW50Lm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5jb25zdCBjbGllbnRTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBmaXJzdE5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgbGFzdE5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJDbGllbnRcIiwgY2xpZW50U2NoZW1hKTtcclxuIl19