const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({
  body
}, res) => {
  Workout.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({
      date: -1
    })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .sort({
      date: -1
    })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({
  body,
  params
}, res) => {
  const useid = params.id;
  Workout.find({
      _id: useid
    })
    .then(dbWorkouts => {
      var currentWorkout = dbWorkouts[0].exercises;
      currentWorkout.push(body);
      Workout.findByIdAndUpdate(useid, {
        exercises: currentWorkout
      }, (error) => {
        if (error) throw error;
      })
      res.json(dbWorkouts[0].exercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});




module.exports = router;