import elementFactory from "./elementFactory";
import { projectArray } from "./projects";
import { currentProjectIndex } from "./projects";

export let todoArray = [[]];
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
        displayTodos(title, description, dueDate, priority);
    });
    console.log(todoArray[currentProjectIndex]);
}


function displayTodos(name, des, date, prio) {
    const displayTodos = elementFactory('div', { class: 'displayTodos' }, undefined,
        elementFactory('p', { class: 'titleTodo' }, name),
        elementFactory('p', { class: 'descriptionTodo' }, des),
        elementFactory('p', { class: 'dateTodo' }, date),
        elementFactory('p', { class: 'priorityTodo' }, prio)

    );
    todosDiv.appendChild(displayTodos);
};








