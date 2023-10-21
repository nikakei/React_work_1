require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const { MONGO_URL, PORT } = process.env;
const PostController = require("./controllers/PostController");

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(routes);


app.post("/blog-posts", PostController.createBlogPost);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});