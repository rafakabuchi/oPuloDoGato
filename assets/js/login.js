/* var usuarios = [
    {"login": "rafa@gmail.com", "senha": "rafa123"},
    {"login": "teste@pulodogato.com.br", "senha": "teste12345"},
    {"login": "pulodogato@pulodogato.com.br", "senha": "pulodogato123"},
];

function Login() {
    var usuario = document.getElementsByName('username')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "index.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
} */

function Login(event) {
    event.preventDefault();
    var usuario = document.getElementsByName('username')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('password')[0].value;
    senha = senha.toLowerCase();
  
    if (usuario == "pulodogato@pulodogato.com.br" && senha == "pulodogato123") {
      window.location = "cadastroPessoal.html";
    }else{
      alert("Dados incorretos, tente novamente");
    }
  }