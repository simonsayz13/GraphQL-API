import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import mongoDBSchema from '../graphql_schema/mongodb_gql.js';
import postgresqlSchema from '../graphql_schema/postgresql_gql.js'
import nsqlResolver from '../graphql_resolvers/mongodb_resolvers.js';
import psqlResolvers from '../graphql_resolvers/postgresql_resolvers.js';
import mongoose from 'mongoose';

const app = express();

// export mongodbURI='mongodb+srv://admin:Changeme_123@db1.5y8jmgl.mongodb.net/fitness?retryWrites=true&w=majority'

const uri = process.env.mongodbURI;

const port = process.env.PORT || 8080

app.use(
  "/graphql/postgresql",
  graphqlHTTP({
    schema: postgresqlSchema,
    rootValue: psqlResolvers,
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
      console.log("GraphQL API Server is running on localhost:", port)
    )
  )
  .catch((error) => {
    throw error;
  });
