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
  
  input getExerciseInput {
    uid: String!
  }

  type ExerciseStore {
    _id: ID!
    uid: String!
    storedExercise: Exercise!
  }  

  input StoreExerciseInput {
    uid: String!
    storedExercise: ExerciseInput!
  }

  type Query {
    getExercises:[Exercise!]
    getStoredExercises(UserID: getExerciseInput):[ExerciseStore!]
  }

  type Mutation {
    createExercise(Exercise: ExerciseInput): Exercise
    storeExercise(ExerciseStore: StoreExerciseInput): ExerciseStore
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)