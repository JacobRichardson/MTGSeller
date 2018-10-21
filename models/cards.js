var mongoose = require("mongoose");
var cardSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String
});
module.exports = mongoose.model("Card", cardSchema);