import { addUser, getUsers, findUser } from "./user_resolvers.js";
import { addExercise, getExercise, addExerciseTarget } from "./exercise_resolvers.js";
import { getWorkouts, addWorkout, addExerciseToWorkout } from "./workout_resolvers.js";

export default { addUser, getUsers, findUser, addExercise, getExercise, addExerciseTarget, getWorkouts, addWorkout, addExerciseToWorkout };

