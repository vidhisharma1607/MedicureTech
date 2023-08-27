import mongoose from "mongoose";
import MR from "../models/MR";
import AdminUser from "../models/AdminUser";

export const getAllMRs = async (req, res) => {
  let mr;
  try {
    mr = await MR.find();
  } catch (err) {
    console.log(err);
  }

  if (!mr) {
    return res.status(500).json({ message: "unexpectedly wrong" });
  }
  return res.status(200).json({ mr });
};

export const addMR = async (req, res) => {
  const { name, location, joiningDate, employee, password, user } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !employee &&
    employee.trim() === "" &&
    !password &&
    password.trim() === "" &&
    !joiningDate &&
    !user
  ) {
    return res.status(422).json({ message: "unprocessed data" });
  }
  let existingUser;
  try {
    existingUser = await AdminUser.findById(user);
  } catch (err) {
    return console.log(err);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "user not found" });
  }
  let mr;
  try {
    mr = new MR({
      name,
      location,
      joiningDate: new Date(`${joiningDate}`),
      employee,
      password,
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    existingUser.MRs.push(mr);
    await existingUser.save({ session });
    mr = await mr.save({
      session,
    });
    session.commitTransaction();
  } catch (err) {
    console.log(err);
  }

  if (!mr) {
    return res.status(500).json({ message: "Unknown error occured" });
  }

  return res.status(201).json({ mr });
};

export const getMRById = async (req, res) => {
  const id = req.params.id;
  let mr;
  try {
    mr = await MR.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!mr) {
    return res.status(404).json({ message: "No medicine found" });
  }

  return res.status(200).json({ mr });
};

export const updateMR = async (req, res) => {
  const id = req.params.id;
  const { name, location, joiningDate, employee, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !employee &&
    employee.trim() === "" &&
    !password &&
    password.trim() === "" &&
    !joiningDate
  ) {
    return res.status(422).json({ message: "unprocessed data" });
  }
  let mr;
  try {
    mr = await MR.findByIdAndUpdate(id, {
      // name,
      name,
      location,
      employee,
      password,
      joiningDate: new Date(`${joiningDate}`),
    });
  } catch (err) {
    return console.log(err);
  }
  if (!mr) {
    return res.status(500).json({ message: "Upadte canot be done" });
  }

  return res.status(200).json({ mr });
};

export const deleteMR = async (req, res) => {
  const id = req.params.id;
  let mr;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    mr = await MR.findById(id).populate("user");
    mr.user.MRs.pull(mr);
    await mr.user.save({ session });
    mr = await MR.findByIdAndRemove(id);
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }
  if (!mr) {
    return res.status(500).json({ message: "Unable to delete" });
  }

  return res.status(201).json({ message: "deleted succesfully" });
};

export const getMRbyAdmin = async (req, res) => {
  let mr;
  try {
    mr = await MR.find({ user: req.params.id });
  } catch (err) {
    return console.log(err);
  }
  if (!mr) {
    return res.status(500).json({ message: "Unable to get MR od admin" });
  }
  return res.status(200).json({ mr });
};
