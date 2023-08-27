import { compareSync, hashSync } from "bcryptjs";
import AdminUser from "../models/AdminUser";

export const getAllAdminUsers = async (req, res) => {
  let users;
  try {
    users = await AdminUser.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ message: "something went wrong" });
  }
  return res.status(200).json({ users });
};
export const signup = async (req, res, next) => {
  const { licence, company, password } = req.body;
  if (
    !licence &&
    licence.trim() === "" &&
    !company &&
    company.trim() === "" &&
    !password &&
    password.length < 6
  ) {
    return res.status(422).json({
      message: "Invalid data",
    });
  }
  const hashedPAssword = hashSync(password);

  let user;
  try {
    user = new AdminUser({ licence, company, password: hashedPAssword });
    await user.save(); ///here we are saving the data to the datbase
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unknown error occured" });
  }

  return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
  const { licence, password } = req.body;
  if (!licence && licence.trim() === "" && !password && password.length < 8) {
    return res.status(422).json({
      message: "Invalid data",
    });
  }
  let existingUser;
  try {
    existingUser = await AdminUser.findOne({ licence });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "No user found" });
  }
  const isPasswordCorrect = compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect password" });
  }
  return res
    .status(200)
    .json({ id: existingUser._id, message: "login succesful" });
};
