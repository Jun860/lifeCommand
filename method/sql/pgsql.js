var pg = require('pg');
var config = require('../../config/sql_config.js').sql_config;

async function insert(database, params) {
    var pool = new pg.Pool(config);
    var res;

    try {
        var client = await pool.connect();

        var sql = `INSERT INTO ${database} VALUES (${params.splice(',')})`;
        console.log('insert_sql', sql);

        res = await client.query(sql);
    } catch (err) {
        console.error(err);
        res = "error"
    } finally {
        client.release();
        return res;
    }
}

async function select(database, key, condition) {
    var pool = new pg.Pool(config);
    var res;

    try {
        var client = await pool.connect();

        var sql = `SELECT ${key} FROM ${database} ${condition}`;
        console.log('select_sql', sql);

        res = (await client.query(sql)).rows;
    } catch (err) {
        console.error(err);
        res = "error"
    } finally {
        client.release();
        return res;
    }
}

module.exports = {
    insert: insert,
    select: select
};