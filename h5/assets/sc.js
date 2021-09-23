const getId = (id) => document.getElementById(id);
const getClass = (className) => document.getElementsByClassName(className);
const $ = (query) => document.querySelector(query);
const inputTodo = getId('nameTodo');
let outputTodo = getId('outputTodo');

let tes = '';
const todos = [];

function addTodo() {
    const todo = {
        id: getClass('listTodo').length,
        title: '',
        isDone: false
    }

    if (inputTodo.value.length > 0) {
        todo.title = inputTodo.value;
        todos.push(todo);
    }

    renderTodo();
    inputTodo.value = '';
    console.log(todos)
}

function doneTodo(li) {
    const indexList = todos.findIndex((list) => list.id == li);
    todos[indexList].isDone = true;
    // console.log(indexList)
}

function deleteTodo() {
    console.log(todos)
}



function renderTodo() {
    outputTodo.innerHTML = '';
    todos.forEach(inTodos => {
        outputTodo.innerHTML += `
        <li class="listTodo" data-id=${inTodos.id}>
            <p class="title_todo">${inTodos.title}</p> 
            <div class="action">
                <button class="done" onclick="doneTodo()">Done</button>
                <button class="delete" onclick="deleteTodo()">Delete</button>
            </div>
        </li> 
        `
    })

    outputTodo.addEventListener('click', (e) => {
        const doneId = e.target.getAttribute('data-id');
        doneTodo(doneId);

        for (elm of todos) {
            if (elm.isDone == true) {
                console.log($(`[data-id="${doneId}"]`));
            }
        }
    })
    
    

}

renderTodo()