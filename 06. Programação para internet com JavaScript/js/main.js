function carregada(){
    document.getElementById("loaded").innerHTML = "Página carregada, meus bons!"
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
}

function redirecionar(){
    window.open("https://google.com.br")
}

function trocartexto(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!"
}

function voltarTexto(elemento){
    elemento.innerHTML= "Passe o mouse aqui!"
}

function functionChange(elemento){
    alert(elemento.value)
}