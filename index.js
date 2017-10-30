// Code your solutions in this file
function printBadges (array) {
  for (var i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails(){
  function maybeTails () {
    return Math.random() >= 0.5;
  }
  let counter = 0
  while (maybeTails()){
    counter ++
  }
  return `You got ${counter} tails in a row!`;
}
