import PostgresConnectionPool from "./connection_pool.js";
import { getPsqlColumnNames, getPsqlColumnValues } from "./query_utilities.js";

const getUsers = async () => {
  try {
    const queryResult = await PostgresConnectionPool.query(
      "SELECT * FROM users"
    );
    return queryResult.rows;
  } catch (error) {
    console.log("getUser Query failed: ", error);
  }
};

const addUser = async (args) => {
  let columnNames = getPsqlColumnNames(args.User);
  let columnValues = getPsqlColumnValues(args.User);
  console.log("add user")
  let time = Date.now();

  try {
    await PostgresConnectionPool.query(`
      INSERT INTO users (${columnNames}, created_at, updated_at)
      VALUES (
        ${columnValues},
        to_timestamp(${time} / 1000.0),
        to_timestamp(${time} / 1000.0)
      )
    `);

    const mutationResult = {
      status: "Success",
      message: "New user has been added to database.",
    };

    return mutationResult;
  } catch (error) {
    console.log(error);
    return { status: "Fail", message: error };
  }
};

const findUser = async (args) => {
  try {
    const { uid } = args;
    const queryResult = await PostgresConnectionPool.query(
      `SELECT * FROM users WHERE uid='${uid}'`
    );
    return queryResult.rows[0];
  } catch (error) {
    console.log(error);
    return { status: "Fail", message: error };
  }
};

export { getUsers, addUser, findUser };
