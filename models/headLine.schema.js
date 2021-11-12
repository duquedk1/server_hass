import mongoose from "mongoose";

const schema = {
  name: String,
  tradename: String,
  phone: Number
};

const headLine = mongoose.model("headLine", schema);
export default headLine;