var pgsql = require('../method/sql/pgsql');
var format_in = require('../method/sql/format_in');
var format_out = require('../method/sql/format_out');
var key = require('../method/sql/key.js');

function sql() {

}

sql.prototype = {
    insert: async function (params) {
        var res = await pgsql.insert(`"BBZ"."Mrecord"`, format_in.mode(params));
        return res != 'error';
    },
    select_all_tocsv: async function (params) {
        var year = params.year;
        if (year) { }
        else {
            year = "extract(year from now())";
        }
        var temp_params = {
            key: `*,to_char(time,'YYYY-MM-DD HH:mm:ss') as time_str`,
            condition: `where extract(year from time) = ${year}`
        };
        var res = await pgsql.select_tocsv(`"BBZ"."Mrecord"`, temp_params.key, temp_params.condition);
        return res;
    },
    select: async function (params) {
        var temp_params = {
            key: `to_char(time,'MM-DD') as time_day,action,things,money`,
            condition: `where (extract(month from time) = (extract(month from now()- interval '${params.month} month'))) and (extract(year from time) = extract(year from now()- interval '${params.month} month')) and "where" = '${params.cag}' ORDER BY time DESC limit ${params.num_pro_page} offset ${params.num_pro_page * (params.current_page - 1)}`
        };
        var res = await pgsql.select(`"BBZ"."Mrecord"`, temp_params.key, temp_params.condition);
        return res;
    },
    select_bytime: async function (month, cag) {
        var temp_params = {
            key: `sum(money),extract(year from now()- interval '${month} month') as year,extract(month from now()- interval '${month} month') as month`,
            condition: `where (extract(month from time) = (extract(month from now()- interval '${month} month'))) and (extract(year from time) = extract(year from now()- interval '${month} month')) and action not in (${key.not_in}) and "where" = '${cag}'`
        }
        var res = await pgsql.select(`"BBZ"."Mrecord"`, temp_params.key, temp_params.condition);
        return res;
    },
    select_bytime_all: async function (month, cag) {
        var temp_params = {
            key: `sum(money),extract(year from now()- interval '${month} month') as year,extract(month from now()- interval '${month} month') as month`,
            condition: `where (extract(month from time) = (extract(month from now()- interval '${month} month'))) and (extract(year from time) = extract(year from now()- interval '${month} month')) and "where" = '${cag}'`
        }
        var res = await pgsql.select(`"BBZ"."Mrecord"`, temp_params.key, temp_params.condition);
        return res;
    },
    select_bytime_bar: async function (month, cag) {
        var temp_params = {
            key: `things, action,sum(money) as money`,
            condition: `where (extract(month from time) = (extract(month from now()- interval '${month} month'))) and (extract(year from time) = extract(year from now()- interval '${month} month')) and action not in (${key.not_in}) and "where" = '${cag}' group by action,things order by money DESC`
        }
        var res = await pgsql.select(`"BBZ"."Mrecord"`, temp_params.key, temp_params.condition);
        return res;
    },
    get_event_list: async function (month) {
        var temp_params = {
            key: `"where",sum(money) as money`,
            condition: `where (extract(month from time) = (extract(month from now()- interval '${month} month'))) and (extract(year from time) = extract(year from now()- interval '${month} month')) and action not in (${key.not_in}) group by "where" order by money DESC`
        }
        var res = await pgsql.select(`"BBZ"."Mrecord"`, temp_params.key, temp_params.condition);
        return res;
    }
}

module.exports = {
    sql: sql
}