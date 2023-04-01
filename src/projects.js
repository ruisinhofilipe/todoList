import elementFactory from './elementFactory';
import clearDuplicate from './dom';

export let projectObj = {};

function addProjectToObj(projectName) {
    if (projectName !== null) {
        projectObj[projectName] = [];
    }
    return projectObj;
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
        let projectIndex = 0;

        // Clear every project DOM element previously created so it doesn't have duplicates on the page
        clearDuplicate('.projectsName');

        // let projectName = document.getElementsByClassName('addProjectInput')[0].value
        addProjectToObj(document.getElementsByClassName('addProjectInput')[0].value);
        document.getElementsByClassName('addProjectInput')[0].value = '';
        console.log(projectObj);

        // create a div and display each project
        for (let keys in projectObj) {
            const projectName = elementFactory('div', { class: 'projectsName', id: projectIndex }, keys);
            displayProjects.appendChild(projectName);
            projectIndex++;
        }
    });

    return addProjects, addProjectInput;
}
