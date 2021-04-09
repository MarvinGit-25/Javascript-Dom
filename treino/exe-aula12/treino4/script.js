function avaliar() {
  let data = new Date();
  let ano = data.getFullYear();
  let ct = Number(document.getElementById("ctano").value);
  let res = document.querySelector("div#res");
  if (ct == 0 || ct > ano) {
    alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    let sex = document.getElementsByName("ctrad");
    let idade = ano - ct;
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    img.width = 200;
    if (sex[0].checked) {
      genero = "Homen";
      if (idade >= 0 && idade <= 10) {
        // criança
        img.setAttribute("src", "hcriança.jpg");
      } else if (idade <= 21) {
        // jovem
        img.setAttribute("src", "hjoven.jpg");
      } else if (idade <= 50) {
        // adulto
        img.setAttribute("src", "hb45.jpg");
      } else {
        // idoso
        img.setAttribute("src", "hvelho.jpg");
      }
    } else if (sex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 10) {
        // criança
        img.setAttribute("src", "mcriança.jpg");
      } else if (idade <= 21) {
        // jovem
        img.setAttribute("src", "mjoven.jpg");
      } else if (idade <= 50) {
        // adulto
        img.setAttribute("src", "mb45.jpg");
      } else {
        // idoso
        img.setAttribute("src", "mvelha.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Você é ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
