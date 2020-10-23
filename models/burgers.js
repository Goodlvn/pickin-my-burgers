var orm = require("../config/orm.js");

const burger = {

    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res)
        });
    },
    create: (columns, values, cb) => {
        orm.insertOne("burgers", columns, values, (res) => {
            cb(res)
        });
    }


};

module.exports = burger;