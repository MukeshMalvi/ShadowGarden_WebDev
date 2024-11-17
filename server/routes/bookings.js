// server/routes/bookings.js
const express = require('express');
const router = express.Router();

// Dummy booking route
router.post('/', (req, res) => {
    const { tourId, userId, date } = req.body;
    if (!tourId || !userId || !date) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    res.json({ status: "success", message: "Booking confirmed!" });
});

module.exports = router;
