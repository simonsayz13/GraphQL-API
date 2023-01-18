const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RetrieveExerciseSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
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

module.exports = mongoose.model("saveddd_exercises", RetrieveExerciseSchema);
