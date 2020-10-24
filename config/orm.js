const connection = require("./connection.js")

function printQuestionMarks(values) {
    let arr = [];
    values.forEach(val => { arr.push("?") });
    return arr.toString();
};


// function objToSql(ob) {
//     let arr = [];
//     for (var key in ob) {
//         let value = ob[key];
//         if (Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             };
//             arr.push(key + "=" + value);
//         };
//     };
//     return arr.toString();
// };

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    };
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


let orm = {
    selectAll: (tableName, cb) => {
        var queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: (tableName, columns, values, cb) => {
        var queryString = "INSERT INTO " + tableName;

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
    updateOne: (tableName, objColValues, condition, cb) => {
        let queryString ="UPDATE " + tableName; 

        queryString += " SET ";
        queryString += objToSql(objColValues);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, data)=>{
            if (err) throw err;
            cb(data);
        });
    },
};

module.exports = orm;