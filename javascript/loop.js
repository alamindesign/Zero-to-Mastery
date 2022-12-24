var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];

for (var i=0; i< todos.length; i++){
    todos[i] = todos[i] + "!";
}
//forEach
// todos.forEach(function(item,index){
//     console.log(item,index);
// })
//anoter way
function logTodos(item,idex){
    console.log(item,idex);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);

var counterOne = 1;
while(counterOne < 10){
    console.log(counterOne);
    counterOne++;
}
var counterTwo = 1;
do{
    console.log(counterTwo)
    counterTwo++;  
} while(counterTwo<10);