// Importe aqui as APIs
const PedidoAPI= require("./PedidoAPI")
const ClienteAPI = require("./ClienteAPI")


const carrinhoCompras = require("./dados_carrinhocompras.json");


function submeterPedido(usuario) {
    let carrinhoCompras, cep, custoEnvio, pedidoBemSucedido;
    
    // Recupera o usuário atual do carrinho de compras
    PedidoAPI.getCarrinhoDeComprasAsync(usuario).then((carrinho)=> {
      return  carrinho
      

    }).then((data)=>{

      console.log(data);
      carrinhoCompras= data
   
    })
    
    // Também procura pelo CEP do seu perfil
     ClienteAPI.getPerfilAsync(usuario).then(function(perfil) {
       cep = perfil.cep;
       console.log(perfil);
       console.log(perfil.cep);
       custoEnvio = calcularEnvio(carrinhoCompras, cep)
       console.log(`Custo do envio é ${custoEnvio}`);
    });

  
    
    //  // Envia a ordem de pedido
      PedidoAPI.inserirPedidoAsync(carrinhoCompras, custoEnvio).
      then(function(sucesso) {
        pedidoBemSucedido = sucesso;
        console.log(pedidoBemSucedido);
        console.log(`Seu pedido ${pedidoBemSucedido ? "was" : "was NOT"} foi inserido foi bem sucedido`);
    });
    
   
   }


  function calcularEnvio(carrinhoCompras,cep){

    let total = 0

     console.log("calcular envio");

    console.log(carrinhoCompras);
    console.log(cep);

  carrinhoCompras.items.forEach((element => {
      total = total+ element.qtd
    }));
    console.log(`Total:  ${total}`);

  a = parseInt(cep.slice(3,5))
  console.log(a);

return a*total

  }
  submeterPedido("cli03");
