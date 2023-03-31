const todoFactory = (title, description, dueDate, priority) => {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

// Projects be pushed into an array and then later for the todos I'd have to keep track of each project is active (maybe assign an id to each project added and then when adding a todo, get the id of the current project ?)