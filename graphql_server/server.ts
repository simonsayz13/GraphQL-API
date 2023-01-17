const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const exerciseSchema = require("../graphql_schema/exercise")
const savedExerciseSchema = require("../graphql_schema/store_exercise")
const graphqlResolvers = require("./graphql_resolvers/resolver")
const storeExerciseResolver = require("./graphql_resolvers/storeExerciseResolver")
const mongoose = require("mongoose")

const app = express()

// export mongodbURI="mongodb+srv://admin:Changeme_123@db1.5y8jmgl.mongodb.net/fitness?retryWrites=true&w=majority"

const uri = process.env.mongodbURI

app.use(
  "/graphql",
  graphqlHTTP({
    schema: exerciseSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

app.use("/graphql",
  graphqlHTTP({
    schema: savedExerciseSchema,
    rootValue: storeExerciseResolver,
    graphiql: true
  })
)

const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.set('strictQuery', false)

mongoose.connect(uri, options).then(() => app.listen(8080, console.log("Server is running on localhost:8080")))
  .catch((error: Error) => {
    throw error
  }
)