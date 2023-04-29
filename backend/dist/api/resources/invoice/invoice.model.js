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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsImludm9pY2VTY2hlbWEiLCJpdGVtIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicXR5IiwiTnVtYmVyIiwiZGF0ZSIsIkRhdGUiLCJkdWUiLCJyYXRlIiwidGF4IiwicGx1Z2luIiwibW9uZ29vc2VQYWdpbmF0ZSIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFUUEsTSxHQUFXQyxrQixDQUFYRCxNOztBQUNSLElBQU1FLGdCQUFnQixJQUFJRixNQUFKLENBQVc7QUFDL0JHLFFBQU07QUFDSkMsVUFBTUMsTUFERjtBQUVKQyxjQUFVO0FBRk4sR0FEeUI7QUFLL0JDLE9BQUs7QUFDSEgsVUFBTUk7QUFESCxHQUwwQjtBQVEvQkMsUUFBTTtBQUNKTCxVQUFNTTtBQURGLEdBUnlCO0FBVy9CQyxPQUFLO0FBQ0hQLFVBQU1NO0FBREgsR0FYMEI7QUFjL0JFLFFBQU07QUFDSlIsVUFBTUk7QUFERixHQWR5QjtBQWlCL0JLLE9BQUs7QUFDSFQsVUFBTUk7QUFESDtBQWpCMEIsQ0FBWCxDQUF0Qjs7QUFzQkFOLGNBQWNZLE1BQWQsQ0FBcUJDLDJCQUFyQjtrQkFDZWQsbUJBQVNlLEtBQVQsQ0FBZSxTQUFmLEVBQTBCZCxhQUExQixDIiwiZmlsZSI6Imludm9pY2UubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBtb25nb29zZVBhZ2luYXRlIGZyb20gXCJtb25nb29zZS1wYWdpbmF0ZS12MlwiO1xyXG5cclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5jb25zdCBpbnZvaWNlU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgaXRlbToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBxdHk6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICB9LFxyXG4gIGRhdGU6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgfSxcclxuICBkdWU6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgfSxcclxuICByYXRlOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgfSxcclxuICB0YXg6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICB9LFxyXG59KTtcclxuXHJcbmludm9pY2VTY2hlbWEucGx1Z2luKG1vbmdvb3NlUGFnaW5hdGUpO1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIkludm9pY2VcIiwgaW52b2ljZVNjaGVtYSk7XHJcbiJdfQ==