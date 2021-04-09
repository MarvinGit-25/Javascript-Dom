function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.Value == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homen";
      if (idade >= 0 && idade <= 10) {
        // criança
        img.setAttribute("src", "hcriança.jpg");
      } else if (idade <= 21) {
        // Joven
        img.setAttribute("src", "hjoven.jpg");
      } else if (idade <= 50) {
        // Adulto
        img.setAttribute("src", "hb45.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "hvelho.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 10) {
        // criança
        img.setAttribute("src", "mcriança.jpg");
      } else if (idade <= 21) {
        // Joven
        img.setAttribute("src", "mjoven.jpg");
      } else if (idade <= 50) {
        // Adulto
        img.setAttribute("src", "mb45.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "mvelha.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
