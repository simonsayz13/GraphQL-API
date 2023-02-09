// const Pool = require("pg").Pool;
import postgres from "pg";
import { GraphQLScalarType } from "graphql";

const pool = new Pool();

// For localhost
// const pool = new postgres.Pool({
//   connectionString:
//     "postgresql://postgres:MhYLAaxKGrvbT0e45y2m@containers-us-west-154.railway.app:6839/railway",
// });

const getUsers = async () => {
  try {
    const queryResult = await pool.query("SELECT * FROM users");
    return queryResult.rows;
  } catch (error) {
    console.log("getUser() Query failed: ", error);
  }
};

const getTest = async () => {
  try {
    const queryResult = await pool.query("SELECT * FROM testdate");
    console.log(queryResult);
    return queryResult.rows;
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (args) => {
  const { uid, username, first_name, last_name, height, weight } = args.User;

  let time = Date.now();

  try {
    const queryResult =
      await pool.query(`INSERT INTO users (uid, username, first_name, last_name, height, weight, created_at, updated_at) 
      VALUES (${uid}, '${username}', '${first_name}', '${last_name}', ${height}, ${weight}, to_timestamp(${time} / 1000.0), to_timestamp(${time}/1000.0))`);

    console.log(queryResult);

    const queryStatus = {
      status: "success",
    };

    return queryStatus;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getUsers,
  Date,
  getTest,
  addUser,
};
