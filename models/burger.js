// import ORM to create functions that will interact with the database
const orm = require("../config/orm.js");

const burger = {
    all: function (controllerAllCB) {
        orm.all("burgers", function (res) {
            controllerAllCB(res);
        });
    },
    create: function (burgerObject, controllerCreateCB) {
        orm.create("burgers", burgerObject, function (res) {
            controllerCreateCB(res);
        });
    },
    update: function (objectUpdating, burgerId, controllerUpdateCB) {
        orm.update("burgers", objectUpdating, burgerId, function (res) {
            controllerUpdateCB(res);
        });
    }
};

// export database functions for the controller (burgersController.js).
module.exports = burger;