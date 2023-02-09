CREATE TYPE difficulty_enum AS ENUM ('easy', 'medium', 'hard');
CREATE TYPE muscle_enum AS ENUM ('chest', 'back', 'arms', 'abdominals', 'legs', 'shoulders');
CREATE TYPE measurement_enum AS ENUM ('distance', 'weight', 'time', 'lapse');

CREATE TABLE Users (
  uid TEXT NOT NULL PRIMARY KEY,
  username TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  height REAL,
  weight REAL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  date_of_birth Date
);

CREATE TABLE exercise (
  eid SERIAL NOT NULL PRIMARY KEY,
  alternative_eid TEXT,
  exericse_name TEXT NOT NULL,
  instruction TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  primary_muscle MUSCLE_ENUM NOT NULL,
  secondary_muscle MUSCLE_ENUM NOT NULL,
  equipment TEXT[] NOT NULL,
  difficulty DIFFICULTY_ENUM NOT NULL,
  measurement_type MEASUREMENT_ENUM NOT NULL
);

CREATE TABLE exercise_targets (
  tid SERIAL NOT NULL PRIMARY KEY,
  eid INT NOT NULL,
  CONSTRAINT fk_eid
    FOREIGN KEY(eid)
      REFERENCES exercise(eid),
  measurement_type MEASUREMENT_ENUM NOT NULL,
  reps INT,
  sets INT,
  distance INT,
  duration INT
);

CREATE TABLE workouts (

)

CREATE TABLE plans (

)

CREATE TABLE user_progress (

)

CREATE TABLE user_workouts (

)

CREATE TABLE user_plans (

)

CREATE TABLE liked_exercises (

)

CREATE TABLE liked_workouts (

)

CREATE TABLE liked_plans (

)

