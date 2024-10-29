const Banner = require("../models/bannerModel");
const fs = require("fs");

exports.addBanner = async (req, res) => {
  const video = req?.file?.filename;
  const data = req?.body;

  try {
    if (!video) {
      return res.json({
        success: false,
        message: "Video is required",
      });
    }

    const isExist = await Banner.findOne({});
    if (isExist) {
      fs.unlink(`./uploads/banner/${video}`, (err) => {
        if (err) {
          console.log(err);
        }
      });

      return res.json({
        success: false,
        message: "Banner already exists",
      });
    }

    const info = {
      ...data,
      video: `banner/${video}`,
    };
    const result = await Banner.create(info);

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: result,
    });
  } catch (err) {
    fs.unlink(`./uploads/banner/${video}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    res.json({
      success: false,
      message: err.message,
    });
  }
};

exports.getBanner = async (req, res) => {
  try {
    const result = await Banner.findOne({});

    res.status(200).json({
      success: true,
      message: "Banner fetched successfully",
      data: result,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateBanner = async (req, res) => {
  const id = req?.params?.id;
  const video = req?.file?.filename;
  const data = req?.body;

  try {
    const isExist = await Banner.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    let newData;

    if (video && isExist?.video) {
      fs.unlink(`./uploads/banner/${isExist?.video}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }

    if (video) {
      newData = {
        ...data,
        video: `banner/${video}`,
      };
    } else {
      newData = { ...data, video: isExist?.video };
    }

    const result = await Banner.findByIdAndUpdate(id, newData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data: result,
    });
  } catch (error) {
    fs.unlink(`./uploads/banner/${video}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    res.json({
      success: false,
      message: error.message,
    });
  }
};
