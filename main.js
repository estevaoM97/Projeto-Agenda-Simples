const form = document.getElementById('form-agenda');
const inputNome = document.getElementById('form-nome');
const inputTelefone = document.getElementById('form-telefone')
const corpoTabela = document.querySelector('tbody');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
});

function adicionaLinha() {
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha +- `</tr>`;

    linhas += linha;    
    corpoTabela.innerHTML = linhas

    inputNome.value = '';
    inputTelefone.value = '';
};
