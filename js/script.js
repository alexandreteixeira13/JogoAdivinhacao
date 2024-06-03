
//math = objeto utilizado em operações matemáticas.
const randomNumber =  parseInt(Math.random()*100+1)
//console.log(randomNumber)


//manipulando elementos HTML

const buttonPlay = document.querySelector('#jogar') // botao jogar
const textBox = document.querySelector('#txtNumero') //caixa de texto
const previousTry = document.querySelector('.vezes') //span
const remainingTry = document.querySelector('.numChances')
const restart = document.querySelector('.resultados') //div com paragrafos
const warnings   = document.querySelector('.avisos') //terceiro paragrafo da div resultados


//creating HTML elements

const paragrafo = document.createElement('p')

//criação de um vetor para armazenar os numeros jogados

const numerosJogados = []

//variavel contadora

let myTry = 1

//variavel pra jogar

let playGame = true

if(playGame){
    buttonPlay.addEventListener('click', function(e){
        e.preventDefault()
        let tentativa = parseInt(textBox.value)
        validaChances(tentativa) //chamando uma função e passando o número digitado
    })
}

function validaChances(num){
    if(isNaN(num)){ //se o conteudo da variavel nao for um numero execute o que estiver dentro da chaves
        alert('Atenção!! O valor digitado não é valido. Digite apenas valores númericos entre 1 e 100') //exiba um alerta avisando que o valor inserido não é valido
        textBox.value = ''
        textBox.focus()
    }
}