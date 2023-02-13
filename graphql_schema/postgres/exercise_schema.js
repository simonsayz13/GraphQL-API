import { buildSchema } from "graphql";

const exerciseSchema = buildSchema(`
  scalar Date

  type Exercise {
    eid: String!
    alternative_eid: String!
    exercise_name: String!
    instruction: String!
    description: String!
    image: String
    video_url: String
    primary_muscle: String
    secondary_muscle: String
    updated_at: Date
  }

  type Equipment {
    equipment_name: String!
    equipment_type: String!
    equipment_weight: Int
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
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

export default exerciseSchema;
