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
}