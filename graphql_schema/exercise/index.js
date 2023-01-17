const { buildSchema } = require("graphql")

module.exports = buildSchema(`
  type Exercise {
    _id: ID!
    id: String!
    name: String!
    description: String!
    muscleGroup: String!
    imageURL: String!
  }

  input ExerciseInput {
    id: String!
    name: String!
    description: String!
    muscleGroup: String!
    imageURL: String!
  }

  type Query {
    getExercises:[Exercise!]
  }

  type Mutation {
    createExercise(Exercise: ExerciseInput): Exercise
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)