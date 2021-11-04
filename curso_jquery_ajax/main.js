function consultaCep() {
  let cepi = document.getElementById("cep");

  $.ajax({
    url: `https://viacep.com.br/ws/${cepi.value}/json/`,
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
