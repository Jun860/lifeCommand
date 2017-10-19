function select_mode(params) {
    if (params)
        return {}
    var res = {};
    res.key = params.key;
    res.condition = params.condition;
    return res;
}

module.exports = {
    select_mode: select_mode
}