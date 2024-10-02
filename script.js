/* while
do/while
for*/

//crie uma lista com cinco nomes usando while*/

//enquanto uma condição for verdadeira faça alguma coisa

let numeroDeVezes = 0


/*while (numeroDeVezes < 5) {
    console.log("passou aqui")
    numeroDeVezes = numeroDeVezes * 1
}*/

let lista = ['banana', 'maça', 'kiwi', 'morangos', 'laranja', 'pera']

let listaDelistas = ['banana', 'maça', 'kiwi', 'morangos', 'laranja', 'pera']

let posicao = 0

const listaEmtela = document.createElement("ul")

while (posicao < 5) {
    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    listaEmtela.appendChild(itemLista)
    posicao = posicao + 1
}

document.body.appendChild(listaEmtela)

