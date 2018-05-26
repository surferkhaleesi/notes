const pg = require('pg');
const client = new pg.Client('postgres://localhost/postgres');

module.exports = client;