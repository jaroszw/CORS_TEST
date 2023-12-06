import User from "../models/userModel.js";
import customError from "../utils/customError.js";

const assyncErrorHandler = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch((err) => next(err));
  };
};

export const signup = assyncErrorHandler(async (req, res, next) => {
  const { userName, email, password } = req.body;
  const existsUser = await User.findOne({ email });

  if (existsUser) {
    const err = new customError(
      "user already exists, choose different email or sign in",
      400
    );

    return next(err);
  }

  const user = new User({ userName, email, password });
  const registeredUser = await user.save();

  res.status(201).json({
    status: "success",
    message: "user regietsred",
    user: registeredUser,
  });
});
