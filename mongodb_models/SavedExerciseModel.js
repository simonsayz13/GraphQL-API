const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SavedExerciseSchema = new Schema(
  {
    uid: {
      type: String,
    },
    savedExercise: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },    
      description: {
        type: String,
        required: true,
      },
      muscleGroup: {
        type: String,
        required: true,
      },
      imageURL: {
        type: String,
        required: false,
      }
    }
  }
)

module.exports = mongoose.model("SavedExercise", SavedExerciseSchema)