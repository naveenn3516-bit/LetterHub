const express = require("express");

const {
  getFeaturedLetters,
  getLetterBySlug,
  getLettersByCategory,
  searchLetters
} = require("../controllers/letterController");

const router = express.Router();

router.get("/featured", getFeaturedLetters);

router.get("/category/:slug", getLettersByCategory);

router.get("/search", searchLetters);

router.get("/:slug", getLetterBySlug);

module.exports = router;