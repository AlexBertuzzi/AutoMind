$(document).ready(() => {
  // Reflects the name of the sales person once they login and are in the /members page ===================
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.name);
  });
  //Adding Client =========================================================================================
  $(".add-client").on("click", event => {
    console.log("Add Client Hit");
    event.preventDefault();
    const newClient = {
      name: $("#name")
        .val()
        .trim(),
      phoneNumber: $("#phone")
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
        .trim()
    };
    // Sending our POST request
    $.ajax("/api/client", {
      type: "POST",
      data: newClient
    }).then(() => {
      console.log("New Client Succesfully Added!");
      location.reload();
    });
  });

  // Updating Client ===========================================================================================
  $(".viewClient").on("click", event => {
    event.preventDefault();
    // alert($(this).attr("id"));
    // console.log("View Client Hit");
    const id = $(this).data("id");
    console.log(id);
    const currentURL = window.location.origin;
    $.get(currentURL + "/api/viewclient/" + id, {}).then(console.log());
  });
});
