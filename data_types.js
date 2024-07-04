// Primitive data type : 
// 7 types:String,Number,Boolean,Null,undefined,Symbol,BigInt,
// refence type (non-primitive)
// Array,Objects,functions,
const score=100
const scorevalue=100.3
const  isLoggedIn=false
const isOutsideTemp=null
let userEmail;
const id=Symbol('123')
    const anotherid=Symbol('123')
    console.log(id===anotherid)
    const bigNumber=123456789234n
    // arrays in javascript
    const heros=["shaktiman","naagraj","doga"]
    // objects in javascript are defined inside curly braces
    {
        name:"Anshika",
        profession:"Developer"
    }
    // objects defined inside curly bracket can be assigned to a variable
    let myobj={
        name:"Anshika",
        profession:"Developer",
    }
    // function in javascript
    // syntax for function in javascript
    // syntax: function function_name(){}
    // storing function in a variable
    let my_function=function(){
        console.log("hello world javascript")
    }
    // how to identify data type of a value 
    // we can do so by using typeof
    console.log(typeof bigNumber)
    // syntax:for typeof:console.log(typrof variable_name)
    // ********** data type of function is :Object function***********
