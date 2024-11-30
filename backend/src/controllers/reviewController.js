const fs = require("fs");
const Model = require("../models/reviewModel");
const { pick } = require("../utils/pick");
const { calculatePagination } = require("../utils/calculatePagination");

exports.add = async (req, res) => {
  const image = req?.file?.filename;
  const data = req.body;

  try {
    const result = await Model.create({
      ...data,
      thumbnail: `review/${image}`,
    });

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: result,
    });
  } catch (error) {
    if (image) {
      fs.unlink(`./uploads/review/${image}`, (err) => {
        if (err) console.error("Failed to delete image", err);
      });
    }

    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAll = async (req, res) => {
  const paginationOptions = pick(req.query, ["page", "limit"]);
  const { page, limit, skip } = calculatePagination(paginationOptions);

  try {
    const result = await Model.find({}).skip(skip).limit(limit);

    const total = await Model.countDocuments();
    const pages = Math.ceil(parseInt(total) / parseInt(limit));

    res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      meta: {
        total,
        page,
        pages,
        limit,
      },
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
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review fetched successfully",
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
        fs.unlink(`./uploads/review/${image}`, (err) => {
          if (err) console.error("Failed to delete uploaded image", err);
        });
      }
      return res.json({
        success: false,
        message: "Review not found",
      });
    }

    const updatedData = {
      ...data,
      thumbnail: image ? `review/${image}` : isExist?.thumbnail,
    };

    const result = await Model.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: result,
    });

    if (image && result) {
      fs.unlink(`./uploads/${isExist?.thumbnail}`, (err) => {
        if (err) console.error("Failed to delete old image", err);
      });
    }
  } catch (error) {
    if (image) {
      fs.unlink(`./uploads/review/${image}`, (err) => {
        if (err) console.error("Failed to delete uploaded image", err);
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
        message: "Review not found",
      });
    }

    const result = await Model.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });

    if (result && isExist?.thumbnail) {
      fs.unlink(`./uploads/${isExist?.thumbnail}`, (err) => {
        if (err) console.error("Failed to delete image", err);
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
