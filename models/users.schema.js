import mongoose from "mongoose";

const schema = {
  user: String,
  password: String,
};

const Users = mongoose.model("Users", schema);
export default Users;