import PostgresConnectionPool from "./connection_pool.js";
import {getPsqlColumnNames, getPsqlColumnValues} from "./query_utilities.js";

const getExercise = async () => {
  try {
    const queryResult = await PostgresConnectionPool.query(
      `Select * FROM exercise`
    );
    return queryResult.rows;
  } catch (error) {
    console.log(error);
  }
};

const addExercise = async (args) => {
  let columnNames = getPsqlColumnNames(args.Exercise);
  let columnValues = getPsqlColumnValues(args.Exercise);

  try {
    await PostgresConnectionPool.query(`
      INSERT INTO exercise (${columnNames})
      VALUES (
        ${columnValues}
      )
    `);
    return {
      status: "Success",
      message: "New user has been added to database.",
    };
  } catch (error) {
    console.log(error);
  }
};

const addExerciseTarget = async (args) => {
  try {
    let columnNames = getPsqlColumnNames(args.ExerciseTarget);
    let columnValues = getPsqlColumnValues(args.ExerciseTarget);

    await PostgresConnectionPool.query(`
      INSERT INTO exercise_targets (${columnNames})
      VALUES (
        ${columnValues}
      )
    `);
    return {
      status: "Success",
      message: "New user has been added to database.",
    };
  } catch (err) {
    console.log(err);
  }
};

export { getExercise, addExercise, addExerciseTarget };
