// const { buildSchema } = require("graphql");

import { buildSchema } from "graphql";

const schema = buildSchema(`

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

  type Query {
    getUsers:[User!]
  }

  schema {
    query: Query
  }
`);

export default schema;
