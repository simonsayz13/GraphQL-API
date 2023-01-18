const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const exerciseSchema = require("../graphql_schema/exercise")
const gqlResolver = require("./graphql_resolvers")
const mongoose = require("mongoose")

const app = express()

// export mongodbURI="mongodb+srv://admin:Changeme_123@db1.5y8jmgl.mongodb.net/fitness?retryWrites=true&w=majority"

const uri = process.env.mongodbURI

app.use(
  "/graphql",
  graphqlHTTP({
    schema: exerciseSchema,
    rootValue: gqlResolver,
    graphiql: true,
    pretty: true
  })
)

const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.set('strictQuery', false)

mongoose.connect(uri, options).then(() => app.listen(8080, console.log("GraphQL API Server is running on localhost:8080")))
  .catch((error) => {
    throw error
  }
)