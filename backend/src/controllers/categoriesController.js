const slugify = require("slugify");
const Categories = require("../models/categoriesModel");

exports.addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = {
      ...req?.body,
      slug: slugify(name).toLowerCase(),
    };

    const result = await Categories.create(category);

    res.status(200).json({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCategories = async (req, res) => {
  try {
    let categories = await Categories.find({}).sort({ order: 1 });

    res.status(200).json({
      success: true,
      message: "All categories",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Categories.findOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Category found successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req?.params;
    const data = req?.body;

    const category = await Categories.findById(id);

    if (!category) {
      res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const slug = slugify(data?.name).toLowerCase();

    const newData = {
      ...data,
      slug,
    };

    const result = await Categories.findByIdAndUpdate(id, newData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req?.params;

    const category = await Categories.findById(id);
    if (!category) {
      res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    await Categories.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Category delete success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
