function mode(params){
    var result = [];

    result.push(`'${new Date().toLocaleString()}'`);

    if(params.action){
        result.push(`'${params.action}'`);
    }else{
        result.push(`'none'`);
    }

    if(params.things){
        result.push(`'${params.things}'`);
    }else{
        result.push(`'none'`);
    }

    if(params.money){
        result.push(`'${params.money}'`);
    }else{
        result.push(`0`);
    }

    if(params.who){
        result.push(`'${params.who}'`);
    }else{
        result.push(`'none'`);
    }

    if(params.where){
        result.push(`'${params.where}'`);
    }else{
        result.push(`'none'`);
    }

    if(params.note){
        result.push(`'${params.note}'`);
    }else{
        result.push(`'none'`);
    }

    return result;
}

module.exports = {
    mode:mode
}