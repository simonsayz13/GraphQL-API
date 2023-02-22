import PostgresConnectionPool from "./connection_pool.js";
import { getPsqlColumnNames, getPsqlColumnValues } from "./query_utilities.js";

const getWorkouts = async () => {
  try {
    const queryResult = await PostgresConnectionPool.query(
      `Select * FROM workouts`
    );
    return queryResult.rows;
  } catch (error) {
    console.log(error);
  }
};

const addWorkout = async (args) => {
  let columnNames = getPsqlColumnNames(args.Workouts);
  let columnValues = getPsqlColumnValues(args.Workouts);
  let time = Date.now();

  try {
    await PostgresConnectionPool.query(`
      INSERT INTO workouts (${columnNames}, created_at, updated_at)
      VALUES (
        ${columnValues},
        to_timestamp(${time} / 1000.0),
        to_timestamp(${time} / 1000.0)
      )
    `);
    return {
      status: "Success",
      message: "New workout has been added to database.",
    };
  } catch (error) {
    return { status: "Fail", message: error };
  }
};

export {getWorkouts, addWorkout};