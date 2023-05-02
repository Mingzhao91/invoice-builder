"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateCreateSchema: function validateCreateSchema(body) {
    var schema = _joi2.default.object({
      firstName: _joi2.default.string().required(),
      lastName: _joi2.default.string().required(),
      email: _joi2.default.string().email().required()
    });

    var _schema$validate = schema.validate(body),
        error = _schema$validate.error,
        value = _schema$validate.value;

    if (error) {
      return { error: error };
    }
    return { value: value };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NsaWVudC9jbGllbnQuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUNyZWF0ZVNjaGVtYSIsImJvZHkiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJmaXJzdE5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwiZW1haWwiLCJ2YWxpZGF0ZSIsImVycm9yIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsc0JBRGEsZ0NBQ1FDLElBRFIsRUFDYztBQUN6QixRQUFNQyxTQUFTQyxjQUFJQyxNQUFKLENBQVc7QUFDeEJDLGlCQUFXRixjQUFJRyxNQUFKLEdBQWFDLFFBQWIsRUFEYTtBQUV4QkMsZ0JBQVVMLGNBQUlHLE1BQUosR0FBYUMsUUFBYixFQUZjO0FBR3hCRSxhQUFPTixjQUFJRyxNQUFKLEdBQWFHLEtBQWIsR0FBcUJGLFFBQXJCO0FBSGlCLEtBQVgsQ0FBZjs7QUFEeUIsMkJBT0FMLE9BQU9RLFFBQVAsQ0FBZ0JULElBQWhCLENBUEE7QUFBQSxRQU9qQlUsS0FQaUIsb0JBT2pCQSxLQVBpQjtBQUFBLFFBT1ZDLEtBUFUsb0JBT1ZBLEtBUFU7O0FBUXpCLFFBQUlELEtBQUosRUFBVztBQUNULGFBQU8sRUFBRUEsWUFBRixFQUFQO0FBQ0Q7QUFDRCxXQUFPLEVBQUVDLFlBQUYsRUFBUDtBQUNEO0FBYlksQyIsImZpbGUiOiJjbGllbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZhbGlkYXRlQ3JlYXRlU2NoZW1hKGJvZHkpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgICBmaXJzdE5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBsYXN0TmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGVtYWlsOiBKb2kuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHNjaGVtYS52YWxpZGF0ZShib2R5KTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvciB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcclxuICB9LFxyXG59O1xyXG4iXX0=