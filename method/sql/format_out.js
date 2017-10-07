function select_mode(params){
    var res = {};
    res.key = params.key;
    res.condition = params.condition;
    return res;
}

module.exports = {
    select_mode:select_mode
}