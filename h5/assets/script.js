const getId = (id) => document.getElementById(id);
const getClass = (className) => document.getElementsByClassName(className);
const inputTodo = getId('nameTodo');
const outputTodo = getId('outputTodo');

const methodTodo = {
    todos: outputTodo.children,
    delete: function() {
        for (elm of this.todos) {
            console.log(elm)
        }
    }
}

const btnAdd = getId('btnAddTodo');
btnAdd.onclick = () => {
    if (inputTodo.value.length > 1) {
        outputTodo.innerHTML += `
        <li class="listTodo">
            <p>${inputTodo.value}</p> 
            <div class="action">
                <button class="done" onclick="doneTodo()">Done</button>
                <button class="delete deleteTodo" onclick="deleteTodo()">Delete</button>
            </div>
        </li>
        `
    }

    
}

function returnListTodo(className, content) {
    return `
    <li class="${className}">
        <p>${content}</p> 
        <div class="action">
            <button class="done" onclick="doneTodo()">Done</button>
            <button class="delete deleteTodo">Delete</button>
        </div>
    </li>
    `;
}

function deleteTodo() {
    for (let i = 0; i < getClass('deleteTodo').length; i++) {
        getClass('deleteTodo')[i].addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove()
        })
    }
}

function doneTodo() {
    for (let i = 0; i < getClass('doneTodo').length; i++) {
        getClass('doneTodo')[i].addEventListener('click', (e) => {
            console.log(e.target.parentNode.parentNode)
        })
    }
}

