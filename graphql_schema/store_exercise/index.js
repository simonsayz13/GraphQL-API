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
  
  type ExerciseStore {
    _id: ID!
    uid: String!
    savedExercise: Exercise!
  }  

  input StoreExerciseInput {
    uid: String!
    storedExercise: Exercise!
  }

  type Query {
    getExercises:[Exercise!]
  }

  type Mutation {
    storeExercise(ExerciseStore: StoreExerciseInput): ExerciseStore
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)