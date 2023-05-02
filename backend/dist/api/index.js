"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _invoice = require("./resources/invoice");

var _client = require("./resources/client");

var _user = require("./resources/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();

restRouter.use("/invoices", _invoice.invoiceRouter);
restRouter.use("/clients", _client.clientRouter);
restRouter.use("/users", _user.userRounter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJpbnZvaWNlUm91dGVyIiwiY2xpZW50Um91dGVyIiwidXNlclJvdW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsa0NBQWFDLGtCQUFRQyxNQUFSLEVBQW5COztBQUVQRixXQUFXRyxHQUFYLENBQWUsV0FBZixFQUE0QkMsc0JBQTVCO0FBQ0FKLFdBQVdHLEdBQVgsQ0FBZSxVQUFmLEVBQTJCRSxvQkFBM0I7QUFDQUwsV0FBV0csR0FBWCxDQUFlLFFBQWYsRUFBeUJHLGlCQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgeyBpbnZvaWNlUm91dGVyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2ludm9pY2VcIjtcclxuaW1wb3J0IHsgY2xpZW50Um91dGVyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VyUm91bnRlciB9IGZyb20gXCIuL3Jlc291cmNlcy91c2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzdFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yZXN0Um91dGVyLnVzZShcIi9pbnZvaWNlc1wiLCBpbnZvaWNlUm91dGVyKTtcclxucmVzdFJvdXRlci51c2UoXCIvY2xpZW50c1wiLCBjbGllbnRSb3V0ZXIpO1xyXG5yZXN0Um91dGVyLnVzZShcIi91c2Vyc1wiLCB1c2VyUm91bnRlcik7XHJcbiJdfQ==