let residencias =require('./residencias');
function listarResidencia (){
    residencias.forEach((residencia,index) => {
        console.log (`${index+1} Nome morador:${residencia.NomeMorador}, Rua: ${residencia.RuaMorador}, Número: ${residencia.NumeroCasa}, Bairro: ${residencia.BairroMorador}`);
    });

}
module.exports = listarResidencia