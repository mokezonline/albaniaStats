import mongoose from require("mongoose");

export const CountryStats = mongoose.model("Country", 
{ 
  name: String,
  year: String,
  area: Int,
  population: Integer

})