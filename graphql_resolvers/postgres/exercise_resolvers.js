import PostgresConnectionPool from "./connection_pool.js";
import { toPsqlArrayLiteral } from "./query_utilities.js";

const getExercise = async () => {
  console.log("get exercise")
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
  const {
    alternative_eid,
    exercise_name,
    instruction,
    description,
    image,
    primary_muscle,
    secondary_muscle,
    equipment,
    difficulty,
    measurement_type,
  } = args.Exercise;

  const equipmentArrayLiteral = toPsqlArrayLiteral(equipment)

  try {
    await PostgresConnectionPool.query(`INSERT INTO exercise (alternative_eid,
      exercise_name,
      instruction,
      description,
      image,
      primary_muscle,
      secondary_muscle,
      equipment,
      difficulty,
      measurement_type) VALUES ( '${alternative_eid}',
      '${exercise_name}',
      '${instruction}',
      '${description}',
      '${image}',
      '${primary_muscle}',
      '${secondary_muscle}',
      '${equipmentArrayLiteral}',
      '${difficulty}',
      '${measurement_type}'
      )`);
      return {
        status: "Success",
        message: "New user has been added to database.",
      };
  } catch (error) {
    console.log(error);
  }
};

export {
  getExercise,
  addExercise,
};
