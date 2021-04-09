let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
}
console.log("-----------------------------------------------");
// maneira simplificada!!
for (let pos in valores) {
  console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
}
