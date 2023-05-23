import { todoArray } from "./todos";

export default function formatTodosParagraphs() {
  if (todoArray.length >= 1) {
    // const title = document.querySelector(".titleTodo");
    // const date = document.querySelector(".dueDateTodo");
    // const priority = document.querySelector(".priorityTodo");

    // let titleText = title.textContent.replace(/title:/g, "");
    // title.textContent = titleText;
    // let dateText = date.textContent.replace(/dueDate:/g, "Deadline:");
    // date.textContent = dateText;
    // let priorityText = priority.textContent.replace(/priority:/g, "");
    // priority.textContent = priorityText;

    // if (priority.textContent === " Super important") {
    //   priority.style.color = "#84f542";
    //   priority.style.fontWeight = "900";
    // } else if (priority.textContent === " Important") {
    //   priority.style.color = "#e9f542";
    //   priority.style.fontWeight = "900";
    // } else {
    //   priority.style.color = "black";
    // }
    const titles = document.querySelectorAll(".titleTodo");
    const dates = document.querySelectorAll(".dueDateTodo");
    const priorities = document.querySelectorAll(".priorityTodo");

    titles.forEach((title) => {
      let titleText = title.textContent.replace(/title:/g, "");
      title.textContent = titleText;
    });
    dates.forEach((date) => {
      let dateText = date.textContent.replace(/dueDate:/g, "Deadline:");
      date.textContent = dateText;
    });
    priorities.forEach((priority) => {
      let priorityText = priority.textContent.replace(/priority:/g, "");
      priority.textContent = priorityText;
      if (priority.textContent === " Super important") {
        priority.style.color = "#f5b507";
        priority.style.fontWeight = "900";
      } else if (priority.textContent === " Important") {
        priority.style.color = "#e9f542";
        priority.style.fontWeight = "900";
      } else {
        priority.style.color = "#84f542";
      }
    });
  }
}
