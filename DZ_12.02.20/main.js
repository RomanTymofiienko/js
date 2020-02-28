
let todoList = [];

if(localStorage.getItem('todo') != undefined) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    out();
}

document.getElementById('button').onclick = function () {
    let a = document.getElementById('in').value;
    let temp = {};
    temp.todo = a;
    temp.check = false;

    let i = todoList.length;
    todoList[i] = temp;
    out();
    localStorage.setItem('todo', JSON.stringify(todoList));
}

function out() {
    let out = '';
    for(let key in todoList){
        if(todoList[key].check == true){
            out += '<input type="checkbox" checked>';
        }
        else{
            out += '<input type="checkbox">';
        }
        out += todoList[key].todo +'<br>';
    }
    document.getElementById('out').innerHTML= out;
}