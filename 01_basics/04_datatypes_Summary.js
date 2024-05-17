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

//********************************************************* */

//Stack(Primitive), Heap(Non-Primitive)

let mySchoolName= "B.n.c high School"

let anothername = mySchoolName
anothername="76jhgf7457"

console.log(mySchoolName)
console.log(anothername)

let userOne={
    email:"fgfdg@gmail.com",
    upi: "dhgd@ybl"
}

let userTwo=userOne

userTwo.email = "ff@hhg.com"

console.log(userOne.email)
console.log(userTwo.email)