const fs = require("fs");
const Whychoose = require("../models/whychooseModel");

exports.add = async (req, res) => {
  const image = req?.file?.filename;

  try {
    let result = await Whychoose.create({ image });

    res.status(201).json({
      success: true,
      message: "Whychoose created successfully",
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });

    if (image) {
      fs.unlink(`./uploads/whychoose/${image}`, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
  }
};

exports.get = async (req, res) => {
  try {
    const result = await Whychoose.find({});

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Whychoose not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Whychoose fetched successfully",
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

exports.getSingle = async (req, res) => {
  try {
    let { id } = req.params;
    const result = await Whychoose.findById(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Whychoose not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Whychoose fetched successfully",
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

exports.destroy = async (req, res) => {
  const id = req?.params?.id;

  try {
    const isExist = await Whychoose.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Whychoose not found",
      });
    }

    const result = await Whychoose.findByIdAndDelete(id);
    if (result?._id) {
      fs.unlink(`./uploads/whychoose/${isExist?.image}`, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    res.status(200).json({
      success: true,
      message: "Whychoose delete successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
