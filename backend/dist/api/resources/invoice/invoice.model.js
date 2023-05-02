"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginateV = require("mongoose-paginate-v2");

var _mongoosePaginateV2 = _interopRequireDefault(_mongoosePaginateV);

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
  },
  client: {
    ref: "Client",
    type: Schema.Types.ObjectId,
    required: true
  }
});

invoiceSchema.plugin(_mongoosePaginateV2.default);
exports.default = _mongoose2.default.model("Invoice", invoiceSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsImludm9pY2VTY2hlbWEiLCJpdGVtIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicXR5IiwiTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJkdWUiLCJyYXRlIiwidGF4IiwiY2xpZW50IiwicmVmIiwiVHlwZXMiLCJPYmplY3RJZCIsInBsdWdpbiIsIm1vbmdvb3NlUGFnaW5hdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRVFBLE0sR0FBV0Msa0IsQ0FBWEQsTTs7QUFDUixJQUFNRSxnQkFBZ0IsSUFBSUYsTUFBSixDQUFXO0FBQy9CRyxRQUFNO0FBQ0pDLFVBQU1DLE1BREY7QUFFSkMsY0FBVTtBQUZOLEdBRHlCO0FBSy9CQyxPQUFLO0FBQ0hILFVBQU1JO0FBREgsR0FMMEI7QUFRL0JDLFFBQU07QUFDSkwsVUFBTU07QUFERixHQVJ5QjtBQVcvQkMsT0FBSztBQUNIUCxVQUFNTTtBQURILEdBWDBCO0FBYy9CRSxRQUFNO0FBQ0pSLFVBQU1JO0FBREYsR0FkeUI7QUFpQi9CSyxPQUFLO0FBQ0hULFVBQU1JO0FBREgsR0FqQjBCO0FBb0IvQk0sVUFBUTtBQUNOQyxTQUFLLFFBREM7QUFFTlgsVUFBTUosT0FBT2dCLEtBQVAsQ0FBYUMsUUFGYjtBQUdOWCxjQUFVO0FBSEo7QUFwQnVCLENBQVgsQ0FBdEI7O0FBMkJBSixjQUFjZ0IsTUFBZCxDQUFxQkMsMkJBQXJCO2tCQUNlbEIsbUJBQVNtQixLQUFULENBQWUsU0FBZixFQUEwQmxCLGFBQTFCLEMiLCJmaWxlIjoiaW52b2ljZS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IG1vbmdvb3NlUGFnaW5hdGUgZnJvbSBcIm1vbmdvb3NlLXBhZ2luYXRlLXYyXCI7XHJcblxyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcbmNvbnN0IGludm9pY2VTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBpdGVtOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG4gIHF0eToge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gIH0sXHJcbiAgZGF0ZToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICB9LFxyXG4gIGR1ZToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICB9LFxyXG4gIHJhdGU6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICB9LFxyXG4gIHRheDoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gIH0sXHJcbiAgY2xpZW50OiB7XHJcbiAgICByZWY6IFwiQ2xpZW50XCIsXHJcbiAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICB9LFxyXG59KTtcclxuXHJcbmludm9pY2VTY2hlbWEucGx1Z2luKG1vbmdvb3NlUGFnaW5hdGUpO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIkludm9pY2VcIiwgaW52b2ljZVNjaGVtYSk7XHJcbiJdfQ==