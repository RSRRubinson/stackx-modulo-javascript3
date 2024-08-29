// // https://github.com/stackxeducacao/stackx-basico-javascript-three-RSRRubinson

// Atividade: Switch, Case e Default - Módulo Básico Javascript - III
//---------------------------------------------------------------------------------------------------
// 1. Implementa a função 'retornaDiaSemana' que verifique o dia da semana correspondente a um número
//---------------------------------------------------------------------------------------------------
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Retorna o dia da semana correspondente a um número
// 1 sendo Domingo
// 7 sendo Sábado
//
function retornaDiaSemana(number) {
    // minha implementação aqui

    switch (number) {
        case 1:  return "Domingo";
        case 2:  return "Segunda-feira";
        case 3:  return "Terça-feira";
        case 4:  return "Quarta-feira"; 
        case 5:  return "Quinta-feira";
        case 6:  return "Sexta-feira";
        case 7:  return "Sábado";
        default: return "Número Inválido - Digite 1 à 7";
    }
}

//------------------------------------------------------------------------------------------------------------
// 2. Implementa a função 'retornaPrecoProduto' que verifique o preço do produto com base no código de produto
//------------------------------------------------------------------------------------------------------------
// Produto A = Preço: 10.99
// Produto B = Preço: 5.99
// Produto C = Preço: 7.5
// Caso nao seja nenhum deles = Código inválido
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    // minha implementação aqui
   let cod = String(code).toUpperCase();

   switch (cod) {
      case 'A':  return `Produto A = Preço: ${10.99}`;
      case 'B':  return `Produto B = Preço: ${5.99}`;
      case 'C':  return `Produto C = Preço: ${7.50}`;
    
      default: return 'Código de Produto Inválido';
    }
}

//---------------------------------------------------------------------------------------------------------------------
// 3. Implementa a função 'retornaCategoriaProduto' que verifique a categoria de um produto com base no tipo de produto
//---------------------------------------------------------------------------------------------------------------------
// Tipo de Produto: Eletrônicos = Categoria: Tecnologia
// Tipo de Produto: Roupas = Categoria: Moda
// Tipo de Produto: Alimentos = Categoria: Alimentação
// Caso não seja nenhum deles = 'Categoria desconhecida'
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    // minha implementação aqui
   
   if (!isNaN (type)) return; // Negação > Verifica se não é um String recebido em type e retorna
   
   let tipo = String(type).toUpperCase();

   switch (tipo) {
      case 'ELETRÔNICOS':  
      case 'ELETRONICOS':  return 'Categoria: Tecnologia';
      case 'ROUPAS':       return 'Categoria: Moda';
      case 'ALIMENTOS':    return 'Categoria: Alimentação';
      
      default: return 'Categoria desconhecida';
    }
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };