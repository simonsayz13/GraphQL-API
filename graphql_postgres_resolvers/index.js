const { url } = require("inspector");

const Pool = require("pg").Pool;


const pool = new Pool();
// const pool = new Pool({
//   connectionString: 'postgresql://postgres:MhYLAaxKGrvbT0e45y2m@containers-us-west-154.railway.app:6839/railway'
// });

module.exports = {
  getUsers: async () => {
    pool.query("SELECT * FROM users", (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows)
      // return results.rows
    });
  },
};
