//exercise.js
/*
let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for(let i = 0; i < fruits.length; i++){
    soma += fruits[i];
}
if(soma >=15) console.log(soma);
else console.log("valor menor que 16")
*/

//------------- Exercício 1 ---------------
/*
let fatorial = 10;
let calculoFatorial = fatorial;
for(let i = fatorial ; i > 1; i--) {
    calculoFatorial = calculoFatorial * (i - 1);
}
console.log('O fatorial de ', fatorial, ' é: ', calculoFatorial);
*/
//-----------------------------------------
//------------- Exercício 2 ---------------
/*
let word = 'Tryber';
let invertWord = [];
for (let i = word.length - 1; i >= 0; i--) {
    invertWord.push(word[i]);
}
console.log(invertWord);
*/
//-----------------------------------------
//------------- Exercício 3 ---------------
/*
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorArray = [];
let menorArray = [];

for(let i = 0; i < array.length; i++) {
    if (array[i].length > maiorArray.length) {
        maiorArray = array[i];
        menorArray = array[i];
    } 
}
for(let i = 0; i < array.length; i++) {
    if (array[i].length < menorArray.length) {
        menorArray = array[i]
    }
}
console.log('\n-------------------------------------------------');
console.log('Os itens do Array são: \n\n', array);
console.log('-------------------------------------------------');
console.log('O maior Array é: ', maiorArray);
console.log('O menor Array é: ', menorArray);
*/
//-----------------------------------------
//------------- Exercício 4 ---------------
/*
------------------- Exercício não Resolvido --------------------
let num = [];
let primo = [];
for(let i = 0; i < 50; i++) {
    num.push(i +1);
    if (num[i] % 2 == 1) {
        if (num[i] % 3 == 0); {
            primo.push(num[i]);
        }
    }
    if (num[i] %  5 == 0) {
        if ((num[i] / num[i] == 1 && num[i] / 1 == num[i])) {
            primo.push(num[i]);
        }
    }
}

console.log(num);
console.log(primo);
*/
//-----------------------------------------
//--------------- Bonus 1 -----------------
/*
let n = 5;
let sybol = '*';
let inputLine = '';
for(let i = 0; i < n; i++) {
    inputLine = inputLine + sybol;
}
for(let i = 0; i < n; i++) {
    console.log(inputLine);
}
*/
//-----------------------------------------
//--------------- Bonus 2 -----------------
/*
let n = 5;
let sybol = '*';
let inputLine = '';
for(let i = 0; i < n; i++) {
    inputLine = inputLine + sybol;
    console.log(inputLine);
}
*/
//-----------------------------------------
//--------------- Bonus 3 -----------------
let n = 5;
let sybol = '*';
let inputLine = '';
for(let i = 0; i < n; i--) {

        inputLine = inputLine + ' ';
        console.log(inputLine, sybol);
    }

//-----------------------------------------
//--------------- Bonus 4 -----------------

//-----------------------------------------
//--------------- Bonus 5 -----------------

//-----------------------------------------
//--------------- Bonus 6 -----------------

//-----------------------------------------

