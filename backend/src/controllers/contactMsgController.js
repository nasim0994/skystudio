const ContactMsg = require("../models/contactMsgModel");
const { calculatePagination } = require("../utils/calculatePagination");
const { pick } = require("../utils/pick");

exports.getAllContactMsgs = async (req, res) => {
  const paginationOptions = pick(req.query, ["page", "limit"]);
  const { page, limit, skip } = calculatePagination(paginationOptions);

  try {
    const messages = await ContactMsg.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await ContactMsg.countDocuments();
    const pages = Math.ceil(parseInt(total) / parseInt(limit));

    res.status(200).json({
      success: true,
      message: "All contact messages fetched successfully",
      meta: {
        total,
        page,
        pages,
        limit,
      },
      data: messages,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getContactMsgById = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await ContactMsg.findById(id);
    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Contact message fetched successfully",
      data: message,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.addContactMsg = async (req, res) => {
  const { name, phone, email, message } = req.body;
  try {
    const newMessage = await ContactMsg.create({ name, phone, email, message });
    res.status(201).json({
      success: true,
      message: "Contact message created successfully",
      data: newMessage,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteContactMsg = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await ContactMsg.findByIdAndDelete(id);
    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Contact message deleted successfully",
      data: message,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
