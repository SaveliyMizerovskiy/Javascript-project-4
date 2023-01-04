function init(){
    nameForm = document.getElementById("itemName");
    numberForm = document.getElementById("itemNumber");
    list = document.getElementById("list");
}

function addItem(){
    item = nameForm.value;
    list.innerHTML += `<li>#${list.children.length} ${item}</li>`;
}

function moveItem(){
    number = numberForm.value;
}

function up(){

}

function down(){
    
}

function removeItem(){
    number = numberForm.value;
    list.parentNode.removeChild(number);
}