function mode(params) {
    if (!params)
        return [];
    var result = [];

    result.push(`'${new Date().toLocaleString()}'`);

    if (params.action && check(params.action)) {
        global.mode = {
            where: params.where,
            action: params.action
        }
        result.push(`'${params.action}'`);
    } else {
        result.push(`'none'`);
    }

    if (params.things && check(params.things)) {
        result.push(`'${params.things}'`);
    } else {
        result.push(`'none'`);
    }

    if (params.money && check(params.money)) {
        result.push(`'${params.money}'`);
    } else {
        result.push(`0`);
    }

    if (params.who && check(params.who)) {
        result.push(`'${params.who}'`);
    } else {
        result.push(`'none'`);
    }

    if (params.where && check(params.where)) {
        result.push(`'${params.where}'`);
    } else {
        result.push(`'none'`);
    }

    if (params.note && check(params.note)) {
        result.push(`'${params.note}'`);
    } else {
        result.push(`'none'`);
    }

    return result;
}

function check(str) {
    var reg = /^[\u4E00-\u9FA5A-Za-z0-9.,， ]+$/;
    return reg.test(str);
}

module.exports = {
    mode: mode
}