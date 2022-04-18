import {Produto} from './classe.js';
let lista = [];

let novoProd;
//Função para adquirir o "nome" do produto.
cadastraProd.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let criaId = Math.floor(Math.random() * 100);
    novoProd = document.querySelector('#novoProd').value;
    let prod = new Produto(novoProd, criaId, 0, false);
    lista.push(prod);
    console.log(lista);
    atualizarTela();
    ;}); 

//Função para atualizar a tela.
let itens = document.querySelector('#itens');
function atualizarTela() {
    itens.innerHTML="";

    lista.forEach(function(produtos){
        itens.innerHTML += '<li data-value="'+produtos._valor+'">'+
        '<input type="checkbox" class="li" data-bs-toggle="modal" data-bs-target="#exampleModal" name="'+produtos._nome+'" id="'+produtos._id+'"/>'+
        '<label for="check"> '+produtos._nome+'</label>'+
        "</li>";
    });
    
    
};

// itens.addEventListener("click", (event) => {
//     if(tipo === "checkbox") {
//         idProdutoSelecionado = achaId;
//         abrirModal();
//     }
// });

// function saveProduct() {
//     const valorInput = document.getElementById("prodPreco");
//     const novoValor = Number(valorInput.value);
//     lista.forEach((produto) => {
//         if (produto._id === Number(editaProdutoId)) {
//             produto._valor = novoValor;
//             produto._checado = !produto._checado
//         }
        
//     });
//     valorInput.value = null;
//     //saveDataIntoStorage();
//     calculaTotal();
//     fechaModal();
// }

//Função para adquirir "true" ao "checado" do produto.
itens.addEventListener('change', (event) => {
    event.preventDefault();
    let pegaInput = event.target;
    let achaId = pegaInput.id;
    let tipo = pegaInput.type;
    lista.forEach(function(e) {
        
        if (achaId == e._id) {
            e._checado = true;
            
        }
        myModal.addEventListener('click',(event) => {
                event.preventDefault();
                let prodPreco = document.querySelector('#prodPreco').value;
                console.log(`R$ ${prodPreco}`); 

                    lista.forEach(function(prod) {
                        if(achaId == prod._id){
                            prod._valor = prodPreco;
                        }
                    });
            });       
    });
});

