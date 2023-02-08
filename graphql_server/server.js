import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import exerciseSchema from '../graphql_schema/index.js';
import nsqlResolver from '../graphql_mongodb_resolvers/index.js';
import psqlResolvers from '../graphql_postgres_resolvers/index.js';
import mongoose from 'mongoose';


const app = express();

// export mongodbURI='mongodb+srv://admin:Changeme_123@db1.5y8jmgl.mongodb.net/fitness?retryWrites=true&w=majority'

const uri = process.env.mongodbURI;

const port = process.env.PORT || 8080

app.use(
  "/graphql/postgresql",
  graphqlHTTP({
    schema: exerciseSchema,
    rootValue: psqlResolvers,
    graphiql: true,
    pretty: true,
  })
);

app.use(
  "/graphql/nosql",
  graphqlHTTP({
    schema: exerciseSchema,
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
