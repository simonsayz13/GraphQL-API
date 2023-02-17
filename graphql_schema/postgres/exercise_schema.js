import { buildSchema } from "graphql";

const exerciseSchema = buildSchema(`
  scalar Date

  type Exercise {
    eid: Int!
    alternative_eid: String!
    exercise_name: String!
    instruction: String!
    description: String!
    image: String
    equipment: [String]
    primary_muscle: String
    secondary_muscle: String
    updated_at: Date
  }

  type ExerciseTarget {
    tid: Int!
    eid: Int!
    measurement_type: String
    reps: Int
    sets: Int
    distance: Int
    duration: Int
  }

  input ExerciseTargetInput {
    eid: Int!
    measurement_type: String
    reps: Int
    sets: Int
    distance: Int
    duration: Int
  }

  input ExerciseInput {
    alternative_eid: String!
    exercise_name: String!
    instruction: String!
    description: String!
    image: String!
    primary_muscle: String!
    secondary_muscle: String!
    equipment: [String]!
    difficulty: String!
    measurement_type: String!
  }

  type addExerciseResult {
    status: String!
    message: String!
  }

  type Query {
    getExercise:[Exercise!]
  }

  type Mutation {
    addExercise(Exercise: ExerciseInput): addExerciseResult
    addExerciseTarget(ExerciseTarget: ExerciseTargetInput): addExerciseResult
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

export default exerciseSchema;
