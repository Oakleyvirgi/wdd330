export default class TODOItem {
    constructor(){
        this._id = null;
        this._item = null;
    }

    getId() {
        return this._id;
    }

    setId() {
        this._id = id;
    }

    getItem() {
        return this._item;
    }

    setItem(item) {
        this._item = item;
    }
        
}