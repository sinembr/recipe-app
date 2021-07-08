const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title:String,
      publisher:String,
      image:String
  });
  
  module.exports = mongoose.model("recipe", RecipeSchema);