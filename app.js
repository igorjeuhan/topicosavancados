let tabela = document.querySelector('table');

let btnCad = document.querySelector('button');
btnCad.addEventListener('click', function(){
    let inputNome = document.querySelector('input[name=nome]');
    let nome = inputNome.value;
    let textNome = document.createTextNode(nome);
    let inputTelefone = document.querySelector('input[name=telefone');
    let telefone = inputTelefone.value;
    let textTelefone = document.createTextNode(telefone);
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let linkExcluir = document.createElement('a');
    linkExcluir.setAttribute('href', '#');
    linkExcluir.appendChild(document.createTextNode('Excluir'));
    td.appendChild(textNome);
    td.appendChild(linkExcluir);
    tr.appendChild(td);
    td2.appendChild(textTelefone);
    td2.appendChild(linkExcluir);
    tr.appendChild(td2);
    tabela.appendChild(tr);
    inputNome.value = '';
    inputTelefone.value = '';
    linkExcluir.addEventListener('click', function(e){
        e.preventDefault();
        td.parentNode.remove(tr);
    })
})

