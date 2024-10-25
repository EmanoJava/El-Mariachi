
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("oval"))

function countVowels(str){

    let vogal = 0
    let nletra = 0
    let quant = str.length

    let strMinusculo = str.toLowerCase()
    
    while(nletra <= quant){
        if( strMinusculo[nletra] == "a" || strMinusculo[nletra] == "e" || strMinusculo[nletra] == "i" || strMinusculo[nletra] == "o"|| strMinusculo[nletra] == "u") {

            vogal++
            nletra++
        }
        else{
            nletra++
        }
    }
    return vogal
}

console.log(countVowels("Angu"))

function isPalindrome(str){

    strreverse = str.split('').reverse().join('')

    if (str == strreverse){
        return true
    }else{
        return false
    }

}

console.log(isPalindrome("arara"))
