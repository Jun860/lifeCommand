var pg = require('pg');
var config = require('../../config/sql_config.js').sql_config;

const Json2csvParser = require('json2csv').Parser;

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

async function select_tocsv(database, key, condition) {
    var pool = new pg.Pool(config);
    var res;

    const fields = ['time', 'action', 'things', 'money', 'who', 'where'];
    const json2csvParser = new Json2csvParser({ fields });

    try {
        var client = await pool.connect();

        var sql = `SELECT ${key} FROM ${database} ${condition}`;
        console.log('select_sql', sql);

        res = (await client.query(sql)).rows;
        var csv = json2csvParser.parse(res);
    } catch (err) {
        console.error(err);
        csv = "error"
    } finally {
        client.release();
        return csv;
    }
}


module.exports = {
    insert: insert,
    select: select,
    select_tocsv: select_tocsv
};