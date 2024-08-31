export default class Todo {
    constructor(task, description){
        this._task = task;
        this._description = description;
        this._isCompleted = false;
    }

    get getTask(){
        return this._task;
    }

    get getDescription(){
        return this._description;
    }
    
    get getIsCompleted(){
        return this._isCompleted;
    }

    changeIsCompleted(){
        this._isCompleted = !this._isCompleted;
    }

    toJSON() {
        return {
            task: this._task,
            description: this._description,
            isCompleted: this._isCompleted
        };
    }

    static fromJSON(data) {
        const todo = new Todo(data.task, data.description);
        todo._isCompleted = data.isCompleted;
        return todo;
    }
}