const express = require("express");
const auth = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/record.controller");

const router = express.Router();

router.post("/", auth, authorize("admin"), createRecord);
router.get("/", auth, authorize("analyst", "admin"), getRecords);
router.patch("/:id", auth, authorize("admin"), updateRecord);
router.delete("/:id", auth, authorize("admin"), deleteRecord);

module.exports = router;