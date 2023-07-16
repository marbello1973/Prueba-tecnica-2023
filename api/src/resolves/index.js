const { GraphQLString } = require("graphql");

const HOLA = {
  type: GraphQLString,
  resolve: () => "hello world ",
};

module.exports = { HOLA };
