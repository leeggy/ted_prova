//Variaveis fila
const fila = document.querySelector('input[name = "fila"]')
const arrFila = []
const criarBtnFila = document.querySelector('.criarFila')
const deletarBtnFila = document.querySelector('.deletarFila')

//Funções fila
function addFila(){
    arrFila.push(fila.value)
    showFila()
}

function excluirFila(){
    arrFila.shift()
    showFila()
}

function showFila(){
    const thFila = document.querySelector('.valorFila')
    thFila.innerText = "Valor: " + arrFila
}

criarBtnFila.onclick = () => {
    addFila()
}

deletarBtnFila.onclick = () => {
    excluirFila()
}


