
$(() => {

  $(".make-burger").on("click", (event) => {
    event.preventDefault();

    let newBrgr = {
      burger_name: $("#brgr").val().trim(),
      devoured: 0
    }

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBrgr
    }).then(() => {
      location.reload();
    });
  });

  $(".eat-brgr").on("click", (event) => {
    event.preventDefault();

    let id = event.target.dataset.id;
    let ateBurger = event.target.dataset.ateburger;
    let didEatBurger = {
      devoured: ateBurger
    };

    if (ateBurger === "true") {
      $.ajax("api/burgers/" + id, {
        type: "PUT",
        data: didEatBurger
      }).then(() => {
        location.reload();
      });
    };
    
  });

  $(".eat-brgr").on("click", (event) => {
    let id = event.target.dataset.id;
    let ateBurger = event.target.dataset.ateburger;

    console.log(ateBurger);

    if (ateBurger === "false") {
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }


  });
});


