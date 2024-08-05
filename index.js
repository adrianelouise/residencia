const prompt = require ('prompt-sync')();
const adicionarResidencia = require('./adicionar.js');
const listarResidencia = require('./listar.js');
const atualizarResidencia = require('./atualizar.js');
const removerResidencia = require('./remover.js');

mainMenu();

function mainMenu(){
console.log(`
1. Adicionar Residencia 
2. Listar Residencia
3. Atualizar Residencia
4. Remover Residencia
5. Sair `);

const opcao= prompt ('escolha uma opcao:');
let index;
  switch (opcao){
    case"1": 
        const NomeMorador = prompt('nome do morador');
        const RuaMorador = prompt ('que rua o morador mora');
        const BairroMorador = prompt ('que bairro mora o morador');
        const NumeroCasa= prompt ('qual o numero da casa do morador');
        adicionarResidencia({NomeMorador, RuaMorador, BairroMorador, NumeroCasa});
        console.log('adiconado com sucesso');
        mainMenu();
        break;
    case "2" :
         listarResidencia();
        mainMenu();
        break;
    case "3":
         listarResidencia
        index = parseInt (prompt ('numero da residencia:')) -1;
        const NovoNomeMorador = prompt ('Novo nome do morador');
        const NovoRuaMorador = prompt (' Novo rua do morador');
        const NovoBairroMorador = prompt ('Novo bairro do morador');
        const NovoNumeroCasa = prompt ('Novo numero da casa');
        atualizarResidencia(index, {NomeMorador: NovoNomeMorador,RuaMorador: NovoRuaMorador,BairroMorador:NovoBairroMorador, NumeroCasa:NovoNumeroCasa});
        console.log('atualizado com sucesso')
        mainMenu();
        break;
    case "4":
        index = parseInt (prompt ('numero da residencia a remover:')) -1
        removerResidencia(index);
        console.log('residencia removido com sucesso');
        mainMenu();
        break;
    case "5":
        console.log('finalizado com sucesso');
        process.exit();
        break;
    default:
        console.log('opcao invalida')
        mainMenu();


    };
};