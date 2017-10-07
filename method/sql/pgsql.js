var pg = require('pg');
var config = require('../../config/sql_config.js').sql_config;

async function insert(database, params) {
    var pool = new pg.Pool(config);

    try {
        var client = await pool.connect();

        var sql = `INSERT INTO ${database} VALUES (${params.splice(',')})`;
        console.log('insert_sql', sql);

        var res = await client.query(sql);

        return res;
    } catch (err) {
        console.error(err);
    } finally {
        client.release();
    }
}

async function select(database, key, condition) {
    var pool = new pg.Pool(config);

    try {
        var client = await pool.connect();

        var sql = `SELECT ${key} FROM ${database} ${condition}`;
        console.log('select_sql', sql);

        var res = await client.query(sql);

        return res.rows;
    } catch (err) {
        console.error(err);
    } finally {
        client.release();
    }
}

module.exports = {
    insert: insert,
    select: select
};