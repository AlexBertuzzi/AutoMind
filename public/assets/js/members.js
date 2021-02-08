$(document).ready(() => {
  // Reflects the name of the sales person once they login and are in the /members page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.name);
  });
  //Adding Client
  $(".add-client").on("click", event => {
    console.log("Add Client Hit");
    event.preventDefault();
    const newClient = {
      name: $("#name")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      phoneNumber: $("#phoneNumber")
        .val()
        .trim(),
      make: $("#make")
        .val()
        .trim(),
      model: $("#model")
        .val()
        .trim(),
      color: $("#color")
        .val()
        .trim(),
      quote: $("#quote")
        .val()
        .trim(),
      followUp: $("#followUp")
        .val()
        .trim(),
      note: $("#note")
        .val()
        .trim()
    };
    // Sending our POST request
    $.ajax("/api/client", {
      type: "POST",
      data: newClient
    }).then(() => {
      location.reload();
      console.log("New Client Succesfully Added!");
    });
  });
  //Sending Delete request
  $(".deleteClient").on("click", function() {
    const id = $(this).data("client.id");

    // Send the DELETE request.
    $.ajax("/api/client/" + id, {
      type: "DELETE"
    }).then(() => {
      console.log("deleted client", id);
      location.reload();
    });
  });

  //Make updates to client
  $(() => {
    $(".updateClient").on("click", event => {
      event.preventDefault();
      const id = $("#id")
        .val()
        .trim();
      const newname = $("#newname")
        .val()
        .trim();
      const newemail = $("#newemail")
        .val()
        .trim();
      const newphone = $("#newphone")
        .val()
        .trim();
      const newmake = $("#newmake")
        .val()
        .trim();
      const newmodel = $("#newmodel")
        .val()
        .trim();
      const newcolor = $("#newcolor")
        .val()
        .trim();
      const newquote = $("#newquote")
        .val()
        .trim();
      const newfollowUp = $("#newfollowUp")
        .val()
        .trim();
      const newnote = $("#newnote")
        .val()
        .trim();

      const updateClient = {
        name: newname,
        email: newemail,
        phoneNumber: newphone,
        make: newmake,
        model: newmodel,
        color: newcolor,
        quote: newquote,
        followUp: newfollowUp,
        note: newnote
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

  //   $(".viewClient").on("click", () => {
  //     const id = $(this).data("client.id");
  //     $.ajax("/client_data/" + id, {
  //       type: "GET"
  //     })
  //       .then(() => {
  //         console.log("you got back here already");
  //         window.location.replace("/client_data/id:");
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   });
});
