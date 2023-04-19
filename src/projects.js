import elementFactory from './elementFactory';
import clearDuplicate from './clearDuplicate';
import { todoArray } from './todos';
import { displayTodos } from './todos';

export let projectArray = [];
export let currentProject;

const projectClass = document.querySelector('.addProject-popup');
const overlay = document.querySelector('.overlay');
// Push project to array
function pushProject(projectName) {
    if (projectName !== null && !projectArray.includes(projectName) && projectName !== '' && projectName !== ' ') {
        projectArray.push(projectName);
        todoArray.push([]);
        document.getElementById('titleProject').value = '';
        projectClass.classList.remove('visible');
        overlay.classList.remove('visible');
        displayArrayProjects();
    } else {
        alert('Please, introduce a valid project name or you that you haven\'t introduced yet.');
    }
    return projectArray;
}

// Style each project when clicked
function styleProject() {
    let projects = document.querySelectorAll('.projectsNameDiv');
    projects.forEach(project => {
        if (projectArray.indexOf(currentProject) == project.getAttribute('index')) {
            project.classList.add('clicked');
        } else {
            project.classList.remove('clicked');
        }
    });
}

function displayArrayProjects() {
    // Change project input display property
    const addProject = document.querySelector('.addPrj');
    addProject.addEventListener('click', () => {
        const projectClass = document.querySelector('.addProject-popup');
        projectClass.classList.add('visible');
        overlay.classList.add('visible');
    });

    clearDuplicate('.projectsNameDiv');
    projectArray.forEach(project => {
        let index = projectArray.indexOf(project);
        const projectNameDiv = elementFactory('div', { class: 'projectsNameDiv', index });
        const projectName = elementFactory('div', { class: 'projectsName' }, project);
        const removeProject = elementFactory('button', { class: 'removeProject' }, 'x');
        projectNameDiv.appendChild(projectName);
        projectNameDiv.appendChild(removeProject);
        document.querySelector('.displayProjects').appendChild(projectNameDiv);


        projectNameDiv.addEventListener('click', () => {
            currentProject = projectNameDiv.querySelector('.projectsName').textContent;
            displayTodos(projectArray.indexOf(currentProject));
            displayArrayProjects();
            styleProject();
        });

        // // Remove projects
        // removeProject.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     let index = removeProject.parentNode.getAttribute('index');
        //     projectArray.splice(index, 1);
        //     todoArray.splice(index, 1);
        //     if (projectArray.length >= 1) {
        //         currentProjectIndex = 0;
        //         displayArrayProjects();
        //         displayTodos(currentProjectIndex);
        //         styleProject();
        //     } else {
        //         currentProjectIndex = '';
        //         displayArrayProjects();
        //         removeDom('.displayTodo');
        //     }
        // });
    });
}

export function projectDom() {
    displayArrayProjects();

    // Confirm new project name button
    const confirmButton = document.querySelector('.confirmButton');
    confirmButton.addEventListener('click', () => {
        const inputValue = document.getElementById('titleProject').value;
        pushProject(inputValue);
        console.log(projectArray);
        // styleProject();
    });

    // Cancel new project name button
    const cancelButton = document.querySelector('.cancelButton');
    cancelButton.addEventListener('click', () => {
        const projectClass = document.querySelector('.addProject-popup');
        projectClass.classList.remove('visible');
        overlay.classList.remove('visible');
    });
}