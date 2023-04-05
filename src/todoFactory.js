import elementFactory from "./elementFactory";
import { projectArray } from "./projects";
import { currentProjectIndex } from "./projects";
import removeDom from "./clearPage";

export let todoArray = [[{ name: 'Rui', age: 23, gf: 'Catia' }, { name: 'Catia', age: 24, gf: 'Rui' }], [{ name: 'Susana', age: 57, gf: 'Rui Pai' }, { name: 'Rui', age: 23, gf: 'Catia' }]];
const todosDiv = document.querySelector('.todosDiv');
const newTodoButton = document.querySelector('#newTodoButton');

const todoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

export function todos() {
    newTodoButton.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let dueDate = document.getElementById('dueDate').value;
        if (dueDate == '') {
            dueDate = 'No date preview';
        }
        let priority = document.getElementsByClassName('priority')[0].value;
        if ((title === '' || title === ' ')) {
            alert('Please introduce a valid title.');
        } else {
            todoArray[currentProjectIndex].push(todoFactory(title, description, dueDate, priority));
        };
        displayTodos(currentProjectIndex);
    });
}

export function displayTodos(index) {
    removeDom('.displayTodos');
    for (let j = 0; j < todoArray[index].length; j++) {
        const displayTodos = elementFactory('div', { class: 'displayTodos' }, undefined)
        for (let key in todoArray[index][j]) {
            displayTodos.appendChild(elementFactory('p', { class: `${key}Todo` }, todoArray[index][j][key]));
            todosDiv.appendChild(displayTodos);
        };
    };
};









