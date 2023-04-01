const todoFactory = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

export function todoButton() {
    const newTodoButton = document.querySelector('#newTodoButton');
    newTodoButton.addEventListener('click', () => {
        let newTodo = todoFactory(document.getElementById('title').value, document.getElementById('dueDate').value, document.getElementById('description').value, document.getElementsByClassName('priority')[0].value);
        console.log(newTodo);

    })
}



