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

const  comletedTaskCount = () => {
    let checkedCount = ul.getElementsByClassName("checked").length;
    let taskCount = ul.getElementsByClassName("list-group").length;
    const checkedTasks = document.getElementById("checkedTasks");
    const allTasks = document.getElementById("allTasks");
    checkedTasks.innerText = checkedCount;
    allTasks.innerText = taskCount;
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
    comletedTaskCount();
});

// delete a task

ul.addEventListener("click", e => {
    if(e.target.classList.contains("btn")){
        e.target.parentElement.remove();
    }
    comletedTaskCount();
});

// check and uncheck tasks

ul.addEventListener("click", e => {
    if(e.target.classList.contains("unchecked")){
        e.target.className = "checked";
    }else {
        e.target.className = "unchecked";
    }
    comletedTaskCount();
});

