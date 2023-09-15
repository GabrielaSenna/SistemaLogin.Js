//Chamando os campos criados pelo id
const inputLogin = document.getElementById("user");
const inputSenha = document.getElementById("senha");
const inputNovoLogin = document.getElementById("novoUser");
const inputNovaSenha = document.getElementById("novaSenha");
const inputConfirmSenha = document.getElementById("confirmSenha");

//Array para armazenar usuários
let usuarios = [];

//Dando funções aos botões
function registrar(){
    //se o valor do campo senha coincidir com o confirma senha
    if(inputNovaSenha.value == inputConfirmSenha.value){
        //Após confirmar, cria-se o objeto e seus valores
        let usuario = {
            inputLogin: inputNovoLogin.value,
            inputSenha: inputNovaSenha.value
        }
        //puxa o array e manda o usuáiro criado
        usuarios.push(usuario);
        alert("Ihul! Você foi registrado com sucesso!");
    } else{
        alert("Ops, suas senhas não coincidem :/");
    }
}

function logar(){
    let mensagem = "Usuário ou senha estão incorretos :/"
    //Para cada usuário contido no array
    for(let usuario of usuarios){
        //se o valor armazenado no usuario coincide com o valor digitado
        if(usuario.login == inputLogin.value && usuario.senha == inputSenha.value){
            mensagem = "Ihul! Seja bem-vind@";
            break;
        }
    }
    alert(mensagem);
}