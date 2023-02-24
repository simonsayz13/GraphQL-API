import { buildSchema } from "graphql";

const workoutsSchema = buildSchema(`

  enum difficultyEnum {
    easy
    medium
    hard
  }

  scalar Date

  type Workouts {
    wid: Int!
    workout_name: String!
    description: String!
    created_at: Date
    updated_at: Date
  }

  input WorkoutsInput {
    workout_name: String!
    description: String!
    difficulty: difficultyEnum!
  }

  type addWorkoutsResult {
    status: String!
    message: String!
  }

  input WorkoutLink {
    wid: Int!
    tid: Int!
    created_at: Date
  }

  input WorkoutLinkInput {
    wid: Int!
    tid: Int!
  }

  type Query {
    getWorkouts:[Workouts]
  }

  type Mutation {
    addWorkout(Workouts: WorkoutsInput): addWorkoutsResult
    addExerciseToWorkout(WorkoutLink: WorkoutLinkInput): addWorkoutsResult
  }

  schema {
    query: Query
  }

`);

export default workoutsSchema