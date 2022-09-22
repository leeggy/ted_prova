//pilha---

//Variaveis Pilha
const pilha = document.querySelector('input[name = "pilha"]')
const arrPilha = []
const criarBtnPilha = document.querySelector('.criarPilha')
const deletarBtnPilha = document.querySelector('.deletarPilha')

//Funções fila
function addPilha(){
    arrPilha.push(pilha.value)
    showPilha()
}

function excluirPilha(){
    arrPilha.pop(pilha.value)
    showPilha()
}
function showPilha(){
    const thPilha = document.querySelector('.valorPilha')
    thPilha.innerText = "Valor: " + arrPilha
}

criarBtnPilha.onclick = () => {
    addPilha()
}

deletarBtnPilha.onclick = () => {
    excluirPilha()
}