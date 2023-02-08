import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const SavedExerciseSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  storedExercise: {
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
    sets: {
      type: Number,
      require: true,
    },
    reps: {
      type: Number,
      require: true,
    },
  },
});

export default mongoose.model("saved_exercises", SavedExerciseSchema);
