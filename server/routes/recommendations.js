// server/routes/recommendations.js
const express = require('express');
const router = express.Router();

// Dummy data for recommendations
const cuisineRecommendations = [
  {
    name: "Butter Chicken",
    description: "A rich, creamy curry made with tender chicken pieces, originating from Punjab.",
    image: "https://example.com/butter-chicken.jpg",
  },
  {
    name: "Masala Dosa",
    description: "A crispy rice pancake filled with spicy mashed potatoes, a South Indian specialty.",
    image: "https://example.com/masala-dosa.jpg",
  },
];

const giProducts = [
  {
    name: "Kanchipuram Silk Saree",
    price: "$120",
    description: "Authentic silk saree from Kanchipuram, known for its intricate weaving.",
    image: "https://example.com/kanchipuram-silk.jpg",
  },
  {
    name: "Mysore Sandal Soap",
    price: "$5",
    description: "Premium soap made with pure sandalwood oil from Karnataka.",
    image: "https://example.com/mysore-soap.jpg",
  },
];

const landmarks = [
  {
    name: "Taj Mahal",
    description: "The iconic marble mausoleum and one of the Seven Wonders of the World.",
    image: "https://example.com/taj-mahal.jpg",
  },
  {
    name: "Jaipur City Palace",
    description: "A majestic palace complex blending Rajasthani and Mughal architecture.",
    image: "https://example.com/city-palace.jpg",
  },
];

// Routes for recommendations

// Get Cuisine Recommendations
router.get('/cuisine', (req, res) => {
  if (cuisineRecommendations.length > 0) {
    res.json({ success: true, data: cuisineRecommendations });
  } else {
    res.status(404).json({ success: false, message: "No cuisine recommendations found." });
  }
});

// Get GI Products
router.get('/gi-products', (req, res) => {
  if (giProducts.length > 0) {
    res.json({ success: true, data: giProducts });
  } else {
    res.status(404).json({ success: false, message: "No GI products found." });
  }
});

// Get Landmarks and Activities
router.get('/activities', (req, res) => {
  if (landmarks.length > 0) {
    res.json({ success: true, data: landmarks });
  } else {
    res.status(404).json({ success: false, message: "No landmarks or activities found." });
  }
});

module.exports = router;
