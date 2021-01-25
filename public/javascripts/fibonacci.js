$("#run").on("click", () => {
  let code = $("pre > code").text();
  $("#result").text("");
  $(".loader").show();
  $.ajax({
    method: "POST",
    url: "rest/run_python",
    data: JSON.stringify({ content: code }),
    contentType: "application/json",
  }).done((data, status) => {
    $(".loader").hide();
    $("#result").text("Result: " + data[0]);
    console.log(status);
  });
});
