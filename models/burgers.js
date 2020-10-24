var orm = require("../config/orm.js");
const connection = require("../config/connection.js");

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
    },
    update: (objColValues, condition, cb) => {
        orm.updateOne("burgers", objColValues, condition, (data) => {
            cb(data)
        })
    }


};

module.exports = burger;