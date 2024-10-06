let acres = "sim"
let carros = []
let maiorValor = 0

while (acres === 'sim') {
    var carro = {
        modelo: prompt("Qual o modelo do carro?"),
        marca: prompt("Qual a marca?"),
        ano: prompt("Qual o ano?"),
        valor: parseFloat(prompt("Qual o valor?")), 
    };
    carros.push(carro)
    if (carro.valor > maiorValor) {
        maiorValor = carro.valor
    }

    acres = prompt("Você deseja inserir outro carro? (sim/não)")
}
console.log(`O carro de maior valor é ${carro.modelo}`)
console.log(`${carro.marca}`)
console.log(`${carro.ano}`)
console.log(`${carro.valor}`)
