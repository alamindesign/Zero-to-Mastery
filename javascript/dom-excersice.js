let input = document.getElementById("userinput");
let btn = document.getElementById("enter");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
li.classList.toggle = "done";
function inputLength(){
    return input.value.length;
}
function printListItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
function addListAfterClick(){
        if(inputLength() > 0){
            printListItem();
    }
}
function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        printListItem();
    }
}
btn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
