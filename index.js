var name="Nischal"  //decleration
var age=50; //initialize
// console.log(name,age);

// let address=12;
// console.log(typeof(NaN));
//var let const
//hoisting 

//ES6 ,2015-let, const
//camelCase-ChangeName (function())
//snake_case-Change_name ()

//Data types
// -Primitive
//     Number
//     String
//     Boolean
//     NaN
//     undefined
//     null

// -Non-Primitive (Reference data types)
//     Object(
//         Array
//     )
// -NULL

const arr=[
    1,2,3,4
]
// let arr2=arr points the position of original array

let arr2=[...arr]
arr2[1]="hello"

// console.log(arr)
// console.log(arr2)

let sajal={
    age : 23,
    height : 5.7,
    address : "Patan",
    age: 30,
    Age : 22,
    3 : "Three"
}

// console.log(sajal[3],sajal)

let rain=false
let possibility=false

// console.log(rain?"Take umbrella" : (possibility ? "Should take" : "No need"))


// function calc(num1,num2){
//     console.log("the result of"+ num1+"and"+num2+": "+(num1+num2)/2*10)
// }
// calc(1,2)

// let sum=(num1,num2)=>{
//     console.log(num1+num2);
// }

// sum(2,2)

// multiply=(num)=>{
//     for(let i=1;i<=10;i++){
//         console.log("The multiplication of "+num+" X "+i+" = "+num*i)
//     }
// }
// multiply(9)


//array
let array=[1,2,3,4,5,"hello"]
function convert(val){
    console.log("The number is:"+val);
}

array.forEach(convert)

// for(let i=0;i<array.length;i++){
//     if(typeof(array[i])==="number"){
//         console.log(array[i]);
//     }
// }





//map modifies the array

// let users=[
//     {
//         id:1,
//         username: "Nischal"
//     },
//     {
//         id:2,
//         username: "Nisululu"
//     },
//     {
//         id:3,
//         username: "Sajal"
//     }
// ]

// for(let i=0;i<users.length;i++){
//     console.log(users[i].id)
// }

// setTimeout(convert,2000)

// console.log("finall")

//Promise
    // - events that occurs in the future
    // - pending
    // - resolve
    // - reject

    function handlePromise(resolve,reject){
        // resolve("RESOLVED")
        reject("REJECTED")
    }

    let promise1 = new Promise(handlePromise)
    promise1.then(res=>{
        console.log({res})
    })
    .catch(rej=>{
        console.log({rej})
    })
    console.log("LAST");

    try{
        a=1
        c=a+b
        console.log(a)
    }catch(err){
        console.log(err.message)
    }

