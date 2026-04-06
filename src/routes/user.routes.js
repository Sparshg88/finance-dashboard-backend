const express = require("express");
const auth = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", auth, authorize("admin"), getUsers);
router.patch("/:id", auth, authorize("admin"), updateUser);
router.delete("/:id", auth, authorize("admin"), deleteUser);

module.exports = router;