import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
  },
});

export default mongoose.model("Exercise", ExerciseSchema);