const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  getBanner,
  addBanner,
  updateBanner,
} = require("../controllers/bannerController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/banner");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /mp4|mkv|avi/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Only video files are allowed!"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 200000000 },
});

// Routes
router.get("/", getBanner);
router.post("/add", upload.single("video"), addBanner);
router.patch("/update/:id", upload.single("video"), updateBanner);

module.exports = router;
