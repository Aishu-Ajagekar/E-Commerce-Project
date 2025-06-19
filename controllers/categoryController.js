import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

//logic fro create category
export const creatCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    //check validation
    if (!name) {
      return res.status(400).send({
        message: "name is required",
      });
    }

    //check the category name is already exist
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "this category name is already exist",
      });
    }

    //save new name into the model
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    return res.status(201).send({
      success: true,
      message: "new category added",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Somethng went wrong",
    });
  }
};

//logic for update category
export const updateCategoryController = async (req, res) => {
  try {
    const category_id = req.params.id;
    const { name } = req.body;
    const category = await categoryModel.findByIdAndUpdate(
      category_id,
      { name, slug: slugify(name) },
      { new: true }
    );
    console.log(category);

    return res.status(200).send({
      success: true,
      message: "Category is update successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Somethng went wrong",
    });
  }
};

//logic for get all category
export const getAllCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});

    return res.status(200).send({
      success: true,
      message: "all category are fetched",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Somethng went wrong",
    });
  }
};

//logic for single catogory from slug
export const getSingleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await categoryModel.findOne({ slug });
    // console.log(category);

    return res.status(200).send({
      success: true,
      message: " fetched single category ",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Somethng went wrong",
    });
  }
};

//logic for delete category from slug
export const deleteCategoryController = async (req, res) => {
  try {
    const category_id = req.params.id;

    const category = await categoryModel.findByIdAndDelete( category_id );

    return res.status(200).send({
      success: true,
      message: " category is deleted successfully",
      category
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Somethng went wrong",
    });
  }
};
