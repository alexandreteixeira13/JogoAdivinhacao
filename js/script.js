//math = objeto utilizado em operações matemáticas.
const randomNumber =  parseInt(Math.random()*100+1)
console.log(randomNumber)

//Manipulando os elementos html
const buttonPlay = document.querySelector('#jogar') // Constante que vai receber o botão jogar
const textBox = document.querySelector('#txtNumero') //Caixa de texto
const previousTry = document.querySelector('.vezes') //Jogadas anteriores, span
const remainingTry = document.querySelector('.numChances') //Jogadas restantes, span
const restart = document.querySelector('.resultados') //Recomeçar, elemento html div
const warnings   = document.querySelector('.avisos') //Pegando terceiro paragrafo da div resultados

//Criando um paragrafo

const paragrafo = document.createElement('p') //Criando um paragrafo

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
    else if(num < 1){
        alert('atenção!! o valor digitado NÃO pode ser menor que 1')
        textBox.value = ''
        textBox.focus()
    }
    else if (num > 100){
        alert('Atenção!! o valor digitado NÃO pode ser maior que 100')
        textBox.value = ''
        textBox.focus()
    }
    else if (numerosJogados.includes(num)){
        alert(`O número ${num} já foi jogado anteriormente, use outro!`)
        textBox.value = ''
        textBox.focus()
    }
    else{
        numerosJogados.push(num)
    if(myTry === 6 && num != randomNumber){
        displayTry(num)
        textmsg(`Game Over! O número secreto era ${randomNumber}`)
        endGame()
    }
    else{
        displayTry(num)
        checkTry(num)
    }
    }
}

/*
display jogadas 
vamos inserir o num na pagina html
*/

function displayTry(num){
    textBox.value = ""
    textBox.focus()
    previousTry.innerHTML += `${num}, `
    myTry++
    remainingTry.innerHTML = `${7 - myTry}`
}

/*
funcao checktry
verificara se o numero jogado eh igual ao numero aleatorio
verificara se o numero jgoado é menor que o numero aleatroio
verificara s eo nuimero jogado é maior que o numero aleatorio
*/



/*
ende game()

encerra o jogo
*/