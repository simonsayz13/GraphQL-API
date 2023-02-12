import {mergeResolvers} from "@graphql-tools/merge";
import user_resolvers from "./user_resolvers.js";
import exercise_resolvers from "./exercise_resolvers.js"

export default mergeResolvers(user_resolvers,exercise_resolvers)