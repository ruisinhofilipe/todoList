import printMe from "./print";
import "./styles.css";


let projectNames = [];
const mainDiv = document.createElement('div');
mainDiv.setAttribute('class', 'mainDiv');
document.body.appendChild(mainDiv);

const projectInput = document.createElement('input');
projectInput.setAttribute('type', 'text');
projectInput.setAttribute('class', 'projectNameClass');
mainDiv.appendChild(projectInput);

const button = document.createElement('button');
button.textContent = 'Add project';
mainDiv.appendChild(button);


const button2 = document.createElement('button');
button2.textContent = 'show project array';
mainDiv.appendChild(button2);

button2.addEventListener('click', () => {
    console.log(projectNames);
});

const projectDisplay = document.createElement('div');
projectDisplay.setAttribute('class', 'projectsDisplay');
projectDisplay.textContent = 'Project';
mainDiv.appendChild(projectDisplay);


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










