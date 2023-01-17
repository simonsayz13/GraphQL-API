const { buildSchema } = require("graphql")

module.exports = buildSchema(`
  type Workout {
    _id: ID!
    workout_name: String!
    set: Int!
    rep: Int!
  }

  input WorkoutInput {
    workout_name: String!
    set: Int!
    rep: Int!
  }

  type Query {
    workouts:[Workout!]
  }

  type Mutation {
    createWorkout(Workout:WorkoutInput): Workout
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)