
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

    



});


