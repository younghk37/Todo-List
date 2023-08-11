class Modal{
    static #instance = null;

    static getInstance() {
        if(this.#instance === null) {
            this.#instance = new Modal();
        }
        return this.#instance;
    }

    openModal(todoId) {
        const modalObj = document.querySelector(".modal");
        const todo = TodoManager.getInstance().findTodoWithId(todoId);
        modalObj.innerHTML = `
            <div class="modal-container">
                <header class="modal-header">
                    Todo 수정
                </header>
                <main class="modal-main">
                    <input type="text" class="text-input modal-content-input" value="${todo.content}" onkeydown="modalContentInputOnKeyDownHandler(${todo.id}, event)">
                </main>
                <footer class="modal-footer">
                    <button class="btn" onclick="modalFooterApplyButtonOnClickHandler(${todo.id});">적용</button>
                    <button class="btn" onclick="modalFooterCloseButtonOnClickHandler();">닫기</button>
                </footer>
            </div>
        `;
        modalObj.classList.remove("invisible");
    }

    closeModal() {
        const modalObj = document.querySelector(".modal");
        modalObj.classList.add("invisible");
    }

    getFocus() {
        const modalContentInputObj = document.querySelector(".modal-content-input");
        modalContentInputObj.focus();
        modalContentInputObj.setSelectionRange(modalContentInputObj.value.length, modalContentInputObj.value.length);
    }
}