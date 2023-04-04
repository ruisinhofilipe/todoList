import elementFactory from './elementFactory';
import clearDuplicate from './clearDuplicate';
import { todoArray } from './todoFactory';
import { todos } from './todoFactory';


export let projectArray = ['Standard'];
export let currentProjectIndex = 0;

const projectsDiv = document.querySelector('.projectsDiv');

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
            console.log(todoArray[currentProjectIndex]);
            displayArrayProjects();
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
                todos();
            } else {
                document.querySelector('.currentPrj').textContent = 'You have no active projects.';
            }
            displayArrayProjects();
        });
    });
}

// Push project to array
function pushProject(projectName) {
    if (projectName !== null && !projectArray.includes(projectName) && projectName !== '' && projectName !== ' ') {
        projectArray.push(projectName);
        todoArray.push([]);
    } else {
        alert('Please, introduce a valid project name.');
    }
    return projectArray;
}


export function projectDom() {
    // console.log(todoArray)
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
