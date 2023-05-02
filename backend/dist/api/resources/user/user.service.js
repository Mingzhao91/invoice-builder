"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateSchema: function validateSchema(body) {
    var schema = _joi2.default.object({
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXIvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImVtYWlsIiwic3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiQSxnQkFEYSwwQkFDRUMsSUFERixFQUNRO0FBQ25CLFFBQU1DLFNBQVNDLGNBQUlDLE1BQUosQ0FBVztBQUN4QkMsYUFBT0YsY0FBSUcsTUFBSixHQUFhRCxLQUFiLEdBQXFCRSxRQUFyQixFQURpQjtBQUV4QkMsZ0JBQVVMLGNBQUlHLE1BQUosR0FBYUMsUUFBYjtBQUZjLEtBQVgsQ0FBZjs7QUFEbUIsMkJBTU1MLE9BQU9PLFFBQVAsQ0FBZ0JSLElBQWhCLENBTk47QUFBQSxRQU1YUyxLQU5XLG9CQU1YQSxLQU5XO0FBQUEsUUFNSkMsS0FOSSxvQkFNSkEsS0FOSTs7QUFPbkIsUUFBSUQsS0FBSixFQUFXO0FBQ1QsYUFBTyxFQUFFQSxZQUFGLEVBQVA7QUFDRDtBQUNELFdBQU8sRUFBRUMsWUFBRixFQUFQO0FBQ0Q7QUFaWSxDIiwiZmlsZSI6InVzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSBcImpvaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHZhbGlkYXRlU2NoZW1hKGJvZHkpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcclxuICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHNjaGVtYS52YWxpZGF0ZShib2R5KTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvciB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcclxuICB9LFxyXG59O1xyXG4iXX0=