const form = document.getElementById('form-contato');

const nomes = [];
const numeros = [];


let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})
function adicionaLinha(){
    const inputNomePessoa = document.getElementById('nome');
    const inputNumeroPessoa = document.getElementById('numero');

    if(numeros.includes(inputNumeroPessoa.value)){
        alert(`O contato com o número: ${inputNumeroPessoa.value} já existe!`)
    }else{

    nomes.push(inputNomePessoa.value);
    numeros.push(inputNumeroPessoa.value);

    let linha = '<tr>';
    linha += `<td> ${inputNomePessoa.value}</td>`;
    linha += `<td> ${inputNumeroPessoa.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomePessoa.value = '';
    inputNumeroPessoa.value = '';
}
function atualizaTabela(){
    const corpoDaTabela = document.querySelector('tbody');
    corpoDaTabela.innerHTML = linhas;
    alert('O contato foi inserido com sucesso!');
}