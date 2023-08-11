window.onload = () => {
    PagePainter.getInstance().paintTodoList();
};

const sidebarToggleButtonOnClickHandler = () => {
    Sidebar.getInstance().toggleSidebar();
};

const sidebarItemTodoOnClickHandler = () => {
    PageChanger.getInstance().changePage("todo-page");
    Sidebar.getInstance().toggleSidebar();
};

const sidebarItemCalendarOnClickHandler = () => {
    PageChanger.getInstance().changePage("calendar-page");
    Sidebar.getInstance().toggleSidebar();
};

const todoContentInputOnKeyDownHandler = (event) => {
    if(event.keyCode === 13) {
        TodoManager.getInstance().addTodoWithTodoContentInput();
        PagePainter.getInstance().paintTodoList();
        PagePainter.getInstance().clearTodoContentInput();
    }
};

const todoItemCheckBoxOnChangeHandler = (todoId) => {
    TodoManager.getInstance().toggleFinished(todoId);
};

const todoItemModifyButtonOnClickHandler = (todoId) => {
    Modal.getInstance().openModal(todoId);
    Modal.getInstance().getFocus();
};

const todoItemDeleteButtonOnClickHandler = (todoId) => {
    TodoManager.getInstance().deleteTodoWithId(todoId);
    PagePainter.getInstance().paintTodoList();
};

const modalContentInputOnKeyDownHandler = (todoId, event) => {
    if(event.keyCode === 13) {
        TodoManager.getInstance().updateTodoWithModalContentInput(todoId);
        PagePainter.getInstance().paintTodoList();
        Modal.getInstance().closeModal();
    }
}

const modalFooterApplyButtonOnClickHandler = (todoId) => {
    TodoManager.getInstance().updateTodoWithModalContentInput(todoId);
    PagePainter.getInstance().paintTodoList();
    Modal.getInstance().closeModal();
};

const modalFooterCloseButtonOnClickHandler = () => {
    Modal.getInstance().closeModal();
};