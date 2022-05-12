const { Pool } = require('pg');

// add elephant SQL url here. Queries to create tables are below :) 
const PG_URI = 'postgres://ejwfrbko:zR8mzpU95_d1L7NNj6jlvNTopb2373jh@heffalump.db.elephantsql.com/ejwfrbko';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
