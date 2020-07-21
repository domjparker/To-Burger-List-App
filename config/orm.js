// import MySQL connection from connection.js file
const connection = require("./connection.js");

// create an object for all SQL statement functions.
const orm = {
    all: function(table, burgerAllCB) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            burgerAllCB(result);
        });
    }, 
    create: function(table, burgerObject, burgerCreateCB) {
        let queryString = "INSERT INTO " + table + " SET ?;";
        
        connection.query(queryString, burgerObject, function(err, result) {
            if (err) {
                throw err;
            }
            burgerCreateCB(result);
        });
    },
    update: function(table, objectUpdating, id, burgerUpdateCB) {
        let queryString = "UPDATE " + table + " SET ? WHERE id= ?;" 
        connection.query(queryString, [objectUpdating, id], function(err, result) {
            if (err) {
                throw err;
            }
            burgerUpdateCB(result);
        });
    }
};


// export the orm object for the model (burger.js)
module.exports = orm;