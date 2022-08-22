import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please input your fullname."],
    },
    email: {
      type: String,
      required: [true, "Please input your email."],
      lowercase: true,
      trim: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Please input password."],
    },
    dateOfBirth: {
      type: String,
      required: [true, "Please provide Date of Birth."],
    },
    image: String,
    imageName: String,
    bio: String,
    following: [Schema.Types.ObjectId],
    followers: [Schema.Types.ObjectId],
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
