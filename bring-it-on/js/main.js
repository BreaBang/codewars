// *Variables*
// Create a variable and console log the value
let num = 5
console.log(num)

// Create a variable, add 10 to it, and alert the value
let Boom = 8
Boom += 10
alert(Boom)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function Subtract (n1, n2, n3, n4){
    alert(n1-n2-n3-n4)
}
Subtract (16,4,4,4)

// Create a function that divides one number by another and returns the remainder
function Division (num1, num2){
    return num1 % num2
    
}
Division(16, 4)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Jumanji (nn1, nn2){
    let sum = nn1 + nn2
    if (sum > 50){
        alert('Jumanji')
    }
}
Jumanji(40+11)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiThreeAndCheck(nb1, nb2, nb3){
    let product = nb1 * nb2 * nb3
    if (product % 3 === 0){
        alert ('ZEBRA')
    }
}

multiThreeAndCheck(3,3,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopWordXTimes (word, num) {
    for(let i = 1; i<=num; i++){
        console.log(word)

    }
}