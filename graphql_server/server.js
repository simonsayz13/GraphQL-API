import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import mongoDBSchema from '../graphql_schema/mongodb/mongodb_gql.js';
import postgresSchema from '../graphql_schema/postgres/index.js';
import nsqlResolver from '../graphql_resolvers/mongodb/mongodb_resolvers.js';
import postgresResolver from '../graphql_resolvers/postgres/index.js';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const app = express();

const uri = process.env.mongodbURI;

const port = process.env.PORT || 8080

app.use(
  "/graphql/postgresql",
  graphqlHTTP({
    schema: postgresSchema,
    rootValue: postgresResolver,
    graphiql: true,
    pretty: true,
  })
);

app.use(
  "/graphql/nosql",
  graphqlHTTP({
    schema: mongoDBSchema,
    rootValue: nsqlResolver,
    graphiql: true,
    pretty: true,
  })
);

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.set("strictQuery", false);

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(
      port,
      console.log("GraphQL API Server is running on port:", port)
    )
  )
  .catch((error) => {
    throw error;
  });
