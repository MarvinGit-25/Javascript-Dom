function contar() {
  let ini = document.getElementById("txt1");
  let fim = document.getElementById("txt2");
  let passo = document.getElementById("txt3");
  let res = document.getElementById("res");
  if (ini.Value == 0 || fim.value == 0 || passo.value == 0) {
    //window.alert("[ERRO]faltam dados!!");
    res.innerHTML = "Impossivel contar!!";
  } else {
    res.innerHTML = "contando: <br>";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo invalido! Considerando passo 1");
      p = 1;
    }
    if (i < f) {
      // contagem crescente!!
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      // contagem decrescente!!
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
