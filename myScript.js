const list = [];

function init() {
   output = document.getElementById("list");
}

function addItem() {
    item = (document.getElementById("item")).value;
    list.push(item);
    console.log(list);
    display();
}

function removeItem() {
    rindex = (document.getElementById("remove")).value;
    list.splice(parseInt(rindex) - 1, 1);
    display();
}

function up() {
    move = (document.getElementById("move")).value;
    let uindex = parseInt(move) - 1;
    if (uindex > 0) {
        let temp = list[uindex];
        list[uindex] = list[uindex - 1];
        list[mindex - 1] = temp;
    }
    display();
}

function down() {
    move = (document.getElementById("move")).value;
    let dindex = parseInt(move) - 1;
    if (dindex > 0) {
        let temp = list[dindex];
        list[dindex] = list[dindex + 1];
        list[dindex + 1] = temp;
    }
    display();
}

function display() {
    output.innerHTML = "";
    for (i in list) {
        let num = parseInt(i) + 1;
        output.innerHTML += num + ". " + list[i] + "<br>";
    }
}
