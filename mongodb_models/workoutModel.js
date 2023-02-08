import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema(
  {
    workout_name: {
      type: String,
      required: true,
    },
    set: {
      type: Number,
      required: true,
    },    
    rep: {
      type: Number,
      required: true,
    },
  }
)

module.exports = mongoose.model("Workout", workoutSchema)