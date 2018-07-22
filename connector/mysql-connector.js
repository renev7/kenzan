/*
 *
 * MySQL DB connector
 * March, 2018
 *
 */

var mysql = require('mysql');
var env = require('../config/db.json')['db'];

var pool = mysql.createPool({
    connectionLimit : 5,
    host : process.env.KENZAN_HOST || env.host,
    port : process.env.KENZAN_PORT || env.port,
    user : process.env.KENZAN_USER || env.user,
    password : process.env.KENZAN_PASSWORD || env.password,
    database : process.env.KENZAN_DATABASE || env.database
});

module.exports = pool;
