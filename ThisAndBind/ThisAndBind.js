//review this and Bind
//this is defined by creation context
//in objects this id det to the object method is called on

//bind is used to create a copy of a function and set the this value to a specific value

const person1 = {
  name: 'John',
}

const person2 = {
  name: 'Jane',
}

function namer() {
  console.log(this.name)
}
namer()

namer.bind(person1)()
namer.bind(person2)()


let numbers = {
  x: 10,
  y: 20,
}
let doSums = function () {
  console.log(this.x + this.y)
}

doSums()

doSums.bind(numbers)()