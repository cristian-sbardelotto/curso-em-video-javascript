let num = [5, 8, 2, 9, 3]
// ADICIONA UM ELEMENTO NA CHAVE SELECIONADA
// num[5] = 6

// ADICIONA UM ELEMENTO NA ÚLTIMA CHAVE
// num.push(10)

// DIZ A QUANTIDADE DE ELEMENTOS QUE ESTÁ NO ARRAY
// console.log(num.length)

// COLOCA TODOS OS ELEMENTOS EM ORDEM CRESCENTE
console.log(num.sort())

// BUSCA UM ELEMENTO DENTRO DO ARRAY E DIZ SUA CHAVE
console.log(num.indexOf(5))

for (let pos = 0;pos >= 0 && pos < num.length;pos++) {
    console.log(num[pos])
}

console.log(`Nosso vetor é o ${num}`);
console.log(`Nosso vetor possui ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)