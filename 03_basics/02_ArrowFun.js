// const user = {
//     username : "mani",
//     prise : "99",
//     welcomemsg :function(){
//         console.log(`${this.username}, Welcome`);
//         console.log(this);
        
        
//     }
// }
// user.welcomemsg()
// user.username="sam"
// user.welcomemsg()
// console.log(this);

// function chai(){
//     console.log(this);
    
// }


const chai = () => {
    let username = "mani"
    return(this.username)
}

const addone = (num1, num2)=>{
    return (num1+num2)
}

console.log(addone(3,2));

const addtwo = (num1, num2) => (num1+num2)
console.log(addtwo(4,3));


