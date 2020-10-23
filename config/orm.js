const connection = require("./connection.js")

function printQuestionMarks(values) {
    let arr = [];
    values.forEach(val => {arr.push("?")});
    return arr.toString();
};

let orm = {
    selectAll: (tableName, cb) => {
        var queryString = "SELECT * FROM " + tableName +";";

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: (tableName, columns, values,cb) => {
        var queryString ="INSERT INTO " + tableName;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES";
        queryString += " (";
        queryString += printQuestionMarks(values);
        queryString += ") "

        console.log(queryString);

        connection.query(queryString, values, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: () => {
        console.log("Burger Updated");
    }
};

module.exports = orm;