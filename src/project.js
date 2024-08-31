import Todo from './todo.js'; // Import the Todo class

export default class Project {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._tasks = []; // Array to store Todo tasks
    }

    // Getters for project properties
    get getTitle() {
        return this._title;
    }

    get getDescription() {
        return this._description;
    }

    get getDueDate() {
        return this._dueDate;
    }

    get getPriority() {
        return this._priority;
    }

    get getTasks() {
        return this._tasks;
    }

    // Method to add a new task to the project
    addTask(task) {
        if (task instanceof Todo) {
            this._tasks.push(task);
        } else {
            console.error("Invalid task. Must be an instance of Todo.");
        }
    }

    // Method to display all project details including tasks
    displayDetails() {
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Due Date: ${this.dueDate}`);
        console.log(`Priority: ${this.priority}`);
        console.log(`Tasks:`);
        this._tasks.forEach(task => task.displayTask());
    }
}
