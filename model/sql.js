var pgsql = require('../method/sql/pgsql');
var format_in = require('../method/sql/format_in');
var format_out = require('../method/sql/format_out');

function sql() {
    var params = {};
    this.insert = async function () {
        var res = await pgsql.insert(`"BBZ"."Mrecord"`, format_in.mode(params));
        return res;
    }
    this.select = async function () {
        var temp_params = format_out.select_mode(params);
        var res = await pgsql.select(`"BBZ"."Mrecord"`, temp_params.key ,temp_params.condition );
        return res;
    }
    this.getReq = function (req) {
        params = req;
        console.log('params', params);
    }
}

module.exports = {
    sql: sql
}