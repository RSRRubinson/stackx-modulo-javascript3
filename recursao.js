
// https://github.com/stackxeducacao/stackx-basico-javascript-three-RSRRubinson

// Atividade: Recursão - Módulo Básico Javascript - III
//-----------------------------------------------------------------------------------------------
// 1. Implementa a função 'somaNumeros' que calcule a soma dos números inteiros de 1 a n
//-----------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>> Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  // minha implementação aqui
  if (isNaN(n)) return;
  
  if(Number(n) === 0){
    return 0;
  }
  else{
    return Number(n) + somaNumeros(n - 1);
  }
}

//-----------------------------------------------------------------------------------------------
// 2. Implementa a função 'ehPar' que verifique se um número é par
//-----------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>> Verifica se um número number é par
function ehPar(number) {
  // minha implementação aqui
  if (isNaN(number)) {
    return;
  }

  if (number === 0){
    return true;
  }
  
  if (number === 1){
    return false;
  }
  
  return ehPar(number -2);
  
}

//-----------------------------------------------------------------------------------------------
// 3. Implementa a função 'fibonacci' que calcule a sequência de Fibonacci para um dado número
//-----------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>> Calcula a sequência de Fibonacci para um dado número n
function fibonacci(n) {
  // minha implementação aqui
  if (isNaN(n)) {
    return;
  }
  
  if (n < 0) {
    return;
  }
  
  if (n === 0 || n === 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n-2);
}


module.exports = { somaNumeros, ehPar, fibonacci };