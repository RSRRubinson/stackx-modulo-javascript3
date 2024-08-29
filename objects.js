// https://github.com/stackxeducacao/stackx-basico-javascript-three-RSRRubinson

// Atividade: Objects - Módulo Básico Javascript - III
// -------------------------------------------------------------------------------------------------------------
// 1. Implementa a função 'calcularRetangulo' que calcule o perímetro e a área de um retângulo usando um objeto
// -------------------------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Calcula o perímetro e a área de um retângulo
function calcularRetangulo(objret) {
    // minha implementação aqui
    //  fórmula P = 2(b+h) > perimetro do Retangulo
    
    const perim = 2 * (objret.largura + objret.altura);

    //  fórmula A = b*h > área do Retangulo
    const area = objret.largura * objret.altura;

    const p = `Perímetro..: ${perim.toFixed(2)} cm`;
    const a = `Área.......: ${area.toFixed(2)} cm²`;
    
    return `${p},\n${a}`;
};

const retangulo = {
    largura: 3.3,
    altura: 9.7,
}
// console.log(calcularRetangulo(retangulo));

// --------------------------------------------------------------------------------------------------------------------
// 2. Implementa a função 'ehAdulto' que verifique se uma pessoa é maior de idade com base em seu objeto de informações
// --------------------------------------------------------------------------------------------------------------------
// Importante: A menoridade cessa aos dezoito anos completos, quando a pessoa fica
// habilitada à prática de todos os atos da vida civil”.
// --------------------------------------------------------------------------------------------------------------------
// fonte: https://www.aurum.com.br/blog/maioridade-civil/
// >>>>>>>>>>>>>>>>>>>>>>>>>>>> Verifica se uma pessoa é maior de idade
function ehAdulto(objPessoa) {
    // minha implementação aqui
    
    let msg = '';
    const maiorIdade = 18;

    if (objPessoa.idade >= maiorIdade) {
        msg = `${objPessoa.nome} morador de ${objPessoa.cidade} é maior de idade.`;
    }
    else {
        msg = `${objPessoa.nome} morador de ${objPessoa.cidade} Não é maior de idade.`;
    }
 
    return msg;
}

const pessoa = {
    nome: 'Leo',
    idade: 4,
    cidade: 'S.João del Rei/MG',
};
// console.log(ehAdulto(pessoa));

// ------------------------------------------------------------------------------------------------------
// 3. Implementa a função 'concatenaValores' que concatene os valores de um objeto em uma string
// ------------------------------------------------------------------------------------------------------
// fonte: https://www.freecodecamp.org/portuguese/news/qual-e-a-diferenca-entre-javascript-e-ecmascript/
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // minha implementação aqui
                                                                            // template string ou template literal
    const msg = `A linguagem ${obj.linguagem} se baseia na especificação ${obj.especificacao}.`;
       
    return msg;
}

const obj = {
    linguagem: 'JavaScript',
    especificacao: 'ECMAScript',
};
console.log(concatenaValores(obj));

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
