function mode() {
    this.set_mode = function (params) {
        console.log(params);
        global.mode = {
            where:params.where,
            action:params.action
        }
        return true;
    }
    this.get_mode = function () {
        if(global.mode)
            return global.mode;
        else
            return false;
    }
}

module.exports = {
    mode: mode
}