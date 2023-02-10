// const { buildSchema } = require("graphql");

import { buildSchema } from "graphql";

const userSchema = buildSchema(`

  scalar Date

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

  type addUserResult {
    status: String!
    message: String!
  }

  type Query {
    getUsers:[User!]
  }

  type Mutation {
    addUser(User: userInput): addUserResult
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

const exerciseSchema = buildSchema(`

  scalar Date

  type Exercise {
    eid: String!
    alternative_eid: String!
    name: String!
    instructions: String!
    description: String!
    image: String
    video_url: String
    primary_muscle: String
    secondary_muscle: String
    updated_at: Date
    date_of_birth: Date
  }

  type Query {
    getExercises:[Exercise!]
  }

  schema {
    query: Query
  }
  
`);

export default {
  userSchema,
  exerciseSchema
};
