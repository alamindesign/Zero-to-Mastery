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
]

var userNamePrompt = prompt("What's your username?");
var passWordPrompt = prompt("What's your password?");

function singIn(user, pass){
    if(user === database[0].username && pass === database[0].password){
        console.log(newsfeed);
    }else{
        alert("Sorry, wrong username and password!");
    }
}
singIn(userNamePrompt,passWordPrompt); 