 function sayHello(){
    console.log("Hello");
 }

 var sayBye = function() {
    console.log("Bye");
 }

function multiply(a,b){
    if (a>10 || b>10){
        return "That's too hard";
    }else{
        return a*b;
    }
}
console.log(multiply(5,11));
// Array
var list = [["tiger","cat","bear","bird"],["Rakib","Niloy","Hridoy","Sumon"]];
console.log(list[0][2],list[1][0]);
var myList = ["dog","cat","Monkey"];
var myNewList = myList.concat(["tom","jerry"]);
console.log(myList);
//concat([]) creates new array with the old one...
console.log(myNewList);