let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")

let botaocalc = document.getElementById("button")
botaocalc.onclick = calculaimc

function calculaimc(){

    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)
    let imc = peso / (altura * altura)


    divSaida.innerText = imc
}

  
