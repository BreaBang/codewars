//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function sirSavageThe21(){
    for (let i = 1; i <=21; i++)
    //console.log('21')
    document.querySelector('#savageSays').innerText += ' 21 '
    //adding the + before the equal and the spaces makes it print 21 times so we can see it. 
}
    sirSavageThe21()
