let num = [5, 8, 2, 9, 3];
num.push(1); // add um vetor em qualquer posição!!
num.sort(); // coloca em ordem!!
console.log(num); // mostra todos os vetores!!
console.log(`O vetor tem ${num.length} posições`); // length mostra quantas posições tem o vetor!!
console.log(`O primeiro número do vetor é ${num[0]}`); // mostra o vetor na posição [0]!!
num[6] = 10; // add vetor na posiçao 6!!
console.log(num);
let pos = num.indexOf(3); // retorna a posição do valor dentro do vetor!!
console.log(`O valor 8 esta na posição ${pos}`);
