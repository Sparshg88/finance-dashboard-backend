const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("Server started on port " + PORT);
    });
  } catch (err) {
    console.log("Server error:", err.message);
    process.exit(1);
  }
};

startServer();