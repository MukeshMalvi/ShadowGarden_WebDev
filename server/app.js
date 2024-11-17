const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database connection error: ", err));

// Routes
const recommendationsRouter = require("./routes/recommendations");
const bookingRouter = require("./routes/bookings");
const authRoutes = require("./routes/authRoutes"); // Import authRoutes

// Use routes for modularity
app.use("/api/recommendations", recommendationsRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/auth", authRoutes); // Use authRoutes

// Custom /search route for hotel search
app.post("/api/search", (req, res) => {
  const { startDate, endDate, roomDetails } = req.body;
  console.log("Search received:", { startDate, endDate, roomDetails });

  // Mock response
  res.json({
    success: true,
    message: "Search executed successfully",
    results: [
      {
        hotelName: "Luxury Stay",
        location: "New Delhi",
        pricePerNight: 150,
        availability: true,
      },
      {
        hotelName: "Budget Inn",
        location: "Mumbai",
        pricePerNight: 50,
        availability: true,
      },
    ],
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
