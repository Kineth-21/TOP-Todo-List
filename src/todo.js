export default class Todo {
    constructor(title, description){
        this._title = title;
        this._description = description;
        this._isCompleted = false;
    }

    get getTitle(){
        return this._title;
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
            title: this._title,
            description: this._description,
            isCompleted: this._isCompleted
        };
    }

    static fromJSON(data) {
        const todo = new Todo(data.title, data.description);
        todo._isCompleted = data.isCompleted;
        return todo;
    }
}