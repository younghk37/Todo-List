class TodoManager {
    #localTodoList = null;

    static #instance = null;

    static getInstance() {
        if(this.#instance === null) {
            this.#instance = new TodoManager();
        }
        return this.#instance;
    }

    constructor() {
        this.#localTodoList = !!localStorage.getItem("todolist") ? JSON.parse(localStorage.getItem("todolist")) : new Array();
    }

    getTodoList() {
        return this.#localTodoList;
    }

    addTodoWithTodoContentInput() {
        const todoContentInputObj = document.querySelector(".todo-content-input");

        const newTodo = {
            id: this.#localTodoList[this.#localTodoList.length - 1]?.id ? this.#localTodoList[this.#localTodoList.length - 1].id + 1 : 1,
            content: todoContentInputObj.value,
            //untilDateTime: null
            finishedDateTime: null,
            creationDateTime: TimeUtil.convertDateToStringWithSeparator(new Date())
        };

        this.#localTodoList.push(newTodo);
        this.#saveTodoListToLocalStorage();
    }

    deleteTodoWithId(id) {
        this.#findTodoWithId(id);
        this.#localTodoList = this.#localTodoList.filter((todo) => {
            return todo.id !== id;
        });
        this.#saveTodoListToLocalStorage();
    }

    #findTodoWithId(id) {
        const result = this.#localTodoList.filter(todo => {
            return todo.id === id;
        });

        if(result.length === 0) {
            throw Error("id doesn't exists");
        }
        
        return result[0];
    }

    #saveTodoListToLocalStorage() {
        localStorage.setItem("todolist", JSON.stringify(this.#localTodoList));
    }
}