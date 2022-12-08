const inputText = document.querySelector("#task");
const button = document.querySelector(".add-btn");
const form = document.querySelector("#add-task");
const ul = document.querySelector(".todolist-list-container");

// functions

const createTask = (taskText) => {
    return `<div class="list-group">
            <li class="unchecked">${taskText}</li>
            <button class="btn">&#128473;</button>
            </div>`
}


// events 



// add task event

button.addEventListener("click", e => {
    e.preventDefault();
    if(inputText.value) {
    ul.innerHTML += createTask(inputText.value);
    form.reset(); 
    }else {
        alert("Please add a task");
    }
});

// delete a task

ul.addEventListener("click", e => {
    if(e.target.classList.contains("btn")){
        e.target.parentElement.remove();
    }
});

// check and uncheck tasks

ul.addEventListener("click", e => {
    if(e.target.classList.contains("unchecked")){
        e.target.className = "checked";
    }else {
        e.target.className = "unchecked";
    }
});