const fs = require("fs");
const AboutUs = require("../models/aboutModel");

exports.createAboutUs = async (req, res) => {
  const image = req?.file?.filename;
  const profileDoc = req?.files?.profileDoc[0]?.filename;
  const data = req?.body;

  const aboutUs = {
    ...data,
    image: `/aboutus/${image}`,
    profileDoc: `/aboutus/${profileDoc}`,
  };

  try {
    const isExist = await AboutUs.findOne();
    if (isExist) {
      fs.unlink(`./uploads/aboutus/${image}`, (err) => {
        if (err) {
          console.log(err);
        }
      });

      return res.status(400).json({
        success: false,
        message: "About Us already exists",
      });
    }

    const result = await AboutUs.create(aboutUs);

    res.status(201).json({
      success: true,
      message: "About Us created successfully",
      data: result,
    });
  } catch (err) {
    fs.unlink(`./uploads/aboutus/${image}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    fs.unlink(`./uploads/aboutus/${profileDoc}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAboutUs = async (req, res) => {
  try {
    const result = await AboutUs.findOne();

    res.status(200).json({
      success: true,
      message: "About Us fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateAboutUs = async (req, res) => {
  const id = req?.params?.id;
  const image = req?.file?.filename;
  const profileDoc = req?.files?.profileDoc?.[0]?.filename;
  const data = req?.body;

  try {
    const isExist = await AboutUs.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "About Us not found",
      });
    }

    let newData;

    if (image && profileDoc) {
      fs.unlink(`./uploads/${isExist.image}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      fs.unlink(`./uploads/${isExist.profileDoc}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      newData = {
        ...data,
        image: `/aboutus/${image}`,
        profileDoc: `/aboutus/${profileDoc}`,
      };
    } else if (image) {
      fs.unlink(`./uploads/${isExist.image}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      newData = {
        ...data,
        image: `/aboutus/${image}`,
      };
    } else if (profileDoc) {
      fs.unlink(`./uploads/${isExist.profileDoc}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });

      newData = {
        ...data,
        profileDoc: `/aboutus/${profileDoc}`,
      };
    } else {
      newData = {
        ...data,
      };
    }

    const result = await AboutUs.findByIdAndUpdate(id, newData, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "About Us not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "About Us updated successfully",
      data: result,
    });
  } catch (error) {
    fs.unlink(`./uploads/aboutus/${image}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    fs.unlink(`./uploads/aboutus/${profileDoc}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
