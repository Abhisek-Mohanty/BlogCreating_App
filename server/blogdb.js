let mongoose = require("mongoose");
let schema = mongoose.Schema;

let blogSchema = new schema({
  title: String,
  image: String,
  article: String,
});

const blogModel = mongoose.model("posts", blogSchema);
module.exports = blogModel;
