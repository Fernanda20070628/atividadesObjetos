/*Faça um programa que leia os dados de um livro. Nome, autor, ano de publicação. Posteriormente, armazene esses dados em um objeto LIVRO. Posteriormente, crie outro livro (livro2) com seus dados de entrada também feitos pelo usuário.
Após ler os dados sobre esses dois livros, faça:
-- Imprima no console os dados do livro mais antigo.
-- Verifique e imprima na tela se existe algum livro com o nome "estudando programação", a resposta deve ser SIM ou Não no console do navegador.
-- Verifique e imprima na tela se os dois livros são ou não do mesmo autor. Além disso, imprima o nome do autor de cada livro.*/

const livro={
    nome:prompt("Qual o nome do livro?"),
    autor:prompt("Qual o autor do livro?"),
    anoPublicação:prompt("Qual o ano de publicação do livro?")
}
const livro2={
    nome:prompt("Qual o nome do segundo livro?"),
    autor:prompt("Qual o autor do segundo livro?"),
    anoPublicação:prompt("Qual o ano de publicação do segundo livro?")
}
if( livro.anoPublicação> livro2.anoPublicação){
    console.log("O livro mais velho é:")
    console.log(livro2.nome)
    console.log(livro2.autor)
    console.log(livro2.anoPublicação)
}
else{
    console.log("O livro mais velho é:")
    console.log(livro.nome)
    console.log(livro.autor)
    console.log(livro.anoPublicação)
}
if(livro.nome=='estudando programação'||livro2.nome=='estudando programação'){
    console.log('Sim, há um livro com esse nome.')
}
else{
    console.log('Sim, há um livro com esse nome.')
}
if(livro.autor==livro2.autor){
    console.log("os livros são do mesmo autor")
}
else{
    console.log(`o autor do primeiro livro é ${livro.autor}`)
    console.log(`o autor do segundo livro é ${livro2.autor}`)
}