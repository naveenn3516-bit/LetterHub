const mongoose = require("mongoose");

const placeholderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    }
  },
  {
    _id: false
  }
);

const letterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },

    description: {
      type: String,
      required: true
    },

    whenToUse: {
      type: String,
      required: true
    },

    language: {
      type: String,
      default: "English"
    },

    icon: {
      type: String,
      default: "✉️"
    },

    format: {
      type: String,
      required: true
    },

    placeholders: {
      type: [placeholderSchema],
      default: []
    },

    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Letter",
  letterSchema
);