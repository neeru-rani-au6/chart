var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// User model.
var User = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true,
      validate: /[a-z]/,
      min: [4, "name must be atleast 4 character long "],
      required: [true, "name is required"],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, "email is required"],
    },

    password: {
      type: String,
      trim: true,
      min: [8, "password must be atleast 8 character long "],
      required: [true, "password is required"],
    },
    photoURL: String,
  },
  { timestamps: true }
);

var User = mongoose.model("user", User);

module.exports = User;
