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

module.exports = router;
