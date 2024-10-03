//Crie um objeto do tipo pessoa que possua o nome, a idade e a cidade onde mora. Mostre esse objeto no console do navegador. Posteriormente, mostre um menu de atualização de idade ou cidade. Após o usuário escolher qual dado deseja atualizar, leia a atualização desse dado, faça a alteração no objeto e imprima novamente o objeto no console.

const pessoa ={
    nome: prompt("Qual o seu nome?"), 
    idade: prompt("Qual a sua idade?"),
    cidade: prompt("Qual cidade vc mora"),
}
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cidade)

let atualizar = prompt("Você deseja atualizar sua idade ou cidade?")
if(atualizar=="idade"){
    pessoa.idade=prompt("Digite a sua idade novamente:")
    console.log("Seus dados atualizados:")
    console.log(pessoa.nome)
    console.log(pessoa.idade)
    console.log(pessoa.cidade)
    console.log("Obrigada por utilizar nosso cadastro.")
}
else if (atualizar=="cidade"){
    pessoa.cidade=prompt("Digite a sua cidade novamente:")
    console.log("Seus dados atualizados:")
    console.log(pessoa.nome)
    console.log(pessoa.idade)
    console.log(pessoa.cidade)
    console.log("Obrigada por utilizar nosso cadastro.")
} 
else{
    console.log("Obrigada por utilizar nosso cadastro.")
}