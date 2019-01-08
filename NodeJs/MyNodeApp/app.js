
/* var x=10;
var y=16;
var z=x+y;

console.log(z); */


/* 
const moduleOs =require('os');
const moduleFs=require('fs');

var myUser=moduleOs.userInfo();
console.log(myUser);

moduleFs.appendFile('hello.txt','Welcome to node',
function(err){
    if(err)throw(err);
    console.log('File saved successfully');
});
console.log(moduleOs); */

/* const myModule=require('./students.js');
console.log(myModule.getStudent());

const addModule=require('./add.js');

var sum=addModule.add(5,6);
console.log(sum);

console.log(process.argv[2]); */

var _=require('lodash');
var myArray=_.uniq(['Vineeth',12,12,"hello.txt"]);
console.log(myArray);