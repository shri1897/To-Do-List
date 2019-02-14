import { View } from './View.js'

class TodoActionBar extends View {

    constructor() {
        super();
    }

    init(listOfItemObjects, addItem, onItemChange) {

        const textBox = document.getElementById("text-box"),
            buttonAdd = document.getElementById("btn-add"),
            buttonSelectAll = document.getElementById("btn-select-all"),
            buttonDeleteSelected = document.getElementById("btn-delete-selected"),
            buttonDeleteCompleted = document.getElementById("btn-delete-completed");

        textBox.onkeypress = (event) => {
            if (event.keyCode === 13) { //Add item If enter key pressed
                let textValue = textBox.value;
                textBox.value = '';
                if(textValue){
                    addItem(textValue);
                }
            }
        };

        buttonAdd.onclick = (event) => {
            let textValue = textBox.value;
            textBox.value = '';
            if(textValue){
                addItem(textValue);
            }
        };

        buttonSelectAll.onclick = (event) => {
            var check_uncheck = true;
            var firstTodoElement = listOfItemObjects.values().next().value;
            if ( firstTodoElement && firstTodoElement.todoChecked) {
                check_uncheck = false;
            }

            for (var item of listOfItemObjects.values()) {
                item.todoChecked = check_uncheck;
            }
            onItemChange();
        };

        buttonDeleteSelected.onclick = (event) => {
            listOfItemObjects.forEach((value, key) => {
                if (value.todoChecked) {
                    listOfItemObjects.delete(key);
                }
            });
            onItemChange();
        };

        buttonDeleteCompleted.onclick = (event) => {
            listOfItemObjects.forEach((value, key) => {
                if (value.todoStatus) {
                    listOfItemObjects.delete(key);
                }
            });
            onItemChange();
        };
    }
}

export { TodoActionBar };