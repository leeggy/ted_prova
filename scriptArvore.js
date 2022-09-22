const arvore = document.querySelector ('input[name = "arvore"]')
const criarBtnArvore = document.querySelector('.criarArvore')
let first = true
let tree

class Tree {
    constructor(value) {
        this.leftNode = null
        this.rightNode = null
        this.value = value
    }

    add(value) {
        if (value >= this.value) {
            if (!this.rightNode) {
                this.rightNode = new Tree(value)
                return
            }
            this.rightNode.add(value)
            return
        }
        if (!this.leftNode) {
            this.leftNode = new Tree(value)
            return
        }
        this.leftNode.add(value)
    }
}

criarBtnArvore.onclick= () => {
    if (first) {
        tree = new Tree(arvore.value)
        first = false
        console.log(tree)
        return
    }
    tree.add(arvore.value)
    console.log(tree)
}