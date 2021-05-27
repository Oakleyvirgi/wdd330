export default class ToDoList {
    constructor() {
        this._list =[];
    }

    getList() {
        return this._list;
    }

    clearList() {
        this._list = [];
    }

    addItemToList(itemObj) {
        this._list.push(itemObj);
    }

    removeItemFromList(id) {
        //const list = this._list;
        for (let i = 0; i < this._list.length; i++) {
            if (this._list[i]._id == id) {
                this._list.splice(i, 1);
                break;
            }
        }
    }

    checkToDo (itemId) {
        for (let i = 0; i < this._list.length; i++) {
            if (this._list[i]._id == itemId) {
                this._list[i].setCheck(!this._list[i].getCheck()) ;
                break;
            }
        }
    }
}