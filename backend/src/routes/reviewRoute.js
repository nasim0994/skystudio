const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getAll,
  getSingle,
  add,
  update,
  destroy,
} = require("../controllers/reviewController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/review");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage }).single("thumbnail");

// Routes
router.get("/all", getAll);
router.get("/:id", getSingle);
router.post("/add", upload, add);
router.patch("/update/:id", upload, update);
router.delete("/delete/:id", destroy);

module.exports = router;
