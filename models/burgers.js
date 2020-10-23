var orm = require("../config/orm.js");

const burger = {

    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res)
        });
    }


};

module.exports = burger;