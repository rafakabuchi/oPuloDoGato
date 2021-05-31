const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
    const rua = result.logradouro

    const mapa = document.querySelector('#map')
    mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCPhQT9tVX9h1JHGb8KyfLZ9L40k6V57qQ&q=${rua},Brasil" frameborder="0"></iframe>`

    function change(){
        const search = document.querySelector('#search')
        search.disabled = true
        research.disabled = false
        cep.readOnly = true
        errorMessage.innerHTML = ''
    }
    change();
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                .then(data => showData(data))
        })
        .catch(e => console.log('Deu erro: ' + e.message))
})

function phoneMaskBrazil() {
    var key = window.event.key;
    var element = window.event.target;
    var isAllowed = /\d|Backspace|Tab/;
    if(!isAllowed.test(key)) window.event.preventDefault();

    var inputValue = element.value;
    inputValue = inputValue.replace(/\D/g,'');
    inputValue = inputValue.replace(/(^\d{2})(\d)/,'($1) $2');
    inputValue = inputValue.replace(/(\d{4,5})(\d{4}$)/,'$1-$2');

    element.value = inputValue;
}

function carregarImagem(event){
    var arquivoSelecionado = event.target.files[0];
    var imagem = document.getElementById("imagemPerfil");
    var fileReader = new FileReader();

    // Nome do arquivo
    imagem.title = arquivoSelecionado.name;

    // Carrega o src (caminho)
    fileReader.onload = function(event) {
        imagem.src = event.target.result;
    };

    // Faz a leitura do arquivo de imagem
    fileReader.readAsDataURL(arquivoSelecionado);
}
