let greetings = ["hello", "hi", "hey"];
//let randomNumber=Math.floor(Math.random()*3);
//console.log(greetings[randomNumber])
upperGreetings = greetings.map(function (greeting) {
  return greeting.toUpperCase();
})
console.log(upperGreetings);
console.log(greetings[0]);
console.log(greetings);
console.log(greetings.shift());
console.log(greetings);