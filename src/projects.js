import elementFactory from './elementFactory';
import clearDuplicate from './clearDuplicate';
import { todoArray } from './todoFactory';

export let projectArray = ['Standard', 'Study', 'Gym'];
export let currentProjectIndex;

const mainDiv = document.querySelector('.mainDiv');

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

        removeProject.addEventListener('click', () => {
            let index = removeProject.parentNode.getAttribute('index');
            projectArray.splice(index, 1);
            displayArrayProjects();
            console.log(projectArray);
        });
    });
    // Remove project

}

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
            console.log(currentProjectIndex);
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

    displayArrayProjects();

    // Add project button event listener
    addProjectButton.addEventListener('click', () => {
        // create an Array inside todo array everytime a project is created
        todoArray.push([]);

        // push project into array project
        pushProject(document.getElementsByClassName('addProjectInput')[0].value);
        document.getElementsByClassName('addProjectInput')[0].value = '';
        console.log(projectArray);

        displayArrayProjects();
        updateCurrentProject();
    })

    // });
    // return projectDom, currentProjectIndex;
}
