function menor(a, b, c){

    if (a <= b && a <= c){
        menor = a
    } else if ( b <= a && b <= c){
        menor = b
    } else {
        menor = c
    }

    return menor
}

console.log(menor(-2,2,2))
console.log(menor(2,-2,2))
console.log(menor(2,2,-2))
console.log(menor(2,2,2))
console.log(menor(-2,-2,2))
console.log(menor(-2,2,-2))
console.log(menor(2,-2,-2))
