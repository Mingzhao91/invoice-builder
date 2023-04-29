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
  }
});

invoiceSchema.plugin(_mongoosePaginateV2.default);
exports.default = _mongoose2.default.model("Invoice", invoiceSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2ludm9pY2UubW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJpbnZvaWNlU2NoZW1hIiwiaXRlbSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInF0eSIsIk51bWJlciIsImRhdGUiLCJEYXRlIiwiZHVlIiwicmF0ZSIsInRheCIsInBsdWdpbiIsIm1vbmdvb3NlUGFnaW5hdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRVFBLE0sR0FBV0Msa0IsQ0FBWEQsTTs7QUFDUixJQUFNRSxnQkFBZ0IsSUFBSUYsTUFBSixDQUFXO0FBQy9CRyxRQUFNO0FBQ0pDLFVBQU1DLE1BREY7QUFFSkMsY0FBVTtBQUZOLEdBRHlCO0FBSy9CQyxPQUFLO0FBQ0hILFVBQU1JO0FBREgsR0FMMEI7QUFRL0JDLFFBQU07QUFDSkwsVUFBTU07QUFERixHQVJ5QjtBQVcvQkMsT0FBSztBQUNIUCxVQUFNTTtBQURILEdBWDBCO0FBYy9CRSxRQUFNO0FBQ0pSLFVBQU1JO0FBREYsR0FkeUI7QUFpQi9CSyxPQUFLO0FBQ0hULFVBQU1JO0FBREg7QUFqQjBCLENBQVgsQ0FBdEI7O0FBc0JBTixjQUFjWSxNQUFkLENBQXFCQywyQkFBckI7a0JBQ2VkLG1CQUFTZSxLQUFULENBQWUsU0FBZixFQUEwQmQsYUFBMUIsQyIsImZpbGUiOiJpbnZvaWNlLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgbW9uZ29vc2VQYWdpbmF0ZSBmcm9tIFwibW9uZ29vc2UtcGFnaW5hdGUtdjJcIjtcclxuXHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuY29uc3QgaW52b2ljZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIGl0ZW06IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgcXR5OiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gIH0sXHJcbiAgZHVlOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gIH0sXHJcbiAgcmF0ZToge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gIH0sXHJcbiAgdGF4OiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5pbnZvaWNlU2NoZW1hLnBsdWdpbihtb25nb29zZVBhZ2luYXRlKTtcclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJJbnZvaWNlXCIsIGludm9pY2VTY2hlbWEpO1xyXG4iXX0=