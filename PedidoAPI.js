// Lista de carrinhos de compras importada do JSON
const carrinhoDeCompras = require("./dados_carrinhocompras.json");
const fs = require('fs');

// Lista de pedidos aprovados para envio
const pedidosAprovados = [];

function getCarrinhoDeComprasAsync(usuario, custoDeEnvio){
    return new Promise((resolve, reject) => {
        console.log("entrei aqui");
        fs.readFile('dados_carrinhocompras.json', 'utf-8', (err, data) => {
            const jsonData = JSON.parse(data);
            jsonData.forEach(Pessoa => {

                if(Pessoa.cliente_id===usuario){

                    resolve(Pessoa)

                }
              });
  
        });

    });
}

function inserirPedidoAsync(carrinhoCompras, custoDeEnvio){
    return new Promise((resolve, reject) => {

        resolve(true)

    });
}
module.exports = {
    getCarrinhoDeComprasAsync,
    inserirPedidoAsync
}
