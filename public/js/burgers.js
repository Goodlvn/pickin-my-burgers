
$(()=> {

    $(".make-burger").on("click", (event)=>{
        event.preventDefault();
    
        let newBrgr = {
            burger_name: $("#brgr").val().trim(),
            devoured: 0
        }
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBrgr
        }).then(()=> {
            location.reload();
        });
    });

    $(".eat-brgr").on("click", (event)=>{
        event.preventDefault();

    

        let id = event.target.dataset.id;
        let ateBurger = event.target.dataset.ateburger;



        let didEatBurger = {
            devoured: ateBurger
        };

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: didEatBurger
        }).then(()=>{
            location.reload();
        })

    })

    $(".change-sleep").on("click", function(event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("newsleep");
    
        var newSleepState = {
          sleepy: newSleep
        };
    
        // Send the PUT request.
        $.ajax("/api/cats/" + id, {
          type: "PUT",
          data: newSleepState
        }).then(
          function() {
            console.log("changed sleep to", newSleep);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });



});


