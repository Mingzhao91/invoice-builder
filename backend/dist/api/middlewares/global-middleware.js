"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalMiddleware = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _swaggerUiExpress = require("swagger-ui-express");

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _swagger = require("../../config/swagger.json");

var _swagger2 = _interopRequireDefault(_swagger);

var _passportJwt = require("./passport-jwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setGlobalMiddleware = exports.setGlobalMiddleware = function setGlobalMiddleware(app) {
  app.use(_express2.default.json());
  app.use(_express2.default.urlencoded({ extended: true }));
  app.use((0, _cors2.default)());
  app.use((0, _morgan2.default)("dev"));
  app.use(_passport2.default.initialize());
  (0, _passportJwt.configureJWTStrategy)();
  app.use("/api-docs", _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, {
    explorer: true
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbWlkZGxld2FyZXMvZ2xvYmFsLW1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsic2V0R2xvYmFsTWlkZGxld2FyZSIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicGFzc3BvcnQiLCJpbml0aWFsaXplIiwic3dhZ2dlclVpIiwic2VydmUiLCJzZXR1cCIsInN3YWdnZXJEb2N1bWVudCIsImV4cGxvcmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxvREFBc0IsU0FBdEJBLG1CQUFzQixDQUFDQyxHQUFELEVBQVM7QUFDMUNBLE1BQUlDLEdBQUosQ0FBUUMsa0JBQVFDLElBQVIsRUFBUjtBQUNBSCxNQUFJQyxHQUFKLENBQVFDLGtCQUFRRSxVQUFSLENBQW1CLEVBQUVDLFVBQVUsSUFBWixFQUFuQixDQUFSO0FBQ0FMLE1BQUlDLEdBQUosQ0FBUSxxQkFBUjtBQUNBRCxNQUFJQyxHQUFKLENBQVEsc0JBQU8sS0FBUCxDQUFSO0FBQ0FELE1BQUlDLEdBQUosQ0FBUUssbUJBQVNDLFVBQVQsRUFBUjtBQUNBO0FBQ0FQLE1BQUlDLEdBQUosQ0FDRSxXQURGLEVBRUVPLDJCQUFVQyxLQUZaLEVBR0VELDJCQUFVRSxLQUFWLENBQWdCQyxpQkFBaEIsRUFBaUM7QUFDL0JDLGNBQVU7QUFEcUIsR0FBakMsQ0FIRjtBQU9ELENBZE0iLCJmaWxlIjoiZ2xvYmFsLW1pZGRsZXdhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJtb3JnYW5cIjtcclxuaW1wb3J0IHN3YWdnZXJVaSBmcm9tIFwic3dhZ2dlci11aS1leHByZXNzXCI7XHJcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tIFwicGFzc3BvcnRcIjtcclxuXHJcbmltcG9ydCBzd2FnZ2VyRG9jdW1lbnQgZnJvbSBcIi4uLy4uL2NvbmZpZy9zd2FnZ2VyLmpzb25cIjtcclxuaW1wb3J0IHsgY29uZmlndXJlSldUU3RyYXRlZ3kgfSBmcm9tIFwiLi9wYXNzcG9ydC1qd3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxNaWRkbGV3YXJlID0gKGFwcCkgPT4ge1xyXG4gIGFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG4gIGFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG4gIGFwcC51c2UoY29ycygpKTtcclxuICBhcHAudXNlKGxvZ2dlcihcImRldlwiKSk7XHJcbiAgYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG4gIGNvbmZpZ3VyZUpXVFN0cmF0ZWd5KCk7XHJcbiAgYXBwLnVzZShcclxuICAgIFwiL2FwaS1kb2NzXCIsXHJcbiAgICBzd2FnZ2VyVWkuc2VydmUsXHJcbiAgICBzd2FnZ2VyVWkuc2V0dXAoc3dhZ2dlckRvY3VtZW50LCB7XHJcbiAgICAgIGV4cGxvcmVyOiB0cnVlLFxyXG4gICAgfSlcclxuICApO1xyXG59O1xyXG4iXX0=