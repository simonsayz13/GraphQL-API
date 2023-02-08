// const { buildSchema } = require("graphql");

import { buildSchema } from "graphql";

const schema = buildSchema(`

  scalar Date

  type Exercise {
    _id: ID!
    id: String!
    name: String!
    description: String!
    muscleGroup: String!
    imageURL: String!
  }

  type User {
    uid: String!
    username: String!
    first_name: String!
    last_name: String!
    height: Float
    weight: Float
    created_at: Date
    updated_at: Date
    date_of_birth: Date
  }

  input userInput {
    uid: String!
    username: String!
    first_name: String!
    last_name: String!
    height: Float
    weight: Float
    created_at: Date
    updated_at: Date
    date_of_birth: Date
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
    getUsers:[User!]
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

export default schema;
