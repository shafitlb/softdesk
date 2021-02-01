const {Pool} = require('pg')

const pool = new Pool({

    user : "postgres",
    password : "admin",
    database : "restuarent_database",
    host : "localhost",
    port : 5432


});
 module.exports = pool;

