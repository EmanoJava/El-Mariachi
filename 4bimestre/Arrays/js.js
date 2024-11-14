function sumArray(arr){
    let soma = 0
    for(let i=0;i < arr.length; i++){
    soma = soma + arr[i]}

    return soma
}

console.log(sumArray([1,2,3,4]))

function getEvenNumbers(vetor){

    let noneVetor = []
    for(elemento of vetor){
            if(elemento % 2 == 0){
                noneVetor.push(elemento)
            }
    }
    return noneVetor
}
console.log(getEvenNumbers([1,2,3,4,5,6]))