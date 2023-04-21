import elementFactory from "./elementFactory";
import { projectArray } from "./projects";
import { currentProject } from "./projects";
import removeDom from "./clearPage";
import formatTodosParagraphs from "./formatTodos";

export const todoArray = [];
const todosDiv = document.querySelector('.todosDiv');
const displayEveryTodo = document.querySelector('.displayTodos');
const changeFormDisplay = document.querySelector('.addTodo');
const form = document.querySelector('.new-project-form');
const overlay = document.querySelector('.overlay');

const todoFactory = (title, dueDate, priority) => {
    return { title, dueDate, priority }
}

function displayNewTodoForm() {
    changeFormDisplay.addEventListener('click', () => {
        overlay.classList.add('visible');
        form.classList.add('visible');
    });
}

// problems displaying 
function formData() {
    if (projectArray.length === 0) {
        alert('There\'s no projects');
        clearData();
    } else {
        let title = document.getElementById('title').value;
        let dueDate = document.getElementById('dueDate').value;
        if (dueDate == '') {
            dueDate = 'No date preview';
        }
        let priority = document.getElementById('priority').options[document.getElementById('priority').selectedIndex].text;
        todoArray[projectArray.indexOf(currentProject)].push(todoFactory(title, dueDate, priority));
        displayTodos(projectArray.indexOf(currentProject));
        clearData();
    }
}

function clearData() {
    document.getElementById('title').value = '';
    document.getElementById('dueDate').value = '';
}

export function displayTodos(index) {
    overlay.classList.remove('visible');
    form.classList.remove('visible');
    if (projectArray.length > 0) {
        removeDom('.displayTodo');
        for (let j = 0; j < todoArray[index].length; j++) {
            let indexParagraph = 0;
            const displayTodo = elementFactory('div', { class: 'displayTodo' }, undefined)
            for (let key in todoArray[index][j]) {
                displayTodo.appendChild(elementFactory('p', { class: `${key}Todo` }, `${key}: ${todoArray[index][j][key]}`));
            };
            displayEveryTodo.appendChild(displayTodo);
            displayTodo.appendChild(elementFactory('button', { class: 'removeTodo', indexParagraph }, 'x'));
            formatTodosParagraphs();
            indexParagraph++;
        };
    } else {
        return;
    }
};

export function todos() {
    displayNewTodoForm();

    const confirmForm = document.querySelector('.confirmButtonForm');
    confirmForm.addEventListener('click', (e) => {
        e.preventDefault();
        formData();
    });



    const cancelForm = document.querySelector('.cancelButtonForm');
    cancelForm.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('visible');
        form.classList.remove('visible');
    });
}









