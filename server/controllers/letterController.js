const Letter = require("../models/Letter");

const getFeaturedLetters = async (req, res) => {
  try {
    const letters = await Letter.find({
      featured: true
    })
      .populate("category", "name slug")
      .sort({ createdAt: -1 })
      .limit(12);

    res.json(letters);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get featured letters"
    });
  }
};

const getLetterBySlug = async (req, res) => {
  try {
    const letter = await Letter.findOne({
      slug: req.params.slug
    }).populate("category", "name slug");

    if (!letter) {
      return res.status(404).json({
        message: "Letter not found"
      });
    }

    res.json(letter);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get letter"
    });
  }
};

const getLettersByCategory = async (req, res) => {
  try {
    const letters = await Letter.find()
      .populate({
        path: "category",
        match: {
          slug: req.params.slug
        },
        select: "name slug"
      })
      .sort({ title: 1 });

    const filtered = letters.filter(
      (letter) => letter.category !== null
    );

    res.json(filtered);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get category letters"
    });
  }
};

const searchLetters = async (req, res) => {
  try {
    const query = req.query.q || "";

    const letters = await Letter.find({
      $or: [
        {
          title: {
            $regex: query,
            $options: "i"
          }
        },
        {
          description: {
            $regex: query,
            $options: "i"
          }
        }
      ]
    })
      .populate("category", "name slug")
      .limit(30);

    res.json(letters);
  } catch (error) {
    res.status(500).json({
      message: "Search failed"
    });
  }
};

module.exports = {
  getFeaturedLetters,
  getLetterBySlug,
  getLettersByCategory,
  searchLetters
};