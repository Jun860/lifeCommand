var express = require('express');
var router = express.Router();
var sql_model = require('../model/sql.js').sql;

router.get('/insert', async function(req, res, next) {
  var sql = new sql_model();
  sql.getReq(req.query);

  res.json(await sql.insert());
});

router.get('/select', async function(req, res, next) {
  var sql = new sql_model();
  sql.getReq(req.query);

  res.json(await sql.select());
});

router.get('/select_bytime', async function(req, res, next) {
  var temp_params = req.query;
  var sql = new sql_model();
  sql.getReq({
    key:`sum(money),extract(month from now()- interval '${temp_params.month} month') as month`,
    condition:`where (extract(month from time) = (extract(month from now()- interval '${temp_params.month} month'))) and (extract(year from time) = extract(year from now()- interval '${temp_params.month} month')) and action not in ('旅游','医院')`
  });
  res.json(await sql.select());
});

module.exports = router;
