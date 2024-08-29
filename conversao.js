// // https://github.com/stackxeducacao/stackx-basico-javascript-three-RSRRubinson

// Atividade: Conversão de Tipos - Módulo Básico Javascript - III
//-----------------------------------------------------------------------------------------------
// 1. Implementa a função 'convertToInt' que Converta uma string para um número inteiro
//-----------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>> Converte uma string para um número inteiro
function convertToInt(string) {
    // minha implementação aqui
    if (isNaN(string)) return string;

    return Number(string);
}

//-----------------------------------------------------------------------------------------------
// 2. Implementa a função 'convertToString' que Converta um número inteiro para uma string
//-----------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Converte um número inteiro para uma string
function convertToString(number) {
    // minha implementação aqui
    if (isNaN(number)) return number;
    
    return String(number);
}

//-----------------------------------------------------------------------------------------------
// 3. Implementa a função 'convertToBoolean' que Converta um valor para um booleano
//-----------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Converte um valor para um booleano
function convertToBoolean(value) {
    // minha implementação aqui
    if (isNaN(value)) return null;
    
    if (value === 0 || value === 1){
        return Boolean(value);
    }
    else {
        return undefined; 
    }
}

module.exports = { convertToInt, convertToString, convertToBoolean };