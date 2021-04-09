let num = document.getElementById("ctxtn");
let lista = document.getElementById("seln");
let res = document.getElementById("res");
let valores = [];
function isnumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inlista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}
function add() {
  if (isnumero(num.value) && !inlista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `valor ${num.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor encontrado e já adicionado na lista");
  }
  num.value = "";
  num.focus();
}
function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar.");
  } else {
    let tot = valores.length;
    res.innerHTML = "";
    res.innerHTML += `Ao todo temos ${tot} números cadastrados`;
  }
}
