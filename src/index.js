import printMe from "./print";
import elementFactory from "./elementFactory";
import "./styles.css";



let todoArray = [];
let projectArray = [];


document.body.appendChild(mainDiv);

const mainDiv = elementFactory('div', { class: 'mainDiv' }, '',
    elementFactory('div', { class: 'mainDivLeftSide' }, ''),
    elementFactory('div', { class: 'mainDivRightSide' }, '')
);


const projectInput = document.createElement('input');
projectInput.setAttribute('type', 'text');
projectInput.setAttribute('class', 'projectNameClass');
mainDiv.appendChild(projectInput);

const button = document.createElement('button');
button.textContent = 'Add todo';
mainDiv.appendChild(button);


const button2 = document.createElement('button');
button2.textContent = 'show todos array';
mainDiv.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent = 'Add projects';
mainDiv.appendChild(button3);

const button4 = document.createElement('button');
button4.textContent = 'show projects array';
mainDiv.appendChild(button4);

button2.addEventListener('click', () => {
    console.log(todoArray);
});

button3.addEventListener('click', () => {
    printMe(projectArray, document.querySelector('.projectNameClass').value);
    if (document.querySelector('.projectNameClass').value !== '') {
        let projectsDisplay = document.createElement('div');
        projectsDisplay.setAttribute('class', 'projectsDisplay');
        projectsDisplay.textContent = projectArray[projectArray.length - 1];
        mainDiv.appendChild(projectsDisplay);

        document.querySelector('.projectNameClass').value = '';
    }
});

button4.addEventListener('click', () => {
    console.log(projectArray);
});

const projectDisplay = document.createElement('div');
projectDisplay.setAttribute('class', 'projectsDisplay');
projectDisplay.textContent = 'Todo List:';
mainDiv.appendChild(projectDisplay);


button.addEventListener('click', () => {

    printMe(todoArray, document.querySelector('.projectNameClass').value);
    if (document.querySelector('.projectNameClass').value !== '') {
        let smallDisplay = document.createElement('div');
        smallDisplay.setAttribute('class', 'smallDisplay');
        smallDisplay.textContent = todoArray[todoArray.length - 1];
        projectDisplay.appendChild(smallDisplay);

        document.querySelector('.projectNameClass').value = '';
    }

})










