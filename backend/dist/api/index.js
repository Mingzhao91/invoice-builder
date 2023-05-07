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

var _auth = require("./resources/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();

restRouter.use("/auth", _auth.authRouter);
restRouter.use("/invoices", _invoice.invoiceRouter);
restRouter.use("/clients", _client.clientRouter);
restRouter.use("/users", _user.userRounter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJhdXRoUm91dGVyIiwiaW52b2ljZVJvdXRlciIsImNsaWVudFJvdXRlciIsInVzZXJSb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1BLGtDQUFhQyxrQkFBUUMsTUFBUixFQUFuQjs7QUFFUEYsV0FBV0csR0FBWCxDQUFlLE9BQWYsRUFBd0JDLGdCQUF4QjtBQUNBSixXQUFXRyxHQUFYLENBQWUsV0FBZixFQUE0QkUsc0JBQTVCO0FBQ0FMLFdBQVdHLEdBQVgsQ0FBZSxVQUFmLEVBQTJCRyxvQkFBM0I7QUFDQU4sV0FBV0csR0FBWCxDQUFlLFFBQWYsRUFBeUJJLGlCQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5pbXBvcnQgeyBpbnZvaWNlUm91dGVyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2ludm9pY2VcIjtcclxuaW1wb3J0IHsgY2xpZW50Um91dGVyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VyUm91bnRlciB9IGZyb20gXCIuL3Jlc291cmNlcy91c2VyXCI7XHJcbmltcG9ydCB7IGF1dGhSb3V0ZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucmVzdFJvdXRlci51c2UoXCIvYXV0aFwiLCBhdXRoUm91dGVyKTtcclxucmVzdFJvdXRlci51c2UoXCIvaW52b2ljZXNcIiwgaW52b2ljZVJvdXRlcik7XHJcbnJlc3RSb3V0ZXIudXNlKFwiL2NsaWVudHNcIiwgY2xpZW50Um91dGVyKTtcclxucmVzdFJvdXRlci51c2UoXCIvdXNlcnNcIiwgdXNlclJvdW50ZXIpO1xyXG4iXX0=