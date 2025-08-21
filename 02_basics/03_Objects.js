
const sym = Symbol("key1")
const jsuser = {
    name : "mani",
    [sym] : "mysym1",
    "full name" : "mani agni",
    email : "maniagni@gmail",
    age : "18",
    location : "xyz",
    isloggedin : false,
    days : ["monday", "tuesday"]
}

// console.log(jsuser["email"])
// console.log(jsuser.email);

// console.log(jsuser["fullname"]);

//jsuser.email = "manichat@gpt"
//console.log(jsuser.email);
//Object.freeze(jsuser)
//jsuser.email = "newgpt@chat"
//console.log(jsuser.email);


// console.log(jsuser[sym]);

jsuser.greetings =function(){
    console.log(`hello js user ${"maniagni"}`);
    
    
}
jsuser.greetings2 =function(){
    console.log(`hello js user ${jsuser["full name"]}`);
    
    
}
jsuser.greetings3 =function(){
    console.log(`hello js user ${this.name}`);
    
    
}
//console.log(jsuser.greetings);
//console.log(jsuser.greetings());
//console.log(jsuser.greetings2());
console.log(jsuser.greetings3());




