const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { HOLA } = require("../resolves/index");

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    hola: HOLA,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
});

module.exports = { schema };
