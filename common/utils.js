

// const connection = mysql.createConnection({
// host: 'mysql.wellness-ph.com',
// user: 'dash_data_user',
// password: 'MySql#2023',
// database: 'dash_data'
// })
// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
    config: {
      host     : process.env.ENDPOINT,
      database : process.env.DATABASE,
      user     : process.env.USERNAME,
      password : process.env.PASSWORD
    }
  })
  
  // Main handler function
  exports.handler = async (event, context) => {
    // Run your query
    let results = await mysql.query('SELECT * FROM users')
  
    // // Query with placeholder values
    // let results2 = await query('SELECT * FROM users WHERE name = ?', ['serverless'])

    // // Query with advanced options
    // let results3 = await query({
    // sql: 'SELECT * FROM users WHERE name = ?',
    // timeout: 10000,
    // values: ['serverless'])
    // })

    // Run clean up function
    await mysql.end()
  
    // Return the results
    return results;
  }