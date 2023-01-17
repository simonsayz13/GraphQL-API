// const Workout = require("../../mongodb_models/workoutModel")
const Exercise = require("../../mongodb_models/ExerciseModel")

module.exports = {

  getExercises: async () => {
    try {
      const exercisesFetched = await Exercise.find()
      console.log(exercisesFetched)
      return exercisesFetched.map(exercise => {
        return {
          ...exercise._doc,
          _id: exercise.id,
        }
      })
    } catch (error) {
      throw error
    }
  },
  createExercise: async (args) => {
    try {
      const { id, name, description, muscleGroup, imageURL } = args.Exercise
      const exercise = new Exercise({
        id,
        name,
        description,
        muscleGroup,
        imageURL
      })
      const newExercise = await exercise.save()
      return { ...newExercise._doc, _id: newExercise.id }
    } catch (error) {
      throw error
    }
  }
}