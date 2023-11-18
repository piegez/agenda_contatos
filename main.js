const form = document.getElementById('agenda-contatos');
const nome = [];
const numero = [];
let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (nome.includes(inputNomePessoa.value)) {
        alert (`O nome: ${inputNomePessoa.value} já foi adicionado`);

    } else {

        nome.push(inputNomePessoa.value);}

    if (numero.includes(inputNumeroTelefone.value)) {
        alert (`O número: ${inputNumeroTelefone.value} já foi adicionado`);
    
    } else {
        
        numero.push(inputNumeroTelefone.value);

        let linha = '<tr>';
    linha += `<td>${inputNomePessoa.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    
    inputNomePessoa.value = '';
    inputNumeroTelefone.value = '';
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

