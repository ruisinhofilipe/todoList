import elementFactory from './elementFactory';
import clearDuplicate from './clearDuplicate';
import { todoArray } from './todoFactory';
import { displayTodos } from './todoFactory';
import removeDom from './clearPage';


export let projectArray = [];
export let currentProjectIndex;

const projectsDiv = document.querySelector('.projectsDiv');


// change the current index to store not a number but the project name and then use indexOf whenever I want to acess the project's index. This makes it easier to remove other projects and keep the current project as the current project still



// Push project to array
function pushProject(projectName) {
    if (projectName !== null && !projectArray.includes(projectName) && projectName !== '' && projectName !== ' ') {
        projectArray.push(projectName);
        todoArray.push([]);
    } else {
        alert('Please, introduce a valid project name or you that you haven\'t introduced yet.');
    }
    return projectArray;
}

function styleProject() {
    let projects = document.querySelectorAll('.projectsNameDiv');
    projects.forEach(project => {
        if (currentProjectIndex == project.getAttribute('index')) {
            project.classList.add('clicked');
        } else {
            project.classList.remove('clicked');
        }
    });
}

function displayArrayProjects() {
    clearDuplicate('.projectsNameDiv');
    projectArray.forEach(project => {
        let index = projectArray.indexOf(project);
        const displayProjects = document.querySelector('.displayProjects');
        const projectNameDiv = elementFactory('div', { class: 'projectsNameDiv', index });
        const projectName = elementFactory('div', { class: 'projectsName' }, project);
        const removeProject = elementFactory('button', { class: 'removeProject' }, 'x');
        projectNameDiv.appendChild(projectName);
        projectNameDiv.appendChild(removeProject);
        displayProjects.appendChild(projectNameDiv);


        projectNameDiv.addEventListener('click', () => {
            currentProjectIndex = projectNameDiv.getAttribute('index');
            document.querySelector('.currentPrj').textContent = projectArray[currentProjectIndex];
            displayTodos(currentProjectIndex);
            displayArrayProjects();
            styleProject()
        });

        // Remove projects
        removeProject.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            let index = removeProject.parentNode.getAttribute('index');
            projectArray.splice(index, 1);
            todoArray.splice(index, 1);
            if (projectArray.length >= 1) {
                currentProjectIndex = 0;
                document.querySelector('.currentPrj').textContent = projectArray[currentProjectIndex];
                // todos();
                displayArrayProjects();
                displayTodos(currentProjectIndex);
            } else {
                currentProjectIndex = '';
                document.querySelector('.currentPrj').textContent = 'You have no active projects.';
                displayArrayProjects();
                removeDom('.displayTodo');
            }
        });
    });
}


export function projectDom() {
    //Add project div 
    const addPrj = elementFactory('div', { class: 'addPrj' }, undefined,
        elementFactory('input', { type: 'text', class: 'addProjectInput', placeholder: 'Your new project' }),
        elementFactory('button', { class: 'addProjectButton' }, 'Create project')
    );
    projectsDiv.appendChild(addPrj);

    const currentPrj = elementFactory('div', { class: 'currentPrj' }, projectArray[currentProjectIndex]);
    projectsDiv.appendChild(currentPrj);
    //Projects display
    const displayProjects = elementFactory('div', { class: 'displayProjects' });
    projectsDiv.appendChild(displayProjects);

    displayArrayProjects();

    // Add project button event listener
    const addProjectButton = document.querySelector('.addProjectButton');
    addProjectButton.addEventListener('click', () => {
        // push project into array project
        pushProject(document.getElementsByClassName('addProjectInput')[0].value);
        document.getElementsByClassName('addProjectInput')[0].value = '';
        displayArrayProjects();
    });
}
