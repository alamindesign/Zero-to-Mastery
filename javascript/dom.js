let input = document.getElementById("user-input");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
button.addEventListener("click",function(){
   if(input.value > '0'){
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);
      input.value = null;
   }
})