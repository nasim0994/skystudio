const fs = require("fs");
const Model = require("../models/approachModel");

exports.add = async (req, res) => {
  const image = req?.file?.filename;
  const data = req.body;

  try {
    const result = await Model.create({
      ...data,
      image: `approach/${image}`,
    });

    res.status(201).json({
      success: true,
      message: "Approach created successfully",
      data: result,
    });
  } catch (error) {
    if (image) {
      fs.unlink(`./uploads/approach/${image}`, (err) => {
        if (err) console.error("Failed to delete image:", err);
      });
    }

    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const result = await Model.find({});

    res.status(200).json({
      success: true,
      message: "Approachs fetched successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSingle = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Model.findById(id);

    if (!result) {
      return res.json({
        success: false,
        message: "Approach not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Approach fetched successfully",
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
  const { id } = req.params;
  const data = req.body;
  const image = req?.file?.filename;

  try {
    const isExist = await Model.findById(id);

    if (!isExist) {
      if (image) {
        fs.unlink(`./uploads/approach/${image}`, (err) => {
          if (err) console.error("Failed to delete uploaded image:", err);
        });
      }
      return res.json({
        success: false,
        message: "Approach not found",
      });
    }

    const updatedData = {
      ...data,
      image: image ? `approach/${image}` : isExist?.image,
    };

    const result = await Model.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Approach updated successfully",
      data: result,
    });

    if (image && result) {
      fs.unlink(`./uploads/${isExist?.image}`, (err) => {
        if (err) console.error("Failed to delete old image:", err);
      });
    }
  } catch (error) {
    if (image) {
      fs.unlink(`./uploads/approach/${image}`, (err) => {
        if (err) console.error("Failed to delete uploaded image:", err);
      });
    }

    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const isExist = await Model.findById(id);

    if (!isExist) {
      return res.json({
        success: false,
        message: "Approach not found",
      });
    }

    const result = await Model.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Approach deleted successfully",
    });

    if (result && isExist?.image) {
      fs.unlink(`./uploads/${isExist?.image}`, (err) => {
        if (err) console.error("Failed to delete image:", err);
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
