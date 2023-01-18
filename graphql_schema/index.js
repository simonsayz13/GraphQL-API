const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Exercise {
    _id: ID!
    id: String!
    name: String!
    description: String!
    muscleGroup: String!
    imageURL: String!
  }

  input createExerciseInput {
    id: String!
    name: String!
    description: String!
    muscleGroup: String!
    imageURL: String!
  }

  type ExerciseStoreType {
    id: String!
    name: String!
    description: String!
    muscleGroup: String!
    imageURL: String!
    sets: Int!
    reps: Int!
  }

  input SaveExerciseInput {
    id: String!
    name: String!
    description: String!
    muscleGroup: String!
    imageURL: String!
    sets: Int!
    reps: Int!
  }
  
  input getExerciseInput {
    uid: String!
  }

  type ExerciseStore {
    _id: ID!
    uid: String!
    storedExercise: ExerciseStoreType!
  }  

  input StoreExerciseInput {
    uid: String!
    storedExercise: SaveExerciseInput!
  }

  type Query {
    getExercises:[Exercise!]
    getStoredExercises(UserID: getExerciseInput):[ExerciseStore!]
  }

  type Mutation {
    createExercise(Exercise: createExerciseInput): Exercise
    storeExercise(ExerciseStore: StoreExerciseInput): ExerciseStore
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
