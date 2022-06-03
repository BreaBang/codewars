// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". 
//If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function compareArray(arr){
    //the -1 is because arrays start at 0
    if (arr[0]<arr[arr.length-1]){
        alert('Hi')
    } else if (arr[0] > arr[arr.length -1]){
        alert ('Bye')
    } else{
        alert('We close in an hour')
}
}
//calling the function to test it
compareArray([1,2,3,4,5])