// https://github.com/stackxeducacao/stackx-basico-javascript-three-RSRRubinson

// Atividade: Funções de alta ordem - Módulo Básico Javascript - III
//-----------------------------------------------------------------------------------------------------------------------
// 1. Implemente a função 'dobrarNumeros' que recebe um array de números e retorna um novo array com cada número dobrado.
//-----------------------------------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Função Dobra Valores em um array
function dobrarNumeros(numeros) {
    // minha implementação aqui
                                             // => arrow function 'call back' function() função anônima
    const dobraNum = numeros.map((numero) => numero * 2);
    
    return dobraNum;
}
const num1 = [5, 7, 9, 15, 25];
// console.log('num1  => ' + num1);
// console.log('Dobra => ' + dobrarNumeros(num1));

//-----------------------------------------------------------------------------------------------------------
// 2. Implementa a função 'somarValores' que recebe um array de números e retorna a soma de todos os valores.
//-----------------------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Função Soma Valores de um array
function somarValores(numeros) {
    // minha implementação aqui
    const somaNum = numeros.reduce((numero, acumulador) => acumulador + numero, 0);
    
    return somaNum;
}

const num2 = [3, 8, 13, 17, 29];
// console.log('num2 => ' + num2);
// console.log('Soma => ' + somarValores(num2));

//-------------------------------------------------------------------------------------------------------------------------------
// 3. Implementa a função 'filtrarPares' que recebe um array de números e retorna um novo array contendo apenas os números pares.
//-------------------------------------------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Função Filtra Valores pares em um array
function filtrarPares(numeros) {
    // minha implementação aqui
    
    const numPares = numeros.filter((numero) => {
        if ((numero % 2) === 0) return numero;
    });

    return numPares;
}

const num3 = [1, 2, 3, 4, 6, 9, 10];
console.log('num3 => ' + num3);
console.log('Pares => '+ filtrarPares(num3));

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};