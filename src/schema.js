const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type CountryStats {
    name: String
    year: String
    area: Int
    population: Int
  }

  type Query {
    helloWorld: String,
    year: String
  }
`

module.exports = typeDefs;