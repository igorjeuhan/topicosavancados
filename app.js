var tabela = document.querySelector('table');

var btnCad = document.querySelector('button');
btnCad.addEventListener('click', function(){
    var inputNome = document.querySelector('input[name=nome]');
    var nome = inputNome.value;
    var textNome = document.createTextNode(nome);
    var inputTelefone = document.querySelector('input[name=telefone');
    var telefone = inputTelefone.value;
    var textTelefone = document.createTextNode(telefone);
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var td2 = document.createElement('td');
    var linkExcluir = document.createElement('a');
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

