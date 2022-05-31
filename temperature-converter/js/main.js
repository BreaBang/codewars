//Write your pseduo code first! 
// C to F
document.querySelector('h1').addEventListener('click', cToF)

function cToF(){
//need the value in celsius
let temp = Number(document.querySelector('input').value)
//convert using the equation (0°C × 9/5) + 32 = 32°F
temp = temp * 1.8 + 32
//show value
document.querySelector('h2').innerText =  temp
}