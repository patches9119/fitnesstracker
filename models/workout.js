const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: "Enter a date for workout"
  },
  exercises: [{
    _id: {
      type: String,
    },
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    },
    duration: {
      type: Number,
    }
  }]
}, {
  // toJSON: {
  //   virtuals: true
  // }
});

workoutSchema.virtual("totalDuration").get(() => this.exercises.reduce((total, exercise) => {
  return total + exercise.duration;
}, 0));

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;