import elementFactory from './elementFactory';

// const TakeCareProjectObject = () => {
//     this.addProperties = function objectProperties(obj, value) {
//         if (value !== '') {
//             obj[value] = [];
//         }

//         return obj;
//     };

// }

function objectProperties(obj, value) {
    if (value !== '') {
        obj[value] = [];
    }

    return obj;
}

function clearDuplicateProjects() {
    let allProjects = document.querySelectorAll('.projectsName');
    for (let i = 0; i < allProjects.length; i++) {
        allProjects[i].remove();
    }

}

export function addProjects() {

    let projectObj = {};
    const mainDiv = document.querySelector('.mainDiv');


    //Project div 
    const displayProjects = elementFactory('div', { class: 'displayProjects' });
    mainDiv.appendChild(displayProjects);

    // Add project button
    const addProject = elementFactory('button', { class: 'addProjectButton' }, '+');
    displayProjects.appendChild(addProject);

    // Text input to add projects
    const addProjectInput = elementFactory('input', { type: 'text', class: 'addProjectInput' });
    displayProjects.appendChild(addProjectInput);

    // Add project button event listener
    addProject.addEventListener('click', () => {
        let projectIndex = 0;

        // Clear every project DOM element previously created so it doesn't have duplicates on the page
        clearDuplicateProjects();

        objectProperties(projectObj, document.getElementsByClassName('addProjectInput')[0].value)
        document.getElementsByClassName('addProjectInput')[0].value = '';

        // create a div and display each project
        for (let keys in projectObj) {
            const projectName = elementFactory('div', { class: 'projectsName', id: projectIndex }, keys);
            displayProjects.appendChild(projectName);
            projectIndex++;
        }




    });

    return addProject, addProjectInput;
}





