const { graphqlHTTP } = require("express-graphql");
const { Router } = require("express");
const { schema } = require("../schema/index");
// const { resolver } = require("../resolves/resolver");

// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// const schema = {};

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

module.exports = router;
