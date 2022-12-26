let input = document.getElementById("user-input").value;
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
button.addEventListener("click",function(){
   var li = document.createElement("li");
   li.appendChild(document.createTextNode("testing.."));
   ul.appendChild(li);
})