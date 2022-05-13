//-------------------- Exercício 1 ------------------------
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
*/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i of numbers) {
    console.log(i);
}
*/
//---------------------------------------------------------
//-------------------- Exercício 2 ------------------------
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
for(let i = 0; i < numbers.length; i++) {
    somaNumbers = somaNumbers + numbers[i];
}
console.log('A soma de todos os elementos do Array é: ', somaNumbers);
*/

//---------------------------------------------------------
//-------------------- Exercício 3 ------------------------
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
for(let i = 0; i < numbers.length; i++) {
    somaNumbers = somaNumbers + numbers[i];
}
let medianNumbers = somaNumbers / (numbers.length)
console.log('A soma de todos os elementos do Array é: ', somaNumbers);
console.log('A Média dos elementos do Array é: ', medianNumbers);
*/
//---------------------------------------------------------
//-------------------- Exercício 4 ------------------------
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
for(let i = 0; i < numbers.length; i++) {
    somaNumbers = somaNumbers + numbers[i];
}
let medianNumbers = somaNumbers / (numbers.length)
console.log('A soma de todos os elementos do Array é: ', somaNumbers);
console.log('A Média dos elementos do Array é: ', medianNumbers);
if (medianNumbers > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
*/
//---------------------------------------------------------
//-------------------- Exercício 5 ------------------------
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumber = 0;
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorNumber) {
        maiorNumber = numbers[i];
    }
}
console.log('O Maior elemento no Array é: ', maiorNumber);
*/
//---------------------------------------------------------
//-------------------- Exercício 6 ------------------------
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        impar += 1;
    }
}
console.log('A quantidade de elementos impares no Array é: ', impar);
*/
//---------------------------------------------------------
//-------------------- Exercício 7 ------------------------
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 9999999;
for(let i = 0; i < numbers.length; i++) {
    if (menor > numbers[i]) {
        menor = numbers[i];
    }
}
console.log('O menor elementos no Array é: ', menor);
*/
//---------------------------------------------------------
//-------------------- Exercício 8 ------------------------
/*
let array = [];
for(let i = 1; i <= 25; i++) {
    array.push(i)
}
console.log(array);
*/
//---------------------------------------------------------
//-------------------- Exercício 9 ------------------------
let array = [];
let arrayMultiplicado = [];
for(let i = 1; i <= 25; i++) {
    array.push(i)
} for(let i = 0; i < 25; i++) {
    arrayMultiplicado.push(array[i] * 2);
}
console.log(array);
console.log(arrayMultiplicado);
//---------------------------------------------------------
