import postgres from "pg";
import { config } from "dotenv";

config()

// For localhost
export default new postgres.Pool({
  connectionString:
    process.env.postgresRailwayConnectionString
});
