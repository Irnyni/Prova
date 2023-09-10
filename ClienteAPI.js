// Lista de perfils de clientes importada do JSON
const perfisClientes = require("./dados_perfisclientes.json");
const fs = require('fs')

function getPerfilAsync(usuario){
    return  new Promise((resolve, reject) => {

        fs.readFile('dados_perfisclientes.json', 'utf-8', (err, data) => {
            const jsonData = JSON.parse(data);
            jsonData.forEach(item => {

                if(item.cliente_id===usuario){

                    resolve(item)

                }
              });
  
        });

    });
}

module.exports = {
    getPerfilAsync,
}
