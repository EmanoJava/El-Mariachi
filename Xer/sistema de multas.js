let VelocidadeM = document.getElementById("inp")
let VelocidadeV = document.getElementById("inp1")
let divSaida = document.getElementById("Saida")

let botaocalc = document.getElementById("button")
botaocalc.onclick = sistemaM
console.log("teste")

function sistemaM(){


    let Vv = Number(VelocidadeV.value)
    let Vm = Number(VelocidadeM.value)

    if( Vv > Vm){
        let multa = (Vv * 100) / Vm
         
        multa = multa.toFixed(0)
        if(multa <= 20){
            divSaida.innerText="Você excedeu " + multa+"%a velocidade máxima da via. Sua multa é de R$130,16"
        }
        else if (multa > 20 | multa <= 50){
            divSaida.innerText="Você excedeu "+ multa+"% a velocidade máxima da via. Sua multa é de R$195,13"
        }
        else if (multa > 50){
            divSaida.innerText="Você excedeu"+ multa+"% a velocidade máxima da via. Sua multa é de R$880,41"
        }
    }
    else{
        divSaida.innerText = "Você respeitou a velocidade máxima da via"
    }
}
