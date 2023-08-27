import mongoose from "mongoose";
import Post from "../models/Post";
import AdminUser from "../models/AdminUser";
// import User from "../models/User";
export const getAllMedicines = async (req, res) => {
  let medicines;
  try {
    medicines = await Post.find();
  } catch (err) {
    console.log(err);
  }

  if (!medicines) {
    return res.status(500).json({ message: "unexpectedly wrong" });
  }
  return res.status(200).json({ medicines });
};

export const addMedicine = async (req, res) => {
  const {
    name,
    salts,
    company,
    description,
    expiryDate,
    credPoints,
    price,
    user,
  } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !salts &&
    salts.trim() === "" &&
    !company &&
    company.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !expiryDate &&
    !credPoints &&
    !price &&
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
  let medicine;
  try {
    medicine = new Post({
      name,
      salts,
      company,
      description,
      expiryDate: new Date(`${expiryDate}`),
      credPoints,
      price,
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    existingUser.medicines.push(medicine);
    await existingUser.save({ session });
    medicine = await medicine.save({
      session,
    });
    session.commitTransaction();
  } catch (err) {
    console.log(err);
  }

  if (!medicine) {
    return res.status(500).json({ message: "Unknown error occured" });
  }

  return res.status(201).json({ medicine });
};

export const getMedicineById = async (req, res) => {
  const id = req.params.id;
  let medicine;
  try {
    medicine = await Post.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!medicine) {
    return res.status(404).json({ message: "No medicine found" });
  }

  return res.status(200).json({ medicine });
};

export const updateMedicine = async (req, res) => {
  const id = req.params.id;
  const { name, salts, company, description, expiryDate, credPoints, price } =
    req.body;
  if (
    !name &&
    name.trim() === "" &&
    !salts &&
    salts.trim() === "" &&
    !company &&
    company.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !expiryDate &&
    !credPoints &&
    credPoints.trim() === "" &&
    !price &&
    price.trim() === ""
  ) {
    return res.status(422).json({ message: "unprocessed data" });
  }
  let medicine;
  try {
    medicine = await Post.findByIdAndUpdate(id, {
      name,
      salts,
      company,
      description,
      expiryDate: new Date(`${expiryDate}`),
      credPoints,
      price,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!medicine) {
    return res.status(500).json({ message: "Upadte canot be done" });
  }

  return res.status(200).json({ medicine });
};

export const deleteMedicine = async (req, res) => {
  const id = req.params.id;
  let medicine;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    medicine = await Post.findById(id).populate("user");
    medicine.user.medicines.pull(medicine);
    await medicine.user.save({ session });
    medicine = await Post.findByIdAndRemove(id);
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }
  if (!medicine) {
    return res.status(500).json({ message: "Unable to delete" });
  }

  return res.status(201).json({ message: "deleted succesfully" });
};
