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
    // Getter for title
    get title() {
        return this._title;
    }

    // Getter for description
    get description() {
        return this._description;
    }

    // Getter for dueDate
    get dueDate() {
        return this._dueDate;
    }

    // Getter for priority
    get priority() {
        return this._priority;
    }

    // Getter for tasks
    get todos() {
        return this._tasks;
    }

    // Method to add a new task to the project
    addTodo(todo) {
        if (todo instanceof Todo) {
            this._tasks.push(todo);
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

    toJson(){
        return {
            title: this._title,
            description: this._description,
            dueDate: this._dueDate.toISOString(),
            priority: this._priority,
            tasks: this._tasks.map(task => task.toJSON())
        }
    }

    static fromJSON(data) {
        const project = new Project(data.title, data.description, new Date(data.dueDate), data.priority);
        project._tasks = data.tasks.map(Todo.fromJSON); // Deserialize tasks
        return project;
    }
}
