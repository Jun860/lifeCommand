var express = require('express');
var router = express.Router();
var sql_model = require('../model/sql.js').sql;

router.get('/insert', async function (req, res, next) {
  var sql = new sql_model();

  res.json(await sql.insert(req.query));
});

router.get('/select', async function (req, res, next) {
  var sql = new sql_model();

  res.json(await sql.select(req.query));
});

router.get('/out', async function (req, res, next) {
  var sql = new sql_model();

  var csv = await sql.select_all_tocsv(req.query);
  res.setHeader('Content-disposition', 'attachment; filename=BBZ.csv');
  res.writeHead(200, {
    'Content-Type': 'text/csv'
  });
  res.write(Buffer.from('\xEF\xBB\xBF', 'binary'));
  res.write(Buffer.from(csv));
  res.end();
});

router.get('/select_bytime', async function (req, res, next) {
  var temp_params = req.query;
  var sql = new sql_model();

  res.json(await sql.select_bytime(temp_params.month, temp_params.cag));
});

router.get('/select_bytime_all', async function (req, res, next) {
  var temp_params = req.query;
  var sql = new sql_model();

  res.json(await sql.select_bytime_all(temp_params.month, temp_params.cag));
});

router.get('/select_bytime_bar', async function (req, res, next) {
  var temp_params = req.query;
  var sql = new sql_model();

  res.json(await sql.select_bytime_bar(temp_params.month, temp_params.cag));
});

router.get('/get_cag', async function (req, res, next) {
  var temp_params = req.query;
  var sql = new sql_model();

  res.json(await sql.get_event_list(temp_params.month));
});

module.exports = router;