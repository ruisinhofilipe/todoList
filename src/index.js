import printMe from "./print";
import elementFactory from "./elementFactory";
import "./styles.css";

let todoArray = [];
let projectArray = [];


const mainDiv = elementFactory('div', { class: 'mainDiv' }, '',
    elementFactory('div', { class: 'mainDivLeftSide' }, '',
        elementFactory('div', { class: 'projects' }, 'List of projects:'),
        elementFactory('button', { class: 'addProject' }, 'Add projects'),
        elementFactory('button', { class: 'showProjects' }, 'Show projects array(console)')
    ),
    elementFactory('div', { class: 'mainDivRightSide' }, '',
        elementFactory('div', { class: 'todos' }, 'List of todos:'),
        elementFactory('button', { class: 'addTodo' }, 'Add todo'),
        elementFactory('button', { class: 'showTodos' }, 'Show todos array(console)')
    ));

// elementFactory('input', { class: 'projectNameClass', type: 'text' });
document.body.appendChild(mainDiv);
document.body.appendChild(elementFactory('input', { class: 'projectNameClass', type: 'text' }));


const button = document.querySelector('.addTodo');
const button2 = document.querySelector('.showTodos');
const button3 = document.querySelector('.addProject');
const button4 = document.querySelector('.showProjects');
const todoDisplay = document.querySelector('.todos');
const projectDisplay = document.querySelector('.projects');


button.addEventListener('click', () => {

    printMe(todoArray, document.querySelector('.projectNameClass').value);
    if (document.querySelector('.projectNameClass').value !== '') {
        let todo = elementFactory('div', { class: 'todoList' }, todoArray[todoArray.length - 1])
        todoDisplay.appendChild(todo);
        document.querySelector('.projectNameClass').value = '';
    }

});

button2.addEventListener('click', () => {
    console.log(todoArray);
});

button3.addEventListener('click', () => {
    printMe(projectArray, document.querySelector('.projectNameClass').value);
    if (document.querySelector('.projectNameClass').value !== '') {
        let project = elementFactory('div', { class: 'projectsList' }, projectArray[projectArray.length - 1])
        projectDisplay.appendChild(project);

        document.querySelector('.projectNameClass').value = '';
    }
});

button4.addEventListener('click', () => {
    console.log(projectArray);
});
















