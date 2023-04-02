import elementFactory from './elementFactory';
import clearDuplicate from './dom';

export let projectArray = [];

function pushProject(projectName) {
    if (projectName !== null && !projectArray.includes(projectName)) {
        projectArray.push(projectName);
    } else {
        alert('Please, introduce a valid project name or one that you haven\'t introduced before.');
    }
    return projectArray;
}

export function addProjects() {

    const mainDiv = document.querySelector('.mainDiv');

    //Projects div
    const projects = elementFactory('div', { class: 'projectsDiv' });
    mainDiv.appendChild(projects);

    // Add project button
    const addProject = elementFactory('button', { class: 'addProjectButton' }, '+');
    projects.appendChild(addProject);

    // Text input to add projects
    const addProjectInput = elementFactory('input', { type: 'text', class: 'addProjectInput' });
    projects.appendChild(addProjectInput);

    //Projects display
    const displayProjects = elementFactory('div', { class: 'displayProjects' });
    projects.appendChild(displayProjects);

    // Add project button event listener
    addProject.addEventListener('click', () => {
        // let projectIndex = 0;

        // Clear every project DOM element previously created so it doesn't have duplicates on the page
        clearDuplicate('.projectsName');

        // let projectName = document.getElementsByClassName('addProjectInput')[0].value
        pushProject(document.getElementsByClassName('addProjectInput')[0].value);
        document.getElementsByClassName('addProjectInput')[0].value = '';
        console.log(projectArray);

        // create a div and display each project
        for (let i = 0; i < projectArray.length; i++) {
            const projectName = elementFactory('div', { class: 'projectsName' }, projectArray[i]);   // , id: projectIndex 
            displayProjects.appendChild(projectName);
            // projectIndex++;
        }
    });

    return addProjects, addProjectInput;
}
