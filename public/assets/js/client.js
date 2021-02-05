//Create a note
$(".update-form").on("submit", event => {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  const newNote = {
    note: $("#note")
      .val()
      .trim()
  };

  // Send the POST request.
  $.ajax("/api/notes", {
    type: "POST",
    data: newNote
  }).then(() => {
    console.log("created new note");
    // Reload the page to get the updated list
    location.reload();
  });
});

//Make updates to client
$(() => {
  $("#updateClient").on("click", function(event) {
    event.preventDefault();
    const id = $(this).data("id");
    const newname = $(this).data("newname");
    const newphone = $(this).data("newphone");
    const newmake = $(this).data("newmake");
    const newmodel = $(this).data("newmodel");
    const newcolor = $(this).data("newcolor");
    const newquote = $(this).data("newquote");
    const newfollowUp = $(this).data("newfollowUp");

    const updateClient = {
      name: newname,
      phoneNumber: newphone,
      make: newmake,
      model: newmodel,
      color: newcolor,
      quote: newquote,
      followUp: newfollowUp
    };

    // Send the PUT request.
    $.ajax("/api/clients/update" + id, {
      type: "PUT",
      data: updateClient
    }).then(() => {
      console.log("Updated Client");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
