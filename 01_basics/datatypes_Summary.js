// Primitive(call by value)

//7 types: string,number,boolean,null,undefined,symbol,BigInt

const score =100
const scoreValue=100.3

const isLOggedIn= false
const outsideTemp=null
let userEmail

const id=Symbol('123')
const anothereid=Symbol('123')
console.log(id==anothereid)

const bigNumber=43545435346436n

//Reference type(non primitive)

//Array,Objects,Functions

const heros = ["shaktiman","hgfghg"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world")
}

console.log(typeof myfunction)