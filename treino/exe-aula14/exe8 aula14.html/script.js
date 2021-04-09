function contar() {
  let ini = Number(document.querySelector("input.ini").value);
  let fim = Number(document.querySelector("input.fim").value);
  let passo = Number(document.querySelector("input.passo").value);
  let res = document.querySelector("div#res");
  if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
    res.innerHTML = "<strong>[ERRO]</strong> impossivél contar, faltam dados!";
  } else {
    res.innerHTML = "contando: <br>";
    //let i = Number(ini.value);
    //let f = Number(fim.value);
    //let p = Number(passo.value);
    if (passo <= 0) {
      alert(`Passo invalido, considerando passo 1`);
      passo = 1;
    }
    if (ini < fim) {
      // contagem crescente!!
      for (let c = ini; c <= fim; c += passo) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      // contagem decrescente
      for (let cont = ini; cont >= fim; cont -= passo) {
        res.innerHTML += `${cont} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
