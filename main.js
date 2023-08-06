// es 5
var name="dip";
name="dipchandan";

//es 6
let rollno=10;

console.log(`Name is ${name} and roll no : ${rollno}`);
//const
 const pie=3.14;
 console.log(pie);
//  alert("hello");

// var name=prompt("enter your name");
console.log(name);
// let pw=prompt("enter password");



// if (name=="dip" && pw==123){
//     console.log("welcome here");
// }
// else{
//     console.log("enter correct name")
// }

// let hour=10;
// if(hour>10 || hour<13){
//     console.log("get ready");
// }

// let a=10;
// (a>15)?console.log("its true"):console.log("its false");
// let a=0
// for(a;a<10;a++){
//     document.write(a+"<br>");
// }
// let b=0;
// while(b<10){
//     console.log(b);
//     b++;
// }


// //do while
// let c=0;
// do{

//     console.log(c);
//     c++;
// }
// while(c<10);


//js- basic exercises

//1.Write a JavaScript program to set the value of PI.
// const pi=prompt("enter value of pie");
// (pi==3.14)?console.log(pi):console.log("enter valid value");


//2.Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
// const num=prompt("enter number to check");
// (num%3==0)?console.log(`${num}is multiple of three`):((num%7==0)?console.log(`${num} is multiple of 7`):console.log("not multiple of three and seven"));

//3.to print current date
console.log("current date is "+Date());

//4.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
let day=2;
switch(day){
    case 1: console.log("sunday");
    break;
    case 2: console.log("monday")
    break;
    case 3: console.log("Tuesday");
    break;
    case 4: console.log("wed")
    break;
    case 5: console.log("thru");
    break;
    case 6: console.log("fri")
    break;
    case 7: console.log("sat");
    break;
    default: console.log("invalid value");
    break;

}

function newFunction(name){
    console.log("hello",name);
}
newFunction("deep");
newFunction("rohan");
newFunction("muskan");
newFunction("nepal");
newFunction("i am");


const addNumber=(a,b)=>{
    return a+b;

}
console.log(addNumber(2,4));


// array in js
let nameList=["ram","shyam","mohN"];
nameList.push("shyam","saroj");
nameList.pop();
nameList.sort();
console.log(nameList);

//map,find filter reduce are immutable js 
//concat join slice splice forEach
//length sort push pop
//array of object in js....
const person=[{name:"hari",age:30},{name:"shyma",age:4},{name:"mohan",age:5}];
const age= person.sort((a,b)=>{
    return a.age-b.age;
});
console.log();


//map in js
person.map((person)=>person.name);
console.log({person});





