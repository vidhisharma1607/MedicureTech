import { compareSync, hashSync } from "bcryptjs";
import DoctorUser from "../models/DoctorUser";
// import AdminUser from "../models/AdminUser";

export const getAllDoctorUsers = async (req, res) => {
  let users;
  try {
    users = await DoctorUser.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ message: "something went wrong" });
  }
  return res.status(200).json({ users });
};
export const signup = async (req, res, next) => {
  const { membership, name, mobile, password } = req.body;
  if (
    !membership &&
    membership.trim() === "" &&
    !name &&
    name.trim() === "" &&
    !mobile &&
    mobile.trim() === "" &&
    !password &&
    password.length < 8
  ) {
    return res.status(422).json({
      message: "Invalid data",
    });
  }
  const hashedPAssword = hashSync(password);

  let user;
  try {
    user = new DoctorUser({
      membership,
      name,
      mobile,
      password: hashedPAssword,
    });
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
  const { membership, password } = req.body;
  if (
    !membership &&
    membership.trim() === "" &&
    !password &&
    password.length < 8
  ) {
    return res.status(422).json({
      message: "Invalid data",
    });
  }
  let existingUser;
  try {
    existingUser = await DoctorUser.findOne({ membership });
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
