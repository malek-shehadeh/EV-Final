// // shopOwnerController.js
// const ShopOwner = require("../models/shopOwner");
// const fs = require("fs");
// const path = require("path");

// exports.getProfile = async (req, res) => {
//   try {
//     const shopOwner = await ShopOwner.findById(req.params.id).select(
//       "-password"
//     );
//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }
//     res.json(shopOwner);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     const updates = req.body;
//     const shopOwner = await ShopOwner.findById(req.params.id);

//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }

//     // Handle profile picture upload
//     if (req.file) {
//       const oldPicturePath = shopOwner.profilePicture;
//       shopOwner.profilePicture = req.file.path;

//       // Delete old profile picture if it exists
//       if (oldPicturePath) {
//         fs.unlink(path.join(__dirname, "..", oldPicturePath), (err) => {
//           if (err) console.error("Error deleting old profile picture:", err);
//         });
//       }
//     }

//     // Update other fields
//     Object.keys(updates).forEach((update) => {
//       if (update !== "profilePicture") {
//         shopOwner[update] = updates[update];
//       }
//     });

//     await shopOwner.save();
//     res.json({ message: "Profile updated successfully", shopOwner });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
//////////////////

// const ShopOwner = require("../models/shopOwner");
// const fs = require("fs");
// const path = require("path");
// const mongoose = require("mongoose");

// exports.getProfile = async (req, res) => {
//   try {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ message: "Invalid shop owner ID" });
//     }

//     const shopOwner = await ShopOwner.findById(req.params.id).select(
//       "-password"
//     );
//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }
//     res.json(shopOwner);
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ message: "Invalid shop owner ID" });
//     }

//     const updates = req.body;
//     const shopOwner = await ShopOwner.findById(req.params.id);

//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }

//     // Handle profile picture upload
//     if (req.file) {
//       const oldPicturePath = shopOwner.profilePicture;
//       shopOwner.profilePicture = req.file.path;

//       // Delete old profile picture if it exists
//       if (oldPicturePath) {
//         fs.unlink(path.join(__dirname, "..", oldPicturePath), (err) => {
//           if (err) console.error("Error deleting old profile picture:", err);
//         });
//       }
//     }

//     // Update other fields
//     Object.keys(updates).forEach((update) => {
//       if (update !== "profilePicture") {
//         shopOwner[update] = updates[update];
//       }
//     });

//     await shopOwner.save();
//     res.json({ message: "Profile updated successfully", shopOwner });
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
////////////
// const ShopOwner = require("../models/shopOwner");
// const fs = require("fs");
// const path = require("path");
// const mongoose = require("mongoose");

// exports.getProfile = async (req, res) => {
//   try {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ message: "Invalid shop owner ID" });
//     }

//     const shopOwner = await ShopOwner.findById(req.params.id).select(
//       "-password"
//     );
//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }
//     res.json(shopOwner);
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ message: "Invalid shop owner ID" });
//     }

//     const updates = req.body;
//     const shopOwner = await ShopOwner.findById(req.params.id);

//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }

//     // معالجة رفع صورة الملف الشخصي
//     if (req.file) {
//       const oldPicturePath = shopOwner.profilePicture;
//       shopOwner.profilePicture = req.file.path;

//       // حذف الصورة القديمة إذا كانت موجودة
//       if (oldPicturePath) {
//         fs.unlink(path.join(__dirname, "..", oldPicturePath), (err) => {
//           if (err) console.error("Error deleting old profile picture:", err);
//         });
//       }
//     }

//     // تحديث باقي الحقول
//     Object.keys(updates).forEach((update) => {
//       if (update !== "profilePicture") {
//         shopOwner[update] = updates[update];
//       }
//     });

//     await shopOwner.save();
//     res.json({ message: "Profile updated successfully", shopOwner });
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

////////////////////////////////////////////////////////////////////////////////////////////

// const ShopOwner = require("../models/shopOwner");
// const fs = require("fs");
// const path = require("path");

// exports.getProfile = async (req, res) => {
//   try {
//     const shopOwner = await ShopOwner.findById(req.user).select("-password");
//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }
//     res.json(shopOwner);
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     const updates = req.body;
//     const shopOwner = await ShopOwner.findById(req.user);

//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }

//     // Handle profile picture upload
//     if (req.file) {
//       const oldPicturePath = shopOwner.profilePicture;
//       shopOwner.profilePicture = req.file.path;

//       // Delete the old picture if it exists
//       if (oldPicturePath) {
//         fs.unlink(path.join(__dirname, "..", oldPicturePath), (err) => {
//           if (err) console.error("Error deleting old profile picture:", err);
//         });
//       }
//     }

//     // Update other fields
//     Object.keys(updates).forEach((update) => {
//       if (update !== "profilePicture") {
//         shopOwner[update] = updates[update];
//       }
//     });

//     await shopOwner.save();
//     res.json({ message: "Profile updated successfully", shopOwner });
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// ///////////////////////////////////////////////////////////////////////

// const ShopOwner = require("../models/shopOwner");
// const fs = require("fs");
// const path = require("path");

// exports.getProfile = async (req, res) => {
//   try {
//     const shopOwner = await ShopOwner.findById(req.user.id).select("-password");
//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }
//     res.json(shopOwner);
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     const updates = req.body;
//     const shopOwner = await ShopOwner.findById(req.user.id);

//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }

//     // Handle profile picture upload
//     if (req.file) {
//       shopOwner.profilePicture = req.file.path;
//     }

//     // Update other fields
//     Object.keys(updates).forEach((update) => {
//       if (update !== "profilePicture") {
//         shopOwner[update] = updates[update];
//       }
//     });

//     await shopOwner.save();
//     res.json({ message: "Profile updated successfully", shopOwner });
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // If you need any additional methods (like for POST requests), define them here
// // For example:
// // exports.registerShopOwner = async (req, res) => { ... };
///////////////////////////////////////////////////////////////////////////
const ShopOwner = require("../models/shopOwner");
const fs = require("fs");
const path = require("path");

exports.getProfile = async (req, res) => {
  try {
    const shopOwner = await ShopOwner.findById(req.user).select("-password");
    if (!shopOwner) {
      return res.status(404).json({ message: "Shop owner not found" });
    }
    res.json(shopOwner);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    console.log("Received file:", req.file);
    const updates = req.body;
    const shopOwner = await ShopOwner.findById(req.user);

    if (!shopOwner) {
      console.log("Shop owner not found");
      return res.status(404).json({ message: "Shop owner not found" });
    }

    // رفع الصورة
    if (req.file) {
      console.log("Updating profile picture...");
      if (shopOwner.profilePicture) {
        const oldPath = path.join(__dirname, "..", shopOwner.profilePicture);
        fs.unlink(oldPath, (err) => {
          if (err) {
            console.error("Error deleting old profile picture:", err);
          }
        });
      }
      shopOwner.profilePicture = req.file.path;
    }

    Object.keys(updates).forEach((update) => {
      if (update !== "profilePicture") {
        shopOwner[update] = updates[update];
      }
    });

    await shopOwner.save();
    res.json({ message: "Profile updated successfully", shopOwner });
  } catch (error) {
    console.error("Error in updateProfile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
