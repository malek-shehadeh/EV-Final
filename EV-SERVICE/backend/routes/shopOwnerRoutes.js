const express = require("express");
const router = express.Router();
const shopOwnerController = require("../controllers/shopOwnerController");
const multer = require("multer");
const path = require("path");

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post(
  "/register",
  upload.single("licenseCertificate"),
  shopOwnerController.registerMaintenanceShop
);
router.post("/login", shopOwnerController.loginShopOwner);

module.exports = router;
