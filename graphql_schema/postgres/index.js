import userSchema from "./user_schema.js";
import exerciseSchema from "./exercise_schema.js";
import { mergeSchemas } from "@graphql-tools/schema";

export default mergeSchemas({
  schemas: [userSchema, exerciseSchema],
});
