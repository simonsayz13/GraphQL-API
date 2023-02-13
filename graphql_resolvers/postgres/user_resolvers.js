import PostgresConnectionPool from "./connection_pool.js"

const getUsers = async () => {
  try {
    const queryResult = await PostgresConnectionPool.query("SELECT * FROM users");
    return queryResult.rows;
  } catch (error) {
    console.log("getUser() Query failed: ", error);
  }
};

const addUser = async (args) => {
  const { uid, username, first_name, last_name, height, weight } = args.User;

  let time = Date.now();

  try {
    await PostgresConnectionPool.query(`INSERT INTO users (uid, username, first_name, last_name, height, weight, created_at, updated_at) 
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
    const queryResult = await PostgresConnectionPool.query(`SELECT * FROM users WHERE uid='${uid}'`);
    return queryResult.rows[0];
  } catch (error) {
    console.log(error);
    return { status: "Fail", message: error };
  }
};

export {
  getUsers,
  addUser,
  findUser,
};
