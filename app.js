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
    ul.innerHTML = createTask(inputText.value);
});
