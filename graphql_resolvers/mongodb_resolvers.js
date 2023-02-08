import Exercise from "../mongodb_models/ExerciseModel.js";
import SavedExerciseModel from "../mongodb_models/SavedExerciseModel.js";
const getExercises = async () => {
  try {
    const exercisesFetched = await Exercise.find();
    return exercisesFetched.map((exercise) => {
      return {
        ...exercise._doc,
        _id: exercise.id,
      };
    });
  } catch (error) {
    throw error;
  }
};

const createExercise = async (args) => {
  try {
    const { id, name, description, muscleGroup, imageURL } = args.Exercise;
    const exercise = new Exercise({
      id,
      name,
      description,
      muscleGroup,
      imageURL,
    });
    const newExercise = await exercise.save();
    return { ...newExercise._doc, _id: newExercise.id };
  } catch (error) {
    throw error;
  }
};

const getStoredExercises = async (args) => {
  try {
    const { uid } = args.UserID;
    const StoredExercisesFetched = await SavedExerciseModel.find({
      uid: uid,
    });
    return StoredExercisesFetched.map((exercise) => {
      return {
        ...exercise._doc,
        _id: exercise._id,
      };
    });
  } catch (error) {
    throw error;
  }
};

const storeExercise = async (args) => {
  try {
    const { uid, storedExercise } = args.ExerciseStore;
    const { id, name, description, muscleGroup, imageURL, sets, reps } =
      storedExercise;
    const newStoredExercise = new SavedExerciseModel({
      uid,
      storedExercise: {
        id,
        name,
        description,
        muscleGroup,
        imageURL,
        sets,
        reps,
      },
    });
    const save_result = await newStoredExercise.save();
    return { ...save_result._doc, _id: save_result.id };
  } catch (error) {
    throw error;
  }
};

export default {
  getExercises,
  createExercise,
  getStoredExercises,
  storeExercise,
};
