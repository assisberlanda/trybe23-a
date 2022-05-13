/*
const a = 4;
const b = 6;
const c = 8;
*/
//------------- Programa 1 ---------------
/*
let adicao = (a + b) //10
let subtracao = (a - b) //6
let multiplicacao = (a * b) //16
let divisao = (a / b) //4
let modulo = (a % b) //0

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);
*/
//----------------------------------------

//------------- Programa 2 ---------------
/*
if (a > b) {
    console.log(a + ' É maior!');
} else {
    console.log(b + ' É maior!');
}
*/
//----------------------------------------

//------------- Programa 3 ---------------
/*
let maior = 0;
if (a > b) {
    if (a > c) {
        maior = a;
    }
} else if (b > c) {
    if (b > a) {
        maior = b;
    }
} else if (c > a) {
    if (c > b) {
        maior = c;
    }
} 
console.log(maior + ' É maior!');
*/

//----------------------------------------

//------------- Programa 4 ---------------
/*
if (a + b == 5) {
    console.log('Positive');
} else if (a + b == 3) {
    console.log('Negative');
} else {
    console.log('Zero');
}
*/
//----------------------------------------

//------------- Programa 7 ---------------
/*
let nota = 45
if (nota >= 90) console.log('A');
else if (nota >= 80) console.log('B');
else if (nota >= 70) console.log('C');
else if (nota >= 60) console.log('D');
else if (nota >= 50) console.log('E');
else console.log('F');
*/
//----------------------------------------

//------------- Programa 8 ---------------
/*
if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log('true');
} else {
    console.log('false');
}
*/
//----------------------------------------
//------------- Programa 9 ---------------
/*
if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
        console.log('true');
    } else {
        console.log('false');
    }
*/
//----------------------------------------
//------------ Programa 10 ---------------
/*
const valorCusto = 1000;
const valorVenda = 2000;

if (valorCusto > 0 && valorVenda > 0) {
    const impostoSobreOCusto = valorCusto * (20/100);
    const valorCustoTotal = valorCusto + impostoSobreOCusto;
    const lucroMil = (valorVenda - valorCustoTotal) * 1000;
    console.log('O lucro de 1000 unidades é:', lucroMil);
} else {
    console.log('Valor inválido!');
}
*/
//----------------------------------------

//------------ Programa 11 ---------------
let salarioBruto = 5200.00;
if (salarioBruto <= 1556.94){
    imposto = salarioBruto * (8 / 100)
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    imposto = salarioBruto * (9 / 100)
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    imposto = salarioBruto * (11 / 100)
} else {
    imposto = 570.88
}
let salarioLiquido = salarioBruto - imposto
console.log(salarioLiquido);
//----------------------------------------





/* INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/