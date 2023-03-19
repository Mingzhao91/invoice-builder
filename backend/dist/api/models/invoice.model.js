"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var invoiceSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  },
  date: {
    type: Date
  },
  due: {
    type: Date
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  }
});

exports.default = _mongoose2.default.model("Invoice", invoiceSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2ludm9pY2UubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJpbnZvaWNlU2NoZW1hIiwiaXRlbSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInF0eSIsIk51bWJlciIsImRhdGUiLCJEYXRlIiwiZHVlIiwicmF0ZSIsInRheCIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0lBQ1FBLE0sR0FBV0Msa0IsQ0FBWEQsTTs7QUFDUixJQUFNRSxnQkFBZ0IsSUFBSUYsTUFBSixDQUFXO0FBQy9CRyxRQUFNO0FBQ0pDLFVBQU1DLE1BREY7QUFFSkMsY0FBVTtBQUZOLEdBRHlCO0FBSy9CQyxPQUFLO0FBQ0hILFVBQU1JO0FBREgsR0FMMEI7QUFRL0JDLFFBQU07QUFDSkwsVUFBTU07QUFERixHQVJ5QjtBQVcvQkMsT0FBSztBQUNIUCxVQUFNTTtBQURILEdBWDBCO0FBYy9CRSxRQUFNO0FBQ0pSLFVBQU1JO0FBREYsR0FkeUI7QUFpQi9CSyxPQUFLO0FBQ0hULFVBQU1JO0FBREg7QUFqQjBCLENBQVgsQ0FBdEI7O2tCQXNCZVAsbUJBQVNhLEtBQVQsQ0FBZSxTQUFmLEVBQTBCWixhQUExQixDIiwiZmlsZSI6Imludm9pY2UubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuY29uc3QgaW52b2ljZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIGl0ZW06IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgcXR5OiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gIH0sXHJcbiAgZHVlOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gIH0sXHJcbiAgcmF0ZToge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gIH0sXHJcbiAgdGF4OiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIkludm9pY2VcIiwgaW52b2ljZVNjaGVtYSk7XHJcbiJdfQ==