const hash = document.querySelector('input[name = "hash"]')
const criarBtnHash = document.querySelector('.criarHash')
const deletarBtnHash = document.querySelector('.deletarHash')

class Hash {
    constructor() {
        this.table = {}
    }
    add(keys, values) {
            if (this.table[keys])
                return alert('Essa chave já está sendo usada')
            this.table[keys] = values
    }
    change(key, value) {
        if (!this.table[key]) return alert('Essa chave não foi criada')
        this.table[key] = value
    }
    get(key) {
        return this.table[key]
    }
    getAll() {
        return this.table
    }
}

const arrHash = new Hash()
const value = document.querySelector('input[name = "key"]')

function showHash (){
  const thHash = document.querySelector('.valorHash')
  let text = ''
  for (i in arrHash.table) {
    text = text + '\nChave:' + i + '\nValor:' + arrHash.table[i]
}
thHash.innerText = text
}

criarBtnHash.onclick = () => {
  arrHash.add(value.value,hash.value)
  
  showHash()
}
