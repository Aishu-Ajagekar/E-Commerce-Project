import express from "express";
import productModel from "../models/productModel.js";
import slugify from "slugify";
import fs from "fs";

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.fields;
    const { photo } = req.files;

    //validation
    switch (true) {
      case !name:
        return res.status(400).send({
          message: "Name is required",
        });

      case !description:
        return res.status(400).send({
          message: "description is required",
        });

      case !price:
        return res.status(400).send({
          message: "Price is required",
        });

      case !category:
        return res.status(400).send({
          message: "Category is required",
        });

      case !quantity:
        return res.status(400).send({
          message: "Quantity is required",
        });

      case photo && photo.size > 100000:
        return res.status(400).send({
          error: "Please upload photo upto 1MB",
        });
    }

    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();

    res.status(201).send({
      success: true,
      message: "one product added successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { name, description, price, category, quantity } = req.fields;
    const { photo } = req.files;

    switch (true) {
      case !name:
        return res.status(400).send({
          message: "Name is required",
        });

      case !description:
        return res.status(400).send({
          message: "description is required",
        });

      case !price:
        return res.status(400).send({
          message: "Price is required",
        });

      case !category:
        return res.status(400).send({
          message: "Category is required",
        });

      case !quantity:
        return res.status(400).send({
          message: "Quantity is required",
        });

      case photo && photo.size > 100000:
        return res.status(400).send({
          error: "Please upload photo upto 1MB",
        });
    }

    const products = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }

    await products.save();

    res.status(201).send({
      success: true,
      message: " product updated successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Something went wrong",
      erroe: error.message,
    });
  }
};

export const getAllProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "All Products are Fetched",
      products,
      Total_Product: products.length,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      error,
    });
  }
};

export const getSingleProductController = async (req, res) => {
  try {
    const products = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");

    return res.status(200).send({
      success: true,
      products,
      message: "Getting single product",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "something went wrong",
    });
  }
};

export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");

    if (product.photo.data) {
      res.set("Content-Type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      error,
      message: "something went wrong",
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const product = await productModel
      .findByIdAndDelete(req.params.id)
      .select("-photo");

    res.status(200).send({
      success: true,
      message: "product deleted",
      data: product,
    });
  } catch (error) {
    console.log(
      res.status(500).send({
        success: false,
        error,
        message: "something went wrong",
      })
    );
  }
};
