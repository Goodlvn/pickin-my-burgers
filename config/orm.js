const connection = require("./connection.js")

let orm = {
    selectAll: (tableName, cb) => {
        var queryString = "SELECT * FROM " + tableName +";";

        connection.query(queryString, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    insertOne: () => {
        console.log("Burger Added");
    },
    updateOne: () => {
        console.log("Burger Updated");
    }
};

module.exports = orm;