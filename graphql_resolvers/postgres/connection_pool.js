import postgres from "pg";

/* Use this when database is being hosted on the same infrastructure so 
that connection pool can be discovered by default */
// export default new postgres.Pool();

// For localhost
export default new postgres.Pool({
  connectionString:
    "postgresql://postgres:MhYLAaxKGrvbT0e45y2m@containers-us-west-154.railway.app:6839/railway",
});
