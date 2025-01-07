const Model = require("../models/teamModel");
const fs = require("fs");

exports.add = async (req, res) => {
  const file = req?.file?.filename;

  try {
    const data = req?.body;
    let newData = {
      ...data,
    };

    if (file) {
      newData = {
        ...data,
        image: `/team/${file}`,
      };
    }

    const result = await Model.create(newData);

    if (!result) {
      return res.json({
        success: false,
        message: "Something went wrong",
      });
    }

    res.status(201).json({
      success: true,
      message: "Team add success",
      data: result,
    });
  } catch (error) {
    fs.unlink(`./uploads/team/${file}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const result = await Model.find({}).populate("category");

    res.status(200).json({
      success: true,
      message: "Team get success",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getByCategoryWays = async (req, res) => {
  try {
    const result = await Model.aggregate([
      {
        $lookup: {
          from: "teamcategories",
          localField: "category",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },
      {
        $unwind: "$categoryDetails",
      },
      {
        $group: {
          _id: {
            name: "$categoryDetails.name",
            order: "$categoryDetails.order",
          },
          teams: {
            $push: {
              _id: "$_id",
              image: "$image",
              name: "$name",
              designation: "$designation",
              description: "$description",
            },
          },
        },
      },
      {
        $sort: { "_id.order": 1 },
      },
      {
        $project: {
          _id: 0,
          category: "$_id.name",
          teams: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Team get success",
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
  try {
    const id = req?.params?.id;
    const result = await Model.findById(id).populate("category");
    if (!result) {
      return res.json({
        success: false,
        message: "Team not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Team get success",
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
  const file = req?.file?.filename;

  try {
    const id = req?.params?.id;

    const isExist = await Model.findById(id);
    if (!isExist) {
      return res.json({
        success: false,
        message: "Team not found",
      });
    }

    const data = req.body;

    if (file) {
      await Model.findByIdAndUpdate(
        id,
        { ...data, image: `/team/${file}` },
        {
          new: true,
        }
      );

      fs.unlink(`./uploads/${isExist?.image}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else if (isExist?.image) {
      await Model.findByIdAndUpdate(
        id,
        { ...data, image: isExist?.image },
        {
          new: true,
        }
      );
    } else {
      await Model.findByIdAndUpdate(id, data, { new: true });
    }

    res.status(200).json({
      success: true,
      message: "Team updated success",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });

    fs.unlink(`./uploads/team/${file}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const id = req?.params?.id;
    const isExist = await Model.findById(id);

    if (!isExist) {
      return res.json({
        success: false,
        message: "Team not found",
      });
    }

    if (isExist) {
      const result = await Model.findByIdAndDelete(id);

      if (result) {
        fs.unlink(`./uploads/${isExist?.image}`, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }

      res.status(200).json({
        success: true,
        message: "Delete success",
        data: result,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};
