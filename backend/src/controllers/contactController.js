const Contact = require("../models/contactModel");

exports.addContact = async (req, res) => {
  try {
    const isExist = await Contact.findOne();
    if (isExist) {
      return res.status(400).json({
        success: false,
        message: "Contact already exists",
      });
    }

    const result = await Contact.create(req.body);

    res.status(200).json({
      success: true,
      message: "Contact created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateContact = async (req, res) => {
  const id = req?.params?.id;
  const data = req?.body;

  try {
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(400).json({
        success: false,
        message: "contact not found",
      });
    }

    await Contact.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      success: true,
      message: "update success",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findOne({});

    res.status(200).json({
      success: true,
      message: "All contacts",
      data: contacts,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
