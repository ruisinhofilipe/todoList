import elementFactory from "./elementFactory";
import { projectArray } from "./projects";
import { currentProject } from "./projects";
import removeDom from "./clearPage";
import formatTodosParagraphs from "./formatTodos";

export const todoArray = [];
const displayEveryTodo = document.querySelector(".displayTodos");
const changeFormDisplay = document.querySelector(".addTodo");
const form = document.querySelector(".new-project-form");
const overlay = document.querySelector(".overlay");

const todoFactory = (title, dueDate, priority) => {
  return { title, dueDate, priority };
};

function displayNewTodoForm() {
  changeFormDisplay.addEventListener("click", () => {
    overlay.classList.add("visible");
    form.classList.add("visible");
  });

  const confirmForm = document.querySelector(".confirmButtonForm");
  confirmForm.addEventListener("click", (e) => {
    e.preventDefault();
    formData();
    formatTodosParagraphs();
  });

  const cancelForm = document.querySelector(".cancelButtonForm");
  cancelForm.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.remove("visible");
    form.classList.remove("visible");
  });
}

function formData() {
  if (projectArray.length === 0) {
    document.querySelector(".noProjectsDiv").style.display = "block";
    clearData();
  } else {
    let title = document.getElementById("title").value;
    let dueDate = document.getElementById("dueDate").value;
    if (dueDate == "") {
      dueDate = "No date preview";
    }
    let priority =
      document.getElementById("priority").options[
        document.getElementById("priority").selectedIndex
      ].text;
    todoArray[projectArray.indexOf(currentProject)].push(
      todoFactory(title, dueDate, priority)
    );
    document.querySelector(".noProjectsDiv").style.display = "none";
    displayTodos(projectArray.indexOf(currentProject));
    clearData();
  }
}

export function displayTodos(index) {
  overlay.classList.remove("visible");
  form.classList.remove("visible");

  removeDom(".displayTodo");

  let indexParagraph = 0;
  if (projectArray.length > 0) {
    for (let j = 0; j < todoArray[index].length; j++) {
      const displayTodo = elementFactory(
        "div",
        { class: "displayTodo" },
        undefined
      );
      for (let key in todoArray[index][j]) {
        displayTodo.appendChild(
          elementFactory(
            "p",
            { class: `${key}Todo` },
            `${key}: ${todoArray[index][j][key]}`
          )
        );
      }
      const removeButton = elementFactory(
        "button",
        { class: "removeTodo", indexParagraph },
        "x"
      );
      displayTodo.appendChild(removeButton);
      displayEveryTodo.appendChild(displayTodo);
      indexParagraph++;

      removeButton.addEventListener("click", () => {
        todoArray[projectArray.indexOf(currentProject)].splice(
          removeButton.getAttribute("indexParagraph"),
          1
        );
        displayTodos(projectArray.indexOf(currentProject));
      });
    }
  }
}

function clearData() {
  document.getElementById("title").value = "";
  document.getElementById("dueDate").value = "";
}

export function todos() {
  displayNewTodoForm();
}
