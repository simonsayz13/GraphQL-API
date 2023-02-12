import { buildSchema } from "graphql";

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
  }

  type Query {
    getExercises:[Exercise!]
  }

  schema {
    query: Query
  }
  
`);

export default exerciseSchema;
