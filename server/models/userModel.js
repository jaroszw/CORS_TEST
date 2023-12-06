import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userScheme = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

userScheme.pre("save", async function (next) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  this.password = await bcrypt.hash(this.password, salt);
  return next();
});

const User = mongoose.model("User", userScheme);
export default User;
