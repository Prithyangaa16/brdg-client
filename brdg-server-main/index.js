const express = require("express");
const cors = require("cors");
const googleSheetsRoutes = require("./routes/googleSheetsRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());

// Load API Routes
app.use("/api", googleSheetsRoutes);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
