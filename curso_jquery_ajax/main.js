function consultaCep() {
  let cepi = document.getElementById("cep");
  let url = "http://viacep.com.br/ws/" + cepi.value + "/json";
  alert(cepi);
  alert(url);

  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      console.log(response);
      $("#log").html(response.logradouro);
      $("#bai").html(response.bairro);
      $("#cid").html(response.localidade);
      $("#uf").html(response.uf);
      $("#cp").html(response.cep);
    },
  });
}
