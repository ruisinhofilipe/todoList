import "./styles.css";
import { todoButton } from './todoFactory'
import { addProjects } from "./projects";

todoButton();
addProjects();


// const newTodoButton = document.querySelector('#newTodoButton');
// newTodoButton.addEventListener('click', () => {
//     // if(document.getElementById('title').value === '' || document.getElementById('dueDate').value)
//     // let newTodo = todoFactory(document.getElementById('title').value, document.getElementById('dueDate').value, document.getElementById('description').value, document.getElementsByClassName('priority')[0].value);
//     // console.log(newTodo);
//     console.log('arroz')
// })













// function addTodo() {
//     // Add todo button
//     const addToddo = elementFactory('button', { class: 'addTodoButton' }, '+');
//     document.body.appendChild(addToddo);

//     // Text input to add todo
//     const addTodoInput = elementFactory('input', { type: 'text', class: 'addTodoInput' });
//     document.body.appendChild(addTodoInput);

//     // Button even listener
//     addToddo.addEventListener('click', () => {
//         let todo = document.getElementsByClassName('addTodoInput')[0].value;
//         projectObj['default'].push(todo);
//         console.log(projectObj);
//         document.getElementsByClassName('addTodoInput')[0].value = '';
//     });
// }

// function addProjects() {
//     // Add project button
//     const addProject = elementFactory('button', { class: 'addProjectButton' }, '+');
//     document.body.appendChild(addProject);

//     // Text input to add projects
//     const addProjectInput = elementFactory('input', { type: 'text', class: 'addProjectInput' });
//     document.body.appendChild(addProjectInput);

//     // Add project button event listener
//     addProject.addEventListener('click', () => {
//         printMe(projectObj, document.getElementsByClassName('addProjectInput')[0].value)
//         document.getElementsByClassName('addProjectInput')[0].value = '';
//         for (let key in projectObj) {
//             console.log(key);
//         }
//     });
// }

// addProjects();
// addTodo();



// document.body.appendChild(
//     elementFactory('div', { class: 'mainDiv' }, '',
//         elementFactory('div', { class: 'mainDivLeftSide' }, '',
//             elementFactory('div', { class: 'projects' }, 'List of projects:',
//                 elementFactory('div', { class: 'projectsList' }, 'Default')),
//             elementFactory('button', { class: 'addProject' }, 'Add projects'),
//             elementFactory('button', { class: 'showProjects' }, 'Show projects array(console)')
//         ),
//         elementFactory('div', { class: 'mainDivRightSide' }, '',
//             elementFactory('div', { class: 'todos' }, 'List of todos:',
//                 elementFactory('div', { class: 'todosList' }, 'Default1'),
//                 elementFactory('div', { class: 'todosList' }, 'Default2'),
//                 elementFactory('div', { class: 'todosList' }, 'Default3'),
//                 elementFactory('div', { class: 'todosList' }, 'Default4')),
//             elementFactory('button', { class: 'addTodo' }, 'Add todo'),
//             elementFactory('button', { class: 'showTodos' }, 'Show todos array(console)'))),
// );
// const input = elementFactory('input', { class: 'projectNameClass', type: 'text' });
// document.body.appendChild(input);


// const button = document.querySelector('.addTodo');
// const button2 = document.querySelector('.showTodos');
// const button3 = document.querySelector('.addProject');
// const button4 = document.querySelector('.showProjects');
// const todoDisplay = document.querySelector('.todos');
// const projectDisplay = document.querySelector('.projects');


// button.addEventListener('click', () => {
//     printMe(todoArray, document.querySelector('.projectNameClass').value);
//     if (document.querySelector('.projectNameClass').value !== '') {
//         let todo = elementFactory('div', { class: 'todosList' }, todoArray[todoArray.length - 1])
//         todoDisplay.appendChild(todo);
//         document.querySelector('.projectNameClass').value = '';
//     }
//     todosIndexCare();
// });

// button2.addEventListener('click', () => {
//     console.log(todoArray);
// });

// button3.addEventListener('click', () => {
//     printMe(projectArray, document.querySelector('.projectNameClass').value);
//     if (document.querySelector('.projectNameClass').value !== '') {
//         let project = elementFactory('div', { class: 'projectsList' }, projectArray[projectArray.length - 1])
//         projectDisplay.appendChild(project);

//         document.querySelector('.projectNameClass').value = '';
//     }
// });

// button4.addEventListener('click', () => {
//     console.log(projectArray);
// });

// function todosIndexCare() {
//     const allTodos = document.querySelectorAll('.todosList');
//     let todosIndex = 0;
//     allTodos.forEach(todo => {
//         todo.setAttribute('data-key', todosIndex);
//         todo.addEventListener('click', () => {
//             console.log(todo.getAttribute('data-key'));
//         })
//         todosIndex++;
//     });
// }



















