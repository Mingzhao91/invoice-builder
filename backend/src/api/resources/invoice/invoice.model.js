import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;
const invoiceSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
  },
  date: {
    type: Date,
  },
  due: {
    type: Date,
  },
  rate: {
    type: Number,
  },
  tax: {
    type: Number,
  },
});

invoiceSchema.plugin(mongoosePaginate);
export default mongoose.model("Invoice", invoiceSchema);
