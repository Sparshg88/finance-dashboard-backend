const express = require("express");
const auth = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");

const {
  getSummary,
  getCategoryBreakdown,
  getRecentActivity,
  getMonthlyTrends,
} = require("../controllers/dashboard.controller");

const router = express.Router();

router.get("/summary", auth, authorize("analyst", "admin"), getSummary);
router.get("/categories", auth, authorize("analyst", "admin"), getCategoryBreakdown);
router.get("/recent", auth, authorize("analyst", "admin"), getRecentActivity);
router.get("/trends", auth, authorize("analyst", "admin"), getMonthlyTrends);

module.exports = router;