var selecionarLinha = null

function submeterFormulario() {
    if (validar()) {
        var dadosFormulario = lerDadosFormulario()

        if (selecionarLinha == null)
            inserirNovoRegistro(dadosFormulario)

        else
            atualizarRegistro(dadosFormulario)
        redefinirFormulario()
    }
}

function lerDadosFormulario() {
    var dadosFormulario = {}
    dadosFormulario["nome"] = document.getElementById("nome").value
    dadosFormulario["quantidade"] = document.getElementById("quantidade").value
    dadosFormulario["qualidade"] = document.getElementById("qualidade").value
    dadosFormulario["preco"] = document.getElementById("preco").value

    return dadosFormulario
}

function inserirNovoRegistro(data) {

    var tabela = document.getElementById("bazarLista").getElementsByTagName('tbody')[0]
    var newRow = tabela.insertRow(tabela.length)

    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.nome;

    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.quantidade

    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.qualidade

    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.preco

    cell4 = newRow.insertCell(4)
    cell4.innerHTML = `<a onClick="emEdicao(this)"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                        <a onClick="emExclusao(this)"><i class="fa fa-remove" style="margin-left:5px;color:red"></i></a>`
}

function redefinirFormulario() {
    document.getElementById("nome").value = ""
    document.getElementById("quantidade").value = ""
    document.getElementById("qualidade").value = ""
    document.getElementById("preco").value = ""

    selecionarLinha = null
}

function emEdicao(td) {
    selecionarLinha = td.parentElement.parentElement
    document.getElementById("nome").value = selecionarLinha.cells[0].innerHTML
    document.getElementById("quantidade").value = selecionarLinha.cells[1].innerHTML
    document.getElementById("qualidade").value = selecionarLinha.cells[2].innerHTML
    document.getElementById("preco").value = selecionarLinha.cells[3].innerHTML
}

function atualizarRegistro(dadosFormulario) {
    selecionarLinha.cells[0].innerHTML = dadosFormulario.nome
    selecionarLinha.cells[1].innerHTML = dadosFormulario.quantidade
    selecionarLinha.cells[2].innerHTML = dadosFormulario.qualidade
    selecionarLinha.cells[3].innerHTML = dadosFormulario.preco
}

function emExclusao(td) {
    if (confirm('Tem certeza que deseja deletar este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("bazarLista").deleteRow(row.rowIndex);
        redefinirFormulario();
    }
}


function validar() {
    eValido = true
    if (document.getElementById("nome").value == "") {
        eValido = false
        document.getElementById("nomeValidationError").classList.remove("hide")
    } else {
        eValido = true
        if (!document.getElementById("nomeValidationError").classList.contains("hide"))
            document.getElementById("nomeValidationError").classList.add("hide")

    }

    return eValido
}