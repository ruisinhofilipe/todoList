import elementFactory from './elementFactory';
import clearDuplicate from './clearDuplicate';
import { todoArray } from './todoFactory';

export let projectArray = ['Standard'];
export let currentProjectIndex;

const mainDiv = document.querySelector('.mainDiv');

// function displayArrayProjects() {
//     projectArray.forEach(project => {
//         const displayProjects = document.querySelector('.displayProjects');
//     });
// }

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

    // Add project button event listener
    addProjectButton.addEventListener('click', () => {
        // Clear every project DOM element previously created so it doesn't have duplicates on the page
        clearDuplicate('.projectsNameDiv');
        // create an Array inside todo array everytime a project is created
        todoArray.push([]);

        // push project into array project
        pushProject(document.getElementsByClassName('addProjectInput')[0].value);
        document.getElementsByClassName('addProjectInput')[0].value = '';
        console.log(projectArray);

        // create a div and display each project
        for (let i = 0; i < projectArray.length; i++) {
            const projectNameDiv = elementFactory('div', { class: 'projectsNameDiv', index: i });
            const projectName = elementFactory('div', { class: 'projectsName' }, projectArray[i]);
            const projectNameRemoveButton = elementFactory('button', { class: 'projectsNameRemoveButton' }, 'x');

            projectNameRemoveButton.addEventListener('click', () => {
                let index = projectNameRemoveButton.parentNode.getAttribute('index');
                projectArray.splice(index, 1);
            });

            projectNameDiv.appendChild(projectName);
            projectNameDiv.appendChild(projectNameRemoveButton);
            displayProjects.appendChild(projectNameDiv);
        }

        updateCurrentProject();
    })

    // });
    // return projectDom, currentProjectIndex;
}
