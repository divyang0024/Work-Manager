import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: [true, "email required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "password required"],
  },

  about: String,
  profileURL: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export { User };
