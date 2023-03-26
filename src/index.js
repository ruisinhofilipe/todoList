import printMe from "./print";

let projectNames = [];
const projectInput = document.createElement('input');
projectInput.setAttribute('type', 'text');
projectInput.setAttribute('class', 'projectNameClass');
document.body.appendChild(projectInput);

const button = document.createElement('button');
button.textContent = 'Add project';
document.body.appendChild(button);

const button2 = document.createElement('button');
button2.textContent = 'show project array';
document.body.appendChild(button2);

button2.addEventListener('click', () => {
    console.log(projectNames);
});

const projectDisplay = document.createElement('div');
projectDisplay.setAttribute('class', 'projectsDisplay');
projectDisplay.textContent = 'Project';
document.body.appendChild(projectDisplay);


button.addEventListener('click', () => {
    printMe(projectNames, document.querySelector('.projectNameClass').value);
    if (document.querySelector('.projectNameClass').value !== '') {
        let smallDisplay = document.createElement('div');
        smallDisplay.setAttribute('class', 'smallDisplay');
        smallDisplay.textContent = projectNames[projectNames.length - 1];
        projectDisplay.appendChild(smallDisplay);

        document.querySelector('.projectNameClass').value = '';
    }

})








