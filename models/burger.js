// import ORM to create functions that will interact with the database
const orm = require("../config/orm.js");

var burger = {
    all: function(controllerCallbackFunction) {
        orm.all("burgers", function(res) {
            controllerCallbackFunction(res);
        });
    },
    
}

// export database functions for the controller (burgersController.js).
module.exports = burger;