import mongoose from "mongoose";
import Cart from "../models/Cart";
import User from "../models/User";
import Post from "../models/Post";

export const addtoCart = async (req, res) => {
  // const productId= req.body.productId;
  // try{
  //   const product= await Cart.findById(productId);
  //   if(!product) {
  //     return res.status(404).json({error:"Product not found"});

  //   }
  //   res.json({ message: 'Product added to cart', product });
  // }
  // catch (error) {
  //   res.status(500).json({ error: 'Server error' });
  // }
  // }
    const { name, company, price, quantity, user } = req.body;
    if (
      !name &&
      name.trim() === "" &&
      !company &&
      company.trim() === "" &&
      !quantity &&
      !price &&
      !user
    ) {
      return res.status(422).json({ message: "unprocessed data" });
    }
    let existingUser;
    try {
      console.log(user)
      existingUser = await User.findById(user);
    } catch (err) {
      return console.log(err);
    }
  
    if (!existingUser) {
      return res.status(404).json({ message: "user not found" });
    }
    let item;
    try {
    item = new Cart({
        name,
        company,
        price,
        quantity,
        user,
      });
  
      const session = await mongoose.startSession();
      session.startTransaction();
      existingUser.CartItems.push(item);
      await existingUser.save({ session });
      item = await item.save({
        session,
      });
      session.commitTransaction();
    } catch (err) {
      console.log(err);
    }
  
    if (!item) {
      return res.status(500).json({ message: "Unknown error occured" });
    }
  
    return res.status(201).json({ item });
  };

  export const getProductFromUSer = async (req, res) => {
    let item;
    try {
      item = await Cart.find({ user: req.params.id });
    } catch (err) {
      return console.log(err);
    }
    if (!item) {
      return res.status(500).json({ message: "Unable to get MR od admin" });
    }
    return res.status(200).json({ item });
  };
  
  export const getProductByID = async (req, res) => {
    const id = req.params.id;
    let product;
    try {
      product = await Post.findById(id);
    } catch (err) {
      return console.log(err);
    }
    if (!product) {
      return res.status(404).json({ message: "No Product found" });
    }
  
    return res.status(200).json({ product });
  };