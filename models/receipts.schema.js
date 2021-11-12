import mongoose from "mongoose";

const schema = {
  cont: Number,
  status: String,
  wheight: Number,
  unit_price: Number,
  creator: String,
  address: String,
  modified_by: String
};

const Receipts = mongoose.model("Receipts", schema);
export default Receipts;