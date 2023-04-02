import elementFactory from "./elementFactory";
import { projectArray } from "./projects";
import { currentProjectIndex } from "./projects";

let todoArray = [];

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
        // // If There are no projects, advise user to create one project before creating a todo. Feature not needed as I decided to hard code a project - 'Standard'  
        // console.log(currentProjectIndex);
        // if (projectArray.length === 0) {
        //     alert('Please, create a Project first.');
        // } else {
        // Create a Todo with the values submited by the user
        let newTodo = todoFactory(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('dueDate').value, document.getElementsByClassName('priority')[0].value);
        const todoName = elementFactory('div', { class: 'todosName' }, undefined,
            elementFactory('div', { class: 'todoTitle' }, newTodo.title),
            elementFactory('div', { class: 'todoDescription' }, newTodo.description),
            elementFactory('div', { class: 'todoDueDate' }, newTodo.dueDate),
            elementFactory('div', { class: 'todoPriority' }, newTodo.priority)
        );
        displayTodos.appendChild(todoName);
        // }
    });


}



