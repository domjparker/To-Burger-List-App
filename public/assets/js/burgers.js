// make sure to attach handlers only when the DOM is fully loaded
$(function () {
    $(".devourBurger").on("click", function (event) {
        var id = $(this).data("id");
        var burgerEaten =  {
            devoured: true
        };

        // send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "POST",
            data: burgerEaten
        }).then(
            function() {
                console.log("burger changed to devoured");
                // reload page to get updated burger list
                location.reload();
            }
        )
    })

    $(".create-form").on("submit", function (event) {
        // prevent page from refreshing when submit clicked
        event.preventDefault();
        let newBurger = {
            burger_name: $("#newBurgerName").val().trim()
        };
        // send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // reload page to get updated burger list
                location.reload();
            }
        )
    });
})

