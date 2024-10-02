const nomesMeses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",

]

const mes = prompt("informe o mês")
const numeroMes = Number(mes)

let mensagem = "mês invalido"

if ((numeroMes != NaN) && (numeroMes > 0) && (numeroMes <= 12)) {
    mensagem = `${nomesMeses[numeroMes - 1]} é o mês de número ${numeroMes}`
} else {
    for (let index = 0; index < nomesMeses.length; index++) {
        if (mes.toLowerCase() === nomesMeses[index].toLocaleLowerCase()) {
            mensagem = `${mes} é o mês de número ${index + 1}`
            break
        }
    }
}

console.log(mensagem)
