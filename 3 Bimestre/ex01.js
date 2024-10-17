function SomaSerie(cont){

    let soma = 0

    for(let x=1, y=1; x<=cont; x++, y +=2){
        soma = soma + x*y
    }
    return soma
}

console.log(SomaSerie(4))