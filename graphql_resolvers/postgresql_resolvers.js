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

const getTest = async () => {
  try {
    const queryResult = await pool.query("SELECT * FROM testdate");
    console.log(queryResult)
    return queryResult.rows;
  } catch (error) {
    console.log(error)
  }
}

const Date = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value).getFullYear; // Convert incoming integer to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

const addUser = async (args) => {

  const { uid, username, firstname, lastname, height, weight, createdat, dateofbirth } = args.User;

  const user = {
    uid: uid,
    username: username, 
    firstname: firstname, 
    lastname: lastname, 
    height: height, 
    weight: weight, 
    createdat: createdat,
    dateofbirth: dateofbirth
  }

  try {


  } catch (error) {
    console.log(error)

  }
}

export default {
  getUsers,
  Date,
  getTest,
  addUser
};
