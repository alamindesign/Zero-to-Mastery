let database = [
    {
        username: "Muhammad",
        password: "12345",
    },
    {
        username: "Shaheen",
        password: "123"
    },
    {
        username: "hossain",
        password: "234"
    }
];
let newsfeed = [
    {
        username: "Muhammad",
        timeline: "Hello from Bangladesh",
    },
    {
        username: "Shaheen",
        timeline: "Hello form canada.",
    },
    {
        username: "hossain",
        timeline: "Hello from Australia.",
    }
];
function isUserTrue(user,pass){
    for(var i= 0;i<database.length;i++){
        if(user === database[i].username && pass === database[i].password){
            return true;
        }
}
return false;
}
function singIn(user, pass){
        if(isUserTrue(user,pass)){
            console.log(newsfeed);
        }else{
            alert("Sorry, wrong username or password");
        }
    // if(user === database[0].username && pass === database[0].password){
    //     console.log(newsfeed);
    // }else{
    //     alert("Sorry, wrong username and password!");
    // }
}

var userNamePrompt = prompt("What's your username?");
var passWordPrompt = prompt("What's your password?");
singIn(userNamePrompt,passWordPrompt);