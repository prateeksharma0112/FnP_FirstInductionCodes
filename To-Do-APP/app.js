const btn = document.getElementById('btn');
const inp = document.getElementById('inp');
const list = document.getElementById('list');

const divs = document.querySelectorAll('div');


btn.onclick = function () {
    
    // Getting the text from the input box
    const todoText = inp.value;

    // creating a new li item
    const li = document.createElement('li');

    li.innerText = todoText;

    li.style.margin="10px auto";
    li.style.fontSize ="25px";
    li.style.fontFamily = "cursive";
    li.style.color = "Black"; 

    // adding the li item into ol as a child

    li.onclick = function (event) {
        event.target.remove();
    }

    list.append(li);

    inp.value = "";

}

//for (let div of divs) {
//    div.onclick = function (e) {
//        e.target.remove()
//    }
//}
