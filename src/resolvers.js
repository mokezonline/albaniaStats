const { CountryStats } = require("./models/countryStats");

const resolvers = {
  Querey: {
    helloworld: () => 'hellworld',
    countryStats: (year) => CountryStats.find({ year: year })
  }
}

module.export = resolvers;