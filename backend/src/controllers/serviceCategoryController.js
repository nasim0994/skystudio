const Model = require("../models/serviceCategoryModel");

exports.add = async (req, res) => {
  const data = req?.body;

  try {
    const result = await Model.create(data);

    if (!result)
      return res.json({
        success: false,
        message: "Service Category not added",
      });

    res.status(200).json({
      success: true,
      message: "Service Category added successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.update = async (req, res) => {
  const id = req?.params?.id;
  const data = req?.body;

  try {
    const isExist = await Model.findById(id);

    if (!isExist) {
      return res.json({
        success: false,
        message: "Service Category not found",
      });
    }

    const result = await Model.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      success: true,
      message: "WhyChoose updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const result = await Model.find({});

    if (!result) {
      return res.json({
        success: false,
        message: "Service Category's not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service Category's found successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

exports.getSingle = async (req, res) => {
  const id = req?.params?.id;

  try {
    const result = await Model.findById(id);

    if (!result)
      return res.json({
        success: false,
        message: "Service Category not found",
      });

    res.status(200).json({
      success: true,
      message: "Service Category found successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

exports.destroy = async (req, res) => {
  const id = req?.params?.id;

  try {
    const result = await Model.findById(id);

    if (!result) {
      return res.json({
        success: false,
        message: "Service Category not found",
      });
    }

    await Model.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Service Category deleted successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};
