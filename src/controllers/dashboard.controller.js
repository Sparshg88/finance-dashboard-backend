const Record = require("../models/record.model");

// summary
const getSummary = async (req, res) => {
  try {
    const userId = req.user._id;

    const result = await Record.aggregate([
      { $match: { createdBy: userId } },
      {
        $group: {
          _id: "$type",
          total: { $sum: "$amount" },
        },
      },
    ]);

    let income = 0;
    let expense = 0;

    result.forEach((item) => {
      if (item._id === "income") income = item.total;
      if (item._id === "expense") expense = item.total;
    });

    res.json({
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// category breakdown
const getCategoryBreakdown = async (req, res) => {
  try {
    const data = await Record.aggregate([
      { $match: { createdBy: req.user._id } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
      { $sort: { total: -1 } },
    ]);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// recent
const getRecentActivity = async (req, res) => {
  try {
    const records = await Record.find({ createdBy: req.user._id })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// trends
const getMonthlyTrends = async (req, res) => {
  try {
    const data = await Record.aggregate([
      { $match: { createdBy: req.user._id } },
      {
        $group: {
          _id: {
            month: { $month: "$date" },
            year: { $year: "$date" },
          },
          total: { $sum: "$amount" },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getSummary,
  getCategoryBreakdown,
  getRecentActivity,
  getMonthlyTrends,
};