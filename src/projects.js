import elementFactory from './elementFactory';

function printMe(obj, value) {
    if (value !== '') {
        obj[value] = [];
    }

    return obj;
}

export function addProjects() {

    let projectObj = {};
    const mainDiv = document.querySelector('.mainDiv');

    // Add project button
    const addProject = elementFactory('button', { class: 'addProjectButton' }, '+');
    mainDiv.appendChild(addProject);

    // Text input to add projects
    const addProjectInput = elementFactory('input', { type: 'text', class: 'addProjectInput' });
    mainDiv.appendChild(addProjectInput);

    // Add project button event listener
    addProject.addEventListener('click', () => {
        printMe(projectObj, document.getElementsByClassName('addProjectInput')[0].value)
        document.getElementsByClassName('addProjectInput')[0].value = '';
        console.log(projectObj)
    });

    return addProject, addProjectInput;
}





