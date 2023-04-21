export default function formatTodosParagraphs() {
    const title = document.querySelector('.titleTodo');
    const date = document.querySelector('.dueDateTodo');
    const priority = document.querySelector('.priorityTodo');

    let titleText = title.textContent.replace(/title:/g, "");
    title.textContent = titleText;
    let dateText = date.textContent.replace(/dueDate:/g, "Until:")
    date.textContent = dateText;
    let priorityText = priority.textContent.replace(/priority:/g, "Priority:");
    priority.textContent = priorityText;

}