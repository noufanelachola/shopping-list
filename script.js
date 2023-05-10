var button = document.getElementsByClassName("button-add")[0];
var input = document.getElementsByTagName("input")[0];
var ul = document.querySelector("ul");

function inputValue(){
    if(input.value.length > 0){
        return true;
    }
    else {
        return false;
    }
}

function addItem(){
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(span);
    input.value = ""; 

    var doneButton = document.createElement("button");
    doneButton.classList.add("button-done","button-acc");
    doneButton.appendChild(document.createTextNode("done"));
    li.appendChild(doneButton);

    var editButon = document.createElement("button");
    editButon.classList.add("button-edit","button-acc");
    editButon.appendChild(document.createTextNode("edit"));
    li.appendChild(editButon);
   
    var delButton = document.createElement("button");
    delButton.classList.add("button-delete","button-acc");
    delButton.appendChild(document.createTextNode("delete"));
    li.appendChild(delButton);
            

}

function buttonClick(){
    if(inputValue()){
        addItem();
    }
}

function keyPress (event){
    if(inputValue() && event.key === "Enter"){
        addItem();
    }
}

// function to delete an item 
function itemDelete(event){
    if(event.target.classList[0] === "button-delete"){
        var item = event.target.parentElement;
        item.classList.add("slideOut");
        item.addEventListener("transitionend",function(){
            item.remove();
        });
    }
}

// function to tick an item
function itemDone(event){
    if(event.target.classList[0] === "button-done"){
        event.target.parentElement.firstChild.classList.toggle("itemDone");

    }
    if(event.target.parentElement.firstChild.classList[0] === "itemDone" && event.target.classList[0] === "button-done"){
        event.target.innerHTML = "undone";
    }
    else if(event.target.parentElement.firstChild.classList[0] !== "itemDone" && event.target.classList[0] === "button-done") {
        event.target.innerHTML = "done";
    }
}

// function to edit item
function itemEdit(event){
    if(event.target.classList[0] === "button-edit"){
        var editList = prompt("Enter the new item to replace");
        if(editList.length > 0 ){
            event.target.parentElement.firstChild.innerHTML = editList ;

        }
    }
}

// add item
button.addEventListener("click",buttonClick);
input.addEventListener("keypress",keyPress);

// delete item
ul.addEventListener("click",itemDelete);

// tick item
ul.addEventListener("click",itemDone);

// edit item
ul.addEventListener("click",itemEdit);