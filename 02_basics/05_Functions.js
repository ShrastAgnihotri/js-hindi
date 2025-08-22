// function saymyname(){
//     console.log("Mani");
//     console.log("Shrasti");
    
// }
// saymyname();

// function add(num1, num2){
//     console.log(num1+num2);
    
// }
// add(3,2)

// function LogInUsermMsg(username="Shrasti"){
//     console.log(`${username} user just logged in`);
    
// }
// LogInUsermMsg()
// LogInUsermMsg("Mani")


//                                  SHOPPING CART

// function CalculateCartPrise(num,...num1){
//     return (num,num1)
// }
// console.log(CalculateCartPrise(100));
// console.log(CalculateCartPrise(100, 200));
// console.log(CalculateCartPrise(100, 200,300,2000,30490));



//                                    FUNCTION IN OBJECT


// const user = {
//     name : "Shrasti",
//     age : "18"
// }

// function usernameandage(anyobject){
//     console.log(`Name of user is ${anyobject.name} and age is ${anyobject.age}`);
    
// }
// usernameandage(user)
// //OR
// usernameandage(user2={
//     name : "mani",
//     age : "18"
// })

//                                        FUNCTION IN ARRAY

const array1 = [200, 300, 400, 500]
function PrintSecondVal(getARRAY){
    console.log(`Second value is ${getARRAY[1]}`);
    
}
PrintSecondVal(array1)