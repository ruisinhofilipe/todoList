import elementFactory from "./elementFactory";
import { projectArray } from "./projects";
import { currentProjectIndex } from "./projects";

export let todoArray = [[]];
let index = 0;

const todoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

function standardToto() {
    // Create a standard todo 
    const todo = todoFactory('Eat', 'eat 3/4 times a day', 'everyday', 'high');
    const standardTodo = elementFactory('div', { class: 'todosName' }, undefined,
        elementFactory('div', { class: 'todoTitle' }, todo.title),
        elementFactory('div', { class: 'todoDescription' }, todo.description),
        elementFactory('div', { class: 'todoDueDate' }, todo.dueDate),
        elementFactory('div', { class: 'todoPriority' }, todo.priority),
        elementFactory('button', { class: 'removeTodo', index: index }, 'x')
    );
    displayTodos.appendChild(standardTodo);
    index++;
}

// function removeTodo() {
//     const todo = document.querySelectorAll('.removeTodo');
//     todo.forEach(element => {
//         element.addEventListener('click', () => {
//             console.log(element.id);
//         })
//     });
// }

export function todoButton() {

    // standardToto();
    //Create an add todo button
    const newTodoButton = document.querySelector('#newTodoButton');

    newTodoButton.addEventListener('click', () => {
        // Create a Todo with the values submited by the user
        let newTodo = todoFactory(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('dueDate').value, document.getElementsByClassName('priority')[0].value);
        const todoName = elementFactory('div', { class: 'todosName' }, undefined,
            elementFactory('div', { class: 'todoTitle' }, newTodo.title),
            elementFactory('div', { class: 'todoDescription' }, newTodo.description),
            elementFactory('div', { class: 'todoDueDate' }, newTodo.dueDate),
            elementFactory('div', { class: 'todoPriority' }, newTodo.priority),
            elementFactory('button', { class: 'removeTodo', index: index }, 'x')
        );
        displayTodos.appendChild(todoName);
        todoArray[currentProjectIndex].push(newTodo.title);
        console.log(todoArray);
        index++;
    });
    // removeTodo()
}

//Todos div
const todos = document.querySelector('.todosDiv');

//Todos display
const displayTodos = elementFactory('div', { class: 'displayTodos' });
todos.appendChild(displayTodos);







