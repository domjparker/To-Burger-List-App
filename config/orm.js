// import MySQL connection from connection.js file
const connection = require("./connection.js");

// create array of question marks and turn them into a string, as helper function for SQL query syntax
// function takes in a number, creates an empty array, then loops through, adding a "?" to the amount of the number into the array.
function questionMarkHelper(num) {
    var array = [];
    for (let i = 0; i < num; i++) {
        array.push("?");
    }
    // this array is then converted to a string, which is returned.
    return array.toString();
};

// helper function that takes in an object to convert it's  key/value pairs to SQL syntax
function objToSql(ob) {
    // create empty array
    var array = [];
    // loop through keys
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if the value is a string with spaces,...
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                // add quotation marks around it
                value = "'" + value + "'";
            }
            // then push the key value pair (now a string) into the array
            array.push(key + "=" + value);
        }

    }
    // then return the array of strings as a single, comma-separated string.
    return array.toString();
}

// create an object for all SQL statement functions.
const orm = {
    all: function(tableInput, burgerCallBackFunction) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            burgerCallBackFunction(result);
        });
    }



};


// export the orm object for the model (burger.js)
module.exports = orm;