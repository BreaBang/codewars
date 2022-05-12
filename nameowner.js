//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//if name is theowners should greet hellow boss, otherwise hello gues
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}