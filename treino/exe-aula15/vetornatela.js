let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let pos = 0; pos < vetor.length; pos++) {
  console.log(` A posição ${pos} tem o valor ${vetor[pos]}`);
}
console.log("----------------------------------------------");
for (let pos in vetor) {
  console.log(` A posição ${pos} tem o valor ${vetor[pos]}`);
}
