$("#run").on("click", () => {
  let code = $("#code").val();
  //console.log(code);
  $("#result").text("");
  $(".loader").show();
  $("h3").hide();
  $.ajax({
    method: "POST",
    url:
      "https://etqmf05wh6.execute-api.us-east-2.amazonaws.com/default/exe_python",
    data: JSON.stringify({ content: code }),
    contentType: "application/json",
  }).done((data, status) => {
    $(".loader").hide();
    $("h3").show();
    console.log(data);
    $("#result").text(data);
    //console.log(status);
  });
});
