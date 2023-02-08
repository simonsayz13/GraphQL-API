// const Pool = require("pg").Pool;
import postgres from "pg";
import { GraphQLScalarType } from "graphql";

// const pool = new Pool();

const pool = new postgres.Pool({
  connectionString:
    "postgresql://postgres:MhYLAaxKGrvbT0e45y2m@containers-us-west-154.railway.app:6839/railway",
});

const getUsers = async () => {
  try {
    const queryResult = await pool.query("SELECT * FROM users");
    return queryResult.rows;
  } catch (error) {
    console.log("getUser() Query failed: ", error);
  }
};

export default {
  getUsers,
};
