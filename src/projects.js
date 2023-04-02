import elementFactory from './elementFactory';
import clearDuplicate from './clearDuplicate';
import { todoArray } from './todoFactory';

export let projectArray = ['Standard'];
export let currentProjectIndex = 0;

const mainDiv = document.querySelector('.mainDiv');

// Push project to array
function pushProject(projectName) {
    if (projectName !== null && !projectArray.includes(projectName) && projectName !== '' && projectName !== ' ') {
        projectArray.push(projectName);
    } else {
        alert('Please, introduce a valid project name or one that you haven\'t introduced before.');
    }
    return projectArray;
}

// update the current project according to user click
function updateCurrentProject() {
    const everyProject = document.querySelectorAll('.projectsName');
    everyProject.forEach(project => {
        project.addEventListener('click', () => {
            currentProjectIndex = projectArray.indexOf(project.textContent);
            console.log(currentProjectIndex)
        });
    });
    return currentProjectIndex;
};

export function projectDom() {
    //Projects div
    const projectsDiv = elementFactory('div', { class: 'projectsDiv' });
    mainDiv.appendChild(projectsDiv);

    // Add project button
    const addProjectButton = elementFactory('button', { class: 'addProjectButton' }, '+');
    projectsDiv.appendChild(addProjectButton);

    // Text input to add projects
    const projectInput = elementFactory('input', { type: 'text', class: 'addProjectInput' });
    projectsDiv.appendChild(projectInput);

    //Projects display
    const displayProjects = elementFactory('div', { class: 'displayProjects' });
    projectsDiv.appendChild(displayProjects);

    //Print first project that I defined myself
    if (!document.querySelector('.projectsName')) {
        // create a div and display the first project
        for (let i = 0; i < projectArray.length; i++) {
            const projectName = elementFactory('div', { class: 'projectsName' }, projectArray[i]);
            displayProjects.appendChild(projectName);
            currentProjectIndex = projectArray.indexOf(projectArray[0]);
        }
    }
    // Add project button event listener
    addProjectButton.addEventListener('click', () => {

        // create an Array inside todo array everytime a project is created
        todoArray.push([]);

        // Clear every project DOM element previously created so it doesn't have duplicates on the page
        clearDuplicate('.projectsName');

        // push project into array project
        pushProject(document.getElementsByClassName('addProjectInput')[0].value);
        document.getElementsByClassName('addProjectInput')[0].value = '';
        console.log(projectArray);

        // create a div and display each project
        for (let i = 0; i < projectArray.length; i++) {
            const projectName = elementFactory('div', { class: 'projectsName' }, projectArray[i]);
            displayProjects.appendChild(projectName);
        }
        updateCurrentProject();
    });
    return projectDom, currentProjectIndex;
}
