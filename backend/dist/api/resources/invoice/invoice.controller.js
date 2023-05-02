"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _httpStatusCodes = require("http-status-codes");

var _invoice = require("./invoice.model");

var _invoice2 = _interopRequireDefault(_invoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      limit: parseInt(perPage, 10),
      populate: "client"
    };
    var query = {};
    if (filter) {
      query.item = {
        $regex: filter
      };
    }

    if (sortField && sortDir) {
      options.sort = (0, _defineProperty3.default)({}, sortField, sortDir);
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
      client: _joi2.default.string().required(),
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
      rate: _joi2.default.number().optional(),
      client: _joi2.default.string().optional()
    });

    var _schema$validate2 = schema.validate(req.body),
        error = _schema$validate2.error,
        value = _schema$validate2.value;

    if (error) {
      return res.status(_httpStatusCodes.StatusCodes.BAD_REQUEST).json(error);
    }

    var id = req.params.id;

    _invoice2.default.findByIdAndUpdate(id, value, { new: true }).then(function (invoice) {
      if (!invoice) {
        return res.status(_httpStatusCodes.StatusCodes.NOT_FOUND).json({ err: "Could not update any invoice" });
      }
      return res.json(invoice);
    }).catch(function (err) {
      return res.status(_httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ludm9pY2UvaW52b2ljZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwicXVlcnkiLCJwYWdlIiwicGVyUGFnZSIsImZpbHRlciIsInNvcnRGaWVsZCIsInNvcnREaXIiLCJvcHRpb25zIiwicGFyc2VJbnQiLCJsaW1pdCIsInBvcHVsYXRlIiwiaXRlbSIsIiRyZWdleCIsInNvcnQiLCJJbnZvaWNlIiwicGFnaW5hdGUiLCJ0aGVuIiwiaW52b2ljZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJzdGF0dXMiLCJTdGF0dXNDb2RlcyIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImNyZWF0ZSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsInN0cmluZyIsInJlcXVpcmVkIiwiZGF0ZSIsImR1ZSIsImNsaWVudCIsInF0eSIsIm51bWJlciIsImludGVnZXIiLCJ0YXgiLCJvcHRpb25hbCIsInJhdGUiLCJ2YWxpZGF0ZSIsImJvZHkiLCJlcnJvciIsInZhbHVlIiwiQkFEX1JFUVVFU1QiLCJpbnZvaWNlIiwiZmluZE9uZSIsIm5leCIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJOT1RfRk9VTkQiLCJkZWxldGUiLCJmaW5kQnlJZEFuZFJlbW92ZSIsInVwZGF0ZSIsImZpbmRCeUlkQW5kVXBkYXRlIiwibmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7Ozs7O2tCQUVlO0FBQ2JBLFNBRGEsbUJBQ0xDLEdBREssRUFDQUMsR0FEQSxFQUNLQyxJQURMLEVBQ1c7QUFBQSxxQkFDeUNGLElBQUlHLEtBRDdDO0FBQUEscUNBQ2RDLElBRGM7QUFBQSxRQUNkQSxJQURjLG1DQUNQLENBRE87QUFBQSx3Q0FDSkMsT0FESTtBQUFBLFFBQ0pBLE9BREksc0NBQ00sRUFETjtBQUFBLFFBQ1VDLE1BRFYsY0FDVUEsTUFEVjtBQUFBLFFB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O0FBTXhCQyxZQUFNWixjQUFJUSxNQUFKLEdBQWFHLFFBQWIsRUFOa0I7QUFPeEJMLGNBQVFOLGNBQUlFLE1BQUosR0FBYVMsUUFBYjtBQVBnQixLQUFYLENBQWY7O0FBRHFCLDRCQVdJWixPQUFPYyxRQUFQLENBQWdCekMsSUFBSTBDLElBQXBCLENBWEo7QUFBQSxRQVdiQyxLQVhhLHFCQVdiQSxLQVhhO0FBQUEsUUFXTkMsS0FYTSxxQkFXTkEsS0FYTTs7QUFZckIsUUFBSUQsS0FBSixFQUFXO0FBQ1QsYUFBTzFDLElBQUlzQixNQUFKLENBQVdDLDZCQUFZcUIsV0FBdkIsRUFBb0N6QixJQUFwQyxDQUF5Q3VCLEtBQXpDLENBQVA7QUFDRDs7QUFkb0IsUUFnQmJNLEVBaEJhLEdBZ0JOakQsSUFBSWtELE1BaEJFLENBZ0JiRCxFQWhCYTs7QUFpQnJCakMsc0JBQVF3QyxpQkFBUixDQUEwQlAsRUFBMUIsRUFBOEJMLEtBQTlCLEVBQXFDLEVBQUVhLEtBQUssSUFBUCxFQUFyQyxFQUNHdkMsSUFESCxDQUNRLFVBQUM0QixPQUFELEVBQWE7QUFDakIsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixlQUFPN0MsSUFDSnNCLE1BREksQ0FDR0MsNkJBQVk0QixTQURmLEVBRUpoQyxJQUZJLENBRUMsRUFBRUUsS0FBSyw4QkFBUCxFQUZELENBQVA7QUFHRDtBQUNELGFBQU9yQixJQUFJbUIsSUFBSixDQUFTMEIsT0FBVCxDQUFQO0FBQ0QsS0FSSCxFQVNHekIsS0FUSCxDQVNTLFVBQUNDLEdBQUQ7QUFBQSxhQUFTckIsSUFBSXNCLE1BQUosQ0FBV0MsNkJBQVlDLHFCQUF2QixFQUE4Q0wsSUFBOUMsQ0FBbURFLEdBQW5ELENBQVQ7QUFBQSxLQVRUO0FBVUQ7QUFwR1ksQyIsImZpbGUiOiJpbnZvaWNlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9pIGZyb20gXCJqb2lcIjtcclxuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcclxuXHJcbmltcG9ydCBJbnZvaWNlIGZyb20gXCIuL2ludm9pY2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBmaW5kQWxsKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJQYWdlID0gMTAsIGZpbHRlciwgc29ydEZpZWxkLCBzb3J0RGlyIH0gPSByZXEucXVlcnk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBwYWdlOiBwYXJzZUludChwYWdlLCAxMCksXHJcbiAgICAgIGxpbWl0OiBwYXJzZUludChwZXJQYWdlLCAxMCksXHJcbiAgICAgIHBvcHVsYXRlOiBcImNsaWVudFwiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0ge307XHJcbiAgICBpZiAoZmlsdGVyKSB7XHJcbiAgICAgIHF1ZXJ5Lml0ZW0gPSB7XHJcbiAgICAgICAgJHJlZ2V4OiBmaWx0ZXIsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnRGaWVsZCAmJiBzb3J0RGlyKSB7XHJcbiAgICAgIG9wdGlvbnMuc29ydCA9IHtcclxuICAgICAgICBbc29ydEZpZWxkXTogc29ydERpcixcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBJbnZvaWNlLnBhZ2luYXRlKHF1ZXJ5LCBvcHRpb25zKVxyXG4gICAgICAudGhlbigoaW52b2ljZXMpID0+IHJlcy5qc29uKGludm9pY2VzKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcbiAgY3JlYXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgICAgaXRlbTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcclxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLnJlcXVpcmVkKCksXHJcbiAgICAgIGNsaWVudDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpLmludGVnZXIoKS5yZXF1aXJlZCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBzY2hlbWEudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBJbnZvaWNlLmNyZWF0ZSh2YWx1ZSlcclxuICAgICAgLnRoZW4oKGludm9pY2UpID0+IHJlcy5qc29uKGludm9pY2UpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gcmVzLnN0YXR1cyhTdGF0dXNDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpLmpzb24oZXJyKSk7XHJcbiAgfSxcclxuICBmaW5kT25lKHJlcSwgcmVzLCBuZXgpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICBJbnZvaWNlLmZpbmRCeUlkKGlkKVxyXG4gICAgICAudGhlbigoaW52b2ljZSkgPT4ge1xyXG4gICAgICAgIGlmICghaW52b2ljZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAuc3RhdHVzKFN0YXR1c0NvZGVzLk5PVF9GT1VORClcclxuICAgICAgICAgICAgLmpzb24oeyBlcnI6IFwiQ291bGQgbm90IGZpbmQgYW55IGludm9pY2VcIiB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcbiAgZGVsZXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgSW52b2ljZS5maW5kQnlJZEFuZFJlbW92ZShpZClcclxuICAgICAgLnRoZW4oKGludm9pY2UpID0+IHtcclxuICAgICAgICBpZiAoIWludm9pY2UpIHtcclxuICAgICAgICAgIHJldHVybiByZXNcclxuICAgICAgICAgICAgLnN0YXR1cyhTdGF0dXNDb2Rlcy5OT1RfRk9VTkQpXHJcbiAgICAgICAgICAgIC5qc29uKHsgZXJyOiBcIkNvdWxkIG5vdCBkZWxldGUgYW55IGludm9pY2VcIiB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcbiAgdXBkYXRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KHtcclxuICAgICAgaXRlbTogSm9pLnN0cmluZygpLm9wdGlvbmFsKCksXHJcbiAgICAgIGRhdGU6IEpvaS5kYXRlKCkub3B0aW9uYWwoKSxcclxuICAgICAgZHVlOiBKb2kuZGF0ZSgpLm9wdGlvbmFsKCksXHJcbiAgICAgIHF0eTogSm9pLm51bWJlcigpLmludGVnZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICB0YXg6IEpvaS5udW1iZXIoKS5vcHRpb25hbCgpLFxyXG4gICAgICByYXRlOiBKb2kubnVtYmVyKCkub3B0aW9uYWwoKSxcclxuICAgICAgY2xpZW50OiBKb2kuc3RyaW5nKCkub3B0aW9uYWwoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IsIHZhbHVlIH0gPSBzY2hlbWEudmFsaWRhdGUocmVxLmJvZHkpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKS5qc29uKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgSW52b2ljZS5maW5kQnlJZEFuZFVwZGF0ZShpZCwgdmFsdWUsIHsgbmV3OiB0cnVlIH0pXHJcbiAgICAgIC50aGVuKChpbnZvaWNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnZvaWNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgIC5zdGF0dXMoU3RhdHVzQ29kZXMuTk9UX0ZPVU5EKVxyXG4gICAgICAgICAgICAuanNvbih7IGVycjogXCJDb3VsZCBub3QgdXBkYXRlIGFueSBpbnZvaWNlXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihpbnZvaWNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHJlcy5zdGF0dXMoU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKS5qc29uKGVycikpO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==