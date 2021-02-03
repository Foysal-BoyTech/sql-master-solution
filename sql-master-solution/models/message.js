'use strict';
const pool = require('./index');


exports.getAll = async () => {
  const res = await pool.query('select * from messages');
  return res.rows;
};

exports.set = msg => pool.query(`
  insert into messages (author, content, timestamp)
  values (${msg.author}, ${msg.content}, ${Date.now()});
`);
