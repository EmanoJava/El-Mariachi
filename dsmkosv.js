
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

function countOccurrences(str,letra){

    let quant = str.length
    let numvar = 0
    let letr = 0

    while( numvar <= quant){
        if( str[numvar] == letra){
            letr++
        }
        numvar++
    }
    
    return letr
}


console.log(countOccurrences("banana", "a"))

function getInitials(str) {
    let quant = str.length;
    let numvar = 0;
    let iniciais = "";

    while (numvar < quant) { 
        if (str[numvar] === str[numvar].toUpperCase() ) {
            iniciais += str[numvar]; 
        }
        numvar++;
    }
    
    return iniciais; 
}

console.log(getInitials("João Silva")); 

