import elementFactory from "./elementFactory";
import { projectArray } from "./projects";
import { currentProjectIndex } from "./projects";
import removeDom from "./clearPage";

export let todoArray = [];
const todosDiv = document.querySelector('.todosDiv');
const newTodoButton = document.querySelector('#newTodoButton');
const displayEveryTodo = document.querySelector('.displayTodos');
const changeFormDisplay = document.querySelector('.addTodo');
const form = document.querySelector('.new-project-form');
const overlay = document.querySelector('.overlay');

const todoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

function formData() {
    changeFormDisplay.addEventListener('click', () => {
        overlay.classList.add('visible');
        form.classList.add('visible');

        // if (projectArray.length === 0) {
        //     alert('There\'s no projects');
        // } else {
        //     let title = document.getElementById('title').value;
        //     let description = document.getElementById('description').value;
        //     let dueDate = document.getElementById('dueDate').value;
        //     if (dueDate == '') {
        //         dueDate = 'No date preview';
        //     }
        //     let priority = document.getElementsByClassName('priority')[0].value;
        //     todoArray[currentProjectIndex].push(todoFactory(title, description, dueDate, priority));
        //     displayTodos(currentProjectIndex);
        //     clearData();
        // }

    });
}

function clearData() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementsByClassName('priority')[0].value;
}

export function displayTodos(index) {
    if (projectArray.length > 0) {
        removeDom('.displayTodo');
        for (let j = 0; j < todoArray[index].length; j++) {
            const displayTodo = elementFactory('div', { class: 'displayTodo' }, undefined)
            for (let key in todoArray[index][j]) {
                displayTodo.appendChild(elementFactory('p', { class: `${key}Todo` }, `${key}: ${todoArray[index][j][key]}`));
                displayEveryTodo.appendChild(displayTodo);
                todosDiv.appendChild(displayEveryTodo);
            };
        };
    } else {
        return;
    }
};

export function todos() {
    formData();
}









