const { BlogPost } = require("../models");

exports.createBlogPost = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const timestamp = Math.floor(Date.now() / 1000); // Unix timestamp in seconds

    const newBlogPost = await BlogPost.create({
      title,
      description,
      category,
      timestamp,
    });

    return res.status(201).json(newBlogPost);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create a blog post" });
  }
};