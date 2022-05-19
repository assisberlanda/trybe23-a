//Duas formas de resolver o exercício
/*
  Como podemos acessar a posição de uma string da mesma forma que
  acessamos um array, podemos então, comparar o caracter da
  posição 0 (primeira) com o caracter da última posição (length - 1).
  Dessa forma conseguimos verificar se a sequência de caracteres
  na string é a mesma do inicio ao fim e do fim ao inicio 😉
*/
// function verificaPalindrome(word){
//     for(index in word){
//       if(word[index] != word[(word.length - 1) - index]){
//         return false;
//       }
//     }
//     return true;
//   }
//   function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(verificaPalindrome('arara')); //true
//   console.log(verificaPalindrome('desenvolvimento')); //false

//------------------ Parte II - Funções 1 --------------------
/*
function ehPalindrome(palavra) {
    let invertida = palavra.split('').reverse().join('');
    if (palavra === invertida) {
        console.log('É palindroma: ', palavra, ' = ', invertida);
        return true;
    } 
    else {
        console.log('Não é palindroma: ', palavra, ' != ', invertida);
        return false;
    }
}
console.log(ehPalindrome('desenvolvimento'));
*/
//------------------------------------------------------------
//------------------ Parte II - Funções 2 --------------------
// function index(array) {

//     let maior = 0;
//     let index = 0
//     for(let i = 0; i < array.length; i++) {
//         if (array[i] > maior) {
//             maior = array[i]
//             index = i
//         }
//     }
//     return index;
// }
// console.log(index([2, 3, 6, 7, 10, 1]));

//------------------------------------------------------------
//------------------ Parte II - Funções 3 --------------------
// function menor(array) {

//     let menor = 9999999999;
//     let index = 0
//     for(let i = 0; i < array.length; i++) {
//         if (array[i] < menor) {
//             menor = array[i]
//             index = i
//         }
//     }
//     return index;

// }
//     console.log(menor([2, 3, 6, 7, 10, 1, -3]));
//------------------------------------------------------------
//------------------ Parte II - Funções 4 --------------------
// function maiorPalavra() {

//     let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'pindamonhangaba'];
//     let maiorPalavra = [];
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].length > maiorPalavra.length) {
//             maiorPalavra = array[i];
//         }
//     }
//     return maiorPalavra;
// }
// console.log(maiorPalavra());
//------------------------------------------------------------
//------------------ Parte II - Funções 5 --------------------
// //Duas formas de resolver o exercício
/*
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
  
  function maisRepetido(numeros) {
    let num = {};
  
    for (let index = 0; index < numeros.length; index += 1) {
      let valor = numeros[index];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) {
      if (contRepetido < num[prop]) {
        contRepetido = num[prop];
        contNumero = prop;
      }
    }
  
    return contNumero;
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2
*/
  //------------------------------------------------------------
//------------------ Parte II - Funções 6 --------------------
/* 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.*/

function numero(num) {
    let array = 0;
    for (let i = 1; i <= num; i++) {
        array = array + i;
        }
    return array;
    }

    console.log(numero(5));


//------------------------------------------------------------
//------------------ Parte II - Funções 7 --------------------
/*
7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be');
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan');
Retorno esperado: false
*/
//------------------------------------------------------------
