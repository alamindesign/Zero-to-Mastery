let input = document.getElementById("user-input");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
function inputLength(){
   return input.value.length;
}
function addElementTotheList(){
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);
   input.value = null;
}
function addListAfterClick(){
   if(inputLength() > 0){
      addElementTotheList()
   }
}
function addListAfterKeypress(event){
   if(inputLength() > 0 && event.keyCode === 13){
     addElementTotheList()
   }
}
button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)