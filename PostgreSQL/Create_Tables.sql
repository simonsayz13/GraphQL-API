CREATE TYPE difficulty_enum AS ENUM ('easy', 'medium', 'hard');
CREATE TYPE muscle_enum AS ENUM ('chest', 'back', 'arms', 'abdominals', 'legs', 'shoulders');
CREATE TYPE measurement_enum AS ENUM ('distance', 'weight', 'time', 'lapse');

CREATE TABLE users (
  uid TEXT PRIMARY KEY,
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
  eid INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  alternative_eid TEXT UNIQUE,
  exercise_name TEXT NOT NULL,
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
  tid INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  eid INT NOT NULL REFERENCES exercise(eid) ON DELETE CASCADE,
  measurement_type MEASUREMENT_ENUM NOT NULL,
  reps INT,
  sets INT,
  distance INT,
  duration INT
);

CREATE TABLE user_exercise (
  uid TEXT REFERENCES users(uid) ON DELETE CASCADE,
  tid INT REFERENCES exercise_targets(tid) ON DELETE CASCADE,
  reps INT,
  sets INT,
  distance INT,
  duration INT,
  is_completed BOOLEAN,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  CONSTRAINT user_exercise_pkey PRIMARY KEY (uid, tid)
);

CREATE TABLE liked_exercises (
  uid TEXT REFERENCES users(uid) ON DELETE CASCADE,
  tid INT REFERENCES exercise_targets(tid) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL,
  CONSTRAINT liked_exercises_pkey PRIMARY KEY (uid, tid)
);

CREATE TABLE workouts (
  wid SERIAL PRIMARY KEY,
  workout_name TEXT NOT NULL,
  description TEXT NOT NULL,
  difficulty DIFFICULTY_ENUM NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE TABLE workouts_exercise_targets (
  wid SERIAL REFERENCES workouts(wid) ON DELETE CASCADE,
  tid INT REFERENCES exercise_targets(tid) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL,
  CONSTRAINT workouts_liked_exercises_pkey PRIMARY KEY (wid, tid)
);

CREATE TABLE user_workouts (
  wid SERIAL REFERENCES workouts(wid) ON DELETE CASCADE,
  uid TEXT REFERENCES users(uid) ON DELETE CASCADE,
  is_completed BOOLEAN NOT NULL DEFAULT FALSE,
  completed_on TIMESTAMP,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  CONSTRAINT user_workouts_pkey PRIMARY KEY (wid, uid)
);

CREATE TABLE liked_workouts (
  uid TEXT REFERENCES users(uid) ON DELETE CASCADE,
  wid INT REFERENCES workouts(wid) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL,
  CONSTRAINT liked_workouts_pkey PRIMARY KEY (uid, wid)
);

CREATE TABLE plans (

);

CREATE TABLE user_plans (

);

CREATE TABLE liked_plans (

);

