const mongoose = require("mongoose");

const CountryStats = mongoose.model("Country", 
{ 
  name: String,
  year: String,
  area: Number,
  population: Number

})

module.exports = CountryStats;