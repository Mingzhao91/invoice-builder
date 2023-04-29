"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _httpStatusCodes = require("http-status-codes");

var _invoice = require("../models/invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  findAll: function findAll(req, res, next) {
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === undefined ? 1 : _req$query$page,
        _req$query$perPage = _req$query.perPage,
        perPage = _req$query$perPage === undefined ? 10 : _req$query$perPage,
        filter = _req$query.filter,
        sortField = _req$query.sortField,
        sortDir = _req$query.sortDir;

    var options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10)
    };
    var query = {};
    if (filter) {
      query.item = {
        $regex: filter
      };
    }

    if (sortField && sortDir) {
      options.sort = _defineProperty({}, sortField, sortDir);
    }

    _invoice2.default.paginate(query, options).then(function (invoices) {
      return res.json(invoices);
    }).catch(function (err) {
      return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  create: function create(req, res, next) {
    var schema = _joi2.default.object({
      item: _joi2.default.string().required(),
      date: _joi2.default.date().required(),
      due: _joi2.default.date().required(),
      qty: _joi2.default.number().integer().required(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    var _schema$validate = schema.validate(req.body),
        error = _schema$validate.error,
        value = _schema$validate.value;

    if (error) {
      return res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json(error);
    }

    _invoice2.default.create(value).then(function (invoice) {
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  findOne: function findOne(req, res, nex) {
    var id = req.params.id;

    _invoice2.default.findById(id).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({ err: "Could not find any invoice" });
      }

      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  delete: function _delete(req, res, next) {
    var id = req.params.id;

    _invoice2.default.findByIdAndRemove(id).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({ err: "Could not delete any invoice" });
      }

      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    });
  },
  update: function update(req, res, next) {
    var schema = _joi2.default.object({
      item: _joi2.default.string().optional(),
      date: _joi2.default.date().optional(),
      due: _joi2.default.date().optional(),
      qty: _joi2.default.number().integer().optional(),
      tax: _joi2.default.number().optional(),
      rate: _joi2.default.number().optional()
    });

    var _schema$validate2 = schema.validate(req.body),
        error = _schema$validate2.error,
        value = _schema$validate2.value;

    if (error) {
      return res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json(error);
    }

    var id = req.params.id;

    _invoice2.default.findByIdAndUpdate(id, value).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({ err: "Could not update any invoice" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwicXVlcnkiLCJwYWdlIiwicGVyUGFnZSIsImZpbHRlciIsInNvcnRGaWVsZCIsInNvcnREaXIiLCJvcHRpb25zIiwicGFyc2VJbnQiLCJsaW1pdCIsIml0ZW0iLCIkcmVnZXgiLCJzb3J0IiwiSW52b2ljZSIsInBhZ2luYXRlIiwidGhlbiIsImludm9pY2VzIiwianNvbiIsImNhdGNoIiwiZXJyIiwic3RhdHVzIiwiU3RhdHVzQ29kZXMiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJjcmVhdGUiLCJzY2hlbWEiLCJKb2kiLCJvYmplY3QiLCJzdHJpbmciLCJyZXF1aXJlZCIsImRhdGUiLCJkdWUiLCJxdHkiLCJudW1iZXIiLCJpbnRlZ2VyIiwidGF4Iiwib3B0aW9uYWwiLCJyYXRlIiwidmFsaWRhdGUiLCJib2R5IiwiZXJyb3IiLCJ2YWx1ZSIsIkJBRF9SRVFVRVNUIiwiaW52b2ljZSIsImZpbmRPbmUiLCJuZXgiLCJpZCIsInBhcmFtcyIsImZpbmRCeUlkIiwiTk9UX0ZPVU5EIiwiZGVsZXRlIiwiZmluZEJ5SWRBbmRSZW1vdmUiLCJ1cGRhdGUiLCJmaW5kQnlJZEFuZFVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7a0JBRWU7QUFDYkEsU0FEYSxtQkFDTEMsR0FESyxFQUNBQyxHQURBLEVBQ0tDLElBREwsRUFDVztBQUFBLHFCQUN5Q0YsSUFBSUcsS0FEN0M7QUFBQSxxQ0FDZEMsSUFEYztBQUFBLFFBQ2RBLElBRGMsbUNBQ1AsQ0FETztBQUFBLHdDQUNKQyxPQURJO0FBQUEsUUFDSkEsT0FESSxzQ0FDTSxFQUROO0FBQUEsUUFDVUMsTUFEVixjQUNVQSxNQURWO0FBQUEsUUFDa0JDLFNBRGxCLGNBQ2tCQSxTQURsQjtBQUFB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QUFJd0MsSUFBcEIsQ0FWSjtBQUFBLFFBVWJDLEtBVmEscUJBVWJBLEtBVmE7QUFBQSxRQVVOQyxLQVZNLHFCQVVOQSxLQVZNOztBQVdyQixRQUFJRCxLQUFKLEVBQVc7QUFDVCxhQUFPeEMsSUFBSXFCLE1BQUosQ0FBV0MsNkJBQVlvQixXQUF2QixFQUFvQ3hCLElBQXBDLENBQXlDc0IsS0FBekMsQ0FBUDtBQUNEOztBQWJvQixRQWViTSxFQWZhLEdBZU4vQyxJQUFJZ0QsTUFmRSxDQWViRCxFQWZhOztBQWdCckJoQyxzQkFBUXVDLGlCQUFSLENBQTBCUCxFQUExQixFQUE4QkwsS0FBOUIsRUFDR3pCLElBREgsQ0FDUSxVQUFDMkIsT0FBRCxFQUFhO0FBQ2pCLFVBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osZUFBTzNDLElBQ0pxQixNQURJLENBQ0dDLDZCQUFZMkIsU0FEZixFQUVKL0IsSUFGSSxDQUVDLEVBQUVFLEtBQUssOEJBQVAsRUFGRCxDQUFQO0FBR0Q7QUFDRCxhQUFPcEIsSUFBSWtCLElBQUosQ0FBU3lCLE9BQVQsQ0FBUDtBQUNELEtBUkgsRUFTR3hCLEtBVEgsQ0FTUyxVQUFDQyxHQUFEO0FBQUEsYUFBU3BCLElBQUlxQixNQUFKLENBQVdDLDZCQUFZQyxxQkFBdkIsRUFBOENMLElBQTlDLENBQW1ERSxHQUFuRCxDQUFUO0FBQUEsS0FUVDtBQVVEO0FBakdZLEMiLCJmaWxlIjoiaW52b2ljZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tIFwiam9pXCI7XHJcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XHJcblxyXG5pbXBvcnQgSW52b2ljZSBmcm9tIFwiLi4vbW9kZWxzL2ludm9pY2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBmaW5kQWxsKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJQYWdlID0gMTAsIGZpbHRlciwgc29ydEZpZWxkLCBzb3J0RGlyIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBwYWdlOiBwYXJzZUludChwYWdlLCAxMCksXHJcbiAgICAgIGxpbWl0OiBwYXJzZUludChwZXJQYWdlLCAxMCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcXVlcnkgPSB7fTtcclxuICAgIGlmIChmaWx0ZXIpIHtcclxuICAgICAgcXVlcnkuaXRlbSA9IHtcclxuICAgICAgICAkcmVnZXg6IGZpbHRlcixcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ydEZpZWxkICYmIHNvcnREaXIpIHtcclxuICAgICAgb3B0aW9ucy5zb3J0ID0ge1xyXG4gICAgICAgIFtzb3J0RmllbGRdOiBzb3J0RGlyLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIEludm9pY2UucGFnaW5hdGUocXVlcnksIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChpbnZvaWNlcykgPT4gcmVzLmpzb24oaW52b2ljZXMpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gcmVzLnN0YXR1cyhTdGF0dXNDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICBjcmVhdGUocmVxLCByZXMsIG5leHQpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgZGF0ZTogSm9pLmRhdGUoKS5yZXF1aXJlZCgpLFxyXG4gICAgICBkdWU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgcXR5OiBKb2kubnVtYmVyKCkuaW50ZWdlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIEludm9pY2UuY3JlYXRlKHZhbHVlKVxyXG4gICAgICAudGhlbigoaW52b2ljZSkgPT4gcmVzLmpzb24oaW52b2ljZSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikuanNvbihlcnIpKTtcclxuICB9LFxyXG4gIGZpbmRPbmUocmVxLCByZXMsIG5leCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgIEludm9pY2UuZmluZEJ5SWQoaWQpXHJcbiAgICAgIC50aGVuKChpbnZvaWNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgIC5zdGF0dXMoU3RhdHVzQ29kZXMuTk9UX0ZPVU5EKVxyXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJDb3VsZCBub3QgZmluZCBhbnkgaW52b2ljZVwiIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gcmVzLnN0YXR1cyhTdGF0dXNDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICBkZWxldGUocmVxLCByZXMsIG5leHQpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBJbnZvaWNlLmZpbmRCeUlkQW5kUmVtb3ZlKGlkKVxyXG4gICAgICAudGhlbigoaW52b2ljZSkgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKFN0YXR1c0NvZGVzLk5PVF9GT1VORClcclxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiQ291bGQgbm90IGRlbGV0ZSBhbnkgaW52b2ljZVwiIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gcmVzLnN0YXR1cyhTdGF0dXNDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICB1cGRhdGUocmVxLCByZXMsIG5leHQpIHtcclxuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3Qoe1xyXG4gICAgICBpdGVtOiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgICAgZGF0ZTogSm9pLmRhdGUoKS5vcHRpb25hbCgpLFxyXG4gICAgICBkdWU6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcclxuICAgICAgcXR5OiBKb2kubnVtYmVyKCkuaW50ZWdlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHRheDogSm9pLm51bWJlcigpLm9wdGlvbmFsKCksXHJcbiAgICAgIHJhdGU6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciwgdmFsdWUgfSA9IHNjaGVtYS52YWxpZGF0ZShyZXEuYm9keSk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QpLmpzb24oZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBJbnZvaWNlLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB2YWx1ZSlcclxuICAgICAgLnRoZW4oKGludm9pY2UpID0+IHtcclxuICAgICAgICBpZiAoIWludm9pY2UpIHtcclxuICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgICAgLnN0YXR1cyhTdGF0dXNDb2Rlcy5OT1RfRk9VTkQpXHJcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcIkNvdWxkIG5vdCB1cGRhdGUgYW55IGludm9pY2VcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGludm9pY2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gcmVzLnN0YXR1cyhTdGF0dXNDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxufTtcclxuIl19