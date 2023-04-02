import elementFactory from "./elementFactory";
import { projectArray } from "./projects";
import { currentProjectIndex } from "./projects";

export let todoArray = [[]];

const todoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

//Todos div
const todos = document.querySelector('.todosDiv');

//Todos display
const displayTodos = elementFactory('div', { class: 'displayTodos' });
todos.appendChild(displayTodos);

export function todoButton() {
    //Create an add todo button
    const newTodoButton = document.querySelector('#newTodoButton');
    newTodoButton.addEventListener('click', () => {
        // Create a Todo with the values submited by the user
        let newTodo = todoFactory(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('dueDate').value, document.getElementsByClassName('priority')[0].value);
        const todoName = elementFactory('div', { class: 'todosName' }, undefined,
            elementFactory('div', { class: 'todoTitle' }, newTodo.title),
            elementFactory('div', { class: 'todoDescription' }, newTodo.description),
            elementFactory('div', { class: 'todoDueDate' }, newTodo.dueDate),
            elementFactory('div', { class: 'todoPriority' }, newTodo.priority)
        );
        displayTodos.appendChild(todoName);
        todoArray[currentProjectIndex].push(newTodo.title);
        console.log(todoArray);
        // }
    });


}



