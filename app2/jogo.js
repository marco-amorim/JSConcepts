
var height
var width
var vidas = 1
var tempo = 30
var criaMoscaTempo = 1500

var nivel = window.location.search

nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500
    criaMoscaTempo = 1500

} else if (nivel === 'dificil') {
    //1000
    criaMoscaTempo = 1000

} else if (nivel === 'chucknorris') {
    ///750
    criaMoscaTempo = 750
}


function ajustaTamanhoPalcoJogo() {
    height = window.innerHeight
    width = window.innerWidth

    console.log(width, height)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo--

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'

    } else {

    document.getElementById('cronometro').innerHTML = tempo

    }

}, 1000)


function posicaoRandomica() {

    //remover mosquito anterior caso exista
    if (document.getElementById('mosquito')) {

        document.getElementById('mosquito').remove()

        if (vidas > 3) {

            window.location.href = 'fim_de_jogo.html'

        } else {

        document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png"

        vidas++

        }
    }

    var posicaoX = Math.floor(Math.random() * width) - 90
    var posicaoY = Math.floor(Math.random() * height) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX)
    console.log(posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)


}

function tamanhoAleatorio() {

    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe) {

        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }


}

function ladoAleatorio() {

    var classe = Math.floor(Math.random() * 2)
    console.log(classe)

    switch(classe) {

        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

       
    }
}

