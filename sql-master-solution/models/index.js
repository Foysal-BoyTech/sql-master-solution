const { Pool } = require('pg');

exports.pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'chat_server_dev',
  password: 'admin',
  port: 5432
});

