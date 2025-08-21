                            //CONACATE TWO ARRAYS

const num1 = [1,2,3,4]
const num2 = [5,6,7,8]
//num1.push(num2)
//console.log(num1);

const newnum = num1.concat(num2);
//console.log(newnum)

const newnum2 = [...num1,...num2];
//console.log(newnum2);

const myarr1 = [1,2,3,[7],[3,5,7,9]] 

//console.log(myarr1.flat(Infinity));

// console.log(Array.isArray("mani"));
// console.log(Array.from("mani"));
// console.log(Array.from({name:"mani"}));

let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1,score2,score3));






