class PageChanger {
    pages = null;
    pageNames = null;
    currentPageName = null;

    static #instance = null;

    static getInstance() {
        if(this.#instance === null) {
            this.#instance = new PageChanger();
        }
        return this.#instance;
    }

    constructor() {
        const pageContainer = document.querySelector(".page-container");

        this.pages = pageContainer.querySelectorAll(".page-container > *");
        
        this.pageNames = this.#extractPageNamesFromElements(this.pages);

        this.currentPageName = this.pageNames[0];
    }

    #extractPageNamesFromElements(pages) {
        const pageNames = new Array();
        for(let i = 0; i < pages.length; i++) {
            const classListArray = Array.from(pages[i].classList);

            pageNames.push(classListArray.filter((className) => {
                return className !== 'invisible'
            })[0]);
        }

        return pageNames;
    }

    changePage(toPage) {
        if(this.pageNames.includes(toPage)) {
            this.pages.forEach(page => {
                page.classList.add("invisible");
            });

            document.querySelector(`.${toPage}`).classList.remove("invisible");

            return;
        }
        throw Error("page doesn't exists");
    }
}

class PagePainter{
    static #instance = null;

    static getInstance() {
        if(this.#instance === null) {
            this.#instance = new PagePainter();
        }
        return this.#instance;
    }

    paintTodoList() {
        let todoList = TodoManager.getInstance().getTodoList();
        todoList = this.#filterTodoWithTodoFilterCondition(todoList);

        const todoItemListObject = document.querySelector(".todo-item-list");
        todoItemListObject.innerHTML = '';
        
        todoList.forEach((todo) => {
            todoItemListObject.innerHTML += `
                <li class="todo-item todo-item-${todo.id}">
                    <div class="todo-item-left">
                        <input type="checkbox" ${todo.finishedDateTime ? "checked" : ""} onchange="todoItemCheckBoxOnChangeHandler(${todo.id});">
                        <span>${todo.content}</span>
                    </div>
                    <div class="todo-item-right">
                        <div>${todo.creationDateTime.substring(0,10)}</div>
                        <div>${todo.creationDateTime.substring(11)}</div>
                        <div class="todo-item-buttons">
                            <button class="btn" onclick="todoItemModifyButtonOnClickHandler(${todo.id});">수정</button>
                            <button class="btn" onclick="todoItemDeleteButtonOnClickHandler(${todo.id});">삭제</button>
                        </div>
                    </div>
                </li>
            `;
        });
    }

    #filterTodoWithTodoFilterCondition(todoList) {
        const radioButtons = document.getElementsByName("todo-filter-condition");
        let todoFilterCondition = null;

        for(const radioButton of radioButtons) {
            if(radioButton.checked) {
                todoFilterCondition = radioButton.value;
                break;
            }
        }

        console.log(todoFilterCondition);
        console.log('이다');
        
        switch(todoFilterCondition) {
            case "all":
                break;
            case "remain":
                todoList = todoList.filter((todo) => {
                    return todo.finishedDateTime === null;
                });
                break;
            case "done":
                todoList = todoList.filter((todo) => {
                    return todo.finishedDateTime !== null;
                });
                break;
        }

        console.log(todoList);

        return todoList;
    }

    clearTodoContentInput() {
        const todoContentInputObj = document.querySelector(".todo-content-input");
        todoContentInputObj.value = '';
    }
}