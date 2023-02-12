// const Pool = require("pg").Pool;
import postgres from "pg";
// const pool = new postgres.Pool();

// For localhost
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

const addUser = async (args) => {
  const { uid, username, first_name, last_name, height, weight } = args.User;

  let time = Date.now();

  try {
    await pool.query(`INSERT INTO users (uid, username, first_name, last_name, height, weight, created_at, updated_at) 
                      VALUES ('${uid}', '${username}', '${first_name}', '${last_name}', ${height}, ${weight}, to_timestamp(${time} / 1000.0), to_timestamp(${time}/1000.0))`);

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
    const {uid} = args
    const queryResult = await pool.query(`SELECT * FROM users WHERE uid='${uid}'`);
    return queryResult.rows[0];
  } catch (error) {
    console.log(error);
    return { status: "Fail", message: error };
  }
};

export default {
  getUsers,
  addUser,
  findUser,
};
