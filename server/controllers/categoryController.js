const Category = require("../models/Category");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find()
      .sort({ name: 1 });

    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get categories"
    });
  }
};

const getCategoryBySlug = async (req, res) => {
  try {
    const category = await Category.findOne({
      slug: req.params.slug
    });

    if (!category) {
      return res.status(404).json({
        message: "Category not found"
      });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get category"
    });
  }
};

module.exports = {
  getCategories,
  getCategoryBySlug
};