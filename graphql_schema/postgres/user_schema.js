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
    findUser(uid: String!): User
  }

  type Mutation {
    addUser(User: userInput): addUserResult
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

export default userSchema;
