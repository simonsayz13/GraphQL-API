const Exercise = require("../mongodb_models/ExerciseModel");
const SavedExerciseModel = require("../mongodb_models/SavedExerciseModel");

module.exports = {
  getExercises: async () => {
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
  },

  createExercise: async (args) => {
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
  },

  getStoredExercises: async (args) => {
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
  },

  storeExercise: async (args) => {
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
  },
};
